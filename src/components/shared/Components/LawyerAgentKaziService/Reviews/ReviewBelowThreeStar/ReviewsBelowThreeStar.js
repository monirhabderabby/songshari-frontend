// Configuration
import React from "react";

// Third party packages
// Third party packages
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetBelowThreeStarQuery } from "../../../../../../Redux/features/Service/ServiceApi";
import { LineWaveLoader } from "../../../../Cards/Loader/lineWaveLoader/LineWaveLoader";
import ReviewBelowThreeStarCard from "./ReviewBelowThreeStarCard";

// components

const ReviewsBelowThreeStar = ({ belowThreeStarReviews }) => {
  const { data, isLoading } = useGetBelowThreeStarQuery();
  const { reviews } = data || {};
  let content;
  if (isLoading) {
    content = (
      <div className="bg-[#E3E2FF] py-[100px]">
        <LineWaveLoader />
      </div>
    );
  } else if (!isLoading && reviews?.length === 0) {
    content = (
      <div className="bg-[#E3E2FF] py-6 md:py-10 lg:py-[100px] px-6 lg:px-0">
        <h1 className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
          No Reviews found!
        </h1>
      </div>
    );
  } else if (!isLoading && reviews?.length > 0) {
    content = (
      <div className="bg-[#E3E2FF] px-6 lg:px-0">
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
          <div className="py-6 md:py-10 lg:py-24 mb-0 md:mb-6 lg:mb-28">
            <h1 className="text-3xl lg:text-[52px] font-bold font-Inter mb-8 md:mb-16">
              Review Below 3 Star
            </h1>
            <Swiper slidesPerView={"auto"} spaceBetween={30}>
              {reviews?.map((review) => (
                <SwiperSlide key={review?._id} className="w-[348px]">
                  <ReviewBelowThreeStarCard {...{ review }} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
  return content;
};

export default ReviewsBelowThreeStar;
