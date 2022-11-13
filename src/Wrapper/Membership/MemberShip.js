import React from 'react'
import { MembershipBanner } from '../../components/pages/Membership/membershipBanner/MembershipBanner';
import { MembershipPremium } from '../../components/pages/Membership/membershippremium/MembershipPremium';
import { MembershipUpgrade } from '../../components/pages/Membership/membershipUpgrade/MembershipUpgrade';
 const MemberShip = () => {
  return (
    <div>
      <MembershipBanner></MembershipBanner>
      <MembershipUpgrade></MembershipUpgrade>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MembershipPremium></MembershipPremium>
    </div>
  )
}
export default MemberShip;