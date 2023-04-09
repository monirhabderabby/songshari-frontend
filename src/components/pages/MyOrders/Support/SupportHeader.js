import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export const SupportHeader = () => {
    return (
        <div className="w-full flex justify-between">
            <h3 className="text-[20px] text-gray-600">Support Tickets</h3>
            <button className="flex items-center gap-x-[10px] bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] h-[40px] px-[12px] rounded-[4px] text-white">
                <AiOutlinePlus />
                Create New Ticket
            </button>
        </div>
    );
};
