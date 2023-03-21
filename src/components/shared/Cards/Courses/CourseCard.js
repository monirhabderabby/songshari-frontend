import React from "react";

// Third party packages
import { TbCurrencyTaka } from "react-icons/tb";

export const CourseCard = ({ course }) => {
    const { name, oldPrice, price, image, skillLevel } = course || {};
    return (
        <div className="h-[430px] w-full lg:w-[260px] mx-auto rounded-[4px] bg-white shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px] hover:shadow-[rgba(0,0,0,0.16)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] duration-300">
            <div className="relative">
                <img className="h-[234px] w-full rounded-tl-[4px] rounded-tr-[4px]" src={image} alt="courseImage" loading="lazi" />
                <div className="absolute top-[9px] left-[10px] bg-pink-500 bg-opacity-40 backdrop-blur-xl shadow-md text-white text-[10px] px-2 py-1 font-Nunito font-normal tracking-wider">
                    {skillLevel}
                </div>
            </div>
            <div className="content w-full h-[calc(430px-234px)] flex flex-col justify-between p-[10px]">
                <h3 className="text-[19px] text-left font-bold font-Nunito">{name}</h3>
                <div className="flex flex-col gap-y-[10px]">
                    <div className="flex items-center text-[22px] font-SourceCodePro">
                        <span className="flex items-center">
                            <TbCurrencyTaka className="text-gray-400" />
                            <del className="text-gray-400 font-normal">{oldPrice}</del>
                        </span>
                        <span className="flex items-center">
                            <TbCurrencyTaka />
                            <span className="text-gray-600 font-bold">{price}</span>
                        </span>
                    </div>
                    <div className="w-full">
                        <button className="w-full h-[44px] rounded-[4px] bg-pink-500 hover:bg-pink-600 text-white font-Nunito text-[20px] font-medium">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
