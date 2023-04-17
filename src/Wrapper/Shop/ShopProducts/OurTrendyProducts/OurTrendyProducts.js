// configuration
import { Pagination } from "@mui/material";
import React, { useState } from "react";

// Third party packages
import { Swiper, SwiperSlide } from "swiper/react";

// components
import img2 from "../../../../assets/images/shop/Listing/IMAGE.png";
import TrendyProductCard from "../../../../components/shared/Cards/Shop/TrendyProductCard";
import { useGetTrendyProductsQuery } from "../../../../Redux/features/Shop/shopApi";
import { LineWaveLoader } from "../../../../components/shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ServerErrorMessage } from "../../../../components/ui/error/ServerErrorMessage";
import { MdOutlineRecommend } from "react-icons/md";

const OurTrendyProducts = () => {
  const [page, setPage] = useState(1);

  const {
    data: trendyProducts,
    isLoading,
    error,
  } = useGetTrendyProductsQuery({ limit: 8, page: page });

  let content;
  if (isLoading) {
    content = (
      <div>
        <LineWaveLoader />
      </div>
    );
  } else if (error) {
    content = (
      <div>
        <ServerErrorMessage />
      </div>
    );
  } else if (!error && trendyProducts?.products?.length === 0) {
    content = (
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <MdOutlineRecommend className="text-[42px] text-gray-400" />
        <p className="mt-[10px] text-[16px] font-Inter font-medium text-gray-500">
          No Trendy Products Found!
        </p>
      </div>
    );
  } else if (!error && trendyProducts?.products?.length > 0) {
    content = (
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={32}
        className="px-[12px] md:px-[24px]"
      >
        {trendyProducts?.products?.map((product) => {
          return (
            <SwiperSlide key={product} className="w-[243px]">
              <TrendyProductCard {...{ img2, product }} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <div className="mb-28">
      <div className="w-full flex flex-col lg:flex-row gap-y-[10px] lg:items-center justify-between mb-[25px] lg:mb-[57px] px-[12px] md:px-[24px]">
        <p className="text-[#272727] text-[18px] lg:text-[32px] font-semibold font-playFair text-left">
          Our Trendy Products
        </p>
        <Pagination
          onChange={(e, value) => {
            setPage(value);
          }}
          count={Math.ceil(trendyProducts?.total / 8) || 1}
          variant="outlined"
          shape="rounded"
          size="small"
        />
      </div>

      <div>{content}</div>
    </div>
  );
};

export default OurTrendyProducts;
