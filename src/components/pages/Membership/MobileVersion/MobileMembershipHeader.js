import React from 'react';
import { Switch } from "antd";
import topShape from "../../../../assets/images/Shape/membershipPageShape.png";

const MobileMembershipHeader = ({ planTitle }) => {

    const onChange = checked => {
    };

    return (
        <div>
            <div className="w-full relative">
                <img src={topShape} className="w-full h-32 absolute top-0 right-0" alt="" />
                <div className="flex items-center w-full justify-evenly pt-[18px]">
                    <p className="text-[16px] text-[#E41272] font-semibold">Monthly</p>
                    <Switch defaultChecked onChange={onChange} />
                    <p className="text-[16px] text-[#2F3659]">Annually</p>
                </div>
                <div className="flex justify-between items-center mx-[30px] mt-[26px] z-40">
                    <button className={`${planTitle === "Free" ? "text-[14px] text-[#E41272] bg-white shadow-[2px_2px_8px_2px_rgba(0,0,0,0.1)] rounded-[12px] py-[7px] px-[11px]" : "text-[14px] font-normal text-[#2F3659]"}`}>
                        Free
                    </button>
                    <button className={`${planTitle === "Gold" ? "text-[14px] text-[#E41272] bg-white shadow-[2px_2px_8px_2px_rgba(0,0,0,0.1)] rounded-[12px] py-[7px] px-[11px]" : "text-[14px] font-normal text-[#2F3659]"}`}>
                        Gold
                    </button>
                    <button className={`${planTitle === "Diamond" ? "text-[14px] text-[#E41272] bg-white shadow-[2px_2px_8px_2px_rgba(0,0,0,0.1)] rounded-[12px] py-[7px] px-[11px]" : "text-[14px] font-normal text-[#2F3659]"}`}>
                        Diamond
                    </button>
                    <button className={`${planTitle === "Platinum" ? "text-[14px] text-[#E41272] bg-white shadow-[2px_2px_8px_2px_rgba(0,0,0,0.1)] rounded-[12px] py-[7px] px-[11px]" : "text-[14px] font-normal text-[#2F3659]"}`}>
                        Platinum
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileMembershipHeader;