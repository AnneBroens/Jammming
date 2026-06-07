import TrackList from '../TrackList/TrackList';

function SearchResults({searchResults, addTrack}) {
    return (
        <div className="search-results">
            <TrackList addTrack={addTrack} tracks={searchResults}/>
        </div>
    );
}

export default SearchResults;