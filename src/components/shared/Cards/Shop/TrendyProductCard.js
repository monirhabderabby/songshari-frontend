// configuration
import React from "react";
import { useNavigate } from "react-router";

// Third party package
import { Tooltip } from "antd";

const TrendyProductCard = ({ img2, product }) => {
  const navigate = useNavigate();
  const name =
    product?.name?.length > 24
      ? product?.name?.substr(0, 24) + "..."
      : product?.name;
  return (
    <div className="h-auto">
      <img
        src={product?.photos[0]?.url || img2}
        className="w-[243px] h-[252px] rounded-t-[40px] cursor-pointer"
        alt="product"
      />
      <div className="font-playFair text-[#272727] flex flex-col items-start mt-2">
        <Tooltip
          onClick={() => navigate(`/shop/singleProduct/${product?._id}`)}
          className="text-lg cursor-pointer hover:text-gray-500"
          title={product?.name}
        >
          <span>{name}</span>
        </Tooltip>
        <p className="text-[12px]">From ৳{product?.price} / Item</p>
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
