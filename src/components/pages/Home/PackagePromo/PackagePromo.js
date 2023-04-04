// Configuration
import React from "react";
import { useNavigate } from "react-router";

// Third party package
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Components
import PackageCard from "./PackageCard/PackageCard";

const PackagePromo = () => {
  const navigate = useNavigate();
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <div className="max-w-[1200px] mx-auto mt-8">
      <h6 className="text-[#5650ce] text-center text-5xl font-semibold font-Inter mb-6">
        Special Packages For You
      </h6>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="px-4"
      >
        {array.map((arr) => (
          <SwiperSlide key={arr} className="pb-8">
            <PackageCard pack={arr} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center pb-8">
        <button
          onClick={() => navigate("/packages")}
          className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] px-6 py-2 rounded-[4px] text-white font-Nunito font-medium"
        >
          View All Packages
        </button>
      </div>
    </div>
  );
};

export default PackagePromo;
