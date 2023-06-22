// configuration
import React from "react";
import { useNavigate } from "react-router";

// Third party packages
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { fadeIn } from "../../assets/utilities/Animation/varient";

// components
import verificationIcon from "../../assets/images/icons/verification.png";
import { useGetPercentageOfProfileCompleteQuery } from "../../Redux/features/userInfo/userApi";

export const VerificationCard = ({ title, mt, height, responsive }) => {
    // hook variables
    const navigate = useNavigate();
    const { data } = useGetPercentageOfProfileCompleteQuery();

    let percentage = 0;
    if (data) {
        percentage = data?.data?.percentage;
    }

    // decision for dynamic route
    let dynamicRoute = "";
    if (responsive) {
        dynamicRoute = "/stepperMov";
    } else {
        dynamicRoute = "/stepper";
    }
    return (
        <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={`mt-[${mt}] lg:w-full h-[${height}] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] py-[16px] px-[30px]`}
        >
            <section className="flex flex-col   justify-center h-full w-full">
                {title && (
                    <div className="flex items-center gap-x-[9px]">
                        <img src={verificationIcon} alt="verificationIcon" className="w-6 h-6" />
                        <h1 className="text-[#000000] text-[22px] leading-[20px] font-semibold font-fira">Verification Status</h1>
                    </div>
                )}
                <Box sx={{ width: "100%" }} className="my-[15px]">
                    <div className="w-full flex justify-between text-[#000000] text-[14px] font-Poppins ">
                        <p className="font-light">Progress</p>
                        <p>{percentage}%</p>
                    </div>
                    <LinearProgress variant="determinate" value={percentage} />
                </Box>
                <div className="flex items-center">
                    <button className="text-[#942DD9] text-[16px] font-normal font-fira leading-[20px]" onClick={() => navigate(dynamicRoute)}>
                        Complete Verification
                    </button>
                    <MdKeyboardArrowRight className="text-[#942DD9]" />
                </div>
            </section>
        </motion.div>
    );
};
