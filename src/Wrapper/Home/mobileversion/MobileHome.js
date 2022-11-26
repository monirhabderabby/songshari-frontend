import React from 'react'
import { TopMenu } from './TopMenu'
import { MobileBanner } from './MobileBanner'
import { MobileTitle } from './MobileTitle'
import MobileNav from '../../../components/pages/Shared/MobileNav'
import NavBar from '../../../components/pages/Shared/MobileNav'
import { TopProfileMobile } from './TopProfileMobile'
import TopProfile from '../../../components/pages/TopProfile/TopProfile'
import { BottomNav } from './BottomNav'
import Title from './Title'
import { Services } from './Services'
import TopProfileMov from './topprofilemov/TopProfileMov'

export const MobileHome = () => {
  return (
    <div className='mov-res'>
        <TopMenu></TopMenu>
        <MobileBanner></MobileBanner>
        <Services></Services>
       <TopProfileMov></TopProfileMov>
  <BottomNav></BottomNav>
    </div>
  )
}
