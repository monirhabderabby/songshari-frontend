// configuration
import React from "react";

export const OnGoingOrderCard = () => {
    return (
        <div className="w-[290px] h-[399px] bg-white shadow-[2px_2px_10px_2px_rgba(0,0,0,0.12)] rounded-[12px] p-[24px] mx-auto">
            <img
                src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="productImage"
                className="w-[256px] mx-auto h-[173px] rounded-[12px]"
            />
            <div className="content mt-[24px] font-SourceCodePro">
                <p className="text-[24px] font-medium text-[#000000]">
                    BDT <span>2800</span>
                </p>
                <p className="text-[20px] text-[#666666] font-normal">Super winter shirt for men</p>
                <button className="bg-[#3C3C43] w-[125px] h-[46px] rounded-[100px] flex justify-center items-center text-white text-[22px] font-normal mt-[18px]">
                    Detailes
                </button>
            </div>
        </div>
    );
};
