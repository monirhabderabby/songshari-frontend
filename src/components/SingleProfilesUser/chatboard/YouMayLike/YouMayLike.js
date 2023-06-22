// configuration, ex: react-router
import React from "react";

// Third party packages, ex: redux
import { motion } from "framer-motion";
import { AiOutlineWarning } from "react-icons/ai";
import { BsCommand } from "react-icons/bs";
import { MdOutlineRecommend } from "react-icons/md";

// components
import { useGetSuggestedUsersQuery } from "../../../../Redux/features/AllRecentData/recentApi";
import { CardYouMayLike } from "../../../shared/Cards/CardYouMayLike/CardYouMayLike";
import { YouMayLikeSkeletionLoader } from "../../../shared/Cards/Loader/YouMayLikeSkeletionLoader";

export const YouMayLike = () => {
    // varible declation
    // hook variables
    const { data, isLoading, isError, error } = useGetSuggestedUsersQuery();

    // js variables
    let content = null;

    if (isLoading) {
        content = (
            <div className="w-full flex flex-col gap-y-[20px]">
                <YouMayLikeSkeletionLoader />
                <YouMayLikeSkeletionLoader />
                <YouMayLikeSkeletionLoader />
            </div>
        );
    } else if (!isLoading && isError && error?.data?.message?.includes("Cannot check authentication")) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <AiOutlineWarning className="text-[42px] text-gray-400" />
                <p className="mt-[10px] text-[16px] text-center font-Inter font-medium text-gray-500">Authentication failed! Try Login again.</p>
            </div>
        );
    } else if (!isLoading && error?.status === "FETCH_ERROR") {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <AiOutlineWarning className="text-[42px] text-gray-400" />
                <p className="mt-[10px] text-[16px] font-Inter font-medium text-gray-500">server Error</p>
            </div>
        );
    } else if (data?.data?.suggestion?.length === 0) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[100px]">
                <MdOutlineRecommend className="text-[42px] text-gray-400" />
                <p className="mt-[10px] text-[16px] font-Inter font-medium text-gray-500">No Suggestion Found!</p>
            </div>
        );
    } else if (data?.data?.suggestion?.length > 0) {
        content = (
            <div className="flex flex-col gap-y-[23px]">
                {data?.data?.suggestion?.slice(0, 4).map((profile, i) => {
                    return (
                        <motion.div
                            key={profile._id}
                            initial={{
                                opacity: 0,
                                translateX: i % 2 === 0 ? -50 : 50,
                                translateY: -50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.3 }}
                        >
                            <CardYouMayLike {...{ data: profile }} />
                        </motion.div>
                    );
                })}
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-start items-center mx-1 gap-6 mb-6">
                <BsCommand className="text-[#2E3A59] text-2xl" />
                <h1 className="text-[#333333] text-2xl leading-[34px] font-bold">You May Like</h1>
            </div>
            {/* Render Data from content variable */}
            <div>{content}</div>
        </div>
    );
};
