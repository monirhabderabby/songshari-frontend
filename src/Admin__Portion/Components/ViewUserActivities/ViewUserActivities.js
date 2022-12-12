import React from "react";
import { Input } from "antd";
import { FiSearch } from "react-icons/fi";
import Pagination from "@mui/material/Pagination";
import userImg from "../../../assets/images/AdminRuffImage/adminRuffImg.jpg";
import { useState } from "react";
import ActivitiesTable from "./ActivitiesTable";

const ViewUserActivities = () => {
  const [selected, setSelected] = useState();
  const usersInfos = [
    {
      id: 1,
      name: "Dr. Strange",
      userType: "Free User",
      about:
        "Former co-founder of Open door. Early staff at Spotify and Clear bit.",
      img: userImg,
    },
    {
      id: 2,
      name: "Dr. Strange",
      userType: "Free User",
      about:
        "Former co-founder of Open door. Early staff at Spotify and Clear bit.",
      img: userImg,
    },
    {
      id: 3,
      name: "Dr. Strange",
      userType: "Free User",
      about:
        "Former co-founder of Open door. Early staff at Spotify and Clear bit.",
      img: userImg,
    },
    {
      id: 4,
      name: "Dr. Strange",
      userType: "Free User",
      about:
        "Former co-founder of Open door. Early staff at Spotify and Clear bit.",
      img: userImg,
    },
    {
      id: 5,
      name: "Dr. Strange",
      userType: "Free User",
      about:
        "Former co-founder of Open door. Early staff at Spotify and Clear bit.",
      img: userImg,
    },
    {
      id: 6,
      name: "Dr. Strange",
      userType: "Free User",
      about:
        "Former co-founder of Open door. Early staff at Spotify and Clear bit.",
      img: userImg,
    },
  ];
  const activitiesInfo = [
    { id: 1, info: "Send message to user @mikel543", date: "Jan 1, 2020" },
    {
      id: 2,
      info: "Buy a lawyer service for $100 from the lawyer @jackob",
      date: "Jan 1, 2020",
    },
    { id: 3, info: "Send message to user @mikel543", date: "Jan 1, 2020" },
    {
      id: 4,
      info: "Buy a lawyer service for $100 from the lawyer @jackob",
      date: "Jan 1, 2020",
    },
    { id: 5, info: "Send message to user @mikel543", date: "Jan 1, 2020" },
    {
      id: 6,
      info: "Buy a lawyer service for $100 from the lawyer @jackob",
      date: "Jan 1, 2020",
    },
    { id: 7, info: "Send message to user @mikel543", date: "Jan 1, 2020" },
    {
      id: 8,
      info: "Buy a lawyer service for $100 from the lawyer @jackob",
      date: "Jan 1, 2020",
    },
    { id: 9, info: "Send message to user @mikel543", date: "Jan 1, 2020" },
    {
      id: 10,
      info: "Buy a lawyer service for $100 from the lawyer @jackob",
      date: "Jan 1, 2020",
    },
    { id: 11, info: "Send message to user @mikel543", date: "Jan 1, 2020" },
    {
      id: 12,
      info: "Buy a lawyer service for $100 from the lawyer @jackob",
      date: "Jan 1, 2020",
    },
  ];
  return (
    <div className="max-w-4xl bg-[#FAFBFF]">
      <h1 className="text-[40px] leading-[55px] font-bold text-[#1D252D] text-center mb-12">
        View Users Activities
      </h1>
      <div>
        <Input
          className="max-w-lg mx-auto border-2 border-[#FFE8F3] flex py-2 px-4 mb-16"
          style={{ boxShadow: "0px 4px 4px rgba(62, 73, 84, 0.04)" }}
          placeholder="Search user name"
          prefix={<FiSearch className="text-2xl mr-4" />}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mx-8">
        {usersInfos.map((user) => (
          <div key={user.id}>
            <div>
              <img className="w-64 h-72" src={user.img} alt="" />
            </div>
            <h3 className="mt-6 text-xl leading-8 font-medium">{user.name}</h3>
            <p className="text-lg leading-7 text-[#E41272]">{user.userType}</p>
            <p className="text-[#667085] leading-6 mt-4 mb-6">{user.about}</p>
            {selected ? (
              <button
                onClick={() => setSelected(false)}
                className="rounded-lg w-full text-center py-2 text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(94.59deg, #E41272 26.33%, #942DD9 78.54%)",
                }}
              >
                Selected
              </button>
            ) : (
              <button
                onClick={() => setSelected(true)}
                className="bg-[#D9D9D9] rounded-lg w-full text-center py-2"
              >
                Select
              </button>
            )}
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
      <div className="mx-8">
        <ActivitiesTable data={activitiesInfo} />
      </div>
    </div>
  );
};

export default ViewUserActivities;
