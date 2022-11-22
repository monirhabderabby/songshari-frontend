import React from 'react'
import { CompletedCase } from './CompletedCase'
import { FirstCard } from './FirstCard'
import { PendingCase } from './PendingCase'
import { RunningCase } from './RunningCase'

export const LawyerActivity = () => {
  return (
    <div>
        <FirstCard></FirstCard>
        <PendingCase></PendingCase>
        <RunningCase></RunningCase>
        <CompletedCase></CompletedCase>
    </div>
  )
}
