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
    <div className="p-[21px] h-[141px] w-full mx-auto bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[15px] flex justify-between items-center">
      <div className="h-full flex items-center">
        <div
          onClick={() => navigate(`/profile/${friend?._id}`)}
          className="w-[100px] h-[100px] rounded-full mr-[21px] bg-center bg-cover cursor-pointer"
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
              className="text-[20px] leading-[30px] text-[#333333] font-bold mr-[4px] cursor-pointer"
            >
              {name || "Not provided"}
            </h1>
            <img src={tick} alt="icon" />
          </div>
          <span className="text-[16px] leading-[26px] text-[#333333] font-normal">
            {moment(friend?.date).fromNow() || "No Data Found"}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-[14px]">
        <button
          className="h-[42px] w-[111px] text-[17px] font-normal font-Inter cursor-pointer bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_20%,rgb(148,45,217)_100%)]  rounded-[50px] text-white"
          onClick={() => acceptHandler(friend?._id)}
        >
          Accept
        </button>
        <button
          className="h-[42px] w-[111px] border-[1px] border-[rgba(0,0,0,0.15)] hover:border-[rgba(0,0,0,0.11)] cursor-pointer rounded-[50px] text-[#E41272] text-[17px] font-normal font-Inter"
          onClick={() => rejectFriendReqeustHandler(friend?._id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};
