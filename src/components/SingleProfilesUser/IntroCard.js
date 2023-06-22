// configuration
import React from "react";

//third party packages
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/utilities/Animation/varient";

// components
import { AiOutlineWarning } from "react-icons/ai";
import introIcon from "../../assets/images/icons/IntroIcon.png";
import VarientAnimation from "../../assets/utilities/Animation/VarientAnimation";

export const IntroCard = ({ data, isLoading, error }) => {
    // js variables
    const loadingLineNumber = [1, 2, 3, 4, 5, 6, 7, 8];
    const aboutYou = data?.aboutYou;
    let intro = null;

    if (aboutYou?.length < 752) {
        intro = aboutYou;
    } else if (aboutYou?.length > 752) {
        intro = aboutYou?.slice(0, 752);
    } else if (!aboutYou) {
        intro = <div className="h-[calc(356px-56px)] flex items-center justify-center text-gray-400">No Intro Added</div>;
    }

    if (isLoading) {
        intro = (
            <motion.div
                variants={fadeIn("right", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="grid grid-cols-1 gap-y-[11px]"
            >
                {loadingLineNumber?.map(num => (
                    <div key={num} className="h-[11px] w-full bg-gray-200 animate-pulse rounded-[4px]"></div>
                ))}
            </motion.div>
        );
    }
    if (!isLoading && error && error?.data?.message.includes("Cannot check authentication")) {
        intro = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Authentication failed! Try again.</p>
            </div>
        );
    } else if (!isLoading && error) {
        intro = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">server Error</p>
            </div>
        );
    }

    return (
        <VarientAnimation direction="right" delay={0.8}>
            <div className="mt-[24px] lg:w-full h-[356px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] p-[24px]">
                <div className="flex items-center gap-x-[9px]">
                    <img src={introIcon} alt="" />
                    <p className="text-[#000000] text-[24px] leading-[20px] font-semibold font-fira">Intro</p>
                </div>
                {/* content will be  here */}
                <div className="my-[12px] line-clamp-10 ">{intro}</div>
            </div>
        </VarientAnimation>
    );
};
