import React from "react";

export const MatchesLoader = () => {
    return (
        <div class="w-[252px] h-[240px] rounded-[8px] bg-gray-50 relative">
            <div class="w-[81px] h-[30px] absolute bg-gray-200 rounded-[8px] mt-[8px] ml-[8px] animate-pulse"></div>
            <div class="mt-[10px] w-full flex flex-col items-center">
                <div class="w-[74px] h-[74px] rounded-full bg-gray-200 animate-pulse"></div>
                <div class="w-[87px] h-[12px] bg-gray-200 mt-[10px] rounded-[8px] animate-pulse"></div>
                <div class="w-[57px] h-[12px] bg-gray-200 mt-[10px] rounded-[8px] animate-pulse"></div>
                <div class="w-[133px] h-[12px] bg-gray-200 mt-[10px] rounded-[8px] animate-pulse"></div>
                <div class="w-full flex justify-center mt-[10px] gap-x-[24px]">
                    <div class="w-[44px] h-[44px] rounded-full bg-gray-200 animate-pulse"></div>
                    <div class="w-[44px] h-[44px] rounded-full bg-gray-200 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
