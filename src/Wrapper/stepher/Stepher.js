import React, { useState } from 'react'
import StepNavigation from './stepNavigation';

import '../../assets/css/Stepher.css';
 const Stepher = () => {
  const labelArray = ['Personal info', 'Professional info', 'Educational info', 'Physical info', 'Others info']
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }


  return (
    <div>
       <StepNavigation  labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
      <p>Selected Step: {currentStep}</p>
      <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Previous Step</button>
      <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep+1)}>Next Step</button>
    </div>
  )
}
export default Stepher;