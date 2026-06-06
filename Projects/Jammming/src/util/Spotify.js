const clientId = 'b6b1c88e60114764b7e5d4c0e23c4933';
const redirectUri = 'https://localhost:5173/';

let accessToken;

const generateCodeVerifier = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

const generateCodeChallenge = async (codeVerifier) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

const Spotify = {
  async getAccessToken() {
    // check if we already have a token
    if (accessToken) {
      return accessToken;
    }

    // check if Spotify redirected back with a code
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // exchange code for token
      const codeVerifier = localStorage.getItem('codeVerifier');
     const response = await fetch('https://accounts.spotify.com/api/token', {
       method: 'POST',
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
       code_verifier: codeVerifier,
  })
});

const data = await response.json();
accessToken = data.access_token;
window.history.pushState('', '', '/');
return accessToken;
    } else {
      // no code yet, redirect to Spotify login
      const codeVerifier = generateCodeVerifier();
      const codeChallenge = await generateCodeChallenge(codeVerifier);
      localStorage.setItem('codeVerifier', codeVerifier);
      
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&code_challenge_method=S256&code_challenge=${codeChallenge}&scope=playlist-modify-public`;
    }
  }
};

export default Spotify;