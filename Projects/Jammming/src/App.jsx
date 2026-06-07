import './App.css'
import { useState, useEffect } from 'react';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './util/Spotify';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  const addTrack = (track) => {
  if(!playlistTracks.find(item => item.id === track.id)) {
  setPlaylistTracks(prev => [...prev, track]) }
  };

  const removeTrack = (track) => {
      setPlaylistTracks(prev => prev.filter(item => item.id !== track.id))
    };

  const updateName = (name) => {
  setPlaylistName(name)
  };

  const savePlaylist = async () => {
  const trackUris = playlistTracks.map(track => track.uri );
  await Spotify.savePlaylist(playlistName, trackUris);
    setPlaylistName('New Playlist')
    setPlaylistTracks([])
  };

  const handleSearch = async (term) => {
    const results = await Spotify.search(term);
    setSearchResults(results);
  };


return (
  <div className="App">
    <SearchBar handleSearch={handleSearch} />
    <SearchResults 
      addTrack={addTrack} 
      searchResults={searchResults} 
    />
    <Playlist 
      removeTrack={removeTrack} 
      playlistName={playlistName} 
      playlistTracks={playlistTracks}
      updateName={updateName}
      savePlaylist={savePlaylist}
    />
  </div>
);
};

export default App