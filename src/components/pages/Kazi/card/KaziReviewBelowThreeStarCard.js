// Configuration
import React from "react";

// Third party package
import { Rating } from "@mui/material";

const KaziReviewBelowThreeStarCard = ({ review }) => {
    return (
        <div className="py-6 px-20 bg-white">
            <div className="flex justify-center items-center">
                <Rating readOnly value={review.rating} precision={0.5} />
            </div>
            <p className="mt-4 mb-7 text-sm text-[#737373] text-center">{review.reviewText}</p>
            <div className="flex justify-center items-center">
                <img className="w-[50px] h-[50px] rounded-full" src={review.reviewerImg} alt="" />
                <div className="pl-4">
                    <p className="text-sm leading-6 font-bold text-[#E41272]">{review.reviewerName}</p>
                    <p className="text-xs leading-4 text-[#252B42]">{review.reviewerDesignation}</p>
                </div>
            </div>
        </div>
    );
};

export default KaziReviewBelowThreeStarCard;
