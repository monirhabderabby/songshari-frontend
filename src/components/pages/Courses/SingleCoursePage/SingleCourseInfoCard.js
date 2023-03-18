import React from "react";

// Third party packages
import { BsGraphUp } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";
import { GrGroup, GrLanguage } from "react-icons/gr";
import { TbMessages } from "react-icons/tb";

export const SingleCourseInfoCard = () => {
    const supports = [
        {
            id: 1,
            title: "Approx 5 Hours",
            icon: <CiVideoOn className="text-[20px]" />,
        },
        {
            id: 2,
            title: "100+ Total Students",
            icon: <GrGroup className="text-[20px]" />,
        },
        {
            id: 3,
            title: "Mentor Support",
            icon: <FiHeadphones className="text-[20px]" />,
        },
        {
            id: 4,
            title: "Basic To Advanced",
            icon: <BsGraphUp className="text-[20px]" />,
        },
        {
            id: 5,
            title: "Language Bangali",
            icon: <GrLanguage className="text-[20px]" />,
        },
        {
            id: 6,
            title: "Discussion Forum, Q/A",
            icon: <TbMessages className="text-[20px]" />,
        },
    ];
    return (
        <div className="w-full lg:max-w-[400px] h-[500px]  mx-auto ring-1 ring-inset ring-[#d0deef] rounded-[4px] p-[16px]">
            <h3 className="text-[32px] font-Nunito font-bold">Included in this course</h3>
            <div className="my-[26px] grid grid-cols-2 gap-[20px]">
                {supports.map(item => {
                    return (
                        <div className="flex items-center gap-x-[6px]">
                            <div>{item.icon}</div>
                            <h3 className="text-[16px] text-gray-500 font-outfit">{item.title}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
