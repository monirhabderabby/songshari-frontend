// configuration
import React from "react";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";
import { FaUsersSlash } from "react-icons/fa";

// components
import { MobilePartnerCard } from "./MobilePartnerCard";

export const AllPartnersCards = ({ data, isLoading, error }) => {
    // js variable declaration
    let content;
    if (isLoading) {
        content = (
            <div className="mt-[18px] grid grid-cols-2 gap-y-[20px] w-full">
                <div className="h-[187px] w-[165px] bg-white rounded-[15px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)] mx-auto">
                    <div className="h-[110px] w-full bg-gray-200 py-[10px] rounded-tr-[15px] rounded-tl-[15px]"></div>
                    <div className="h-[77px] w-full">
                        <div className="h-[10px] w-4/6 bg-gray-200 animate-pulse my-[10px] ml-[15px] rounded-[2px]"></div>
                        <div className="h-[10px] w-3/6 bg-gray-200 animate-pulse my-[10px] ml-[15px] rounded-[2px]"></div>
                        <div className="h-[10px] w-3/6 bg-gray-200 animate-pulse my-[10px] ml-[15px] rounded-[2px]"></div>
                    </div>
                </div>
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
