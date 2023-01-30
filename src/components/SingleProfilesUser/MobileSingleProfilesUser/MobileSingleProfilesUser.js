// components
import React from "react";

// Third party package

// components
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import { MobileAccordionLink } from "./MobileAccordionLink";
import MobileUsersProfile from "./MobileUsersProfile";

const MobileSingleProfilesUser = () => {
    // js variable declaration
    return (
        <section className="max-w-[1024px] mx-auto">
            <MobileBackButton name="Profile" />
            <MobileUsersProfile />
            <div className="py-[20px]">
                <MobileAccordionLink></MobileAccordionLink>
            </div>
            <br></br>
            <br></br>
            <BottomNav></BottomNav>
        </section>
    );
};

export default MobileSingleProfilesUser;
