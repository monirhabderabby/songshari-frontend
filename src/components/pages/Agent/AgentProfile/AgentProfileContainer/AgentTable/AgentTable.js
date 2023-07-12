// configuration
import React, { useState } from "react";

// components
import { Friends } from "../../../../../SingleProfilesUser/FriendsSection/Friends";
import { Profile } from "../../../../../SingleProfilesUser/profileSection/Profile";

// css files
import "../../../../../../App.css";

const LawyerTable = ({ data, isLoading }) => {
  const [page, setPage] = useState(2);
  return (
    <div>
      <div className="mb-4 w-full">
        <div className="w-full h-[60px] lg:max-w-[512px] mx-auto bg-white mb-[20px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-[4px]">
          <div className="w-full h-full flex justify-between">
            <button
              className={`flex-1 text-gray-800 rounded-tl-[4px] rounded-bl-[4px] font-medium text-[15px] duration-200 ${
                page === 1 &&
                "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white font-bold"
              }`}
              onClick={() => setPage(1)}
            >
              Info
            </button>
            <button
              className={`flex-1 text-gray-800 rounded-tr-[4px] rounded-br-[4px] font-medium duration-200 text-[15px] ${
                page === 2 &&
                "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white font-bold"
              }`}
              onClick={() => setPage(2)}
            >
              Connection
            </button>
          </div>
        </div>
      </div>

      {/* table 1 */}
      {page === 1 && <Profile {...{ data, isLoading }} />}
      {page === 2 && <Friends {...{ data, isLoading }} />}
    </div>
  );
};

export default LawyerTable;
