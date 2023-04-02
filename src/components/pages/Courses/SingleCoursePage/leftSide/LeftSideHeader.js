import React from "react";

export const LeftSideHeader = ({ course }) => {
    const { name, description, image } = course || {};
    return (
        <div>
            <h1 className="text-[#354895] text-[24px] lg:text-[34px] font-bold font-outfit">{name}</h1>
            <p className="text-[14px] lg:text-[20px] text-gray-500 font-syne mt-[8px] lg:mt-[14px]">{description}</p>
            <img src={image} alt="CourseImage" className="mt-[18px] w-full rounded-[6px] lg:max-w-[666px] lg:max-h-[371px]" loading="lazy" />
        </div>
    );
};
