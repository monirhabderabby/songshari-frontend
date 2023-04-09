import React from "react";
import WalletTable from "./WalletTable";

export const WalletHistory = () => {
    return (
        <div className="mt-[40px] lg:mt-[80px] border-[1px] border-gray-200 rounded-[4px]  w-full h-auto">
            <h4 className=" px-[20px] py-[10px] text-[20px] font-semibold font-Inter">Wallet History</h4>
            <div className="overflow-auto">
                <WalletTable />
            </div>
        </div>
    );
};
