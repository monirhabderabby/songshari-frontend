import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export const PhoneCallActions = () => {
    return (
        <div className="px-3 fixed py-2 shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px]  bottom-[70px] right-[50px] bg-white h-auto  duration-300 z-50">
            <div className="flex items-center gap-x-[12px]">
                <div className="bg-gray-200 p-2 rounded-full">
                    <FiPhoneCall className="animate-pulse" />
                </div>
                <div>
                    <p>Incoming call...</p>
                    <p className="text-[12px]">Not answered yet</p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                    <button className="bg-red-500 text-white text-[16px] font-medium px-3 py-1 rounded-[6px]">Reject</button>
                    <button className="bg-green-500 text-white text-[16px] font-medium px-3 py-1 rounded-[6px]">Accept</button>
                </div>
            </div>
        </div>
    );
};
