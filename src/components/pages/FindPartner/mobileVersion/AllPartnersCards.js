// configuration
import React from "react";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";
import { FaUsersSlash } from "react-icons/fa";
import { MobilePartnerLoader } from "./Loader/MobilePartnerLoader";

// components
import { MobilePartnerCard } from "./MobilePartnerCard";

export const AllPartnersCards = ({ data, isLoading, error }) => {
    // js variable declaration
    let content;
    if (isLoading) {
        content = (
            <div className="mt-[18px] grid grid-cols-2 gap-y-[20px] w-full">
                <MobilePartnerLoader />
                <MobilePartnerLoader />
                <MobilePartnerLoader />
                <MobilePartnerLoader />
            </div>
        );
    } else if (!isLoading && data?.data?.members?.length === 0) {
        content = (
            <div className="mt-[18px] w-full flex flex-col items-center">
                <FaUsersSlash className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">No user found!</p>
            </div>
        );
    } else if (!isLoading && error) {
        content = (
            <div className="mt-[18px] w-full flex flex-col items-center">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Server Error!</p>
            </div>
        );
    } else if (!isLoading && data?.data?.members?.length > 0) {
        content = (
            <div className="mt-[18px] grid grid-cols-2 gap-y-[20px] w-full">
                {data.data.members?.map(user => {
                    return <MobilePartnerCard {...{ user }} />;
                })}
            </div>
        );
    }
    return content;
};