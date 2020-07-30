import React from 'react';
import './search-box.css';

function SearchBox (props) {
    return (
        <input 
            type="search" 
            className="search"
            placeholder={props.placeholder} 
            onChange={props.handleInputChange} 
            value={props.searchField} 
        />
    )
}

export default SearchBox;