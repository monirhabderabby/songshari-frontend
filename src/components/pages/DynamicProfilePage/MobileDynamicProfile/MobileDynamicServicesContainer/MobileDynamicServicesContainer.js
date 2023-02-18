import React from "react";

// Components
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import { DynamicServicesContainer } from "../../DynamicServicesContainer/DynamicServicesContainer";

const MobileDynamicServicesContainer = () => {
  return (
    <div>
      <MobileBackButton name={"Services"} />
      <div className="px-6 pt-2">
        <DynamicServicesContainer {...{ responsive: true }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileDynamicServicesContainer;
