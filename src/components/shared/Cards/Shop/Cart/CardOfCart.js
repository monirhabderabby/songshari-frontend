import React from "react";
import { useNavigate } from "react-router";

export const CardOfCart = ({ product, index }) => {
    const navigate = useNavigate();
    const { name, price, photos, _id } = product || {};
    return (
        <div className="w-full h-auto lg:h-[229px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0px_0px_4px_rgba(0,0,0,0.1), 0px_2px_4px_rgba(0,0,0,0.1)] rounded-[24px] px-[12px] lg:px-[36px]">
            <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[48px] bg-[#942DD9] rounded-[0px_0px_20px_20px] text-white text-bold font-Inter text-[10px] lg:text-[20px] flex justify-center items-center mb-[15px] lg:mb-0">
                0{index + 1}
            </div>
            <div className="h-auto lg:h-[calc(229px-48px)] w-full">
                <div className="flex h-full flex-col justify-between pb-[17px] w-full">
                    <div className="w-full">
                        <p className="text-[10px] lg:text-[16px] text-white font-normal font-Inter">Brand</p>
                        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between gap-y-[20px]">
                            <div>
                                <p className="text-[14px] lg:text-[20px] font-Inter font-semibold text-white">{name}</p>
                                <p className="text-[#FFFFFF] font-Inter font-bold text-[20px] mt-[12px]">৳{price}</p>
                            </div>
                            <img src={photos[0]?.url} alt="ProductImage" className="max-w-[250px] lg:w-[121px] lg:h-[117px] rounded-[12px]" />
                        </div>
                    </div>
                    <button
                        className="bg-[#942DD9] hover:bg-[#942dd9a7] w-[144px] h-[36px] flex justify-center items-center text-white rounded-[100px] mt-[20px] lg:mt-0"
                        onClick={() => navigate(`/shop/singleProduct/${_id}`)}
                    >
                        More info
                    </button>
                </div>
            </div>
        </div>
    );
};
