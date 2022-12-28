// normal import
import React from "react";

// components import
import { BottomNav } from "./BottomNav";
import { MobileBanner } from "./MobileBanner";
import { Services } from "./Services";
import { TopMenu } from "./TopMenu";
import TopProfileMov from "./topprofilemov/TopProfileMov";

export const MobileHome = () => {
    return (
        <div className="mov-res">
            <TopMenu></TopMenu>
            <MobileBanner></MobileBanner>
            <Services></Services>
            <TopProfileMov />
            <BottomNav></BottomNav>
        </div>
    );
};
