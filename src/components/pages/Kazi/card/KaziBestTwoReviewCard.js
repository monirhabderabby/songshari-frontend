import { Rating } from "@mui/material";
import React from "react";

const KaziBestTwoReviewsCard = ({ review }) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <img className="w-[239px] h-[239px] rounded-2xl" src={review.reviewerImg} alt="" />
            </div>
            <div className="max-w-[346px] pl-10">
                <Rating name="reviewRating" value={review.rating} precision={0.5} readOnly />
                <p className="mt-7 mb-5 text-lg leading-7 font-medium font-Poppins">{review.reviewText}</p>
                <div className="flex items-center gap-3">
                    <p className="leading-7 font-semibold font-Poppins">{review.reviewerName}</p>
                    <p className="text-[#64748B] leading-6 font-medium font-Poppins">{review.reviewerDesignation}</p>
                </div>
            </div>
        </div>
    );
};

export default KaziBestTwoReviewsCard;
