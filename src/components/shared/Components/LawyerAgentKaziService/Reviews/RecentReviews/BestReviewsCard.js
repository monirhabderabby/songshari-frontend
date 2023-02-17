import React from "react";

// Third party package
import { Rating } from "@mui/material";

const BestReviewsCard = ({ review }) => {
    console.log(review);
    let { review: reviewText, rating, user } = review || {};
    reviewText = reviewText?.length > 155 ? reviewText.slice(0, 155) + "..." : reviewText;
    const { firstName, lastName, designation, profilePhoto } = user || {};
    const name = `${firstName} ${lastName}`;

    return (
        <div className="px-8 py-7 border border-[#DEDEDE] rounded bg-gray-50">
            <Rating value={rating} readOnly />
            <p className="text-[#737373] text-sm leading-6 font-bold my-5">{reviewText}</p>
            <div className="flex justify-start items-center">
                <img className="w-[50px] h-[50px] rounded-full" src={profilePhoto} alt="profilePhoto" />
                <div className="pl-4">
                    <p className="text-[#E41272] text-sm leading-6 font-bold">{name}</p>
                    <p className="text-[#252B42] text-sm leading-6 font-bold">{designation || "Designation"}</p>
                </div>
            </div>
        </div>
    );
};

export default BestReviewsCard;
