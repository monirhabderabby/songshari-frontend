// normal import
import React, { useState } from "react";

// 3rd party package
// import { FiUsers } from "react-icons/fi";

// components import
import { MatchesLoader } from "../../shared/Cards/Loader/Matches/MatchesLoader";
import MatchersModalForm from "../MatchPreference/MatchersModalForm";

// css files
import useDocumentTitle from "../../../assets/utilities/useDocumentTitle";
import { useGetMatchPreferencesQuery } from "../../../Redux/features/MatchesPreferences/matchesPreferenceApi";
import { MatchesDesktopCard } from "../../shared/Cards/Matches/MatchesDesktopCard";
import "./Matches.css";

export const Matches = () => {
    // hooks variables
    const { data, isLoading, error } = useGetMatchPreferencesQuery();
    const [mathchesModalOpen, setMatchesModalOpen] = useState(false);

    // page title
    useDocumentTitle("Shongshari | Matches");

    let content = null;

    console.log(error);

    if (isLoading) {
        content = (
            <div className="flex justify-center gap-4 w-full">
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
            </div>
        );
    } else if (!isLoading && data?.matchedData?.length === 0) {
        content = (
            <div className="w-full h-[60vh] flex justify-center items-center">
                <p>Not Matches Found!</p>
            </div>
        );
    } else if (!isLoading && data?.matchedData.length > 0) {
        content = (
            <div className="w-full grid grid-cols-2 gap-y-4 gap-2">
                {data?.matchedData?.map((info, index) => {
                    return <MatchesDesktopCard key={index} {...{ info }} />;
                })}
            </div>
        );
    }

    return (
        <div className="w-full lg:max-w-[521px] mx-auto">
            <button
                className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white p-2 rounded mb-3"
                onClick={() => setMatchesModalOpen(true)}
            >
                Matches Modal
            </button>
            {content}
            <MatchersModalForm {...{ mathchesModalOpen, setMatchesModalOpen }} />
        </div>
    );
};
