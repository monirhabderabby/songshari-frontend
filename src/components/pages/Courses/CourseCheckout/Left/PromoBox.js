import React from "react";

export const PromoBox = () => {
    return (
        <div className="ring-[#d0deef] ring-1 ring-inset w-full h-[113px] rounded-[4px] flex lg:flex-row flex-col  justify-around items-center">
            <span className="text-[24px] font-Nunito font-semibold">Promot Code</span>
            <form className="flex border-[1px] border-[#354895] rounded-[4px]">
                <input type="text" className="bg-transparent px-[12px] py-[6px] outline-none" />
                <input type="submit" value="Apply" className="bg-[#354895] px-[12px] text-white" />
            </form>
        </div>
    );
};
