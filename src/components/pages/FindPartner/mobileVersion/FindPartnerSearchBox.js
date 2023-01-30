import { Input } from "antd";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";
import filterIcon from "../../../../assets/images/findPartner/filter.svg";

export const FindPartnerSearchBox = () => {
    const navigate = useNavigate();
    const userSearchHandler = () => {
        console.log("clicked");
    };
    return (
        <div className="flex items-center justify-center sticky top-0 bg-[#F8F8FF] z-20 h-[65px]">
            <Input
                size="large"
                className="rounded-[8px] outline-none max-w-[364px]"
                placeholder="Search user name"
                prefix={<AiOutlineSearch onClick={userSearchHandler} />}
            />
            <button
                className="w-[93px] h-[43px] bg-[linear-gradient(180deg,_#EA5FA4_0%,#A52BC7_100%)] flex justify-center items-center text-white gap-x-[9px] shadow-[2px_2px_12px_rgba(0,0,0,0.12)] rounded-[10px] ml-[13px]"
                onClick={() => navigate("/mobile-find-partner/filter-box")}
            >
                <img src={filterIcon} alt="filter" />
                <span>Filter</span>
            </button>
        </div>
    );
};
