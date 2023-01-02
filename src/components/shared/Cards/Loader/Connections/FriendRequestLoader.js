import React from "react";

export const FriendRequestLoader = () => {
    return (
        <div className="shadow-[2px_2px_8px_rgba(0,0,0,0.12)] w-full h-[141px] bg-white rounded-[15px] p-[21px] flex justify-between items-center">
            <div className="flex justify-between w-full">
                <div className="flex items-center">
                    <div className="w-[100px] h-[100px] bg-gray-100  rounded-full mr-[21px] animate-pulse"></div>
                    <div className="flex flex-col gap-4">
                        <div className="h-3 w-[120px] bg-gray-100 rounded-[4px] animate-pulse"></div>
                        <div className="h-3 w-[90px] bg-gray-100 rounded-[4px] animate-pulse"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[14px]">
                    <div className="w-[111px] h-[42px] rounded-[50px] bg-gray-100 animate-pulse"></div>
                    <div className="w-[111px] h-[42px] rounded-[50px] bg-gray-100 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
