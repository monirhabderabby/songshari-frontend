import React from "react";
import PackageReviewCard from "./PackageReviewCard/PackageReviewCard";

const PackageReview = () => {
  const reviewsArray = [1, 2, 3];
  return (
    <div>
      <div className="my-[30px] lg:my-[50px]">
        <h2 className="text-[32px] text-gray-700 font-semibold mb-[20px] border-b-2">
          Reviews (5)
        </h2>
        <div className="w-full flex flex-col gap-y-[30px]">
          {reviewsArray?.map((review) => {
            return <PackageReviewCard key={review} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PackageReview;
