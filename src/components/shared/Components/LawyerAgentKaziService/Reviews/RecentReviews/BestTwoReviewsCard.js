import React from "react";

// Third party package
import { Rating } from "@mui/material";

const BestTwoReviewsCard = ({ review }) => {
  let { review: reviewText, rating, user } = review || {};
  const { firstName, lastName, designation, profilePhoto } = user || {};
  reviewText =
    reviewText?.length > 191 ? reviewText.slice(0, 191) + "..." : reviewText;
  const name = `${firstName} ${lastName}`;
  return (
    <div className="flex items-center mx-auto">
      <div>
        <img
          className="w-[100px] md:w-[239px] md:h-[239px] rounded-2xl"
          src={profilePhoto}
          alt="profilePhoto"
        />
      </div>
      <div className="max-w-[144px] md:max-w-[346px] pl-4 md:pl-10">
        <Rating name="reviewRating" value={rating} readOnly />
        <p className="mt-2 md:mt-7 mb-5 text-xs md:text-lg leading-4 md:leading-7 font-medium font-Poppins">
          {reviewText}
        </p>
        <div className="md:flex items-center gap-1 md:gap-3">
          <p className="text-xs md:text-base leading-4 md:leading-7 font-semibold font-Poppins whitespace-nowrap">
            {name}
          </p>
          <p className="text-[#64748B] text-xs md:text-base leading-6 font-medium font-Poppins">
            {designation || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestTwoReviewsCard;
