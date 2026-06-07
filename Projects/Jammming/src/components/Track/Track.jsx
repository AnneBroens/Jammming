function Track ({track, addTrack, removeTrack}) {
    console.log('preview_url:', track.preview_url);
    return (
        <div className="track">
            <div className="track-info">
                <p className="track-name">{track.name}</p>
                <p className="track-artist">{track.artist}</p>
                <p className="track-album">{track.album}</p>
            </div>
            {addTrack && <button className="btn-add" onClick={() => addTrack(track)}>+</button>}
            {removeTrack && <button className="btn-remove" onClick={() => removeTrack(track)}>-</button>}
            {track.preview_url && (
  <audio controls src={track.preview_url} />
)}
        </div>
    );
}

export default Track;

