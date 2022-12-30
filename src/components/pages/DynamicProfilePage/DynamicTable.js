import React, { useState } from "react";
import "../../../App.css";
import { DynamicActivityPage } from "./DynamicActivityPage";
import { DynamicMatches } from "./DynamicMaches";
import { DynamicProfileInfo } from "./DynamicProfileInfo";

const DynamicTable = ({ data, isLoading }) => {
  const [page, setPage] = useState(2);
  return (
    <div>
      <div className="px-2 md:px-0 mb-4">
        <div className="w-full h-[60px] bg-white mb-[20px] lg:w-[512px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-[4px]">
          <div className="flex justify-center items-center h-full gap-4">
            <button
              className={`font-medium text-[15px] leading-tight ${
                page === 1 ? "text-primary font-bold" : "text-gray-800"
              }`}
              onClick={() => setPage(1)}
            >
              Activity
            </button>
            <button
              className={`font-medium text-[15px] leading-tight ${
                page === 2 ? "text-primary font-bold" : "text-gray-800"
              }`}
              onClick={() => {
                setPage(2);
              }}
            >
              Profile
            </button>
            <button
              className={`font-medium text-[15px] leading-tight ${
                page === 3 ? "text-primary font-bold" : "text-gray-800"
              }`}
              onClick={() => setPage(3)}
            >
              Services{" "}
              <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">
                1
              </sup>
            </button>
            <button
              className={`font-medium text-[15px] leading-tight ${
                page === 4 ? "text-primary font-bold" : "text-gray-800"
              }`}
              onClick={() => setPage(4)}
            >
              Connections{" "}
              <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">
                5
              </sup>
            </button>
            <button
              className={`font-medium text-[15px] leading-tight ${
                page === 5 ? "text-primary font-bold" : "text-gray-800"
              }`}
              onClick={() => setPage(5)}
            >
              Matches{" "}
              <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">
                1
              </sup>
            </button>
          </div>
        </div>
      </div>
      {page === 1 && <DynamicActivityPage />}
      {page === 2 && <DynamicProfileInfo {...{ data, isLoading }} />}
      {page === 5 && <DynamicMatches />}
    </div>
  );
};

export default DynamicTable;
