import React from "react";

// Components
import { MobileBackButton } from "../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../../Home/mobileversion/BottomNav";
import { Container } from "../Container";

const MobileStepper = () => {
  return (
    <div>
      <MobileBackButton name={"Profile Form"} />
      <div>
        <Container {...{ responsive: true }} />
      </div>
      <div className="h-12"></div>
      <BottomNav />
    </div>
  );
};

export default MobileStepper;
