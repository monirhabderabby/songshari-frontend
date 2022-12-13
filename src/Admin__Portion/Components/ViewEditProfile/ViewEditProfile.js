import React from "react";
import { Input } from "antd";
import { BiUserCircle } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdEdit } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import userImg from "../../../assets/images/AdminRuffImage/adminRuffImg.jpg";

const ViewEditProfile = () => {
  const usersInfo = [
    { id: 1, name: "Abdul Khan", userType: "Free User", img: userImg },
    { id: 2, name: "Abdul Khan", userType: "Free User", img: userImg },
    { id: 3, name: "Abdul Khan", userType: "Free User", img: userImg },
    { id: 4, name: "Abdul Khan", userType: "Free User", img: userImg },
    { id: 5, name: "Abdul Khan", userType: "Free User", img: userImg },
    { id: 6, name: "Abdul Khan", userType: "Free User", img: userImg },
  ];
  return (
    <div className="max-w-4xl bg-[#FAFBFF]">
      <h1 className="text-[40px] leading-[55px] font-bold text-[#1D252D] text-center mb-12">
        View/Edit User Profile
      </h1>
      <div>
        <Input
          className="max-w-lg mx-auto border-2 border-[#FFE8F3] flex py-2 px-4 mb-16"
          style={{ boxShadow: "0px 4px 4px rgba(62, 73, 84, 0.04)" }}
          placeholder="Search user name"
          prefix={<FiSearch className="text-2xl mr-4" />}
        />
      </div>
      <div className="grid grid-cols-2 gap-8 mx-8">
        {usersInfo.map((user) => (
          <div
            key={user.id}
            className="rounded-[20px] w-96 py-8 shadow-md shadow-[rgba(62, 73, 84, 0.04)]"
            // style={{ boxShadow: "2px 0px 4px 4px rgba(62, 73, 84, 0.04)" }}
          >
            <img
              className="w-36 h-36 rounded-full mx-auto"
              src={user.img}
              alt=""
            />
            <h1 className="mt-3 text-xl leading-8 font-medium text-center">
              {user.name}
            </h1>
            <p className="text-[#A0A0A0] text-sm leading-5 text-center">
              {user.userType}
            </p>
            <div className="text-[#E41272] text-2xl flex justify-center items-center gap-6 mt-9 mb-3">
              <div className="p-4 bg-[#FFDFF4] rounded-full">
                <BiUserCircle />
              </div>
              <div className="p-4 bg-[#FFDFF4] rounded-full">
                <HiChatBubbleBottomCenterText />
              </div>
              <div className="p-4 bg-[#FFDFF4] rounded-full">
                <MdEdit />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around items-center my-12">
        <p className="leading-6 font-medium">Showing 8 from 160 data</p>
        <Pagination
          className="bg-[#E3E4EB] px-[1px] py-[3px] rounded-md text-white"
          count={20}
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default ViewEditProfile;
