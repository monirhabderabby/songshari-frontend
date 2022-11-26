import React, { useEffect } from "react";
import { useParams } from "react-router";
import CustomHeader from "../../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsQuery } from "../../../Redux/features/userInfo/userApi";
import DynamicCertificate from "./DynamicCertificate";
import { DynamicConnectionsCard } from "./DynamicConnectionsCard";
import { DynamicPhotosContainer } from "./DynamicPhotosContainer";
import DynamicProfileCard from "./DynamicProfileCard";
import DynamicTable from "./DynamicTable";

export const DynamicProfilePage = () => {
    const { id } = useParams();
    const { data: user, isLoading } = useGetProfileDetailsQuery(id);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="bg-[#FAFBFF]">
            <CustomHeader title="Profile" />
            <div className="custom-container mx-auto pb-12">
                <div className="block lg:flex">
                    <div className="md:w-full lg:w-9/12">
                        <div>
                            <div className="block md:flex">
                                <div className="w-full md:w-2/5 mr-2">
                                    <div>
                                        <DynamicProfileCard {...{ user }} />
                                        <DynamicConnectionsCard />
                                        <DynamicPhotosContainer />
                                    </div>
                                </div>
                                <div className="w-full md:w-3/5">
                                    <div>
                                        <DynamicTable {...{ user }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-full lg:w-3/12 ml-2">
                        <div className="flex justify-center">
                            <DynamicCertificate />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
