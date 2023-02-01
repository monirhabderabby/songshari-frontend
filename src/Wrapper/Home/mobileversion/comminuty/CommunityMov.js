import React from "react";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";
import { CommunityBanner } from "./CommunityBanner";

export const CommunityMov = () => {
  return (
    <div className="bg-[#F8F8FF]">
      <MobileBackButton name={"Community"} />
      <CommunityBanner></CommunityBanner>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
    </div>
  );
};
