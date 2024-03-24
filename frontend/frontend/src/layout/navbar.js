import React, { useEffect, useState } from 'react'
import '../styles/layout/navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logoimage from '../assets/logo.png'
import authutils from '../utils/authUtils'
import authapi from '../services/authAPI'
const NavBar = () => {
  const handleredirect = () => {
    window.location.href = '/auth'; // Navigate to the '/auth' URL when the button is clicked
};

const [menuOpen,setMenuOpen]=useState(false)
const [isAuthenticated,setIsAuthenticated]=useState(false)
const [isAdmin,setIsAdmin]=useState(false)
useEffect(() => {
  checkauth()
}, [isAuthenticated]);
useEffect(() => {
  checkadmin()
}, [isAuthenticated,isAdmin]);
const checkauth=()=>{
if(authutils.isAuthenticated()){
setIsAuthenticated(true)
}
else{
setIsAuthenticated(false)
}
}
const checkadmin=async()=>{
if(isAuthenticated){
  const result=await authapi.isperms()

  console.log(result)
  if(result){
    setIsAdmin(true)
  }
  else{
    setIsAdmin(false)
  }
}
}
  return (
    <nav className='navbar'>
      <img src={logoimage}/>
<div className='menu' onClick={()=>{
setMenuOpen(!menuOpen)
}}>
<span></span>
<span></span>

<span></span>

</div>
<ul className={menuOpen ? "open" : ""}>
<li><NavLink to="/home">Home</NavLink></li>
<li><NavLink to="/aboutus">About Us</NavLink></li>
<li><NavLink to="/services">Services</NavLink></li>
{isAdmin && <li><NavLink to="/admin">Admin</NavLink></li>
}
</ul>
<ul>

  
{isAuthenticated ? (
  <li>
    <NavLink to="/auth">Logout</NavLink>
  </li>
) : (
  <li>
    <NavLink to="/auth">Login</NavLink>
  </li>
)}

</ul>
</nav>
  )
}

export default NavBar
