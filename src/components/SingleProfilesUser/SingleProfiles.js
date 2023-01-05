// configuration
import React, { useEffect, useState } from "react";

// components
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsWIthAuthQuery } from "../../Redux/features/userInfo/userApi";
import ChartBoard from "./chatboard/ChartBoard";
import { IntroCard } from "./IntroCard";
import PhotoGelary from "./PhotoGelary";
import { PhotoUploadCard } from "./PhotoUploadCard";
import ProfileCard from "./ProfileCard";
import ResponsiveProfileCard from "./profileSection/ResponsiveProfileCard";
import { ResponsiveVerificationCard } from "./ResponsiveVerificationCard";
import { SocialMediaBox } from "./SocialMediaBox/SocialMediaBox";
import ResponsiveTable from "./Table/ResponsiveTable";
import Table from "./Table/Table";
import UtilitisCard from "./UtilitisCard";
import { VerificationCard } from "./VerificationCard";

export const SingleProfiles = () => {
  // hook variable declaration
  const [SocialBoxOpen, setSocialBoxOpen] = useState(false);
  const { data, isLoading, error } = useGetProfileDetailsWIthAuthQuery();

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

  return (
    <div className="bg-[#FAFBFF]">
      <CustomHeader title="Profile" />
      <div className="custom-container mx-auto bg-[#FAFBFF] pt-[30px] ">
        <div className="block lg:flex">
          <div className=" w-full ">
            <div>
              <div className="block lg:flex">
                <div className="max-w-[360px]">
                  <div className="md:hidden hidden lg:block">
                    <ProfileCard {...{ data, isLoading }} />
                    {SocialBoxOpen && (
                      <SocialMediaBox
                        {...{ LinkedInId, faceBookId, instagramId }}
                      />
                    )}
                    <VerificationCard />
                    {/* <Badges /> */}
                    <UtilitisCard />
                    <IntroCard {...{ data, isLoading, error }} />
                    <PhotoUploadCard />
                    <PhotoGelary {...{ data, isLoading }} />
                  </div>
                  <div className="lg:hidden md:block hidden w-full">
                    <ResponsiveProfileCard
                      {...{ data, isLoading }}
                    ></ResponsiveProfileCard>

                    <ResponsiveVerificationCard />
                    {/* <Badges /> */}
                    <div className="ml-24">
                      <UtilitisCard />
                    </div>
                    <div className="text-4xl ml-20">
                      <IntroCard {...{ data, isLoading, error }} />
                    </div>
                  </div>

                  <div className="lg:hidden md:hidden w-full">
                    <ProfileCard {...{ data, isLoading }} />
                    {SocialBoxOpen && (
                      <SocialMediaBox
                        {...{ LinkedInId, faceBookId, instagramId }}
                      />
                    )}
                    <VerificationCard />
                    {/* <Badges /> */}
                    <UtilitisCard />
                    <IntroCard {...{ data, isLoading, error }} />
                    <PhotoUploadCard />
                    <PhotoGelary {...{ data, isLoading }} />
                  </div>
                </div>
                <div className="w-full hidden md:hidden lg:block">
                  <div>
                    <Table {...{ data, isLoading }} />
                  </div>
                </div>
                <div className="w-full  lg:hidden">
                  <div>
                    <ResponsiveTable {...{ data, isLoading }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[263px]">
            <div className="flex justify-center">
              <ChartBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
