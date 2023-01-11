import React from "react";

export const MobilePartnerLoader = () => {
    return (
        <div className="h-[187px] w-[165px] bg-white rounded-[15px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)] mx-auto">
            <div className="h-[110px] w-full bg-gray-200 py-[10px] rounded-tr-[15px] rounded-tl-[15px]"></div>
            <div className="h-[77px] w-full">
                <div className="h-[10px] w-4/6 bg-gray-200 animate-pulse my-[10px] ml-[15px] rounded-[2px]"></div>
                <div className="h-[10px] w-3/6 bg-gray-200 animate-pulse my-[10px] ml-[15px] rounded-[2px]"></div>
                <div className="h-[10px] w-3/6 bg-gray-200 animate-pulse my-[10px] ml-[15px] rounded-[2px]"></div>
            </div>
        </div>
    );
};
