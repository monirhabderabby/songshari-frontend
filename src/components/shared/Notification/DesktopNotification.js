import React from "react";

// third party package
import { AiFillBell } from "react-icons/ai";

// components
import { useGetUsersAllNotificationQuery } from "../../../Redux/features/userInfo/userApi";
import CustomHeader from "../CustomHeader/CustomHeader";
import NotificationCard from "./NotificationCard/NotificationCard";

export const DesktopNotification = () => {
  const { data, error } = useGetUsersAllNotificationQuery({
    page: "",
    limit: "",
  });
  console.log(data);
  console.log(error);

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
    <div>
      <CustomHeader title="Notification" />
      <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        {content}
      </div>
      <div className="h-12"></div>
    </div>
  );
};
