// configuration
import React from "react";
import { Link } from "react-router-dom";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";

// components
import { MobileProfileCardSkeletonLoader } from "../../../components/shared/Cards/Loader/MobileProfileCardSkeletonLoader";
import { MatchesMobileCard } from "../../../components/shared/Cards/Matches/MatchesMobileCard";
import "../../../components/SingleProfilesUser/profileSection/Matches.css";
import { useGetMatchPreferencesQuery } from "../../../Redux/features/MatchesPreferences/matchesPreferenceApi";
import { BottomNav } from "./BottomNav";

export const MatchesMov = () => {
    // hook variable declaration
    const { data, isLoading, error } = useGetMatchPreferencesQuery();

    if (isLoading) {
        return <MobileProfileCardSkeletonLoader></MobileProfileCardSkeletonLoader>;
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
        <div className="block lg:hidden">
            <div className="mt-5">
                <div className="grid grid-cols-3">
                    <Link to="/setting">
                        <i className="fa-solid fa-chevron-left ml-8 mt-3"></i>
                    </Link>
                    <h1 className="mt-2 mb-5 text-center">Match Partner</h1>
                    <div></div>
                </div>
            </div>
            <div className="ml-4 mr-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-4 md:px-8">
                    {data.matchedData.map((info, index) => {
                        return <MatchesMobileCard key={index} {...{ info }} />;
                    })}
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <BottomNav></BottomNav>
        </div>
    );
};
