// configuration
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useDocumentTitle from "../../assets/utilities/useDocumentTitle";

// components
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsWIthAuthQuery } from "../../Redux/features/userInfo/userApi";
import { loadPhotos } from "../../Redux/features/userInfo/userInfo";
import Footer from "../shared/Footer/Footer";
import ChartBoard from "./chatboard/ChartBoard";
import { IntroCard } from "./IntroCard";
import PhotoGelary from "./PhotoGelary";
import { PhotoUploadCard } from "./PhotoUploadCard";
import ProfileCard from "./ProfileCard";
import { SocialMediaBox } from "./SocialMediaBox/SocialMediaBox";
import Table from "./Table/Table";
import UtilitisCard from "./UtilitisCard";
import { VerificationCard } from "./VerificationCard";
import {Badges} from "./../../components/SingleProfilesUser/Badges"

export const SingleProfiles = () => {
  // hook variable declaration
  const [SocialBoxOpen, setSocialBoxOpen] = useState(false);
  const { data, isLoading, error } = useGetProfileDetailsWIthAuthQuery();
  const dispatch = useDispatch();

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
    <div className="bg-[#FAFBFF]">
      <CustomHeader title="Profile" />
      <div className="custom-container mx-auto bg-[#FAFBFF] pt-[30px] ">
        <div className="block lg:flex">
          <div className="w-full ">
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
                  <Badges />
                  <UtilitisCard {...{ data }} />
                  <IntroCard {...{ data, isLoading, error }} />
                  <PhotoUploadCard />
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
  );
};
