// configuration
import React from "react";

// Third party packages
import { Swiper, SwiperSlide } from "swiper/react";

// components
import img from "../../../../assets/images/shop/Listing/Rectangle.png";
import ProductListingCard from "../../../../components/shared/Cards/Shop/ProductListingCard";

const ProductListing = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mb-28">
      <p className="text-[#272727] font-semibold text-[32px] text-left mt-14 mb-8">
        Listing
      </p>
      <Swiper slidesPerView={"auto"} spaceBetween={30}>
        {arr.map((p) => {
          return (
            <SwiperSlide key={p} className="w-[615px] overflow-hidden">
              <ProductListingCard {...{ img }} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductListing;
