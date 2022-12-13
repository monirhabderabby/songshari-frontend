import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import verificationIcon from "../../assets/images/icons/verification.png";

export const VerificationCard = () => {
    return (
        <div className="mt-[24px] lg:w-[360px] h-[125px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] py-[16px] px-[20px]">
            <section className="flex flex-col   justify-center h-full w-full">
                <div className="flex items-center gap-x-[9px]">
                    <img src={verificationIcon} alt="" />
                    <h1 className="text-[#000000] text-[24px] leading-[20px] font-semibold font-fira">Verification Status</h1>
                </div>
                <div className="flex items-center gap-x-[9px]">
                    <div className="w-[153px] rounded-[6px] bg-[#D9D9D9] h-[9px]">
                        <div className="bg-[#E41272] h-full w-[80%] rounded-[6px]"></div>
                    </div>
                    <p>90%</p>
                </div>
                <div className="flex items-center">
                    <p className="text-[#942DD9] text-[16px] font-normal font-fira leading-[20px]">Complete Verification</p>
                    <MdKeyboardArrowRight className="text-[#942DD9]" />
                </div>
            </section>
        </div>
    );
};
