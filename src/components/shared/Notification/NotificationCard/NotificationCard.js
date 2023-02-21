import React from "react";

// Third party package
import moment from "moment";
import { AiFillBell } from "react-icons/ai";

const NotificationCard = ({ note }) => {
  return (
    <div>
      <div className="min-h-[60px] lg:min-h-[100px] py-[6px] px-[24px] lg:px-0 flex items-center justify-start border-b-[1px] border-gray-100">
        <div className="bg-gray-200 h-[40px] lg:h-[60px] w-[40px] lg:w-[60px] rounded-full flex justify-center items-center mr-[10px]">
          <AiFillBell />
        </div>
        <div className="flex-1">
          <p className="text-[12px] lg:text-lg font-Inter whitespace-normal">
            {note?.message}
          </p>
          <p className="text-[10px] lg:text-xs text-gray-400 font-Inter font-normal my-[3px] lg:my-0">
            {moment(note?.createdAt).startOf("day").endOf("day").fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
