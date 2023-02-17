import { Rating } from "@mui/material";
import React from "react";

export const TopReviewCard = ({ item }) => {
    const { review, rating, user } = item || {};
    const { firstName, lastName, profilePhoto } = user || {};
    const name = `${firstName} ${lastName}`;
    return (
        <div className="bg-[#FFFFFF] py-4 text-center px-[25px]">
            <div>
                {" "}
                <img className="block mx-auto w-[90px] h-[90px] rounded-full" src={profilePhoto} alt="Not Available" />
            </div>
            <p className="w-[270px] mx-auto pt-6 text-[14px] text-[#737373] ">{review}</p>
            <div className="text-[#E41272] mt-[10px] text-[14px]">
                <Rating value={rating} readOnly />
            </div>
            <h1 className="text-sm mt-[10px] text-[#E41272] font-bold">{name}</h1>
        </div>
    );
};
