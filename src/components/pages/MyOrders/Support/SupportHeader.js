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
            <div className="w-full flex justify-between items-center">
                <h3 className="text-[16px] lg:text-[20px] text-gray-600">Support Tickets</h3>
                <button
                    className="flex items-center gap-x-2 lg:gap-x-[10px] special_profile_button h-[40px] px-[10px] lg:px-[12px] text-[12px] lg:text-[16px]"
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
