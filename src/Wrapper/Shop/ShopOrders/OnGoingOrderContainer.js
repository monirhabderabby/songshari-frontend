// configuration
import React from "react";

// Third party packages
import { Pagination } from "@mui/material";

// components
import { OnGoingOrderCard } from "../../../components/shared/Cards/Shop/OnGoingOrderCard";

export const OnGoingOrderContainer = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div>
            <h3 className="text-[32px] font-bold font-Poppins text-left text-[#00000]">Ongoing order</h3>
            <div className="mt-[40px] grid grid-cols-4 gap-x-[10px] gap-y-[16px]">
                {arr.map(p => {
                    return <OnGoingOrderCard key={p} />;
                })}
            </div>
            <div className="w-full flex items-center justify-between mt-[55px]">
                <p className="text-[16px] text-[#3E4954] font-medium font-Poppins">Showing 6 from 150 data</p>
                <Pagination count={5} />
            </div>
        </div>
    );
};
