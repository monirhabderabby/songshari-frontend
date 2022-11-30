import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import Accordian from "../profileSection/Accordion";
import MobileAccordion from "./MobileAccordion";
import MobileUsersProfile from "./MobileUsersProfile";

const MobileSingleProfilesUser = () => {
    const [user] = useAuthState(auth);
    return (
        <section>
            <div className="bg-[#FFFFFF] py-[10px] mb-[15px]">
                <div className="bg-white w-full flex justify-between items-center h-[48px]">
                    <div className="ml-7">
                        <Link to='/setting'>
                            <i class="fa-solid text-sm text-[#1E2022] fa-chevron-left "></i>
                        </Link>
                    </div>
                    <div className="mr-8">
                        <span className="text-center">{user.displayName}'s Profile</span>
                    </div>
                    <div></div>
                </div>
            </div>
            <MobileUsersProfile />
            <div className="py-[20px]">
                <MobileAccordion></MobileAccordion>
            </div>
            <BottomNav></BottomNav>
        </section>

    );
};

export default MobileSingleProfilesUser;
