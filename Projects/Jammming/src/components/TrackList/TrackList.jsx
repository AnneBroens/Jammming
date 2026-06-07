import Track from '../Track/Track'

function TrackList({tracks, addTrack, removeTrack}) {
    return (
        <div className="tracklist">
            <div className="tracklist-header">
                <p>Title</p>
                <p>Artist</p>
                <p>Album</p>
            </div>
            {tracks.map(track => (
                <Track addTrack={addTrack} removeTrack={removeTrack} key={track.id} track={track} />
            ))}
        </div>
    );
}

export default TrackList;