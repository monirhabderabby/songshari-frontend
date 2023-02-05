import React from "react";

// Third party packages
import { TbCurrencyTaka } from "react-icons/tb";

export const MoreOfferCard = ({ extraOffer }) => {
    const { title, price, deadline } = extraOffer[0] || {};
    return (
        <div className="w-[759px] ml-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg bg-[linear-gradient(104.74deg,#E41272_28.77%,#630465_76.53%,#942DD9_76.53%)] py-5 px-8 flex justify-between items-center mb-8">
            <div className="text-white">
                <p className="leading-[30px] font-semibold mb-1">{title}</p>
                <p className="text-xs leading-[18px]">Additional {deadline}</p>
            </div>
            <div>
                <button className="bg-white text-black py-2 px-3 rounded-lg flex justify-center items-center text-[28px] font-semibold leading-[28px]">
                    +<TbCurrencyTaka />
                    {price}
                </button>
            </div>
        </div>
    );
};
