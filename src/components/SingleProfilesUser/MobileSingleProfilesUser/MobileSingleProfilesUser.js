import React from "react";
import MobileAccordion from "./MobileAccordion";
import MobileUsersProfile from "./MobileUsersProfile";

const MobileSingleProfilesUser = () => {
  return (
    <section>
      <div className="bg-[#FFFFFF] py-[10px] mb-[15px]">
        <div className="flex items-center justify-between mx-auto max-w-[337px]">
          <i class="fa-solid text-xs text-[#1E2022] fa-chevron-left"></i>
          <div className="mr-[50%]">
            <h3 className=" text-lg text-[#1E2022]">Profile</h3>
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
