import React from "react";

// Components
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import UserLawyerServices from "../../../../components/SingleProfilesUser/ServicesSection/UserLawyerServices";
import { BottomNav } from "../BottomNav";

const MobileUserLawyerServices = () => {
  return (
    <div>
      <MobileBackButton name={"Lawyer Services"} />
      <div className="px-6 pt-2">
        <UserLawyerServices {...{ responsive: true }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileUserLawyerServices;
