import React from 'react'
import { TopMenu } from './TopMenu'
import { MobileBanner } from './MobileBanner'
import { MobileTitle } from './MobileTitle'
import MobileNav from '../../../components/pages/Shared/MobileNav'
import NavBar from '../../../components/pages/Shared/MobileNav'
import { TopProfileMobile } from './TopProfileMobile'
import TopProfile from '../../../components/pages/TopProfile/TopProfile'
import { BottomNav } from './BottomNav'

export const MobileHome = () => {
  return (
    <div>
        <TopMenu></TopMenu>
        <MobileBanner></MobileBanner>
   <TopProfile></TopProfile>
  <BottomNav></BottomNav>
    </div>
  )
}
