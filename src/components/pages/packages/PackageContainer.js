// import React from 'react';
import { useGetAllPackagesQuery } from "../../../Redux/features/package/packageApi";

// Configuration
import React, { useState } from "react";
// import { useNavigate } from "react-router";

// Third party package
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Components
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import { SuccessSnackBar } from "../../ui/error/snackBar/SuccessSnackBar";
import PackageCard from "../../shared/Packages/PackageCard";

const PackageContainer = () => {
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  // const navigate = useNavigate();
    const { data } = useGetAllPackagesQuery();
    console.log(data, "getting profile")
  const { data: profile } = useGetProfileDetailsWIthAuthQuery();

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
        {data?.data?.packages?.map((pack, i) => (
          <SwiperSlide key={pack._id} className="pb-8 px-4">
            <PackageCard
              pack={pack}
              packages={data?.data?.packages}
              index={i}
              user={profile?._id}
              setSuccessSnackBarOpen={setSuccessSnackBarOpen}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SuccessSnackBar
        {...{
          successSnackBarOpen,
          setSuccessSnackBarOpen,
          message: "Successful",
        }}
      />
    </div>
  );
};

export default PackageContainer;
