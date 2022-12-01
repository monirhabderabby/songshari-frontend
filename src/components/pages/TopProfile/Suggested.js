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
                    data.map(profile => (
                        <SwiperSlide key={profile._id}>
                            <UserCard {...{ profile, isLoading }} />
                        </SwiperSlide>
                    ))}
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
