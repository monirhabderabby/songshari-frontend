// configuration
import React from "react";
import { Outlet } from "react-router";

// components
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import { FindPartnerHeaderButton } from "./FindPartnerHeaderButton";
import { FindPartnerSearchBox } from "./FindPartnerSearchBox";

export const FindPartnersMobile = () => {
  return (
    <div>
      <MobileBackButton name={"Find Partner"} />
      <div className=" max-w-[1024px] mx-auto px-[24px] bg-[#F8F8FF] min-h-screen">
        <FindPartnerSearchBox />
        <FindPartnerHeaderButton />
        <Outlet />
        <div className="h-20"></div>
        <BottomNav />
      </div>
    </div>
  );
};
