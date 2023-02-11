import React from "react";

// Components
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import UserAgentServices from "../../../../components/SingleProfilesUser/ServicesSection/UserAgentServices";
import { BottomNav } from "../BottomNav";

const MobileUserAgentServices = () => {
  return (
    <div>
      <MobileBackButton name={"Agent Services"} />
      <div className="px-6 pt-2">
        <UserAgentServices {...{ responsive: true }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileUserAgentServices;
