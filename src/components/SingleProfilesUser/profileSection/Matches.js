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
import { useEffect } from "react";

export const Matches = ({ setMatchesCount }) => {
  // hooks variables
  const { data, isLoading } = useGetMatchPreferencesQuery();
  const [mathchesModalOpen, setMatchesModalOpen] = useState(false);

  // page title
  useDocumentTitle("Shongshari | Matches");

  let content = null;

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

  useEffect(() => {
    if (data) {
      setMatchesCount(data?.matchedData?.length);
    }
  }, [setMatchesCount, data]);

  return (
    <div className="w-full lg:max-w-[521px] mx-auto">
      <div className="w-full flex items-center justify-center">
      <button
        className="special_profile_button"
        onClick={() => setMatchesModalOpen(true)}
      >
        Matches Modal
      </button>
      </div>
      {content}
      <MatchersModalForm {...{ mathchesModalOpen, setMatchesModalOpen }} />
    </div>
  );
};
