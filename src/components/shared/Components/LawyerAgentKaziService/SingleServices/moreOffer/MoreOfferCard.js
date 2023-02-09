import React from "react";

// Third party packages
import { TbCurrencyTaka } from "react-icons/tb";

export const MoreOfferCard = ({ extraOffer }) => {
  const { title, price, deadline } = extraOffer[0] || {};
  return (
    <div className="w-[326px] lg:w-[759px] ml-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg bg-[linear-gradient(104.74deg,#E41272_28.77%,#630465_76.53%,#942DD9_76.53%)] py-3 px-4 lg:py-5 lg:px-8 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center mb-5 lg:mb-8">
      <div className="text-white">
        <p className="leading-5 lg:leading-[30px] font-semibold mb-0 lg:mb-1">
          {title}
        </p>
        <p className="text-xs leading-[18px] mb-1 lg:mb-0">
          Additional {deadline}
        </p>
      </div>
      <div>
        <button className="bg-white text-black py-1 lg:py-2 px-2 lg:px-3 rounded-lg flex justify-center items-center text-xl lg:text-[28px] font-semibold leading-[28px]">
          +<TbCurrencyTaka />
          {price}
        </button>
      </div>
    </div>
  );
};
