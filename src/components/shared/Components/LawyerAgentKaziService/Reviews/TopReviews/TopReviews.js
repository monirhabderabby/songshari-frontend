// configuration
import React from "react";

// Third party packages
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTopReviewsQuery } from "../../../../../../Redux/features/Service/ServiceApi";
import { LineWaveLoader } from "../../../../Cards/Loader/lineWaveLoader/LineWaveLoader";
import { TopReviewCard } from "./TopReviewCard";

// components
const TopReviews = () => {
  const { data, isLoading } = useGetTopReviewsQuery();
  const { reviews } = data || {};

  let content;
  if (isLoading) {
    content = (
      <div className="bg-[#F9E2FF] my-[100px] py-[91px]">
        <LineWaveLoader />
      </div>
    );
  } else if (!isLoading && reviews?.length === 0) {
    content = (
      <div className="bg-[#F9E2FF] my-4 md:my-10 lg:my-[100px] py-6 md:py-10 lg:py-[91px] px-6 lg:px-0">
        <h2 className="text-[#090914] mb-8 lg:mb-[92px] text-left text-3xl lg:text-[52px] font-semibold">
          Top Review
        </h2>
        <div>
          No Top Review you got! Try to give best service to your client. Best
          of luck!
        </div>
      </div>
    );
  } else if (!isLoading && reviews?.length > 0) {
    content = (
      <section className="bg-[#F9E2FF] my-4 md:my-10 lg:my-[100px] py-6 md:py-10 lg:py-[91px] px-6 lg:px-0">
        <div className="custom-container ">
          <h2 className="text-[#090914] mb-8 lg:mb-[92px] text-left text-3xl lg:text-[52px] font-semibold">
            Top Review
          </h2>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {reviews?.map((item) => (
              <SwiperSlide key={item._id}>
                <TopReviewCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }
  return content;
};

export default TopReviews;
