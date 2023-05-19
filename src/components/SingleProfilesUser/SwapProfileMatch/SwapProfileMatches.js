// configuration, ex: react-router
import React from "react";

// Third party packages, ex: redux
import { AiOutlineWarning } from "react-icons/ai";
import { BsCommand } from "react-icons/bs";
import { MdOutlineRecommend } from "react-icons/md";

// components
import { useGetSwapMatchedProfilesQuery } from "../../../Redux/features/userInfo/userApi";
import { CardYouMayLike } from "../../shared/Cards/CardYouMayLike/CardYouMayLike";
import { YouMayLikeSkeletionLoader } from "../../shared/Cards/Loader/YouMayLikeSkeletionLoader";

export const SwapProfileMatches = () => {
    // varible declation
    // hook variables
    // const { data, isLoading, isError, error } = useGetSuggestedUsersQuery();
    const { data: matchedData, isLoading, isError } = useGetSwapMatchedProfilesQuery();
    const { matches } = matchedData || {};
    const { matches: matchedArray } = matches || {};
    console.log(matchedArray);

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
    } else if (!isLoading && isError) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <AiOutlineWarning className="text-[42px] text-gray-400" />
                <p className="mt-[10px] text-[16px] text-center font-Inter font-medium text-gray-500">Authentication failed! Try Login again.</p>
            </div>
        );
    } else if (matchedArray?.length === 0) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[100px]">
                <MdOutlineRecommend className="text-[42px] text-gray-400" />
                <p className="mt-[10px] text-[16px] font-Inter font-medium text-gray-500">No Swap Matched!</p>
            </div>
        );
    } else if (matchedArray?.length > 0) {
        content = (
            <div className="flex flex-col gap-y-[19px]">
                {matchedArray?.slice(0, 4).map(profile => {
                    return <CardYouMayLike key={profile._id} {...{ data: profile }} />;
                })}
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-start items-center mx-1 gap-6 mb-6">
                <BsCommand className="text-[#2E3A59] text-2xl" />
                <h1 className="text-[#333333] text-2xl leading-[34px] font-bold">Swap Profile Matched</h1>
            </div>
            {/* Render Data from content variable */}
            <div>{content}</div>
        </div>
    );
};
