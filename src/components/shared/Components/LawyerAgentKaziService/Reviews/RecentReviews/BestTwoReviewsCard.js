import React from "react";

// Third party package
import { Rating } from "@mui/material";

const BestTwoReviewsCard = ({ review }) => {
    console.log(review);
    let { review: reviewText, rating, user } = review || {};
    const { firstName, lastName, designation, profilePhoto } = user || {};
    reviewText = reviewText?.length > 191 ? reviewText.slice(0, 191) + "..." : reviewText;
    const name = `${firstName} ${lastName}`;
    return (
        <div className="flex  items-center mx-auto">
            <div>
                <img className="w-[239px] h-[239px] rounded-2xl" src={profilePhoto} alt="profilePhoto" />
            </div>
            <div className="max-w-[346px] pl-10">
                <Rating name="reviewRating" value={rating} readOnly />
                <p className="mt-7 mb-5 text-lg leading-7 font-medium font-Poppins">{reviewText}</p>
                <div className="flex items-center gap-3">
                    <p className="leading-7 font-semibold font-Poppins">{name}</p>
                    <p className="text-[#64748B] leading-6 font-medium font-Poppins">{designation || "Designation"}</p>
                </div>
            </div>
        </div>
    );
};

export default BestTwoReviewsCard;
