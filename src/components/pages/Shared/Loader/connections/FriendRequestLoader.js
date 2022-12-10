import React from "react";

export const FriendRequestLoader = () => {
    return (
        <div class="shadow-[2px_2px_8px_rgba(0,0,0,0.12)] w-[501px] h-[141px] bg-white rounded-[15px] p-[21px] flex justify-between items-center">
            <div class="flex justify-between w-full">
                <div class="flex items-center">
                    <div class="w-[100px] h-[100px] bg-gray-100  rounded-full mr-[21px] animate-pulse"></div>
                    <div class="flex flex-col gap-4">
                        <div class="h-3 w-[120px] bg-gray-100 rounded-[4px] animate-pulse"></div>
                        <div class="h-3 w-[90px] bg-gray-100 rounded-[4px] animate-pulse"></div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-[14px]">
                    <div class="w-[111px] h-[42px] rounded-[50px] bg-gray-100 animate-pulse"></div>
                    <div class="w-[111px] h-[42px] rounded-[50px] bg-gray-100 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
