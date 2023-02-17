// Configuration
import React from "react";

// Components
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import { DynamicConnection } from "../../DynamicConnections/DynamicConnection";

const MobileDynamicProfileConnections = () => {
  return (
    <div>
      <MobileBackButton name={"Connections"} />
      <div className="px-6 mt-1">
        <DynamicConnection />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileDynamicProfileConnections;
