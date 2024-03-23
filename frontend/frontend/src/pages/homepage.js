import React, { useState } from 'react'
import NavBar from '../layout/navbar'
import SearchBar from './homepage/searchbar'
import Explore from './homepage/explore'

const HomePage = () => {
  const [products,setProducts]=useState([])
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Explore products={products} setProducts={setProducts}/>
    </div>
  )
}

export default HomePage
