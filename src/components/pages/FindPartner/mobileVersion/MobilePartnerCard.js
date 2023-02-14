import React from "react";
import { ageCalculator } from "../../../../assets/utilities/AgeCalculation/ageCalculator";

export const MobilePartnerCard = ({ user }) => {
  let name;
  const { firstName, lastName, dateOfBirth, designation, hometown } =
    user || {};

  // user name
  name = firstName + " " + lastName;
  if (name.length > 13) {
    name = name.slice(0, 13) + " ...";
  }

  // profile photo
  let { profilePhoto } = user || {};

  profilePhoto = profilePhoto
    ? profilePhoto
    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  return (
    <div className="h-[187px] w-[153px] bg-white rounded-[15px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)] mx-auto">
      <div
        className="h-[110px] bg-center bg-cover rounded-tr-[15px] rounded-tl-[15px]"
        style={{
          backgroundImage: `url(${profilePhoto})`,
        }}
      ></div>
      <div className="content h-[calc(187px-110px)] w-full px-3">
        <div className="flex items-center gap-x-[12px]">
          <p className="leading-7 text-[#333333] text-[12px] font-bold font-Inter whitespace-nowrap">
            {name}
          </p>
          <p className="text-[12px] leading-7 font-bold font-Inter text-[#E41272]">
            {dateOfBirth ? ageCalculator(dateOfBirth) : ""}
          </p>
        </div>
        <p className="font-normal text-[10px] font-Inter  text-[#333333] h-[20px] flex items-center">
          {designation ? designation : ""}
        </p>
        <p className="font-medium text-[10px] font-Inter  text-[#333333] h-[20px] flex items-center">
          {hometown ? hometown : ""}
        </p>
      </div>
    </div>
  );
};
