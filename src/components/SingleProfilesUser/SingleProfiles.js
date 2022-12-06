import React from "react";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsWIthAuthQuery } from "../../Redux/features/userInfo/userApi";
import { Badges } from "./Badges";
import ChartBoard from "./chatboard/ChartBoard";
import { IntroCard } from "./IntroCard";
import PhotoGelary from "./PhotoGelary";
import ProfileCard from "./ProfileCard";
import Table from "./Table/Table";
import UtilitisCard from "./UtilitisCard";
import { VerificationCard } from "./VerificationCard";

const SingleProfiles = () => {
    const { data, isLoading } = useGetProfileDetailsWIthAuthQuery();

    return (
        <div className="bg-[#FAFBFF]">
            <CustomHeader title="Profile" />
            <div className="custom-container mx-auto bg-[#FAFBFF] pt-[30px]">
                <div className="block lg:flex">
                    <div className="md:w-full w-full lg:w-9/12">
                        <div>
                            <div className="block md:flex">
                                <div className="w-full md:w-2/5 mr-12">
                                    <div>
                                        <ProfileCard {...{ data, isLoading }} />
                                        <VerificationCard />
                                        <Badges />
                                        <UtilitisCard />
                                        <IntroCard />
                                        <PhotoGelary />
                                    </div>
                                </div>
                                <div className="w-full md:w-3/5">
                                    <div>
                                        <Table {...{ data, isLoading }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-full lg:w-3/12 ml-12">
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
