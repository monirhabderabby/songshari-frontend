import React from 'react'
import { CompletedCaseMov } from './CompletedCase'
import { PendingCaseMov } from './PendingCase'
import { RunningCaseMov } from './RunningCase'

export const LawyerActivityMov = () => {
  return (
    <div>
        <PendingCaseMov></PendingCaseMov>
        <RunningCaseMov></RunningCaseMov>
        <CompletedCaseMov></CompletedCaseMov>
    </div>
  )
}
