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
        content = <div className="bg-[#E3E2FF] py-[100px]">No Reviews found!</div>;
    } else if (!isLoading && reviews?.length > 0) {
        content = (
            <div className="bg-[#E3E2FF]">
                <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
                    <div className="py-24 mb-28">
                        <h1 className="text-[52px] font-bold font-Inter mb-16">Review Below 3 Star</h1>
                        <Swiper slidesPerView={"auto"} spaceBetween={30}>
                            {reviews?.map(review => (
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
