// Configuration
import React from "react";

// Third party packages
import { Swiper, SwiperSlide } from "swiper/react";
import LawyerTopReviewsCard from "../../../shared/Cards/Lawyer/LawyerTopReviewsCard";

const LawyerTopReview = ({ topReviews }) => {
  return (
    <div className="bg-[#F9E2FF]">
      <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto py-24 mb-24">
        <div>
          <h1 className="text-[52px] font-bold font-Inter mb-16">Top Review</h1>
          <Swiper slidesPerView={"auto"} spaceBetween={30}>
            {topReviews.map((review) => (
              <SwiperSlide key={review.id} className="w-[508px]">
                <LawyerTopReviewsCard {...{ review }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LawyerTopReview;
