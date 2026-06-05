
import TrackList from '../TrackList/TrackList';

function Playlist ( {playlistName, playlistTracks, addTrack}) {
    return (
        <div>
        <h1>{playlistName}</h1>
        <TrackList addTrack={addTrack} tracks={playlistTracks}/>
        <button>Save to Spotify</button>
        </div>
    );
}

export default Playlist;