// configuration
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useDocumentTitle from "../../assets/utilities/useDocumentTitle";

// components
import { useGetProfileDetailsWIthAuthQuery, useGetUserBadgesQuery } from "../../Redux/features/userInfo/userApi";
import { loadPhotos } from "../../Redux/features/userInfo/userInfo";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import Footer from "../shared/Footer/Footer";
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

export const SingleProfiles = () => {
    // hook variable declaration
    const [SocialBoxOpen, setSocialBoxOpen] = useState(false);
    const { data, isLoading, error } = useGetProfileDetailsWIthAuthQuery();
    const dispatch = useDispatch();
    const { data: badgeData, error: badgeError } = useGetUserBadgesQuery();
    const { data: loggedInUserProfile } = useGetProfileDetailsWIthAuthQuery();
    const { isEmailVerified, firstName } = loggedInUserProfile || {};

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
            {!isEmailVerified && (
                <div className="absolute top-[50%] left-[50%] text-[30px] z-50 bg-white px-4 py-4 shadow-lg w-[260px]">
                    <h3 className="text-[22px] font-Inter font-bold">Verify your email</h3>
                    <p className="max-w-[320px] text-[14px]">
                        Hi <span className="font-semibold">{firstName}!</span> use the link below to verify your email and start enjoying
                        songshari.com
                    </p>
                    <button className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-[220px] py-1 text-white rounded-[4px] mt-[20px] focus:shadow-md flex justify-center items-center text-[18px]">
                        Verify email
                    </button>
                </div>
            )}
            <div className={`custom-container mx-auto bg-[#FAFBFF] pt-[30px] ${!isEmailVerified && "blur-[7px]"}`}>
                <div className="block lg:flex">
                    <div className="w-full">
                        <div className="block lg:flex">
                            <div className="max-w-[360px]">
                                <div className="md:hidden hidden lg:block">
                                    <ProfileCard {...{ data, isLoading }} />
                                    {SocialBoxOpen && <SocialMediaBox {...{ LinkedInId, faceBookId, instagramId }} />}
                                    <VerificationCard title={true} mt="24px" height="125px" />
                                    {badgeData && badgeData?.data?.length !== 0 && <Badges data={badgeData} error={badgeError} />}
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
