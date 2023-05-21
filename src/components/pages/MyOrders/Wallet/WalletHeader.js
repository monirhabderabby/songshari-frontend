import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useGetMyWalletQuery, useGetReferralPointQuery } from "../../../../Redux/features/wallet/walletApi";
import WalletAddPopup from "./walletAddPopup";

export const WalletHeader = () => {
    const [open, setOpen] = useState(false);
    const { data } = useGetMyWalletQuery();
    const { data: referralData } = useGetReferralPointQuery();
    return (
        <div className="w-full flex justify-evenly gap-x-[10px]">
            <div className="bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] w-full lg:w-[300px] min-h-[130px] h-auto flex flex-col items-center justify-evenly rounded-[4px]">
                <span className="text-white text-[22px] font-Inter font-semibold">{data?.data?.point}</span>
                <span className="text-gray-300">Wallet Balance</span>
            </div>
            <div
                onClick={() => setOpen(true)}
                className="bg-[rgba(37,188,241,0.15)] w-full lg:w-[300px] min-h-[130px] h-auto flex flex-col items-center justify-evenly rounded-[4px] hover:shadow-md duration-300 cursor-pointer"
            >
                <div className="h-[50px] w-[50px] bg-orange-400 flex justify-center items-center rounded-full">
                    <AiOutlinePlus className="text-white text-[22px]" />
                </div>
                <span className="text-red-500 font-semibold">Wallet Balance</span>
            </div>
            {open && <WalletAddPopup {...{ setOpen }} />}
        </div>
    );
};
