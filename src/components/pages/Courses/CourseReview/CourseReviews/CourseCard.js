import { Rating } from "@mui/material";
import React from "react";

export const CourseCard = ({ review }) => {
    const { rating, review: reviewText, user } = review || {};
    const { firstName, lastName, profilePhoto } = user || {};
    const name = `${firstName} ${lastName}`;
    return (
        <div className="flex  gap-x-[20px]">
            <img src={profilePhoto} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full" alt="profile" />
            <div>
                <h3 className="text-[22px] font-Inter font-semibold">{name}</h3>
                <Rating name="read-only" value={rating} readOnly />
                <p className="mt-[5px] md:mt-[10px] text-[12px] md:text-[15px] font-normal text-gray-600">{reviewText}</p>
            </div>
        </div>
    );
};
