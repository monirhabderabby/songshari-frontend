import { Switch } from "antd";
import React from "react";
import topShape from "../../../../assets/images/Shape/membershipPageShape.png";

export const DioamondPlan = () => {
    const onChange = checked => {
        console.log(`switch to ${checked}`);
    };
    return (
        <div>
            <div className="w-full relative">
                <img src={topShape} className="w-full absolute top-0 right-0" alt="" />
                <div className="flex items-center w-full justify-evenly pt-[18px]">
                    <p className="text-[16px] text-[#E41272] font-semibold">Monthly</p>
                    <Switch defaultChecked onChange={onChange} />
                    <p className="text-[16px] text-[#2F3659]">Annually</p>
                </div>
                <div className="flex justify-around items-center mt-[26px] z-40">
                    <button className="text-[14px] font-normal text-[#2F3659]">Free</button>
                    <button className="text-[14px] font-normal text-[#2F3659]">Gold</button>
                    <button className="text-[14px] font-normal bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[2px_2px_8px_2px_rgba(0,0,0,0.1)] rounded-[12px] py-[7px] px-[11px] text-white">
                        Diamond
                    </button>
                    <button className="text-[14px] font-normal text-[#2F3659]">Platium</button>
                </div>
            </div>
        </div>
    );
};
