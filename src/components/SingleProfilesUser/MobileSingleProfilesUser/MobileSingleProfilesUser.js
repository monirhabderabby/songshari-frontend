import React from "react";
import { useNavigate } from "react-router";
import MobileAccordion from "./MobileAccordion";
import MobileUsersProfile from "./MobileUsersProfile";

const MobileSingleProfilesUser = () => {
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
            <MobileUsersProfile />
            <div className="py-[20px]">
                <MobileAccordion />
            </div>
        </section>
    );
};

export default MobileSingleProfilesUser;
