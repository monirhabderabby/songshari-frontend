import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CreateTicket } from "./CreateTicket";

export const SupportHeader = () => {
    const [open, setOpen] = useState(false);

    const modalControll = () => {
        setOpen(!open);
    };
    return (
        <>
            <div className="w-full flex justify-between">
                <h3 className="text-[20px] text-gray-600">Support Tickets</h3>
                <button
                    className="flex items-center gap-x-[10px] bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] h-[40px] px-[12px] rounded-[4px] text-white text-[14px] lg:text-[16px]"
                    onClick={modalControll}
                >
                    <AiOutlinePlus />
                    Create New Ticket
                </button>
            </div>
            {open && <CreateTicket modalControll={modalControll} />}
        </>
    );
};
