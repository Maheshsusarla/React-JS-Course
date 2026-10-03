import React from 'react'

const SearchBar = ({ searchText, setSearchText }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    )
}

export default SearchBar