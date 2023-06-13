import React from "react";
import shape from "../../../../assets/images/Shape/king.svg";
export const PackagePriceTest = ({ pack }) => {
    return (
        <div className="relative">
            <img src={shape} alt="shape" className="absolute w-[80px] right-0 top-0 rotate-[35deg]" />
            <section className="w-full flex justify-start">
                <div className="py-[6px] px-[14px]  bg-[rgba(110,110,110,0.2)] rounded-[4px] group-hover:text-white ">{pack?.title}</div>
            </section>
            <div className="mt-[12px]">
                <h3 className="text-base font-Inter text-gray-600 group-hover:text-[#FFFFF9]">
                    <span className="text-[32px] font-semibold font-playFair group-hover:text-white mr-2">{pack?.priceMonth}</span>
                    BDT/mo or,
                </h3>
            </div>
            <div className="mt-[12px]">
                <h3 className="text-base font-Inter text-gray-600 group-hover:text-[#FFFFF9]">
                    <span className="text-[32px] font-semibold font-playFair group-hover:text-white mr-2">{pack?.priceMonthInPoint}</span>
                    POINT/mo
                </h3>
            </div>
        </div>
    );
};
