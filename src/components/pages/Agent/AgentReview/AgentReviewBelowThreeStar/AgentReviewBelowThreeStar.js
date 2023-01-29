// Configuration
import React from "react";

// Third party packages
import { Swiper, SwiperSlide } from "swiper/react";

// Components
import AgentReviewBelowThreeStarCard from "../../../../shared/Cards/Agent/AgentReviewBelowThreeStarCard";

const AgentReviewBelowThreeStar = ({ belowThreeStarReviews }) => {
  return (
    <div className="bg-[#E3E2FF]">
      <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <div className="py-24 mb-28">
          <h1 className="text-[52px] font-bold font-Inter mb-16">
            Review Below 3 Star
          </h1>
          <Swiper slidesPerView={"auto"} spaceBetween={30}>
            {belowThreeStarReviews.map((review) => (
              <SwiperSlide key={review.id} className="w-[348px]">
                <AgentReviewBelowThreeStarCard {...{ review }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AgentReviewBelowThreeStar;
