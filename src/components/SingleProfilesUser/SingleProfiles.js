import React from "react";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsWIthAuthQuery } from "../../Redux/features/userInfo/userApi";
import { Badges } from "./Badges";
import ChartBoard from "./chatboard/ChartBoard";
import { IntroCard } from "./IntroCard";
import PhotoGelary from "./PhotoGelary";
import ProfileCard from "./ProfileCard";
import SingleUserActivity from "./SingleUserActivity/SingleUserActivity";
import Table from "./Table/Table";
import UtilitisCard from "./UtilitisCard";
import { VerificationCard } from "./VerificationCard";

const SingleProfiles = () => {
    const { data, isLoading } = useGetProfileDetailsWIthAuthQuery();
    return (
        <div className="bg-[#FAFBFF]">
            <div className="hidden md:block">
                <CustomHeader title="Profile" />
                <div className="custom-container mx-auto bg-[#FAFBFF] pt-[30px] ">
                    <div className="block lg:flex">
                        <div className=" w-full lg:w-9/12 ">
                            <div>
                                <div className="block lg:flex">
                                    <div className="w-full  lg:mr-4">
                                        <div>
                                            <ProfileCard {...{ data, isLoading }} />
                                            <VerificationCard />
                                            <Badges />
                                            <UtilitisCard />
                                            <IntroCard />
                                            <PhotoGelary {...{ data, isLoading }} />
                                        </div>
                                    </div>
                                    <div className="lg:w-full">
                                        <div>
                                            <Table {...{ data, isLoading }} />
                                        </div>
                                        <div>
                                            <SingleUserActivity></SingleUserActivity>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-full lg:w-3/12 ml-4">
                            <div className="flex justify-center hidden md:block">
                                <ChartBoard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default SingleProfiles;
