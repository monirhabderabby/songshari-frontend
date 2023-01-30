// Configuration
import React from "react";

// Third party packgae
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router";

export const MobileBackButton = ({ name, icon }) => {
    const navigate = useNavigate();
    return (
        <section className="sticky top-0 z-50">
            <div className="h-[60px] bg-white text-black relative">
                <div className="absolute top-[18px] left-[15px] text-[#1E2022] cursor-pointer" onClick={() => navigate(-1)}>
                    <MdOutlineArrowBackIos className="h-[24px] w-[24px]" />
                </div>
                <div className="w-full h-full flex justify-center items-center text-[#1E2022] text-[18px] font-Inter font-normal">{name}</div>
            </div>
        </section>
    );
};
