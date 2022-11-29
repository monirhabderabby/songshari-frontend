import React from "react";
import { useNavigate } from "react-router";
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import MobileAccordion from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileAccordion";
import MobileUsersProfile from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileUsersProfile";
import MobileOtherUsersProfile from "./MobileOtherUsersProfile";

const MobileProfileOthers = () => {
    const navigate = useNavigate();

    return (
        <section>
            <div className="bg-[#FFFFFF] py-[10px] mb-[15px]">
                <div className="bg-white w-full flex items-center h-[48px] relative">
                    <div className="ml-[27px] absolute" onClick={() => navigate("/")}>
                        <i class="fa-solid text-xs text-[#1E2022] fa-chevron-left "></i>
                    </div>
                    <div className="relative w-full flex justify-center">
                        <span className="text-center">Profile</span>
                    </div>
                </div>
            </div>
            <MobileOtherUsersProfile></MobileOtherUsersProfile>
            <div className="py-[20px]">
                <MobileAccordion />
            </div>
            <BottomNav></BottomNav>
        </section>
      
    );
};

export default MobileProfileOthers;
