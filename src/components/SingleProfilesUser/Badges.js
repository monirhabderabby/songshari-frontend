import { motion } from "framer-motion";
import React from "react";
import badgesIcon from "../../assets/images/icons/badges.png";
import { fadeIn } from "../../assets/utilities/Animation/varient";

export const Badges = ({ data, error }) => {
    return (
        <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-[24px] lg:w-full h-[125px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] py-[16px] px-[30px]"
        >
            <div>
                <div className="flex items-center gap-x-[9px]">
                    <img src={badgesIcon} alt="badgesIcon" className="w-6 h-6" />
                    <p className="text-[#000000] text-[22px] leading-[20px] font-semibold font-fira">Badges</p>
                </div>
                {data?.data?.length !== 0 && (
                    <div className="mt-[30px]">
                        <div className="flex items-center gap-x-[16px]">
                            {data?.data?.map(item => {
                                return <img className="w-[38px] h-[38px]" src={item?.badge?.icon} alt="badge" />;
                            })}
                        </div>
                    </div>
                )}
                {error && (
                    <div className="mt-[30px]">
                        <div className="flex text-[20px] font-bold text-yellow-400 items-center gap-x-[16px]">Server error</div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
