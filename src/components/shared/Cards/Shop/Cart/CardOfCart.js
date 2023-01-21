import React from "react";

export const CardOfCart = () => {
    return (
        <div className="w-full h-[229px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0px_0px_4px_rgba(0,0,0,0.1), 0px_2px_4px_rgba(0,0,0,0.1)] rounded-[24px] px-[36px]">
            <div className="w-[40px] h-[48px] bg-[#942DD9] rounded-[0px_0px_20px_20px] text-white text-bold font-Inter text-[20px] flex justify-center items-center">
                01
            </div>
            <div className="h-[calc(229px-48px)] w-full">
                <div className="flex h-full flex-col justify-between pb-[17px] w-full">
                    <div className="w-full">
                        <p className="text-[16px] text-white font-normal font-Inter">Brand</p>
                        <div className="w-full h-full flex justify-between">
                            <div>
                                <p className="text-[20px] font-Inter font-semibold text-white">
                                    2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 32GBcs
                                </p>
                                <p className="text-[#FFFFFF] font-Inter font-bold text-[20px] mt-[12px]">৳2500</p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="Product"
                                className="w-[121px] h-[117px] rounded-[12px]"
                            />
                        </div>
                    </div>
                    <button className="bg-[#942DD9] w-[144px] h-[36px] flex justify-center items-center text-white rounded-[100px]">More info</button>
                </div>
            </div>
        </div>
    );
};
