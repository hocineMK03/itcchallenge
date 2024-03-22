import React from 'react'
import NavBar from '../layout/navbar'
import SearchBar from './homepage/searchbar'
import Explore from './homepage/explore'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Explore />
    </div>
  )
}

export default HomePage
