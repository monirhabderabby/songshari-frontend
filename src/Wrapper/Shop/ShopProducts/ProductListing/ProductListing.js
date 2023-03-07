// configuration
import React from "react";

// Third party packages
import Skeleton from "@mui/material/Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import ProductListingCard from "../../../../components/shared/Cards/Shop/ProductListingCard";
import { ServerErrorMessage } from "../../../../components/ui/error/ServerErrorMessage";
import { useGetAllProductsQuery } from "../../../../Redux/features/Shop/shopApi";

const ProductListing = () => {
    const { data, isLoading, error } = useGetAllProductsQuery();
    const { products } = data || {};

    // js variables
    const loaderArr = [1, 2, 3, 4, 5];

    let content;
    if (isLoading) {
        content = (
            <Swiper slidesPerView={"auto"} spaceBetween={30}>
                {loaderArr?.map(item => {
                    return (
                        <SwiperSlide key={item} className="w-[615px] overflow-hidden">
                            <div className="w-[615px] h-[320px] bg-[linear-gradient(104.63deg,#75204C_1.61%,_#360C41_97.81%)] rounded-[18px] px-[35px] py-[31px] relative shadow-[2px_2px_10px_2px_rgba(0,0,0,0.12)]">
                                <div className="mt-[140px]">
                                    <Skeleton animation="wave" style={{ backgroundColor: "#b3afaf" }} width="60%" />
                                    <Skeleton animation="wave" style={{ backgroundColor: "#b3afaf" }} />
                                    <Skeleton animation="wave" style={{ backgroundColor: "#b3afaf" }} width="30%" />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    } else if (!isLoading && error) {
        content = (
            <div className="w-full h-[320px] flex justify-center items-center ">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && products?.length === 0) {
        content = (
            <div className="w-full h-[320px] flex justify-center items-center">
                <span className="text-[22px] font-Inter text-gray-400">No Products Found!</span>
            </div>
        );
    } else if (!isLoading && products?.length > 0) {
        content = (
            <Swiper slidesPerView={"auto"} spaceBetween={30}>
                {products?.map(product => {
                    return (
                        <SwiperSlide key={product?._id} className="w-[615px] overflow-hidden">
                            <ProductListingCard product={product} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }

    return (
        <div className="mb-28">
            <p className="text-[#272727] font-semibold text-[32px] text-left mt-14 mb-8">Listing</p>
            {content}
        </div>
    );
};

export default ProductListing;
