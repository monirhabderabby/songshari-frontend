// configuration
import React from "react";

// Third party packages
import { Pagination } from "@mui/material";

// components
import { OrderHistoryCard } from "../../../components/shared/Cards/Shop/OrderHistoryCard";

export const OrderHistoryContainer = () => {
    // js variable
    const arr = [
        {
            status: "delivered",
        },
        {
            status: "cancelled",
        },
        {
            status: "delivered",
        },
        {
            status: "cancelled",
        },
        {
            status: "delivered",
        },
        {
            status: "cancelled",
        },
        {
            status: "delivered",
        },
        {
            status: "cancelled",
        },
    ];
    return (
        <div className="mt-[82px]">
            <h3 className="text-[32px] font-bold font-Poppins text-left text-[#00000]">History</h3>
            <div className="mt-[40px] grid grid-cols-2 lg:grid-cols-4 gap-x-[10px] gap-y-[16px]">
                {arr.map(p => {
                    return <OrderHistoryCard key={p} {...{ p }} />;
                })}
            </div>
            <div className="w-full flex items-center justify-between mt-[55px]">
                <p className="text-[16px] text-[#3E4954] font-medium font-Poppins">Showing 6 from 150 data</p>
                <Pagination count={5} />
            </div>
        </div>
    );
};
