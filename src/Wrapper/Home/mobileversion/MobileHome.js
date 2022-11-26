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

export const MobileHome = () => {
  return (
    <div>
        <TopMenu></TopMenu>
        <MobileBanner></MobileBanner>
        <Services></Services>
        <TopProfile></TopProfile>
  <BottomNav></BottomNav>
    </div>
  )
}
