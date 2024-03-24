import React, { useState } from 'react'
import SearchBar from './homepage/searchbar'
import Explore from './homepage/explore'
import NavBar from '../layout/navbar'
const HomePage = () => {
  const [products,setProducts]=useState([])
  return (
    <div>
<NavBar />
        <SearchBar setProducts={setProducts}/>
      <Explore products={products} setProducts={setProducts}/>
    </div>
  )
}

export default HomePage
