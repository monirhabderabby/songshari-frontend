import React from "react";
// Third party packages
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//components
import { useNavigate } from "react-router";
import { useGetRecentMembersQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";
import { SwipAndMatchCard } from "../../../shared/Cards/SwipeAndMatch/SwipAndMatchCard";

export const BannerProfileWithoutLogin = () => {
    const navigate = useNavigate();
    const { data: recents } = useGetRecentMembersQuery({
        role: "member",
        searchTerm: "",
    });
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 7500,
            }}
            modules={[Navigation, Autoplay]}
            className="max-w-[280px] h-[400px]"
            navigation={true}
            onNavigationPrev={() => {
                navigate("/login");
            }}
            onNavigationNext={() => {
                navigate("/login");
            }}
        >
            {recents?.data?.members?.map(data => (
                <SwiperSlide key={data._id}>
                    <SwipAndMatchCard {...{ data }} auth={false} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
