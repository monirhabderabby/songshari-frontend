// configuration
import React from "react";
import { Link } from "react-router-dom";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import { useGetRecentMembersQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";

// css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProfileCardSkeletonLoader } from "../../../shared/Cards/Loader/ProfileCardSkeletonLoader";
import { UserCard } from "../../Shared/userCard/UserCard";

const MobileSuggested = () => {
    //hook variable declaration
    const { data, isLoading, error } = useGetRecentMembersQuery();

    // js variables
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let content = null;

    if (isLoading) {
        content = arr.map(k => {
            return (
                <SwiperSlide key={k}>
                    <ProfileCardSkeletonLoader />
                </SwiperSlide>
            );
        });
    } else if (error) {
        content = arr.map(k => {
            return (
                <SwiperSlide key={k}>
                    <div className="flex flex-col items-center justify-center">
                        <AiOutlineWarning className="text-[48px] text-gray-400" />
                        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Server Error</p>
                    </div>
                </SwiperSlide>
            );
        });
    } else if (data?.data?.members?.length > 0) {
        content = data?.data?.members?.map(profile => {
            return (
                <SwiperSlide key={profile._id}>
                    <UserCard {...{ profile }} />
                </SwiperSlide>
            );
        });
    }

    return (

        <div>
            <div className="mt-[30px] w-[350px] mx-auto md:hidden ">
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
                    {content}
                </Swiper>
            </div>
        </div>
    );
};

export default MobileSuggested;
