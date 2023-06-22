import { motion } from "framer-motion";
import moment from "moment";
import React, { useEffect, useRef } from "react";
import customFunc from "../../../../assets/utilities/customFunc";
export const MessegeLeft = ({ profile, message, index }) => {
    // profile photo decision maker
    const { profilePhotoDecisionMaker } = customFunc;

    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    });
    return (
        <motion.div ref={scrollRef} className={`flex w-full justify-start gap-x-[20px] my-[51px]`}>
            <img className="h-[40px] w-[40px] rounded-full" src={profilePhotoDecisionMaker(profile?.profilePhoto)} alt="profile" />
            <div className="max-w-[60%]">
                <div className="content bg-[#F2F2F2] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] px-[20px] py-[9px] ">
                    <p className="text-[#000000] text-[16px] font-normal">{message?.message}</p>
                </div>
                <p className="text-[#969696] text-[12px] font-normal mt-[13px]">{moment(message?.time).format("LT")}</p>
            </div>
        </motion.div>
    );
};
