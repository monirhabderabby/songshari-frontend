import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import slider from '../../assets/Images/Slider/Slider.jpeg';
import slider1 from '../../assets/Images/Slider/Slider1.jpeg';
import slider2 from '../../assets/Images/Slider/Slider2.jpeg';
import slider3 from '../../assets/Images/Slider/Slider3.jpeg';
import slider4 from '../../assets/Images/Slider/Slider4.jpeg';
import slider5 from '../../assets/Images/Slider/Slider5.jpeg';
import slider6 from '../../assets/Images/Slider/Slider6.jpeg';
import slider7 from '../../assets/Images/Slider/Slider7.jpeg';
import SwipeMatch from './SwipeMatch';
import FindPartnerForm from './FindPartnerForm';

const Banner = () => {

    const sliderImages = [slider, slider1, slider2, slider3, slider4, slider5, slider6, slider7];
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={
                    { delay: 3000 }
                }
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-[90vh]"
            >
                {
                    sliderImages.map((image, index) => <SwiperSlide key={index}>
                        <img className='w-full' src={image} alt="" />
                    </SwiperSlide>
                    )
                }
            </Swiper>
            <div className='m-8 h-[60vh] flex justify-around'>
                <SwipeMatch></SwipeMatch>
                <FindPartnerForm></FindPartnerForm>
            </div>
        </div>
    );
};

export default Banner;