import React from "react";
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";

export const AddKaziServiceForm = () => {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <CustomHeader title="Add New Service" />
            <div className="max-w-[1200px] mx-auto px-[15px] mt-[70px]">
                <div className="w-full h-auto py-[92px] bg-white shadow-[2px_2px_10px_2px_rgba(0,0,0,0.12)] rounded-[20px]">
                    <div className="max-w-[840px] mx-auto">
                        <h1 className="text-[#32353B] font-Poppins text-[29px] font-normal text-left">Add Your Kazi Service</h1>
                        <p className="text-[#32353B] text-[21px] font-normal font-sans mt-[20px]">
                            service: a packed service you can deliver for a fixed price in a set timeframe.
                        </p>
                        <div className="h-[1px] w-full bg-[#E9ECF2] my-[10px]"></div>
                        <div className="relative h-[60px] mt-[25px]">
                            <input
                                type="text"
                                className="w-full h-full border-[1px] border-[#707276] rounded-[3.6px] px-[12px] text-[#707276] text-[21px]"
                            />
                            <p className="absolute top-4 right-[130px] text-[#707276] text-[14px]">for</p>
                            <input
                                type="number"
                                className="w-[102px] h-[42px] bg-[#F5F7FA] shadow-[0px_1.24px_2.5px_rgba(93,94,97,0.25)] rounded-[3.6px] border-[1px] border-[#F5F7FA] absolute top-2 right-[15px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
