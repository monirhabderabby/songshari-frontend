import React from "react";

// Components
import { ServiceEdit } from "../../../../components/shared/Components/LawyerAgentKaziService/ServiceEdit/ServiceEdit";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";

const MobileProfServiceEdit = () => {
  return (
    <div>
      <MobileBackButton name={"Service Edit"} />
      <ServiceEdit />
      <BottomNav />
    </div>
  );
};

export default MobileProfServiceEdit;
