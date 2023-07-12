// Configuration
import React from "react";

// Third party packages
import { TbCurrencyTaka } from "react-icons/tb";

const LawyerSingleServicePrizeReviewDetails = ({ serviceDetails }) => {
  return (
    <div className="w-[351px] rounded-xl bg-[linear-gradient(180deg,#DE298C_0%,#A52DC7_100%)] shadow-[2px_2px_8px_rgba(0,0,0,0.12)] py-8 px-4 text-white">
      <div className="flex justify-center items-center text-[28px] leading-7 font-bold mb-5">
        <TbCurrencyTaka />
        <p>{serviceDetails.prize}</p>
      </div>
      <div className="text-center text-sm pb-3 border-b border-[#D1D1D1] mb-6">
        <p>Delivery in</p>
        <p className="font-semibold">{serviceDetails.deliveryDay} Days</p>
      </div>
      <p className="text-sm font-semibold uppercase mb-6">
        Review : {serviceDetails.review}
      </p>
      <div className="mb-12">
        <h4 className="uppercase pb-3 mb-3 border-b border-[#D1D1D1]">
          Control Panel
        </h4>
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm font-semibold">Earnings</p>
          <div className="flex justify-center items-center text-sm font-bold">
            <TbCurrencyTaka />
            <p>100</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm font-semibold">Items Sold</p>
          <p className="text-sm font-bold">100</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold">Unread Messages</p>
          <p className="text-sm font-bold">0</p>
        </div>
      </div>
      {/* Control buttons */}
      <div className="flex justify-between items-center">
        <button className="font-bold w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
          Pause
        </button>
        <button className="font-bold w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
          Edit
        </button>
        <button className="font-bold w-[92px] py-[6px] text-black bg-white rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
          Delete
        </button>
      </div>
    </div>
  );
};

export default LawyerSingleServicePrizeReviewDetails;
