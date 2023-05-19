// Configuration
import React, { useState, useEffect } from "react";

// Third party package
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useGetAllPackagesQuery } from "../../../../Redux/features/package/packageApi";
import { useGetProfileDetailsWIthAuthQuery } from "../../../../Redux/features/userInfo/userApi";
import PackageCard from "../../../shared/Packages/PackageCard";
import PackageForm from "../../../shared/Packages/PackageForm";
import { SuccessSnackBar } from "../../../ui/error/snackBar/SuccessSnackBar";
import { ServerErrorMessage } from "../../../ui/error/ServerErrorMessage";
import { OvalLoader } from "../../../shared/Cards/Loader/OvalLoader/OvalLoader";

// Components

const PackagePromo = () => {
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const [selectedPack, setSelectedPack] = useState(null);
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetAllPackagesQuery();
  //   console.log(data?.data?.packages);
  const { data: profile } = useGetProfileDetailsWIthAuthQuery();

  useEffect(() => {
    if (data) {
      setPackages(
        [...data?.data?.packages].sort((a, b) => a.priceMonth - b.priceMonth)
      );
    }
  }, [data]);

  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-[100px] my-8">
        <h6 className="text-[#5650ce] text-center text-5xl font-semibold font-Inter mb-6">
          Special Packages For You
        </h6>
        {isLoading && (
          <div className="my-16">
            <OvalLoader />
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center my-16">
            <ServerErrorMessage />
          </div>
        )}
        {packages?.length === 0 && data && (
          <div className="text-center text-3xl font-bold text-gray-400 my-16">
            No Packages Found
          </div>
        )}

        {packages?.length !== 0 && (
          <>
            <div className="hidden lg:block">
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
                {packages?.map((pack, i) => (
                  <SwiperSlide key={pack._id} className="pb-8 px-4">
                    <PackageCard
                      useCase="home"
                      pack={pack}
                      packages={data?.data?.packages}
                      index={i}
                      user={profile?._id}
                      setSuccessSnackBarOpen={setSuccessSnackBarOpen}
                      setSelectedPack={setSelectedPack}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="lg:hidden">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="px-4"
              >
                {packages?.map((pack, i) => (
                  <SwiperSlide key={pack._id} className="pb-8 px-4">
                    <PackageCard
                      useCase="home"
                      pack={pack}
                      packages={data?.data?.packages}
                      index={i}
                      user={profile?._id}
                      setSuccessSnackBarOpen={setSuccessSnackBarOpen}
                      setSelectedPack={setSelectedPack}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-full flex items-center justify-center">
              <button
                onClick={() => navigate("/packages")}
                className="mt-6 mx-auto rounded px-4 py-2 font-medium text-white bg-pink-600 text-lg font-Inter"
              >
                View All Packages
              </button>
            </div>
          </>
        )}
      </div>
      {selectedPack && (
        <PackageForm
          {...{
            pack: selectedPack,
            setSelectedPack,
            setSuccessSnackBarOpen,
            useCase: "home",
          }}
        />
      )}
      <SuccessSnackBar
        {...{
          successSnackBarOpen,
          setSuccessSnackBarOpen,
          message: "Successful",
        }}
      />
    </>
  );
};

export default PackagePromo;
