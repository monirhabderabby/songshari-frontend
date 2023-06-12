// configuration
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useDocumentTitle from "../../assets/utilities/useDocumentTitle";

// components
import {
  useGetProfileDetailsWIthAuthQuery,
  useGetUserBadgesQuery,
} from "../../Redux/features/userInfo/userApi";
import { loadPhotos } from "../../Redux/features/userInfo/userInfo";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import Footer from "../shared/Footer/Footer";
import RequireVerified from "../shared/RequireAuth/RequireVerified";
import { Badges } from "./../../components/SingleProfilesUser/Badges";
import { IntroCard } from "./IntroCard";
import PhotoGelary from "./PhotoGelary";
import { PhotoUploadCard } from "./PhotoUploadCard";
import ProfileCard from "./ProfileCard";
import { SocialMediaBox } from "./SocialMediaBox/SocialMediaBox";
import Table from "./Table/Table";
import UtilitisCard from "./UtilitisCard";
import { VerificationCard } from "./VerificationCard";
import ChartBoard from "./chatboard/ChartBoard";
import VideoBioUploadCard from "./VideoBioUploadCard/VideoBioUploadCard";
import GoPremium from "../shared/Package/GoPremium";

const message = `You must "Super" or "Super Delux" Package to upload video Bio data. Please buy the package `;
export const SingleProfiles = () => {
  // hook variable declaration
  const [SocialBoxOpen, setSocialBoxOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { data, isLoading, error } = useGetProfileDetailsWIthAuthQuery();
  const dispatch = useDispatch();
  const { data: badgeData, error: badgeError } = useGetUserBadgesQuery();

  // page title
  useDocumentTitle("Shongshari | Profile");

  // JS Variables
  // decision making about social Box
  const { LinkedInId } = data || {};
  const { faceBookId } = data || {};
  const { instagramId } = data || {};
  useEffect(() => {
    if (LinkedInId || faceBookId || instagramId) {
      setSocialBoxOpen(true);
    }
  }, [LinkedInId, faceBookId, instagramId, setSocialBoxOpen]);

  useEffect(() => {
    if (data) {
      const photos = data?.photos;
      dispatch(loadPhotos(photos));
    }
  }, [data, dispatch]);
  return (
    <>
      <RequireVerified>
        <div className="bg-[#FAFBFF]">
          <CustomHeader title="Profile" />
          <div className={`custom-container mx-auto bg-[#FAFBFF] pt-[30px]`}>
            <div className="block lg:flex">
              <div className="w-full">
                <div className="block lg:flex">
                  <div className="max-w-[360px]">
                    <div className="md:hidden hidden lg:block">
                      <ProfileCard {...{ data, isLoading }} />
                      {SocialBoxOpen && (
                        <SocialMediaBox
                          {...{ LinkedInId, faceBookId, instagramId }}
                        />
                      )}
                      <VerificationCard title={true} mt="24px" height="125px" />
                      {badgeData && badgeData?.data?.length !== 0 && (
                        <Badges data={badgeData} error={badgeError} />
                      )}
                      <UtilitisCard {...{ data }} />
                      <IntroCard {...{ data, isLoading, error }} />
                      <PhotoUploadCard />
                      <VideoBioUploadCard {...{ data, setShowPopup }} />
                      <PhotoGelary {...{ isLoading, error }} />
                    </div>
                  </div>
                  <div className="w-full hidden md:hidden lg:block px-4">
                    <div>
                      <Table {...{ data, isLoading }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[263px]">
                <div className="flex justify-center">
                  <ChartBoard {...{ data, isLoading }} />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </RequireVerified>
      {showPopup && <GoPremium {...{message, setShowPopup}} />}
    </>
  );
};
