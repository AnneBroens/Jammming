import { useState } from 'react';

function SearchBar({ handleSearch }) {
    const [term, setTerm] = useState('');

    return (
        <div className="searchbar">
            <input
                type='text'
                placeholder="Enter your favorite song, album or artist"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
            />
            <button onClick={() => handleSearch(term)}>Search</button>
        </div>
    );
}

export default SearchBar;