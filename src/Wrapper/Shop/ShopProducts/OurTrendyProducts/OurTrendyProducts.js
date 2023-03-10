// configuration
import { Pagination } from "@mui/material";
import React from "react";

// Third party packages
import { Swiper, SwiperSlide } from "swiper/react";

// components
import img2 from "../../../../assets/images/shop/Listing/IMAGE.png";
import TrendyProductCard from "../../../../components/shared/Cards/Shop/TrendyProductCard";

const OurTrendyProducts = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="mb-28">
            <div className="w-full flex flex-col lg:flex-row gap-y-[10px] lg:items-center justify-between mb-[25px] lg:mb-[57px] px-[12px] md:px-[24px]">
                <p className="text-[#272727] text-[18px] lg:text-[32px] font-semibold font-playFair text-left">Our Trendy Products</p>
                <Pagination count={5} variant="outlined" shape="rounded" size="small" />
            </div>
            <Swiper slidesPerView={"auto"} spaceBetween={32} className="px-[12px] md:px-[24px]">
                {arr.map(p => {
                    return (
                        <SwiperSlide key={p} className="w-[193px]">
                            <TrendyProductCard {...{ img2 }} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default OurTrendyProducts;
