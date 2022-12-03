import React from 'react'
import AboutUsStory from '../../../../components/pages/About/AboutUsStory';
import { BottomNav } from '../BottomNav';
import  AboutBanner  from './AboutBanner';
import  AboutMissionMov  from './AboutMissionMov';
import  AboutStorymov  from './AboutStorymov';

export const AboutMov = () => {
  return (
    <div>
         <div className='grid grid-cols-3'>
     <img src='https://i.ibb.co/stTYBVf/Arrow-1.png' className='col-span-2 ml-8 mt-5'></img>
     <img src='https://i.ibb.co/x2L99Cr/Arrow-2.png' className='ml-20 mt-5'></img>
      </div>
        <AboutBanner></AboutBanner>
        <AboutMissionMov></AboutMissionMov>
        <AboutStorymov></AboutStorymov>
        <BottomNav></BottomNav>
    </div>
  )
}
