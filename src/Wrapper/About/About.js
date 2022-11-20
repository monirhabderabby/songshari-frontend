import React from 'react'
import Anexecutive from '../../components/CardComopents/Anexecutive'
import MeetCard from '../../components/CardComopents/MeetCard'
import CommonBanner from '../../components/comons/CommonBanner'
import Membership from '../../components/membership/Membership'
import AboutComponents from '../../components/pages/About/AboutComponents'
import AboutHeaderBanner from '../../components/pages/About/AboutHeaderBanner'
import AnimatetdBanner from '../../components/pages/About/AnimatetdBanner'
import LoveIsFeath from '../../components/pages/About/LoveIsFeath'
import NavBar from '../../components/pages/Shared/NavBar'

 const About = () => {
  return (
    <div>
      <NavBar />
      <CommonBanner title='About Us' currentStage='> About' />
      <AboutHeaderBanner />
      <AboutComponents />
      <Anexecutive />
      <AnimatetdBanner />
      <LoveIsFeath />
      <Membership />
      <MeetCard />
    </div>
  )
}
export default About