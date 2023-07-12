import React from "react";
import AllReferedTable from "./AllReferedTable";

export const AllRefferedContainer = ({ referral }) => {
    return (
        <div>
            <div className="border-[1px] border-gray-200 rounded-[4px]  w-full h-auto">
                <h4 className=" px-[20px] py-[10px] text-[16px] lg:text-[20px] font-semibold font-Inter">Refferral History</h4>
                <div className="overflow-auto">
                    <AllReferedTable referral={referral} />
                </div>
            </div>
        </div>
    );
};
