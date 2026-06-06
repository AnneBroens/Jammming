import Track from '../Track/Track'

function TrackList({tracks, addTrack, removeTrack}) {
    return (
        <div>
            <div>
                <p>Title</p>
                <p>Album</p>
                <p>Artist</p>
            </div>
                {tracks.map (track => (
                <Track 
                addTrack={addTrack} 
                removeTrack={removeTrack} 
                key={track.id} 
                track={track} /> 
            ))}
        </div>
    );
}

export default TrackList;