import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import { UserCard } from "../Shared/userCard/UserCard";
const Suggested = () => {
    const { data, isSuccess, isLoading } = useGetRecentMembersQuery();

    if (data) console.log(data);
    // js variables
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        // w-80 mx-auto
        <div className="mt-[30px] max-w-[950px] mx-auto ">
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },

                    375: {
                        slidesPerView: 1,
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
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {isSuccess &&
                    data?.data?.members.map(profile => (
                        <SwiperSlide key={profile._id}>
                            <UserCard {...{ profile }} />
                        </SwiperSlide>
                    ))}

                {!isSuccess &&
                    isLoading &&
                    arr.map(k => {
                        return (
                            <SwiperSlide key={k}>
                                <div className="h-[400px] w-[300px] shadow-2xl rounded-[12px]">
                                    <div className="h-[290px] w-full bg-gray-100"></div>
                                    <div className="px-[15px] py-[15px] h-[110px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[12px]">
                                        <div className="flex items-center justify-start gap-x-5">
                                            <div className="w-[200px] h-[15px] bg-gray-200 animate-pulse"></div>
                                            <div className="h-[30px] w-[30px] bg-gray-200 rounded-full animate-pulse"></div>
                                        </div>
                                        <div className="w-[150px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                                        <div className="w-[100px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                <div className="text-center py-[40px] hidden md:block">
                    <Link to="/find-partner" className="top-profile-btn">
                        See More
                    </Link>
                </div>
            </Swiper>
        </div>
    );
};

export default Suggested;
