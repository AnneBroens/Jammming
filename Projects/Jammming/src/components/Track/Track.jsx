function Track ({track, addTrack, removeTrack}) {
     console.log('removeTrack in Track:', removeTrack);
    return (
        <div>
            <p>{track.title}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            {addTrack && <button onClick={() => addTrack(track)}>+</button>}
            {removeTrack && <button onClick={() => removeTrack(track)}>-</button>}

        </div>
    );
}

export default Track;
