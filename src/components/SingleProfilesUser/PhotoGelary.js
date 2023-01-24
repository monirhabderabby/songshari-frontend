// configuration
import React from "react";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";
import { FaUserAltSlash } from "react-icons/fa";
import { useSelector } from "react-redux";

// components
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router";
import liveLinkGenerator from "../../assets/utilities/liveLink/liveLinkGenerator";
import getCookie from "../../Helper/cookies/getCookie";

// css files
import "../../assets/css/photogelary.css";

const PhotoGelary = ({ isLoading, error }) => {
  // hook variable declaration
  const photos = useSelector(
    (state) => state?.persistedReducer?.userInfo?.photos
  );
  const navigate = useNavigate();

  // get id of logged in user
  const token = getCookie("token");
  const { _id } = decodeToken(token) || {};

  // js variable declaration
  const loaderArr = [1, 2, 3, 4, 5, 6];

  // make decision about content of gallary
  let content;
  if (isLoading) {
    content = (
      <div className="h-[calc(333px-94px)] w-full grid grid-cols-3 mt-[15px]">
        {loaderArr.map((p) => {
          return (
            <div
              key={p}
              class="h-[101px] w-[86px] bg-gray-200 rounded-[15px] animate-pulse"
            ></div>
          );
        })}
      </div>
    );
  } else if (!isLoading && error) {
    content = (
      <div className="h-[calc(333px-94px)] w-full flex flex-col justify-center items-center">
        <AiOutlineWarning className="text-[20px] text-gray-400" />
        <p className="text-[18px] text-gray-400 tracking-wider">Server Error</p>
      </div>
    );
  } else if (photos?.length === 0) {
    content = (
      <div className="h-[calc(333px-94px)] w-full flex flex-col justify-center items-center">
        <FaUserAltSlash className="text-[20px] text-gray-400" />
        <p className="text-[18px] text-gray-400 tracking-wider">
          No photos found
        </p>
      </div>
    );
  } else if (photos?.length > 0) {
    content = (
      <div className="h-[calc(333px-94px)] w-full grid grid-cols-3 mt-[15px]">
        {photos?.slice(0, 6).map((photo, index) => {
          return (
            <div
              key={index}
              className="h-[101px] w-[86px] bg-center bg-cover duration-300 rounded-[15px]"
              style={{ backgroundImage: `url(${liveLinkGenerator(photo)})` }}
            ></div>
          );
        })}
      </div>
    );
  }

  // make decision about gallary card header
  let headerContent;
  if (isLoading) {
    headerContent = (
      <div className="h-[22px] w-[130px] bg-gray-200 rounded-[6px] animate-pulse"></div>
    );
  } else if (!isLoading && error) {
    headerContent = (
      <div className="text-[#333333] font-semibold text-[24px] font-fira ml-[7px]">
        Something went wrong
      </div>
    );
  } else if (!isLoading && photos?.length === 0) {
    headerContent = (
      <div className="text-[#333333] font-semibold text-[24px] font-fira ml-[7px]">
        No photos
      </div>
    );
  } else if (!isLoading && photos?.length > 0) {
    headerContent = (
      <div className="text-[#333333] font-semibold text-[24px] font-fira ml-[7px]">
        photos ({photos?.length})
      </div>
    );
  }

  return (
    <>
      <div className="w-full mt-[24px]">
        <div className="w-full h-[333px] rounded-[10px] bg-white px-[30px] py-[26px] shadow-[0px_10px_5px_rgba(119,123,146,0.02)]">
          <div className="flex items-center">
            <div>
              <svg
                color="#FF1D8E"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </div>
            {headerContent}
          </div>
          {content}
        </div>
      </div>
      {photos?.length > 6 && (
        <div className="w-full mt-[24px] flex justify-center">
          <button
            className="w-[215px] h-[38px] bg-[linear-gradient(309deg,#F664BC_0%,_#FB7BBC_35%,_#FF92BB_100%)] rounded-[50px] flex items-center justify-center text-white text-[18px] font-normal font-Inter"
            onClick={() => navigate(`/gallery/${_id}`)}
          >
            View All Photos
          </button>
        </div>
      )}
    </>
  );
};

export default PhotoGelary;
