import React, { useEffect } from "react";
import { MembershipBanner } from "../../components/pages/Membership/membershipBanner/MembershipBanner";
import { MembershipPremium } from "../../components/pages/Membership/membershippremium/MembershipPremium";
import { MembershipUpgrade } from "../../components/pages/Membership/membershipUpgrade/MembershipUpgrade";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import Footer from "../../components/shared/Footer/Footer";
const MemberShip = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <CustomHeader title="Membership" />
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
      <Footer />
    </div>
  );
};
export default MemberShip;
