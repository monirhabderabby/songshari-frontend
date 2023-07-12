import React from "react";

export const MatchesLoader = () => {
    return (
        <div className="w-[252px] h-[240px] rounded-[8px] bg-gray-50 relative">
            <div className="w-[81px] h-[30px] absolute bg-gray-200 rounded-[8px] mt-[8px] ml-[8px] animate-pulse"></div>
            <div className="mt-[10px] w-full flex flex-col items-center">
                <div className="w-[74px] h-[74px] rounded-full bg-gray-200 animate-pulse"></div>
                <div className="w-[87px] h-[12px] bg-gray-200 mt-[10px] rounded-[8px] animate-pulse"></div>
                <div className="w-[57px] h-[12px] bg-gray-200 mt-[10px] rounded-[8px] animate-pulse"></div>
                <div className="w-[133px] h-[12px] bg-gray-200 mt-[10px] rounded-[8px] animate-pulse"></div>
                <div className="w-full flex justify-center mt-[10px] gap-x-[24px]">
                    <div className="w-[44px] h-[44px] rounded-full bg-gray-200 animate-pulse"></div>
                    <div className="w-[44px] h-[44px] rounded-full bg-gray-200 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
