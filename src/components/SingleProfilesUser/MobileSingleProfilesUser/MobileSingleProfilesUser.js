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
      <div className="bg-white sticky top-0 w-full z-10">
        <div className="grid grid-cols-3">
          <Link to="/setting">
            <i className="fa-solid fa-chevron-left ml-6 my-4"></i>
          </Link>
          <h1 className="profile-tit text-center mt-3 mb-3">Profile</h1>
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
