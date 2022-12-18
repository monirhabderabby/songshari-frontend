import React from "react";

export const YouMayLikeSkeletionLoader = () => {
    return (
        <div>
            <div className="flex flex-col  items-center justify-center rounded-[20px] bg-white p-2 shadow-[0px_4px_4px_rgba(62,73,84,0.04)]">
                `<div className="h-[35px] w-[35px] rounded-full bg-gray-200 animate-pulse"></div>
                <div className="h-4 w-full animate-pulse bg-gray-200 leading-5 mt-2 rounded-3xl"></div>
                <div className="flex items-center justify-between gap-4">
                    <div className="w-[45px] h-[45px] bg-gray-200 rounded-full mt-2 animate-pulse"></div>
                    <div className="w-[45px] h-[45px] bg-gray-200 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
