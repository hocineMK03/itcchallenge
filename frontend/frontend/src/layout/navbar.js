import React from 'react'
import '../styles/layout/navbar.css'
const NavBar = () => {
  const handleredirect = () => {
    window.location.href = '/auth'; // Navigate to the '/auth' URL when the button is clicked
};
  return (
    <nav class="navbar">
    <h1>InnovateHub</h1>
    <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
    </ul>
    <button onClick={handleredirect}>Login</button>
</nav>
  )
}

export default NavBar
