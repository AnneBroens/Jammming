import TrackList from '../TrackList/TrackList';

function Playlist({ playlistName, playlistTracks, removeTrack, updateName, savePlaylist }) {
    return (
        <div className="playlist">
            <input
                className="playlist-name"
                onChange={(e) => updateName(e.target.value)}
                value={playlistName}
            />
            <TrackList removeTrack={removeTrack} tracks={playlistTracks}/>
            <button className="btn-save" onClick={savePlaylist}>Save to Spotify</button>
        </div>
    );
}

export default Playlist;