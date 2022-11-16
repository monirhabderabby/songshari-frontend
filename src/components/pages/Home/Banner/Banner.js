import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import slider from "../../../../assets/images/Slider/Slider.jpeg";
import slider1 from "../../../../assets/images/Slider/Slider1.jpeg";
import slider2 from "../../../../assets/images/Slider/Slider2.jpeg";
import slider3 from "../../../../assets/images/Slider/Slider3.jpeg";
import slider4 from "../../../../assets/images/Slider/Slider4.jpeg";
import slider5 from "../../../../assets/images/Slider/Slider5.jpeg";
import slider6 from "../../../../assets/images/Slider/Slider6.jpeg";
import slider7 from "../../../../assets/images/Slider/Slider7.jpeg";
import FindPartnerForm from "./FindPartnerForm";
import SwipeMatch from "./SwipeMatch";

const Banner = () => {
    const sliderImages = [slider, slider1, slider2, slider3, slider4, slider5, slider6, slider7];
    return (
        <div className="relative">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 3000 }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-[82vh] -z-50"
            >
                {sliderImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img className="w-full" src={image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute top-4 z-30 flex justify-around w-full">
                <SwipeMatch></SwipeMatch>
                <FindPartnerForm></FindPartnerForm>
            </div>
        </div>
    );
};

export default Banner;
