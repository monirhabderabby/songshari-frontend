// Configuration
import React from "react";

// Third party packages
import moment from "moment";

// Components
import { TbCurrencyTaka } from "react-icons/tb";

// Third party packages
import { BsFillCalendarFill } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";

const PendingOrderCard = ({ order }) => {
    const { service, user, createdAt } = order || {};
    let { price, title } = service || {};
    const { firstName, lastName } = user || {};
    console.log(order);
    let name = `${firstName} ${lastName}`;
    title = title.length > 50 ? title.slice(0, 50) : title;
    return (
        <div
            className="px-6 lg:px-10 py-6 rounded-lg h-[284px]"
            style={{
                backgroundImage: "linear-gradient(180deg, #FFEAF3 0%, #EDF0FF 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
        >
            <p className="text-lg leading-6 tracking-tight mb-2">{name}</p>
            <p className="text-[20px] font-semibold leading-7 tracking-tight mb-3">{title}</p>
            <div className="mb-3 flex items-center">
                <TbCurrencyTaka className="text-[20px] font-bold" /> <span className="text-[16px] font-medium">{price}</span>
            </div>
            <div className="flex items-center gap-3 mb-8">
                <span>
                    {" "}
                    <BsFillCalendarFill />{" "}
                </span>
                <p className="leading-[22px] tracking-tight">{moment(createdAt).format("ll")}</p>
            </div>
            <div className="flex items-center gap-5">
                <div className="bg-[#E41272] text-white text-xl p-4 rounded-full">
                    <MdOutlineMessage />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="bg-[#E41272] text-white rounded px-3 py-2 font-semibold leading-[22px] tracking-tight whitespace-nowrap">
                        Accept Now
                    </button>
                    <button className="border-[1px] border-black rounded px-3 py-2 font-semibold leading-[22px] tracking-tight whitespace-nowrap">
                        Reject Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PendingOrderCard;
