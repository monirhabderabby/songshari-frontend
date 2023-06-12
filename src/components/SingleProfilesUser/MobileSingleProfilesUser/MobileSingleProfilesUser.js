// configuration
import React,{useState} from "react";
import { useGetProfileDetailsWIthAuthQuery, useGetUserBadgesQuery } from "../../../Redux/features/userInfo/userApi";

// Third party package

// components
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import { Badges } from "../Badges";
import { PhotoUploadCard } from "../PhotoUploadCard";
import { VerificationCard } from "../VerificationCard";
import VideoBioUploadCard from "../VideoBioUploadCard/VideoBioUploadCard";
import { MobileAccordionLink } from "./MobileAccordionLink";
import MobileUsersProfile from "./MobileUsersProfile";
import GoPremium from "../../shared/Package/GoPremium";

const message = `You must "Super" or "Super Delux" Package to upload video Bio data. Please buy the package `;
const MobileSingleProfilesUser = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { data: badgeData, error: badgeError } = useGetUserBadgesQuery();
    const { data} = useGetProfileDetailsWIthAuthQuery();
    // js variable declaration
    return (
      <>
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
          <VideoBioUploadCard {...{ data, setShowPopup }} />
          <PhotoUploadCard />
          <div className="py-[20px]">
            <MobileAccordionLink></MobileAccordionLink>
          </div>
          <div className="h-8"></div>
          <BottomNav></BottomNav>
        </section>
        {showPopup && <GoPremium {...{ message, setShowPopup }} />}
      </>
    );
};

export default MobileSingleProfilesUser;
