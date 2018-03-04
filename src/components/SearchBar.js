import React from 'react';

const SearchBar = ({updateSearch, search, query}) => (
    <div>
        <input className="Input" type="text" placeholder="Search you recipe..." onChange={(event) => updateSearch(event)} />
        <button onClick={()=> search(query)}>Search</button>
    </div>
)

export default SearchBar;

