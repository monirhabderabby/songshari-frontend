import { Rating } from "@mui/material";
import moment from "moment";
import React from "react";

export const ReviewCard = ({ review }) => {
    const { rating, review: reviewText, user, createdAt } = review || {};
    const { firstName, lastName, profilePhoto } = user || {};
    const name = `${firstName} ${lastName}`;
    return (
        <div className="flex justify-start items-start pb-8 mb-7 border-b border-[#F4F4F5]">
            <div className="w-[73px] h-[43px]">
                <img className="w-[43px] h-[43px] rounded-full" src={profilePhoto} alt="" />
            </div>
            <div>
                <div className="flex items-center gap-1 mb-3">
                    <Rating name="reviewRating" value={rating} precision={0.5} readOnly />
                </div>
                <div>
                    <p className="mb-6 text-[#18181B]">{reviewText}</p>
                    <h3 className="text-[#18181B] text-sm leading-[22px] font-bold mb-1">{name}</h3>
                    <p className="text-[#71717A] text-sm leading-[22px]">{moment(createdAt).format("LL")}</p>
                </div>
            </div>
        </div>
    );
};
