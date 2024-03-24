import React from 'react'
import '../../styles/landingpage/herosection.css'
import herosection from '../../assets/herosection1.png'

const HeroSection = () => {
  const handleredirect = () => {
    window.location.href = '/auth'; // Navigate to the '/auth' URL when the button is clicked
};
  return (
    <main className='hero-main'>
    <div className='hero-container'>
      <img src={herosection} />
      <div className='hero-text'>
          <h3>WE ARE A SCHOOL THAT WORKS ON</h3>
          <h2>The evolution of training in Algeria</h2>
          <p>An innovative training school for easy and effective learning of the skills most sought after by companies.</p>
          <button onClick={handleredirect}>Get Started</button>
      </div>
    </div>
  </main>
  )
}

export default HeroSection
