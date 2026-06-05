
function Track ({track}) {
    return (
        <div>
            <p>{track.title}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button>+</button>
            <button>-</button>
        </div>
    );
}

export default Track;