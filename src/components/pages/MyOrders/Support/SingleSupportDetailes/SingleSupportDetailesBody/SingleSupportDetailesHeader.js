import React from "react";

export const SingleSupportDetailesHeader = () => {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-y-[4px]">
                <h3 className="text-[22px] font-medium">Cannot access the system</h3>
                <div>
                    <span className="px-4 ring-1 ring-gray-400 rounded-[50px] py-1">#2550</span>
                </div>
            </div>
            <div>
                <button className="h-[40px] bg-green-500 px-4 rounded-[50px] text-white">Open</button>
            </div>
        </div>
    );
};
