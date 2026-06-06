import './App.css'
import { useState, useEffect } from 'react';
import Playlist from './components/Playlist/Playlist';
import TrackList from './components/TrackList/TrackList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './util/Spotify';


const fakeTracks = [
{id: 1, title: 'Sunrise', artist: 'Norah Jones', album: 'Feels Like Home', uri: 'spotify:track:7zkLpY72g6lKQbiHDqri1S?si'},
{id: 2, title: 'Man I Need', artist:'Olivia Dean', album: 'The Art Of Loving', uri: 'spotify:track:1qbmS6ep2hbBRaEZFpn7BX'},
{id: 3, title: 'Wuthering Heights', artist: 'Kate Bush', album: 'The Kick Inside', uri: 'spotify:track:5YSI1311X8t31PBjkBG4CZ?si'},
];

function App() {
  const [searchResults, setSearchResults] = useState(fakeTracks);
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

  const savePlaylist = () => {
  const trackUris = playlistTracks.map(track => track.uri );
    setPlaylistName('New Playlist')
    setPlaylistTracks([])
  };


  return (
<div className="App">
  <Playlist 
  removeTrack={removeTrack} 
  playlistName={playlistName} 
  playlistTracks={playlistTracks}
  updateName={updateName}
  savePlaylist={savePlaylist}
  />
  <SearchBar />
  <SearchResults 
  addTrack={addTrack} 
  searchResults={fakeTracks} 
  />
</div>
  );
};

export default App