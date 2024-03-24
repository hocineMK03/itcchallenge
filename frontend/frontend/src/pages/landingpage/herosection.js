import React from 'react'
import '../../styles/landingpage/herosection.css'
import herosection from '../../assets/herosection1.png'

const HeroSection = () => {

  return (
    <main className='hero-main'>
    <div className='hero-container'>
      <img src={herosection} />
      <div className='hero-text'>
          <h3>WE ARE A SCHOOL THAT WORKS ON</h3>
          <h2>The evolution of training in Algeria</h2>
          <p>An innovative training school for easy and effective learning of the skills most sought after by companies.</p>
          <button>Get Started</button>
      </div>
    </div>
  </main>
  )
}

export default HeroSection
