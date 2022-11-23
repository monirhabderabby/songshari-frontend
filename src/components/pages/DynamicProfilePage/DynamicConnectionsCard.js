import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { MdMessage } from "react-icons/md";

export const DynamicConnectionsCard = () => {
    return (
        <div className="w-[360px] h-[110px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02) mt-[30px] flex justify-around items-center">
            <div className="w-[80px] h-[80px] flex justify-center items-center bg-[#FFDFF4] rounded-full">
                <MdMessage className="h-[36px] w-[36px] text-[#E41272]" />
            </div>
            <div className="w-[80px] h-[80px] flex justify-center items-center bg-[#FFDFF4] rounded-full">
                <BiUserPlus className="h-[36px] w-[36px] text-[#E41272] " />
            </div>
        </div>
    );
};
