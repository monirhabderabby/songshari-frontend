import React from "react";

// Components
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import UserKaziServices from "../../../../components/SingleProfilesUser/ServicesSection/UserKaziServices";
import { BottomNav } from "../BottomNav";

const MobileUserKaziServices = () => {
  return (
    <div>
      <MobileBackButton name={"Kazi Services"} />
      <div className="px-6 pt-2">
        <UserKaziServices {...{ responsive: true }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileUserKaziServices;
