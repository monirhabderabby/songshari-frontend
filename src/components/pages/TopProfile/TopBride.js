import React from "react";
import { useNavigate } from "react-router-dom";

// Third party packages
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetTopBrideGroomQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import { ProfileCardSkeletonLoader } from "../../shared/Cards/Loader/ProfileCardSkeletonLoader";
import PrimaryBtn from "../../shared/Web_Components/buttons/PrimaryBtn";
import { UserCard } from "../Shared/userCard/UserCard";

const TopBride = () => {
    // hook variable declaration
    const { data, isLoading } = useGetTopBrideGroomQuery("woman");
    const navigate = useNavigate();

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
    } else if (data?.data?.length > 0) {
        content = data?.data?.map(profile => {
            return (
                <SwiperSlide key={profile._id}>
                    <UserCard {...{ profile: profile?.user }} />
                </SwiperSlide>
            );
        });
    }

    return (
        // w-80 mx-auto
        <div>
            <div className="mt-[30px] max-w-[950px] mx-auto hidden md:block">
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

                    <div className="text-center py-[40px] hidden md:block">
                        <PrimaryBtn
                            value="See more"
                            onClick={() => {
                                navigate("/find-partner");
                            }}
                        />
                    </div>
                </Swiper>
            </div>

            {/* mobile device  */}
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

export default TopBride;
