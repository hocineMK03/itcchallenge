import React from 'react'
import NavBar from '../layout/navbar'
import HeroSection from './landingpage/herosection'
import Features from './landingpage/features'
import RegisterNow from './landingpage/registernow'
import Footer from '../layout/footer'
import SmallAboutUS from './landingpage/smallaboutus'

import DiscoverPlatform from './landingpage/discoverplatform'
const LandingPage = () => {
  return (
    <div>
    

      <NavBar />
      <HeroSection />
      <Features />
      <DiscoverPlatform />
    </div>
  )
}

export default LandingPage
