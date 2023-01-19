// Configuration
import React, { useState } from "react";

// Components
import { BsStarFill } from "react-icons/bs";
import { TbCurrencyTaka, TbCreditCard } from "react-icons/tb";
import { HiTag, HiOutlineGlobe } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import SelectSizeCard from "./SelectSizeCard";

const SingleProductBasicDetails = ({ data }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  return (
    <div>
      <h1 className="text-[#18181B] text-3xl leading-10 font-bold mb-4">
        {data.productName}
      </h1>
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-1">
          <BsStarFill className="text-[#FECE23]" />
          <BsStarFill className="text-[#FECE23]" />
          <BsStarFill className="text-[#FECE23]" />
          <BsStarFill className="text-[#FECE23]" />
        </div>
        <p className="text-sm leading-5 font-medium text-[#52525B]">
          {data.productReviews.length} Reviews
        </p>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center text-[#18181B] text-3xl leading-10 font-bold">
          <TbCurrencyTaka />
          <p>{data.latestPrice}</p>
        </div>
        <div className="flex items-center text-[#71717A] text-xl leading-8 font-bold line-through">
          <TbCurrencyTaka />
          <p>{data.previousPrice}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-[#71717A] text-sm leading-5 font-medium mb-8">
        <HiTag />
        <p>Save {data.savePercentage}% right now</p>
      </div>
      <div className="mb-8">
        <h2 className="mb-3 font-bold text-[#18181B]">Features:</h2>
        <ul className="list-disc ml-4">
          {data.features.map((f, i) => (
            <li key={i} className="text-[#52525B] leading-9 font-medium">
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <p className="text-[#52525B] text-xs leading-4 mb-4">
          Select Size{" "}
          <span className="text-[#272727] font-bold capitalize">
            {data.sizes[selectedSize].type}
          </span>
        </p>
        <div className="flex items-center gap-2">
          {data.sizes.map((size, i) => (
            <SelectSizeCard
              key={i}
              {...{ size, setSelectedSize, selectedSize, i }}
            />
          ))}
        </div>
      </div>
      <div className="mb-10">
        <p className="font-bold text-[#18181B] mb-6">Colors</p>
        <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
      </div>
      {/* Submit btn */}
      <div className="flex items-center gap-3 mb-8">
        <button
          className="text-white w-[200px] h-[50px] rounded-md text-center font-bold"
          style={{
            backgroundImage: "linear-gradient(90deg, #E22987 0%, #A82BC5 100%)",
          }}
        >
          Add To Cart
        </button>
        <button className="p-4 border border-[#D4D4D8] bg-[#FAFAFB] rounded-md">
          <AiOutlineHeart className="text-lg" />
        </button>
      </div>
      <div>
        <div className="flex items-center gap-2 text-[#52525B] mb-4">
          <HiOutlineGlobe className="text-xl" />
          <p className="text-sm font-medium">Free shipping worldwide</p>
        </div>
        <div className="flex items-center gap-2 text-[#52525B] mb-4">
          <TbCreditCard className="text-xl" />
          <p className="text-sm font-medium">100% Secured Payment</p>
        </div>
        <div className="flex items-center gap-2 text-[#52525B] mb-4">
          <BiUser className="text-xl" />
          <p className="text-sm font-medium">Made by the Professionals</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductBasicDetails;
