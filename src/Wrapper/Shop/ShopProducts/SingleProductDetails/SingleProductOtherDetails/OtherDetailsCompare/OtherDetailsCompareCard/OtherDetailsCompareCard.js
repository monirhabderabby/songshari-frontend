import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const OtherDetailsCompareCard = ({ product }) => {
    const { name, price, photos } = product || {};
    return (
        <div className="rounded-xl w-[304px] shadow-md">
            <img className="w-full h-[198px] rounded-t-xl" src={photos[0]?.url} alt="productPhoto" />
            <div className="p-6">
                <div className="flex p-2 bg-[#E41272] rounded-[100px] text-white max-w-[58px]">
                    <TbCurrencyTaka className="text-xs" />
                    <p className="text-xs">{price}</p>
                </div>
                <p className="mt-2 text-[#272727] text-lg leading-6">{name}</p>
            </div>
        </div>
    );
};

export default OtherDetailsCompareCard;
