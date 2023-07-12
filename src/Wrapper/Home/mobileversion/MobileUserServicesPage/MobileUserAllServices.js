import React from "react";

// Components
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import UserAllServices from "../../../../components/SingleProfilesUser/ServicesSection/UserAllServices";
import { BottomNav } from "../BottomNav";

const MobileUserAllServices = () => {
  return (
    <div>
      <MobileBackButton name={"All Services"} />
      <div className="px-6 pt-2">
        <UserAllServices {...{ responsive: true }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileUserAllServices;
