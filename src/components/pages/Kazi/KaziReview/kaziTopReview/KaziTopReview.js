// configuration
import React from "react";

// Third party packages
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import review from "../../../../../assets/images/LawyerProfile/topReview.png";
import { topReview } from "../../../lawyerPage/lawyerReview/LawyerReviewData";
const KaziTopReview = () => {
    return (
        <>
            <section className="bg-[#F9E2FF] my-[100px] py-[91px]">
                <div className="custom-container ">
                    <h2 className="text-[#090914] mb-[92px] text-left text-[52px] font-semibold">Top Review</h2>

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
                        {topReview.map(profile => (
                            <SwiperSlide key={profile._id}>
                                <div className="bg-[#FFFFFF] py-4 text-center px-[25px]">
                                    <div>
                                        {" "}
                                        <img className="block mx-auto" src={review} alt="Not Available" />
                                    </div>
                                    <p className="w-[270px] mx-auto pt-6 text-[14px] text-[#737373] ">
                                        Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
                                    </p>
                                    <div className="text-[#E41272] mt-[10px] text-[14px]">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid pl-1 fa-star"></i>
                                        <i className="fa-solid pl-1 fa-star"></i>
                                        <i className="fa-solid pl-1 fa-star"></i>
                                        <i className="fa-solid pl-1 fa-star"></i>
                                    </div>
                                    <h1 className="text-sm mt-[10px] text-[#E41272] font-bold">Jenny Wilson</h1>
                                    <h1 className="text-sm mt-[10px] text-[#252B42] font-bold">Grower.io</h1>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default KaziTopReview;
