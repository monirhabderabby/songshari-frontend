import React from 'react'
import OthersBanner from './OthersBanner';
import { OthersNav } from './OthersNav';
import { OthersProfileDetails } from './OthersProfileDetails';


 const OthersProfile = () => {
  return (
    <div>
        <OthersBanner></OthersBanner>
    <OthersNav></OthersNav>
        <OthersProfileDetails></OthersProfileDetails>
    </div>
  )
}
export default OthersProfile;