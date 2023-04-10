import React from "react";

export const SingleSupportDetailesHeader = ({ ticket }) => {
    const { subject, uid, status } = ticket || {};

    const colorGenerator = status => {
        if (status === "open") {
            return "bg-green-500";
        } else if (status === "closed") {
            return "bg-red-500";
        }
    };
    return (
        <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-y-[4px]">
                <h3 className="text-[22px] font-medium">{subject}</h3>
                <div>
                    <span className="px-4 ring-1 ring-gray-400 rounded-[50px] py-1">#{uid}</span>
                </div>
            </div>
            <div>
                <button className={`h-[40px] ${colorGenerator(status)} px-4 rounded-[50px] text-white`}>{status}</button>
            </div>
        </div>
    );
};
