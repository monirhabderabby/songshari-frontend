import React from "react";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";
import AboutBanner from "./AboutBanner";
import AboutMissionMov from "./AboutMissionMov";
import AboutStorymov from "./AboutStorymov";

export const AboutMov = () => {
  return (
    <div>
      <MobileBackButton name={"About Us"} />
      <AboutBanner></AboutBanner>
      <AboutMissionMov></AboutMissionMov>
      <AboutStorymov></AboutStorymov>
      <BottomNav></BottomNav>
    </div>
  );
};
