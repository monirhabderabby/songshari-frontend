import React from 'react'
import { MembershipBanner } from '../../components/pages/Membership/membershipBanner/MembershipBanner';
import { MembershipUpgrade } from '../../components/pages/Membership/membershipUpgrade/MembershipUpgrade';
 const MemberShip = () => {
  return (
    <div>
      <MembershipBanner></MembershipBanner>
      <MembershipUpgrade></MembershipUpgrade>
    </div>
  )
}
export default MemberShip;