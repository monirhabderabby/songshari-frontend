import React from "react";
<<<<<<< HEAD
import CustomHeader from "../../Shared/CustomHeader/CustomHeader";
import Table from "../../SingleProfilesUser/Table/Table";
=======
import { useParams } from "react-router";
import { useGetProfileDetailsQuery } from "../../../Redux/features/userInfo/userApi";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
>>>>>>> dbb014f87b5a84746172cc859729c7630c994ccb
import DynamicChatGallary from "./DynamicChatGallary";
import DynamicProfileCard from "./DynamicProfileCard";
import DynamicTable from "./DynamicTable";

export const DynamicProfilePage = () => {
    const { id } = useParams();
    const { data: user, isLoading } = useGetProfileDetailsQuery(id);
    return (
        <div>
            <CustomHeader title="Profile" />
            <div className="custom-container mx-auto">
                <div className="block lg:flex">
                    <div className="md:w-full lg:w-9/12">
                        <div>
                            <div className="block md:flex">
                                <div className="w-full md:w-2/5 mr-2">
                                    <div>
                                        <DynamicProfileCard {...{ user }} />
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
                            <DynamicChatGallary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
