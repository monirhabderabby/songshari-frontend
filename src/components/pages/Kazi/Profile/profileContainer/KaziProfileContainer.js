// configuration
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetProfileDetailsWIthAuthQuery } from "../../../../../Redux/features/userInfo/userApi";
import { loadPhotos } from "../../../../../Redux/features/userInfo/userInfo";
import Footer from "../../../../shared/Footer/Footer";
import ChartBoard from "../../../../SingleProfilesUser/chatboard/ChartBoard";
import { IntroCard } from "../../../../SingleProfilesUser/IntroCard";
import PhotoGelary from "../../../../SingleProfilesUser/PhotoGelary";
import { PhotoUploadCard } from "../../../../SingleProfilesUser/PhotoUploadCard";
import ProfileCard from "../../../../SingleProfilesUser/ProfileCard";
import { SocialMediaBox } from "../../../../SingleProfilesUser/SocialMediaBox/SocialMediaBox";
import UtilitisCard from "../../../../SingleProfilesUser/UtilitisCard";
import { VerificationCard } from "../../../../SingleProfilesUser/VerificationCard";

// components
import KaziTable from "./KaziTable";

export const KaziProfileContainer = () => {
    // hook variable declaration
    const [SocialBoxOpen, setSocialBoxOpen] = useState(false);
    const { data, isLoading, error } = useGetProfileDetailsWIthAuthQuery();
    const dispatch = useDispatch();

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
            <div className="custom-container mx-auto bg-[#FAFBFF]">
                <div className="block lg:flex">
                    <div className="w-full ">
                        <div className="block lg:flex">
                            <div className="max-w-[360px]">
                                <div className="md:hidden hidden lg:block">
                                    <ProfileCard {...{ data, isLoading }} />
                                    {SocialBoxOpen && <SocialMediaBox {...{ LinkedInId, faceBookId, instagramId }} />}
                                    <VerificationCard />
                                    {/* <Badges /> */}
                                    <UtilitisCard />
                                    <IntroCard {...{ data, isLoading, error }} />
                                    <PhotoUploadCard />
                                    <PhotoGelary {...{ isLoading, error }} />
                                </div>
                            </div>
                            <div className="w-full hidden md:hidden lg:block">
                                <div>
                                    <KaziTable {...{ data, isLoading }} />
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
