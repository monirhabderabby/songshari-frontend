// configuration
import React from "react";

// Components
import KaziAddServiceForm from "../../../../../components/pages/Kazi/KaziServices/AddServiceForm/KaziAddServiceForm";
import { MobileBackButton } from "../../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../../BottomNav";

const MobileKaziAddServiceForm = () => {
  return (
    <div>
      <MobileBackButton name={"Add Service"} />
      <KaziAddServiceForm />
      <BottomNav />
    </div>
  );
};

export default MobileKaziAddServiceForm;
