import './App.css'
import { useState } from 'react';
import Playlist from './components/Playlist/Playlist';
import TrackList from './components/TrackList/TrackList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';


const fakeTracks = [
{id: 1, title: 'Sunrise', artist: 'Norah Jones', album: 'Feels Like Home'},
{id: 2, title: 'Man I Need', artist:'Olivia Dean', album: 'The Art Of Loving'},
{id: 3, title: 'Wuthering Heights', artist: 'Kate Bush', album: 'The Kick Inside'},
];

function App() {
  const [searchResults, setSearchResults] = useState(fakeTracks);
  const [playlistName, setplaylistName] = useState('My Playlist');
  const [playlistTracks, setplaylistTracks] = useState(fakeTracks);

  return (
<div className="App">
  <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
  <SearchBar />
  <SearchResults searchResults={fakeTracks} />
</div>
  );
}

export default App