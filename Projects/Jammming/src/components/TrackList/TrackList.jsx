import Track from '../Track/Track'

function TrackList({tracks, addTrack}) {
        console.log('addTrack in TrackList:', addTrack);
    return (
        <div>
            <div>
                <p>Title</p>
                <p>Album</p>
                <p>Artist</p>
            </div>
                {tracks.map (track => (
                <Track addTrack={addTrack} key={track.id} track={track} /> 
            ))}
        </div>
    );
}

export default TrackList;