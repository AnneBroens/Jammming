import Track from '../Track/Track'

function TrackList({tracks}) {
    return (
        <div>
            <div>
                <p>Title</p>
                <p>Album</p>
                <p>Artist</p>
            </div>
                {tracks.map (track => (
                <Track key={track.id} track={track} /> 
            ))}
        </div>
    );
}

export default TrackList;