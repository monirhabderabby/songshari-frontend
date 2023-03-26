import { Progress } from "antd";
import React from "react";
import { useNavigate } from "react-router";

export const MyCourseCard = ({ item }) => {
    const navigate = useNavigate();
    const { image, name, instructor, _id } = item || {};
    return (
        <div className="flex flex-col mx-auto w-full border-[1px] shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px] hover:shadow-[rgba(0,0,0,0.16)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] rounded-[4px]">
            <img src={image} alt="courseImage" className="rounded-tl-[4px] rounded-tr-[4px] h-[226px]" />
            <div className="p-[10px] py-[15px] space-y-[4px]">
                <h3 className="text-[18px] font-bold font-Nunito">{name}</h3>
                <span className="text-[14px] text-gray-500">{instructor[0]?.name}</span>
                <div className="w-[90%]">
                    <Progress percent={item?.progress} status="active" strokeColor={{ from: "#ff317b", to: "#5650ce" }} />
                </div>
                <button
                    className="bg-[linear-gradient(171deg,rgba(233,11,200,0.69791666)_41%,rgba(166,2,241,0.79)_100%)] hover:bg-[linear-gradient(171deg,rgba(233,11,200,0.9)_41%,rgba(166,2,241,1)_100%)] px-6 py-1 rounded-[50px] text-white font-Inter duration-300"
                    onClick={() => navigate(`/course/access/${_id}`)}
                >
                    Continue Courses
                </button>
            </div>
        </div>
    );
};
