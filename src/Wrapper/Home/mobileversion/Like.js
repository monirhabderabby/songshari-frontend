import React from "react";

// configuration

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";

// components
import { YouMayLikeSkeletionLoader } from "../../../components/shared/Cards/Loader/YouMayLikeSkeletionLoader";
import { MobileBackButton } from "../../../components/shared/Components/MobileBackButton";
import { useGetSuggestedUsersQuery } from "../../../Redux/features/AllRecentData/recentApi";
import { BottomNav } from "./BottomNav";
import { MayLikeSingle } from "./MayLikeSingle";

export const Like = () => {
    // fetching
    const { data, error, isLoading } = useGetSuggestedUsersQuery();

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center mt-40">
                <YouMayLikeSkeletionLoader></YouMayLikeSkeletionLoader>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center mt-40">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Server Error</p>
            </div>
        );
    }

    return (
        <div className="bg-[#F8F8FF] max-w-[1024px] mx-auto">
            <div className="bg-white sticky top-0 w-full">
                <MobileBackButton name="You May Like" />
            </div>
            {/* ----- You may like ----- */}
            <div className="px-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-y-8 md:px-10">
                    {data?.data?.suggestion.map(profile => {
                        return <MayLikeSingle key={profile._id} {...{ data: profile }} />;
                    })}
                </div>
            </div>
            <div className="h-20"></div>
            <BottomNav></BottomNav>
        </div>
    );
};
