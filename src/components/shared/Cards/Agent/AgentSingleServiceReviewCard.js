// Configuration
import React from "react";

// Third party packages
import { Rating } from "@mui/material";

const AgentSingleServiceReviewCard = ({ review }) => {
  return (
    <div className="flex justify-start items-start gap-6 pb-8 mb-7 border-b border-[#F4F4F5]">
      <div className="w-[73px] h-[43px]">
        <img
          className="w-[43px] h-[43px] rounded-full"
          src={review.reviewer}
          alt=""
        />
      </div>
      <div>
        <div className="flex items-center gap-1 mb-6">
          <Rating name="reviewRating" value={review.rating} precision={0.5} />
        </div>
        <div>
          <p className="mb-6 text-[#18181B]">{review.reviewText}</p>
          <h3 className="text-[#18181B] text-sm leading-[22px] font-bold mb-1">
            {review.reviewerName}
          </h3>
          <p className="text-[#71717A] text-sm leading-[22px]">{review.date}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentSingleServiceReviewCard;
