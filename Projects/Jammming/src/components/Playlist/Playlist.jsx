
import TrackList from '../TrackList/TrackList';

function Playlist ( {playlistName, playlistTracks}) {
    return (
        <div>
        <h1>{playlistName}</h1>
        <TrackList tracks={playlistTracks}/>
        <button>Save to Spotify</button>
        </div>
    );
}

export default Playlist;