import { Box, Container, CssBaseline, Paper } from '@material-ui/core'
import React from 'react'
import LinearStepper from '../../Wrapper/step-progress/LinearStepper';
export const StepProgress = () => {
  return (
    <div>
         <CssBaseline />
         <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </div>
  )
}
