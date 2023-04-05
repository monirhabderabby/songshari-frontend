// configuration
import React from "react";

export const OrderHistoryCard = ({ order }) => {
  const { firstName, lastName } = order?.billingInfo || {};

  return (
    <div className="w-full lg:w-[290px] h-auto lg:h-[375px] bg-white shadow-[2px_2px_10px_2px_rgba(0,0,0,0.12)] rounded-[12px] p-[12px] lg:p-[24px] mx-auto">
      <img
        src={
          order?.orderItems[0]?.product?.photos[0]?.url ||
          "https://img.freepik.com/free-photo/rag-dolls-with-wheelbarrow-blue-cap_1156-223.jpg?w=740&t=st=1680695543~exp=1680696143~hmac=24c6cb3976d233b748a346dca9024b67675f49dfaa495ba01ff93294f9f20340"
        }
        alt="productImage"
        className="w-[256px] mx-auto h-[173px] rounded-[12px]"
      />
      <div className="content mt-[24px] font-SourceCodePro">
        <p className="text-[18px] lg:text-[24px] font-medium text-[#000000]">
          BDT <span>{order?.totalPrice}</span>
        </p>
        <p className="text-[14px] lg:text-[18px] text-[#666666] font-normal whitespace-nowrap">
          Order by #{(firstName || "") + " " + (lastName || "")}
        </p>
        <button
          className={`${
            order?.orderStatus === "Delivered"
              ? "bg-[#2D9B23]"
              : order?.orderStatus === "Cancelled"
              ? "bg-[#F47B52]"
              : "bg-yellow-500"
          } w-[90px] lg:w-[125px] h-[32px] lg:h-[46px] rounded-[100px] flex justify-center items-center text-white text-[14px] lg:text-[22px] font-normal mt-[18px]`}
        >
          {order?.orderStatus}
        </button>
      </div>
    </div>
  );
};
