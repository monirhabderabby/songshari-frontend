// configuration
import React from "react";
import { useGetUserBadgesQuery } from "../../../Redux/features/userInfo/userApi";

// Third party package

// components
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import { Badges } from "../Badges";
import { PhotoUploadCard } from "../PhotoUploadCard";
import { VerificationCard } from "../VerificationCard";
import { MobileAccordionLink } from "./MobileAccordionLink";
import MobileUsersProfile from "./MobileUsersProfile";

const MobileSingleProfilesUser = () => {
  const { data: badgeData, error: badgeError } = useGetUserBadgesQuery();
  // js variable declaration
  return (
    <section className="max-w-[1024px] mx-auto">
      <MobileBackButton name="Profile" />
      <MobileUsersProfile />
      <VerificationCard
        title={false}
        mt="0px"
        height="100px"
        responsive={true}
      />
      {badgeData?.data?.length !== 0 && (
        <Badges data={badgeData} error={badgeError} />
      )}
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
