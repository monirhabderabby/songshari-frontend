import React from "react";

export const ProfileLoader = () => {
    return (
        <div class="h-[400px] w-[255px] bg-gray-200 rounded-[12px] relative">
            <div class="h-[100px] w-full bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bottom-0 rounded-br-[12px] rounded-bl-[12px] absolute">
                <div class="h-[10px] bg-white w-[150px] rounded-[4px] mt-4 ml-3 animate-pulse"></div>
                <div class="h-[10px] bg-white w-[150px] rounded-[4px] mt-4 ml-3 animate-pulse"></div>
                <div class="h-[10px] bg-white w-[150px] rounded-[4px] mt-4 ml-3 animate-pulse"></div>
            </div>
        </div>
    );
};
