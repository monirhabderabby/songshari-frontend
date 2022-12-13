import React from 'react'
import { TabBanner } from './TabBanner'
import { TabService } from './TabService'
import TopProfileMov from '../mobileversion/topprofilemov/TopProfileMov'
import { BottomNav } from '../mobileversion/BottomNav'
import { TopMenuTab } from './TopMenuTab'

export const TabHome = () => {
  return (
    <div>
     <TopMenuTab></TopMenuTab>
        <TabBanner></TabBanner>
       <TabService></TabService>
       <TopProfileMov></TopProfileMov>
       <br></br>
       <br></br>
       <BottomNav></BottomNav>
    </div>
  )
}
