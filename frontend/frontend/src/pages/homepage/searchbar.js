import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../styles/homepage/searchbar.css';

const SearchBar = ({setProducts}) => {
  const [data,setData]=useState('')
  const handleInput = (e) => {
    const inputValue = e.target.value;
    setData(inputValue);
    console.log(inputValue);
  };


  const handleClick=async(e)=>{

  }
  return (
    <div className="searchbar">
      <input type="text" placeholder="search training programs" onChange={handleInput}/>
      <div className="icon-container" onClick={handleClick}>
        <FaSearch />
      </div>
    </div>
  );
}

export default SearchBar;
