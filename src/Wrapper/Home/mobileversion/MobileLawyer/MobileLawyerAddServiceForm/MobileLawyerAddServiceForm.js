// configuration
import React from "react";

// Components
import LawyerServiceForm from "../../../../../components/Lawyer/LawyerServiceForm/LawyerServiceForm";
import { MobileBackButton } from "../../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../../BottomNav";

const MobileLawyerAddServiceForm = () => {
  return (
    <div>
      <MobileBackButton name={"Add Service"} />
      <LawyerServiceForm />
      <BottomNav />
    </div>
  );
};

export default MobileLawyerAddServiceForm;
