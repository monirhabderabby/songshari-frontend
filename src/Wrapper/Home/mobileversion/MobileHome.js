// normal import 
import React from "react";

// components import 
import { TopMenu } from "./TopMenu";
import { MobileBanner } from "./MobileBanner";
import TopProfile from "../../../components/pages/TopProfile/TopProfile";
import { BottomNav } from "./BottomNav";
import { Services } from "./Services";
import TopProfileMov from "./topprofilemov/TopProfileMov";

export const MobileHome = () => {
  return (
    <div className="mov-res">
      <TopMenu></TopMenu>
      <MobileBanner></MobileBanner>
      <Services></Services>
      <TopProfileMov></TopProfileMov>
     
      <br></br>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
    </div>
  );
};
