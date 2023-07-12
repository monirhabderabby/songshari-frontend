// configuration
import React, { useState } from "react";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";

// components
import { MobileProfileCardSkeletonLoader } from "../../../components/shared/Cards/Loader/MobileProfileCardSkeletonLoader";
import { MatchesMobileCard } from "../../../components/shared/Cards/Matches/MatchesMobileCard";
import { MobileBackButton } from "../../../components/shared/Components/MobileBackButton";
import MatchersModalForm from "../../../components/SingleProfilesUser/MatchPreference/MatchersModalForm";
import "../../../components/SingleProfilesUser/profileSection/Matches.css";
import { useGetMatchPreferencesQuery } from "../../../Redux/features/MatchesPreferences/matchesPreferenceApi";
import { BottomNav } from "./BottomNav";

export const MatchesMov = () => {
  // hook variable declaration
  const { data, isLoading, error } = useGetMatchPreferencesQuery();
  const [mathchesModalOpen, setMatchesModalOpen] = useState(false);

  let content;

  if (isLoading) {
    return <MobileProfileCardSkeletonLoader></MobileProfileCardSkeletonLoader>;
  } else if (error) {
    content = (
      <div className="min-h-[70vh] w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-40">
          <AiOutlineWarning className="text-[48px] text-gray-400" />
          <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
            Server Error
          </p>
        </div>
      </div>
    );
  } else if (data) {
    content = (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-4 md:px-8">
        {data.matchedData.map((info, index) => {
          return <MatchesMobileCard key={index} {...{ info }} />;
        })}
      </div>
    );
  }

  return (
    <div className="max-w-[1024px] mx-auto">
      <MobileBackButton name="Matches" />
      <button
        className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white p-2 rounded mb-3 ml-3 my-4"
        onClick={() => setMatchesModalOpen(true)}
      >
        Update matches Info
      </button>
      <div className="ml-4 mr-4">{content}</div>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
      <MatchersModalForm
        {...{ fromDevice: "mobile", mathchesModalOpen, setMatchesModalOpen }}
      />
    </div>
  );
};
