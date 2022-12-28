import React from "react";

export const ProfileCardSkeletonLoader = () => {
    return (
        <div className="h-[400px] w-[300px] shadow-2xl rounded-[12px]">
            <div className="h-[290px] w-full bg-gray-100"></div>
            <div className="px-[15px] py-[15px] h-[110px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[12px]">
                <div className="flex items-center justify-start gap-x-5">
                    <div className="w-[200px] h-[15px] bg-gray-200 animate-pulse"></div>
                    <div className="h-[30px] w-[30px] bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="w-[150px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                <div className="w-[100px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
            </div>
        </div>
    );
};
