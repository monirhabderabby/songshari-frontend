import { Rating } from "@mui/material";
import { Progress } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { useGetCourseReviewOfMeQuery } from "../../../../Redux/features/Course/courseApi";

export const MyCourseCard = ({ item }) => {
    const navigate = useNavigate();

    const { course } = item || {};
    const { _id, name, image, instructor } = course || {};
    const { data, isLoading, isError } = useGetCourseReviewOfMeQuery(_id);
    const { review } = data || {};
    let content;
    if (isLoading) {
        content = <div className="w-[60px] h-[15px] flex justify-center items-center">. . .</div>;
    } else if (!isLoading && isError) {
        content = (
            <button
                className="text-[12px] ring-1 ring-pink-200 px-3 py-[2px] rounded-[4px] hover:bg-pink-400 hover:text-white duration-300"
                onClick={() => navigate(`/course/review/${_id}`)}
            >
                Send Review
            </button>
        );
    } else if (!isLoading && !isError && review) {
        content = <Rating name="read-only" value={review?.rating} readOnly size="small" />;
    }

    return (
        <>
            <div className="flex flex-col mx-auto w-full border-[1px] shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px] hover:shadow-[rgba(0,0,0,0.16)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] rounded-[4px]">
                <img src={image} alt="courseImage" className="rounded-tl-[4px] rounded-tr-[4px] h-[226px]" />
                <div className="p-[10px] py-[15px] space-y-[4px]">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[18px] font-bold font-Nunito">{name}</h3>
                        {content}
                    </div>
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
        </>
    );
};
