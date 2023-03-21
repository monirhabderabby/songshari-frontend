import React from "react";

export const LeftSideHeader = ({ course }) => {
    const { name, description, image } = course || {};
    return (
        <div>
            <h1 className="text-[#354895] text-[34px] font-bold font-outfit">{name}</h1>
            <p className="text-[20px] text-gray-500 font-syne mt-[14px]">{description}</p>
            <img src={image} alt="CourseImage" className="mt-[18px] rounded-[6px] max-w-[666px] max-h-[371px]" loading="lazy" />
        </div>
    );
};
