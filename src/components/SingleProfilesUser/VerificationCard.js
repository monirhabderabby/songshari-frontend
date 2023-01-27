// configuration
import React from "react";
import { useNavigate } from "react-router";

// Third party packages
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { MdKeyboardArrowRight } from "react-icons/md";

// components
import verificationIcon from "../../assets/images/icons/verification.png";
import { useGetPercentageOfProfileCompleteQuery } from "../../Redux/features/userInfo/userApi";

export const VerificationCard = () => {
    // hook variables
    const navigate = useNavigate();
    const { data } = useGetPercentageOfProfileCompleteQuery();

    let percentage;
    if (data) {
        percentage = `${data?.data?.percentage}`;
    }

    return (
        <div className="mt-[24px] lg:w-full h-[125px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] py-[16px] px-[20px]">
            <section className="flex flex-col   justify-center h-full w-full">
                <div className="flex items-center gap-x-[9px]">
                    <img src={verificationIcon} alt="" />
                    <h1 className="text-[#000000] text-[24px] leading-[20px] font-semibold font-fira">Verification Status</h1>
                </div>
                <Box sx={{ width: "80%" }} className="my-[15px]">
                    <div className="w-full flex justify-between text-[#000000] text-[14px] font-Poppins ">
                        <p className="font-light">Progress</p>
                        <p>{percentage}%</p>
                    </div>
                    <LinearProgress variant="determinate" value={percentage} />
                </Box>
                <div className="flex items-center">
                    <button className="text-[#942DD9] text-[16px] font-normal font-fira leading-[20px]" onClick={() => navigate("/stepper")}>
                        Complete Verification
                    </button>
                    <MdKeyboardArrowRight className="text-[#942DD9]" />
                </div>
            </section>
        </div>
    );
};
