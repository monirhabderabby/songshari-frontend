// configuration
import React from "react";

// Third party packages
import { AllPartnersCards } from "./AllPartnersCards";
import { FindPartnerHeaderButton } from "./FindPartnerHeaderButton";
import { FindPartnerSearchBox } from "./FindPartnerSearchBox";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";

export const FindPartnersMobile = () => {
  return (
    <div className="lg:hidden px-[26px] bg-[#F8F8FF] min-h-screen">
      <FindPartnerSearchBox />
      <FindPartnerHeaderButton />
      <AllPartnersCards />
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};
