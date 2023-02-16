// configuration, ex: react-router
import React from "react";
import { useNavigate } from "react-router";

// Third party packages, ex: redux
import moment from "moment";

// components
import tick from "../../../../assets/images/icons/tick.png";

export const FriendCard = ({ friend }) => {
  const navigate = useNavigate();
  // varible declation
  // js variables
  const name = friend.firstName + " " + friend.lastName;

  return (
    <div className="p-3 md:p-[21px] h-20 md:h-[141px] w-full mx-auto bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[15px] flex justify-between items-center">
      <div className="h-full flex items-center">
        <div
          onClick={() => navigate(`/profile/${friend?._id}`)}
          className="w-[40px] h-[40px] md:w-[83px] md:h-[100px] rounded-full md:rounded-[15px] mr-2 md:mr-[21px] bg-center bg-cover cursor-pointer"
          style={{
            backgroundImage: `url(${
              friend?.profilePhoto
                ? friend?.profilePhoto
                : "https://placeimg.com/192/192/people"
            })`,
          }}
        ></div>
        <div>
          <div className="flex items-center">
            <h1
              onClick={() => navigate(`/profile/${friend?._id}`)}
              className="cursor-pointer text-sm md:text-[20px] leading-5 md:leading-[30px] text-[#333333] font-bold mr-[4px] whitespace-nowrap"
            >
              {name}
            </h1>
            <img src={tick} alt="Not Available" />
          </div>
          <span className="text-xs md:text-[16px] leading-4 md:leading-[26px] text-[#333333] font-normal">
            {moment(friend?.date).fromNow() || ""}
          </span>
        </div>
      </div>
      <button
        disabled
        className={`text-white text-sm md:text-[17px] transition-[0.3s] border-[1px] h-8 md:h-[40px] w-20 md:w-[133px] border-[rgba(0,0,0,0.15)] rounded-full bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] duration-300`}
      >
        Connected
      </button>
    </div>
  );
};
