import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Profile Details',
    'Professional',
    'Education',
    'Others'
  ];
export const StepperMov = () => {
  return (
    <div>
        <h1 className='font-bold ml-8'>Complete your profile</h1>
        <Box sx={{ width: '100%', marginTop:2 }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    </div>
  )
}
