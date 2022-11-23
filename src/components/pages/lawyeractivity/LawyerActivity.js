import React from 'react'
import { OthersNav } from '../../othersprofile/OthersNav'
import { CompletedCase } from './CompletedCase'
import { FirstCard } from './FirstCard'
import { PendingCase } from './PendingCase'
import { RunningCase } from './RunningCase'

export const LawyerActivity = () => {
  return (
    <div>
      <OthersNav></OthersNav>
        <FirstCard></FirstCard>
        <PendingCase></PendingCase>
        <RunningCase></RunningCase>
        <CompletedCase></CompletedCase>
    </div>
  )
}
