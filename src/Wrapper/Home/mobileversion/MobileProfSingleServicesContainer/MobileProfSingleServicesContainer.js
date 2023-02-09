// Configuration
import React from "react";

// Components
import SingleServicesContainer from "../../../../components/shared/Components/LawyerAgentKaziService/SingleServices/SingleServicesContainer";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";

const MobileProfSingleServicesContainer = () => {
  return (
    <div>
      <MobileBackButton name={"Service Details"} />
      <div className="px-6">
        <SingleServicesContainer />
      </div>

      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileProfSingleServicesContainer;
