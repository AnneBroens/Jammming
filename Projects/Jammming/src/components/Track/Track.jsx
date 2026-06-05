function Track ({track, addTrack}) {
    console.log('addTrack in Track:', addTrack);
    return (
        <div>
            <p>{track.title}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button onClick={() => addTrack(track)} >+</button>
            <button>-</button>
        </div>
    );
}

export default Track;