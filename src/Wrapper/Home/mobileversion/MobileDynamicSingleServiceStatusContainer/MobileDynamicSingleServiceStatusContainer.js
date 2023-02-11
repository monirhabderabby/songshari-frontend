import React from "react";
import SingleServiceStatusDetailes from "../../../../components/shared/Components/LawyerAgentKaziService/SingleServicesStatus/SingleServiceStatusDetailes";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";

const MobileDynamicSingleServiceStatusContainer = () => {
  return (
    <div>
      <MobileBackButton name={"Service Details"} />
      <div className="px-6">
        <SingleServiceStatusDetailes />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileDynamicSingleServiceStatusContainer;
