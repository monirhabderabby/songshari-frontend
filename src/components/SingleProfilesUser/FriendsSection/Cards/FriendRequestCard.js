// configuration, ex: react-router
import React from "react";
import { useNavigate } from "react-router";

// Third party packages, ex: redux
import moment from "moment";

// components
import tick from "../../../../assets/images/icons/tick.png";
import {
  useAcceptFriendRequestMutation,
  useRejectFriendReqeustMutation,
} from "../../../../Redux/features/connections/connectionApi";

export const FriendRequestCard = ({ friend, refetch }) => {
  const navigate = useNavigate();
  // varible declation
  // hook variables
  const [acceptFriendRequest] = useAcceptFriendRequestMutation();
  const [rejectFriendReqeust] = useRejectFriendReqeustMutation();

  // js variables
  const name = friend?.firstName + " " + friend?.lastName;

  // function declation
  const acceptHandler = async (id) => {
    await acceptFriendRequest({ id });
  };

  const rejectFriendReqeustHandler = async (id) => {
    await rejectFriendReqeust({ id });
  };

  return (
    <div className="p-3 md:p-[21px] h-20 md:h-[141px] w-full mx-auto bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[15px] flex justify-between items-center">
      <div className="h-full flex items-center">
        <div
          onClick={() => navigate(`/profile/${friend?._id}`)}
          className="w-10 h-10 md:w-[100px] md:h-[100px] rounded-full mr-2 md:mr-[21px] bg-center bg-cover cursor-pointer"
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
              className="text-sm md:text-[20px] leading-5 md:leading-[30px] text-[#333333] font-bold mr-[4px] cursor-pointer whitespace-nowrap"
            >
              {name || ""}
            </h1>
            <img src={tick} alt="icon" />
          </div>
          <span className="text-xs md:text-[16px] leading-4 md:leading-[26px] text-[#333333] font-normal">
            {moment(friend?.date).fromNow() || ""}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 md:gap-y-[14px]">
        <button
          className="h-7 md:h-[42px] w-20 md:w-[111px] text-sm md:text-[17px] font-normal font-Inter cursor-pointer bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_20%,rgb(148,45,217)_100%)]  rounded-[50px] text-white"
          onClick={() => acceptHandler(friend?._id)}
        >
          Accept
        </button>
        <button
          className="h-7 md:h-[42px] w-20 md:w-[111px] border-[1px] border-[rgba(0,0,0,0.15)] hover:border-[rgba(0,0,0,0.11)] cursor-pointer rounded-[50px] text-[#E41272] text-sm md:text-[17px] font-normal font-Inter"
          onClick={() => rejectFriendReqeustHandler(friend?._id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};
