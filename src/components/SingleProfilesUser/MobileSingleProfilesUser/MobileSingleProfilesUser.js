// components
import React from "react";
import { Link } from "react-router-dom";

// components
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileAccordionLink } from "./MobileAccordionLink";
import MobileUsersProfile from "./MobileUsersProfile";

const MobileSingleProfilesUser = () => {
  return (
    <section>
      <div className="bg-[#FFFFFF] py-[10px] mb-[15px]">
        <div className="bg-white w-full flex justify-between items-center h-[48px]">
          <div className="ml-7">
            <Link to="/setting">
              <i className="fa-solid text-sm text-[#1E2022] fa-chevron-left "></i>
            </Link>
          </div>
          <div className="mr-8">
            <span className="text-center pl-1">Profile</span>
          </div>
          <div></div>
        </div>
      </div>
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
