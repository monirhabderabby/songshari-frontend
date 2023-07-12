import React from "react";

export const SentRequestLoader = () => {
    return (
        <div>
            <div className="shadow-[2px_2px_8px_rgba(0,0,0,0.12)] w-full h-[141px] bg-white rounded-[15px] p-[21px] flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-[83px] h-[100px] bg-gray-100  rounded-[15px] mr-[21px] animate-pulse"></div>
                    <div className="flex flex-col gap-4">
                        <div className="h-3 w-[180px] bg-gray-100 rounded-[4px] anima"></div>
                        <div className="h-3 w-[170px] bg-gray-100 rounded-[4px] anima"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
