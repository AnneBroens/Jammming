
import TrackList from '../TrackList/TrackList';

function Playlist ( {playlistName, playlistTracks, removeTrack, updateName}) {
    return (
        <div>
        <input 
        onChange={(e) => updateName(e.target.value)}
        value={playlistName} 
        />
        <TrackList 
        removeTrack={removeTrack} 
        tracks={playlistTracks}
        />
        <button>Save to Spotify</button>
        </div>
    );
}

export default Playlist;