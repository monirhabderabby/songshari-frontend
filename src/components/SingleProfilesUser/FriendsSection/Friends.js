import React, { useState } from "react";
import "../../../App.css";

import { useGetAllRequestQuery } from "../../../Redux/features/connections/connectionApi";
import { AllFriends } from "./AllFriends";

export const Friends = ({ data, isLoading }) => {
    const [page, setPage] = useState(2);
    const { data: request } = useGetAllRequestQuery();

    if (request) {
        console.log(request);
    }
    return (
        <>
            <div className="mb-4 w-full flex justify-around items-center">
                <button className="py-[12px] px-[20px] text-[#333333] border-[1px] border-[#333333] rounded-[10px] text-[16px] leading-[26px] font-Inter font-medium">
                    Friends
                </button>
                <button className="py-[12px] px-[20px] rounded-[10px] shadow-[2px_2px_12px_rgba(0,0,0,0.12)] bg-[linear-gradient(180deg,_#EA5FA4_0%,_#A52BC7_100%)] text-[16px] leading-[26px] font-Inter font-medium  text-white ">
                    <div className="relative">
                        Friend Request{" "}
                        <span className="absolute -top-2 -right-4 bg-white text-[#333333] rounded-full text-[10px] w-[18px] h-[18px] flex items-center justify-center">
                            10
                        </span>
                    </div>
                </button>
                <button className="py-[12px] px-[20px] text-[#333333] border-[1px] border-[#333333] rounded-[10px] text-[16px] leading-[26px] font-Inter font-medium">
                    Request Sent List
                </button>
            </div>
            {page === 2 && <AllFriends />}
        </>
    );
};
