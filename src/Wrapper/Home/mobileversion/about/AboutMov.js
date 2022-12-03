import React from 'react'
import AboutUsStory from '../../../../components/pages/About/AboutUsStory';
import { BottomNav } from '../BottomNav';
import  AboutBanner  from './AboutBanner';
import  AboutMissionMov  from './AboutMissionMov';
import  AboutStorymov  from './AboutStorymov';

export const AboutMov = () => {
  return (
    <div>
        <AboutBanner></AboutBanner>
        <AboutMissionMov></AboutMissionMov>
        <AboutStorymov></AboutStorymov>
        <BottomNav></BottomNav>
    </div>
  )
}
