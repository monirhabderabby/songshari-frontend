import React from "react";
import CustomHeader from "../../Shared/CustomHeader/CustomHeader";
import Table from "../../SingleProfilesUser/Table/Table";
import DynamicChatGallary from "./DynamicChatGallary";
import DynamicProfileCard from "./DynamicProfileCard";

export const DynamicProfilePage = () => {
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
                                        <DynamicProfileCard />
                                    </div>
                                </div>
                                <div className="w-full md:w-3/5">
                                    <div>
                                        <Table />
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
