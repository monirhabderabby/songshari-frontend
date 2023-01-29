import React from "react";

// Third party package
import { Rating } from "@mui/material";

const LawyerBestReviewsCard = ({ review }) => {
  return (
    <div className="px-8 py-7 border border-[#DEDEDE] rounded bg-gray-50">
      <Rating value={review.rating} readOnly />
      <p className="text-[#737373] text-sm leading-6 font-bold my-5">
        {review.reviewText}
      </p>
      <div className="flex justify-start items-center">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={review.reviewerImg}
          alt=""
        />
        <div className="pl-4">
          <p className="text-[#E41272] text-sm leading-6 font-bold">
            {review.reviewerName}
          </p>
          <p className="text-[#252B42] text-sm leading-6 font-bold">
            {review.reviewerDesignation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LawyerBestReviewsCard;
