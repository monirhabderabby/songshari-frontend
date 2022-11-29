import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { recentReview } from "./LawyerReviewData";

const LawyerReviewBelowStar = () => {
  return (
    <section className="bg-[#E3E2FF] my-[100px] py-[91px]">
      <div className="custom-container ">
        <h2 className="text-[#090914] mb-[92px] text-left text-[52px] font-semibold">
          Review Below 3 Star
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
              slidesPerView: 4,
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
          {recentReview.map((data) => (
            <SwiperSlide key={data._id}>
              <div>
                <div className="bg-[#FFFFFF] text-center border rounded-md border-[#DEDEDE] py-[30px] px-[35px]">
                  <div className="text-[#E41272] pb-[15px] text-[14px]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid pl-1 fa-star"></i>
                    <i className="fa-solid pl-1 fa-star"></i>
                    <i className="fa-solid pl-1 fa-star"></i>
                    <i className="fa-solid pl-1 fa-star"></i>
                  </div>
                  <p className="text-sm text-[#737373]">
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                  <div className="flex  items-center pt-[10px]">
                    <img src={data.img} alt="" />
                    <div className="ml-3">
                      <h3 className="text-sm text-[#E41272] font-bold">
                        Regina Miles
                      </h3>
                      <h3 className="text-sm text-[#252B42] font-bold">
                        Designer
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LawyerReviewBelowStar;
