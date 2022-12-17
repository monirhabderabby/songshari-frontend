import React from "react";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsWIthAuthQuery } from "../../Redux/features/userInfo/userApi";
import { Badges } from "./Badges";
import ChartBoard from "./chatboard/ChartBoard";
import { IntroCard } from "./IntroCard";
import PhotoGelary from "./PhotoGelary";
import { PhotoUploadCard } from "./PhotoUploadCard";
import ProfileCard from "./ProfileCard";
import Table from "./Table/Table";
import UtilitisCard from "./UtilitisCard";
import { VerificationCard } from "./VerificationCard";

const SingleProfiles = () => {
    const { data, isLoading } = useGetProfileDetailsWIthAuthQuery();
    return (
        <div className="bg-[#FAFBFF]">
            <CustomHeader title="Profile" />
            <div className="custom-container mx-auto bg-[#FAFBFF] pt-[30px] ">
                <div className="block lg:flex">
                    <div className=" w-full ">
                        <div>
                            <div className="block lg:flex">
                                <div className="max-w-[360px]">
                                    <div>
                                        <ProfileCard {...{ data, isLoading }} />
                                        <VerificationCard />
                                        <Badges />
                                        <UtilitisCard />
                                        <IntroCard />
                                        <PhotoUploadCard />
                                        <PhotoGelary {...{ data, isLoading }} />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div>
                                        <Table {...{ data, isLoading }} />
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

export default SingleProfiles;
