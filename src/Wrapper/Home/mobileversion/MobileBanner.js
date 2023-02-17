// Configuration
import React from "react";

// Third party packages
import { Swiper, SwiperSlide } from "swiper/react";

export const MobileBanner = () => {
  return (
    <div className="mt-8 px-6">
      <Swiper>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/FDC2838/Rectangle-4464.png"
            className="mx-auto w-full"
            alt="Not Available"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
