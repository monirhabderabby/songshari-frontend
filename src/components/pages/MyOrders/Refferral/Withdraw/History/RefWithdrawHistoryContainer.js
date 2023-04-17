import React from "react";
import RefWithdrawHistoryTable from "./RefWithdrawHistoryTable";

export const RefWithHistoryContainer = () => {
    
    return (
        <div className="mt-[20px] lg:mt-[40px]">
            <div className="border-[1px] border-gray-200 rounded-[4px]  w-full h-auto">
                <h4 className=" px-[20px] py-[10px] text-[16px] lg:text-[20px] font-semibold font-Inter">Withdraw History</h4>
                <div className="overflow-auto">
                    <RefWithdrawHistoryTable />
                </div>
            </div>
        </div>
    );
};
