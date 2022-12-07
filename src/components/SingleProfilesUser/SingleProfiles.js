import React from "react";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsWIthAuthQuery } from "../../Redux/features/userInfo/userApi";
import ChartBoard from "./chatboard/ChartBoard";
import PhotoGelary from "./PhotoGelary";
import ProfileCard from "./ProfileCard";
import Table from "./Table/Table";

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
                                <div className="w-full md:w-2/5 mr-4">
                                    <div>
                                        <ProfileCard {...{ data, isLoading }} />
                                        {/* <VerificationCard />
                                        <Badges />
                                        <UtilitisCard />
                                        <IntroCard />
                                        <PhotoUploadCard /> */}
                                        <PhotoGelary />
                                    </div>
                                </div>
                                <div className="w-full md:w-3/4">
                                    <div>
                                        <Table {...{ data, isLoading }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-full lg:w-3/12 ml-4">
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
