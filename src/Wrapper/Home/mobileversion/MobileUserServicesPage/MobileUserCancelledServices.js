import React from "react";

// Components
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import UserCanceledServices from "../../../../components/SingleProfilesUser/ServicesSection/UserCanceledServices";
import { BottomNav } from "../BottomNav";

const MobileUserCancelledServices = () => {
  return (
    <div>
      <MobileBackButton name={"Cancelled Services"} />
      <div className="px-6 pt-2">
        <UserCanceledServices />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileUserCancelledServices;
