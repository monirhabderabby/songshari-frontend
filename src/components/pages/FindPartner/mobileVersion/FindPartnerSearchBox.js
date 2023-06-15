// Configuration
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Third party package
import { useDispatch } from "react-redux";

// Components
import filterIcon from "../../../../assets/images/findPartner/filter.svg";
import { setFindPartnerSearchTerm } from "../../../../Redux/features/filter/findPartnerSlice";

export const FindPartnerSearchBox = () => {
  // hook variable declaration
  const [searchTermState, setSearchTermState] = useState("");
  const dispatch = useDispatch();

  // function declaration
  const handleSearchTerm = () => {
    dispatch(setFindPartnerSearchTerm(searchTermState));
  };
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center sticky top-0 bg-[#F8F8FF] z-20 h-[65px]">
      {/* Search on type */}
      <div>
        <div
          style={{
            border: "2px solid #FFE8F3",
          }}
          className="relative flex items-center max-w-[386px] h-11 shadow-sm rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
        >
          <div
            className="grid place-items-center h-full w-12 text-gray-300"
            onClick={handleSearchTerm}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search user name.."
            onChange={(e) => setSearchTermState(e.target.value)}
            onKeyUp={handleSearchTerm}
          />
        </div>
      </div>
      <button
        className="w-24 h-10 flex justify-center items-center gap-x-[9px] special_profile_button ml-[13px]"
        onClick={() => navigate("/mobile-find-partner/filter-box")}
      >
        <img src={filterIcon} alt="filter" />
        <span>Filter</span>
      </button>
    </div>
  );
};
