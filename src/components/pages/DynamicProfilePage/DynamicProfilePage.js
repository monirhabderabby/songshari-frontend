// Configuration
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// Components
import CustomHeader from "../../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsQuery } from "../../../Redux/features/userInfo/userApi";
import DynamicCertificate from "./DynamicCertificate";
import { DynamicConnectionsCard } from "./DynamicConnectionsCard";
import { DynamicPhotosContainer } from "./DynamicPhotosContainer";
import DynamicProfileCard from "./DynamicProfileCard";
import { DynamicSocialBox } from "./DynamicSocialBox";
import DynamicTable from "./DynamicTable";

export const DynamicProfilePage = () => {
    // hook variable declaration
    const { id } = useParams();
    const [SocialBoxOpen, setSocialBoxOpen] = useState(false);
    const { data, isLoading, error } = useGetProfileDetailsQuery(id);

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
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="bg-[#FAFBFF]">
            <div className="hidden lg:block">
                <CustomHeader title="Profile" />
            </div>

            <div className="custom-container mx-auto pb-12 pt-[30px]">
                <div className="block lg:flex">
                    <div className="w-full lg:w-9/12">
                        <div>
                            <div className="block lg:flex">
                                <div className="w-full lg:w-2/5 lg:mr-7">
                                    <div className="hidden lg:block">
                                        <DynamicProfileCard {...{ data, isLoading }} />
                                        {SocialBoxOpen && <DynamicSocialBox {...{ LinkedInId, faceBookId, instagramId }} />}
                                        <DynamicConnectionsCard {...{ data, isLoading }} />
                                        <DynamicPhotosContainer {...{ data, isLoading, error }} />
                                    </div>
                                </div>
                                <div className="w-full lg:w-3/5">
                                    <div className="hidden lg:block lg:max-w-[512px]">
                                        <DynamicTable {...{ data, isLoading }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[263px] lg:ml-7">
                        <div className="hidden lg:block">
                            <div className="flex justify-center">
                                <DynamicCertificate {...{ data }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
