import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import "../../SingleProfilesUser/profileSection/Matches.css";

export const DynamicMatches = () => {
  const matchedUsers = [
    {
      id: 1,
      percentage: 40,
      img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
      firstName: "John Henry",
      age: 23,
      hometown: "Chittagong",
    },
    {
      id: 2,
      percentage: 40,
      img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
      firstName: "John Henry",
      age: 23,
      hometown: "Chittagong",
    },
    {
      id: 3,
      percentage: 40,
      img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
      firstName: "John Henry",
      age: 23,
      hometown: "Chittagong",
    },
    {
      id: 4,
      percentage: 40,
      img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
      firstName: "John Henry",
      age: 23,
      hometown: "Chittagong",
    },
    {
      id: 5,
      percentage: 40,
      img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
      firstName: "John Henry",
      age: 23,
      hometown: "Chittagong",
    },
    {
      id: 6,
      percentage: 40,
      img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
      firstName: "John Henry",
      age: 23,
      hometown: "Chittagong",
    },
  ];
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-2 gap-4">
          {matchedUsers.map((user) => {
            return (
              <div
                key={user.id}
                className=" rounded-lg lg:max-w-lg shadow-xl colorrrrrr"
              >
                <p className="bg-white w-28 text-center ml-3 mt-3 text-[12px] py-[6px] px-[8px] rounded-[8px]">
                  {user.percentage}% Match
                </p>
                <img
                  src={user.img}
                  className="w-20 h-20 mx-auto rounded-full mt-4"
                  alt="profile"
                ></img>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-white">{user.firstName}</h2>
                  <p className="text-white">Age : {user.age}</p>
                  <p className="text-white">{user.hometown}, Bangladesh </p>
                  <div className="flex justify-center pt-5 gap-x-[24px] mb-[15px]">
                    <button className="flex justify-center items-center h-[44px] w-[44px] hover:bg-white bg-[#FFDFF4] rounded-full ">
                      <TbMessage className="text-[#E41272] h-[20px] w-[20px]" />
                    </button>
                    <button className="flex justify-center items-center h-[44px] w-[44px] hover:bg-white bg-[#FFDFF4] rounded-full ">
                      <BiUserCircle className="text-[#E41272] h-[20px] w-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
