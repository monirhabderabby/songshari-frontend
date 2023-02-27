// Configuration
import React from "react";
import { useGetRecentReviewQuery } from "../../../../../../Redux/features/Service/OrderApi";
import { LineWaveLoader } from "../../../../Cards/Loader/lineWaveLoader/LineWaveLoader";

// Components
import BestReviewsCard from "./BestReviewsCard";
import BestTwoReviewsCard from "./BestTwoReviewsCard";

const RecentReview = () => {
  const { data, isLoading } = useGetRecentReviewQuery();
  const { reviews } = data || {};

  let content;
  if (isLoading) {
    content = <LineWaveLoader />;
  } else if (!isLoading && reviews?.length === 0) {
    content = (
      <div className="bg-[#FFE2EF] py-[50px] px-6 lg:px-0">
        <h4 className="text-[22px] text-gray-400 font-george lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
          No reviews found!
        </h4>
      </div>
    );
  } else if (!isLoading && reviews?.length > 0) {
    content = (
      <div className="bg-[#FFE2EF] px-6 lg:px-0">
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto py-6 md:py-10 lg:py-20 mb-4 md:mb-10 lg:mb-24">
          <h1 className="leading-7 font-semibold text-[#E41272] font-Poppins text-center mb-1 md:mb-6">
            You Average Rating Is 4.5 out of 5
          </h1>
          <h1 className="text-3xl lg:text-[52px] leading-10 lg:leading-[62px] font-semibold font-Poppins text-center mb-4 md:mb-8 lg:mb-20">
            Recent Review
          </h1>
          {/* Best two reviews */}
          <div
            className={`grid gap-4 md:gap-8 mb-0 lg:mb-20 ${
              reviews?.length > 1 ? "grid-cols-1 lg:grid-cols-2" : "grid-col-1"
            }`}
          >
            {reviews?.slice(0, 2).map((review) => (
              <BestTwoReviewsCard key={review?._id} {...{ review }} />
            ))}
          </div>
          {/* Best reviews */}
          {reviews?.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-8 lg:px-28">
              {reviews?.slice(2, 6).map((review) => (
                <BestReviewsCard key={review?._id} {...{ review }} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  return content;
};

export default RecentReview;
