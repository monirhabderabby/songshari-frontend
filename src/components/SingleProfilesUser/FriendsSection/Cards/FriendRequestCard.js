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

export const FriendRequestCard = ({ friend, refetch, responsive }) => {
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

  // dynamic route decision
  let dynamicRoute = "";
  responsive
    ? (dynamicRoute = `/mobileprofile/${friend?._id}`)
    : (dynamicRoute = `/profile/${friend?._id}`);

  return (
    <div className="p-3 md:p-[21px] h-20 md:h-[141px] w-full mx-auto bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[15px] flex justify-between items-center">
      <div className="h-full flex items-center">
        <div
          onClick={() => navigate(dynamicRoute)}
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
              onClick={() => navigate(dynamicRoute)}
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
          className="text-xs px-2 md:text-md special_profile_button"
          onClick={() => acceptHandler(friend?._id)}
        >
          Accept
        </button>
        <button
          className="text-xs px-2 md:text-md special_profile_button_inactive"
          onClick={() => rejectFriendReqeustHandler(friend?._id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};
