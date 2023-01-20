// configuration
import React from "react";

// Third party packages
import { CiShoppingCart } from "react-icons/ci";

const TopMonthSellerCard = ({ picture }) => {
  return (
    <div className="bg-gray-50 mx-auto rounded-xl">
      <div className="py-6 px-3">
        <img
          src={picture}
          alt="userImage"
          className="w-[280px] h-[188px] rounded-[12px]"
        />
        <div className="mt-[16px]">
          <div className="flex justify-between">
            <p className="text-[18px] font-normal text-[#272727]">৳500</p>
            <CiShoppingCart className="text-[24px] text-[#CFCFCF]" />
          </div>
          <p className="text-[#272727] text-left w-[228px] text-[14px] font-semibold font-playFair mt-[16px]">
            Premium Beautiful Cloth for man and woman
          </p>
          <div className="flex items-center mt-[16px] gap-x-[16px]">
            <div className="flex items-center gap-x-[6px]">
              <div className="w-[16px] h-[16px] rounded-full bg-[#CFCFCF]"></div>
              <p className="text-[14px] text-[#CFCFCF] font-normal font-playFair">
                Jacket
              </p>
            </div>
            <div className="flex items-center gap-x-[6px]">
              <div className="w-[16px] h-[16px] rounded-full bg-[#CFCFCF]"></div>
              <p className="text-[14px] text-[#CFCFCF] font-normal font-playFair">
                Premium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMonthSellerCard;
