import React from "react";
import { RefEarningTableContainer } from "./RefEarningTableContainer";

export const ReferralEarnings = () => {
    return (
        <div>
            <div className="bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] w-full lg:w-[300px] min-h-[130px] h-auto flex flex-col items-center justify-evenly rounded-[4px]">
                <span className="text-white text-[22px] font-Inter font-semibold">$200</span>
                <span className="text-gray-300">Referral Earnings</span>
            </div>
            <RefEarningTableContainer />
        </div>
    );
};
