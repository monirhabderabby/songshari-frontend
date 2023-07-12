// Configuration
import React from "react";

// Components
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import UserCompletedServices from "../../../../components/SingleProfilesUser/ServicesSection/UserCompletedServices";
import { BottomNav } from "../BottomNav";

const MobileUserCompletedServices = () => {
  return (
    <div>
      <MobileBackButton name={"Completed Services"} />
      <div className="px-6 pt-2">
        <UserCompletedServices {...{ responsive: true }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileUserCompletedServices;
