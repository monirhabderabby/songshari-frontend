// Configuration
import React from "react";

// Third party package
import { Rating } from "@mui/material";

const LawyerTopReviewsCard = ({ review }) => {
  return (
    <div className="py-7 bg-white px-24">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src={review.reviewerImg}
        alt=""
      />
      <p className="text-[#737373] text-sm mt-7 mb-4 text-center">
        {review.reviewText}
      </p>
      <div className="flex justify-center items-center">
        <Rating value={review.rating} precision={0.5} readOnly />
      </div>
      <h3 className="mt-4 text-[#E41272] font-bold text-center">
        {review.reviewerName}
      </h3>
      <h4 className="mt-2 text-[#737373] font-bold text-center">
        {review.reviewerDesignation}
      </h4>
    </div>
  );
};

export default LawyerTopReviewsCard;
