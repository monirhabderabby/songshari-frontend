// Configuration
import React from "react";
import { useNavigate } from "react-router";

// Third party package
import { MdOutlineArrowBackIos } from "react-icons/md";

// Components
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import NotificationCard from "../../shared/Notification/NotificationCard/NotificationCard";
import { AiFillBell } from "react-icons/ai";
import { useGetUsersAllNotificationQuery } from "../../../Redux/features/userInfo/userApi";

export const NotificationForMobile = () => {
  const navigate = useNavigate();
  const { data } = useGetUsersAllNotificationQuery({
    page: "",
    limit: "",
  });

  let content;
  if (data?.data?.notifications?.length === 0) {
    content = (
      <div className="flex flex-col justify-center items-center pt-20">
        <div className="bg-gray-200 h-[60px] w-[60px] rounded-full flex justify-center items-center mr-[10px]">
          <AiFillBell className="text-3xl" />
        </div>
        <p className="mt-4 text-lg font-Inter font-medium text-gray-500">
          No Notification Found!
        </p>
      </div>
    );
  }
  if (data?.data?.notifications?.length >= 1) {
    content = (
      <div className="w-full">
        {data?.data?.notifications?.map((note) => (
          <NotificationCard key={note?._id} {...{ note }} />
        ))}
      </div>
    );
  }

  return (
    <div className=" min-h-screen w-full">
      <div className="h-[55px] sticky top-0 w-full flex items-center justify-center bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white shadow-xl">
        <div
          className="absolute top-[18px] left-[12px] text-white cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <MdOutlineArrowBackIos className="h-[24px] w-[24px]" />
        </div>
        <p className="text-center">Notification</p>
      </div>
      <div>{content}</div>
      <div className="h-16"></div>
      <BottomNav />
    </div>
  );
};
