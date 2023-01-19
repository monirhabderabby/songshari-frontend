// Configuration
import React from "react";

// Components
import { BsStarFill } from "react-icons/bs";

const OtherDetailsReviews = ({ data }) => {
  return (
    <div className="mt-12">
      {data.productReviews.map((review) => (
        <div
          key={review.id}
          className="flex justify-start items-start gap-6 pb-8 mb-7 border-b border-[#F4F4F5]"
        >
          <div className="w-[73px] h-[43px]">
            <img
              className="w-[43px] h-[43px] rounded-full"
              src={review.reviewerProfile}
              alt=""
            />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-6">
              <BsStarFill className="text-[#FECE23] text-[22px]" />
              <BsStarFill className="text-[#FECE23] text-[22px]" />
              <BsStarFill className="text-[#FECE23] text-[22px]" />
              <BsStarFill className="text-[#FECE23] text-[22px]" />
            </div>
            <div>
              <p className="mb-6 text-[#18181B]">{review.review}</p>
              <h3 className="text-[#18181B] text-sm leading-[22px] font-bold mb-1">
                {review.reviewerName}
              </h3>
              <p className="text-[#71717A] text-sm leading-[22px]">
                {review.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherDetailsReviews;
