import React from "react";
import RefEarningTable from "./RefEarningTable";

export const RefEarningTableContainer = () => {
    return (
        <div>
            <div className="mt-[20px] lg:mt-[80px] border-[1px] border-gray-200 rounded-[4px]  w-full h-auto">
                <h4 className=" px-[20px] py-[10px] text-[16px] lg:text-[20px] font-semibold font-Inter">Refferral Earnings History</h4>
                <div className="overflow-auto">
                    <RefEarningTable />
                </div>
            </div>
        </div>
    );
};
