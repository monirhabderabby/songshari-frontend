// Configuration
import React from "react";

// Third party packgae
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router";

export const MobileBackButton = ({ name }) => {
    const navigate = useNavigate();
    return (
        <section className="sticky top-0 z-50 left-0 max-w-[1024px] mx-auto">
            <div className="h-[60px] bg-white text-black relative shadow-[rgba(0,0,0,0.15)_1.95px_1.95px]">
                <div className="absolute top-[18px] left-[12px] text-[#1E2022] cursor-pointer" onClick={() => navigate(-1)}>
                    <MdOutlineArrowBackIos className="h-[24px] w-[24px]" />
                </div>
                <div className="w-full h-full flex justify-center items-center text-[#1E2022] text-[18px] font-Inter font-normal">{name}</div>
            </div>
        </section>
    );
};
