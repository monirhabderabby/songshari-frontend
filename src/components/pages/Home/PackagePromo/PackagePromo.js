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

  const packageData = [
    {
      _id: 1,
      name: "Free",
      prize: 0,
      details: [
        "Browse Basic Features",
        "Register/Login",
        "Complete Profile",
        "10 Chat Request",
        "10 Swap Every 24 Hour",
        "100 Message Per Day",
      ],
    },
    {
      _id: 2,
      name: "Silver",
      prize: 99,
      details: [
        "All Features of Free",
        "Unlimited Chat Request",
        "Unlimited Swap",
        "Unlimited Message",
        "Video Chat: 30 Minutes a Day",
        "Timeline Post",
        "Course Discount 15%",
        "Upload Marriage Certificate",
        "Free Kazi Contact",
      ],
    },
    {
      _id: 3,
      name: "Gold",
      prize: 189,
      details: [
        "All Features Of Gold",
        "+ 2 Hours of Video Chat",
        "+ 30% Course Fee Off",
        "+ 5% Shopping Discount",
        "+ 5% Discount on Lawyer Fee",
        "+ 10% Discount on Agent Fee",
      ],
    },
    {
      _id: 4,
      name: "Platinum",
      prize: 249,
      details: [
        "All Features Of Diamond",
        "+ 4 Hours of Video Chat",
        "+ Course Fee Free",
        "+ 10% Shopping Discount",
        "+ 10% Discount on Lawyer Fee",
        "+ 20% Discount on Agent Fee",
      ],
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto mt-8">
      <h6 className="text-[#5650ce] text-center text-5xl font-semibold font-Inter mb-6">
        Special Packages For You
      </h6>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="px-4"
      >
        {packageData.map((pack) => (
          <SwiperSlide key={pack._id} className="pb-8 px-4">
            <PackageCard pack={pack} />
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
