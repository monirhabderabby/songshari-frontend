import React from 'react'
import CommonBanner from '../../components/comons/CommonBanner'
import AboutComponents from '../../components/pages/About/AboutComponents'
import AnimatetdBanner from '../../components/pages/About/AnimatetdBanner'
import LoveIsFeath from '../../components/pages/About/LoveIsFeath'
import NavBar from '../../components/pages/Shared/NavBar'

 const About = () => {
  return (
    <div>
      <NavBar />
      <CommonBanner title='About Us' currentStage='> About' />
      <AboutComponents />
      <AnimatetdBanner />
      <LoveIsFeath />
    </div>
  )
}
export default About