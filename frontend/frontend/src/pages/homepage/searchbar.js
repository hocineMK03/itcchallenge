import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../styles/homepage/searchbar.css';

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="search training programs" />
      <div className="icon-container">
        <FaSearch />
      </div>
    </div>
  );
}

export default SearchBar;
