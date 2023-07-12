// configuration
import React from "react";
import { useNavigate } from "react-router";

// Third party packages
import { MdKeyboardArrowRight } from "react-icons/md";

// components
import verificationIcon from "../../assets/images/icons/verification.png";

export const ResponsiveVerificationCard = () => {
    // hook variables
    const navigate = useNavigate();

    return (
        <div className="mt-[100px] w-[500px] ml-[90px] h-[125px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] py-[16px] px-[20px]">
            <section className="flex flex-col   justify-center h-full w-full">
                <div className="flex items-center gap-x-[9px] mb-4">
                    <img src={verificationIcon} alt="" />
                    <h1 className="text-[#000000] text-[35px] leading-[20px] font-semibold font-fira">Verification Status</h1>
                </div>
                <div className="flex items-center gap-x-[9px]">
                    <div className="w-[200px] rounded-[6px] bg-[#D9D9D9] h-[9px]">
                        <div className="bg-[#E41272] h-full w-[80%] rounded-[6px]"></div>
                    </div>
                    <p>90%</p>
                </div>
                <div className="flex items-center">
                    <button className="text-[#942DD9] text-[20px] font-normal font-fira leading-[20px]" onClick={() => navigate("/stepper")}>
                        Complete Verification
                    </button>
                    <MdKeyboardArrowRight className="text-[#942DD9]" />
                </div>
            </section>
        </div>
    );
};
