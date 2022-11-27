import React from 'react'
import { BannerLayerMov } from './BannerLayerMov'
import { CompletedCaseMov } from './CompletedCase'
import { NavCase } from './NavCase'
import { PendingCaseMov } from './PendingCase'
import { RunningCaseMov } from './RunningCase'

export const LawyerActivityMov = () => {
  return (
    <div>
      <BannerLayerMov></BannerLayerMov>
      <NavCase></NavCase>
      <PendingCaseMov></PendingCaseMov>
      <RunningCaseMov></RunningCaseMov>
      <CompletedCaseMov></CompletedCaseMov>
    </div>
  )
}
