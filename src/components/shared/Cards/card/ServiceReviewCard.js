// Configuration
import React from "react";

// Third party packages
import { Rating } from "@mui/material";
import Divider from "@mui/material/Divider";

const ServiceReviewCard = ({ review }) => {
  const { review: reviewDes, rating, user } = review;
  const { firstName, lastName, profilePhoto } = user || {};
  const name = `${firstName} ${lastName}`;

  return (
    <div className="flex gap-x-[23px]">
      <img
        src={profilePhoto}
        className="w-[43px] h-[43px] rounded-full"
        alt="profile"
      />
      <div className="max-w-[600px]">
        <Rating
          name="reviewRating"
          value={rating}
          readOnly
          className="mb-[22px]"
        />
        <p className="text-[#181818] text-[16px] font-normal font-Nunito">
          {reviewDes}
        </p>

        <div className="mt-[22px] text-[14px] text-[#181818] mb-[32px]">
          <h3 className=" font-bold font-Nunito">{name}</h3>
          <p className="text-[#71717A] font-normal">March 14, 2022</p>
        </div>
        <Divider light />
      </div>
    </div>
  );
};

export default ServiceReviewCard;

// <Rating name="reviewRating" value={rating} readOnly />
