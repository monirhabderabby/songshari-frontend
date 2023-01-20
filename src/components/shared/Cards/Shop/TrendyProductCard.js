// configuration
import React from "react";

const TrendyProductCard = ({ img2 }) => {
  return (
    <div className="w-[193px] h-auto">
      <img src={img2} className="w-[193px] h-[252px]" alt="product" />
      <div className="font-playFair text-[#272727] flex flex-col items-start mt-2">
        <p className="text-[19px] leading-8">Wedding Ring</p>
        <p className="text-[12px]">From ৳8০ / Item</p>
      </div>
      <div className="mt-[20px]">
        <button
          className="w-[135px] h-[27px] pb-[1px] flex items-center text-sm leading-[18px] font-semibold font-playFair rounded-[100px] justify-center border border-[#272727]"
          style={{ boxShadow: "0px 0px 0px #172345" }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default TrendyProductCard;
