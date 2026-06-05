import TrackList from '../TrackList/TrackList';


function SearchResults({searchResults, addTrack}) {
    return (
        <div>
        <h2>Results</h2>
        <TrackList addTrack={addTrack} tracks={searchResults}/>
        </div>
    );
}

export default SearchResults;