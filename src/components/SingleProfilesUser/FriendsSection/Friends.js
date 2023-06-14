import React, { useState } from "react";
import "../../../App.css";
import { useGetAllConnectionRequestQuery } from "../../../Redux/features/connections/connectionApi";
import useDocumentTitle from "../../../assets/utilities/useDocumentTitle";

import { AllFriendRequest } from "./AllFriendRequest";
import { AllFriends } from "./AllFriends";
import { AllSentRequest } from "./AllSentRequest";

export const Friends = ({ responsive }) => {
    const [page, setPage] = useState(2);
    const { data } = useGetAllConnectionRequestQuery();

    // page title
    useDocumentTitle("Shongshari | Connections");
    return (
        <>
            <div className="mb-4 w-full flex justify-around items-center">
                <button
                    className={`py-2 md:py-[16px] px-2 md:px-[23px] ${
                        page === 1
                            ? "text-white shadow-[2px_2px_12px_rgba(0,0,0,0.12)] bg-[linear-gradient(180deg,_#EA5FA4_0%,_#A52BC7_100%)]"
                            : "text-[#333333] border-[1px] border-[#333333]"
                    }  rounded-[10px] text-[16px] leading-[26px] font-Inter font-medium`}
                    onClick={() => setPage(1)}
                >
                    Connections
                </button>
                <button
                    className={`py-2 md:py-[16px] px-2 md:px-[23px] rounded-[10px] ${
                        page === 2
                            ? "shadow-[2px_2px_12px_rgba(0,0,0,0.12)] bg-[linear-gradient(180deg,_#EA5FA4_0%,_#A52BC7_100%)] text-white"
                            : "text-[#333333] border-[1px] border-[#333333]"
                    } text-[16px] leading-[26px] font-Inter font-medium `}
                    onClick={() => setPage(2)}
                >
                    <div className="relative">
                        Request{" "}
                        {data?.data?.user?.length > 0 && (
                            <span
                                className={`absolute -top-1 -right-4 invisible lg:visible ${
                                    page === 2 ? "bg-white text-[#333333]" : "bg-[linear-gradient(180deg,_#EA5FA4_0%,_#A52BC7_100%)] text-white"
                                } rounded-full text-[10px] h-[18px] w-[18px] flex items-center justify-center`}
                            >
                                {data?.data?.user?.length}
                            </span>
                        )}
                    </div>
                </button>
                <button
                    className={`py-2 md:py-[16px] px-2 md:px-[23px] whitespace-nowrap ${
                        page === 3
                            ? "text-white shadow-[2px_2px_12px_rgba(0,0,0,0.12)] bg-[linear-gradient(180deg,_#EA5FA4_0%,_#A52BC7_100%)]"
                            : "text-[#333333] border-[1px] border-[#333333]"
                    }  rounded-[10px] text-[16px] leading-[26px] font-Inter font-medium`}
                    onClick={() => setPage(3)}
                >
                    Request Sent
                </button>
            </div>
            {page === 1 && <AllFriends {...{ responsive }} />}
            {page === 2 && <AllFriendRequest {...{ responsive }} />}
            {page === 3 && <AllSentRequest {...{ responsive }} />}
        </>
    );
};
