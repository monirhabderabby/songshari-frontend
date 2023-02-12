import React from "react";

// Components
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import UserOngoingServices from "../../../../components/SingleProfilesUser/ServicesSection/UserOngoingServices";
import { BottomNav } from "../BottomNav";

const MobileUserOngoingServices = () => {
  return (
    <div>
      <MobileBackButton name={"Ongoing Services"} />
      <div className="px-6 pt-2">
        <UserOngoingServices {...{ responsive: true }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileUserOngoingServices;
