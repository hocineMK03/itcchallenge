import React from 'react'
import '../styles/layout/navbar.css'
const NavBar = () => {
  return (
    <nav class="navbar">
    <h1>InnovateHub</h1>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
    </ul>
    <button>Login</button>
</nav>
  )
}

export default NavBar
