import React, { useEffect, useRef } from "react";
import moment from "moment";
import customFunc from "../../../../assets/utilities/customFunc";
export const MessegeRight = ({ profile, message }) => {
  // profile photo decision maker
  const { profilePhotoDecisionMaker } = customFunc;

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollIntoView({ behaviour: "smooth" });
  });
  return (
    <div
      ref={scrollRef}
      className="flex w-full justify-end gap-x-[20px] my-[51px]"
    >
      <div className="flex flex-col flex-wrap-reverse">
        <div className="content bg-[#A32BCA] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] px-[20px] py-[9px] w-auto">
          <p className="text-white text-[16px] font-normal">
            {message?.message}
          </p>
        </div>
        <p className="text-[#969696] text-[12px] text-right font-normal mt-[13px]">
          {moment(message?.time).format("LT")}
        </p>
      </div>
      <img
        className="h-[40px] w-[40px] mt-1 rounded-full"
        src={profilePhotoDecisionMaker(profile?.profilePhoto)}
        alt="profile"
      />
    </div>
  );
};
