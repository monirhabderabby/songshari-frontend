import React from "react";

// Components
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import EditProfesionalInfo from "../../../../SingleProfilesUser/profileSection/EditprofileSection/EditProfesionalInfo";

const MobileProfessionalInfoEdit = () => {
  return (
    <div>
      <MobileBackButton name={"Edit Professional Info"} />
      <div className="">
        <EditProfesionalInfo />
      </div>
      <div className="h-10"></div>
      <BottomNav />
    </div>
  );
};

export default MobileProfessionalInfoEdit;
