// configuration
import React from "react";

// Third party package

// components
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import { PhotoUploadCard } from "../PhotoUploadCard";
import { VerificationCard } from "../VerificationCard";
import { MobileAccordionLink } from "./MobileAccordionLink";
import MobileUsersProfile from "./MobileUsersProfile";

const MobileSingleProfilesUser = () => {
  // js variable declaration
  return (
    <section className="max-w-[1024px] mx-auto">
      <MobileBackButton name="Profile" />
      <MobileUsersProfile />
      <VerificationCard title={false} mt="0px" height="100px" />
      <PhotoUploadCard />
      <div className="py-[20px]">
        <MobileAccordionLink></MobileAccordionLink>
      </div>
      <div className="h-8"></div>
      <BottomNav></BottomNav>
    </section>
  );
};

export default MobileSingleProfilesUser;
