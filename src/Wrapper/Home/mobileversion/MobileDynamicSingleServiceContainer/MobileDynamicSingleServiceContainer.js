import React from "react";
import DynamicSingleServiceDetailes from "../../../../components/pages/DynamicProfilePage/DynamicSingleServiceContainer/DynamicSingleServiceDetailes";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";

const MobileDynamicSingleServiceContainer = () => {
  return (
    <div>
      <MobileBackButton name={"Service Details"} />
      <div className="px-6">
        <DynamicSingleServiceDetailes />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileDynamicSingleServiceContainer;
