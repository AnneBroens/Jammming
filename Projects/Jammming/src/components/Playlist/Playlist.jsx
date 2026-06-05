
import TrackList from '../TrackList/TrackList';

function Playlist ( {playlistName, playlistTracks, removeTrack}) {
    return (
        <div>
        <h1>{playlistName}</h1>
        <TrackList removeTrack={removeTrack} tracks={playlistTracks}/>
        <button>Save to Spotify</button>
        </div>
    );
}

export default Playlist;