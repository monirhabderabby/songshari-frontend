import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../../App.css";

export const Members = () => {
    return (
        <div className="h-[264px] w-full bg-primary">
            <div className="custom-container flex h-full justify-start items-center">
                <div>
                    <h1 className="pb-[15px] text-white text-[50px] leading-[60px] font-bold font-fira">Members</h1>
                    <div className="flex items-center text-[#ffd0fd] text-[18px]">
                        <Link to="/">HOME</Link> <IoIosArrowForward /> Members
                    </div>
                </div>
            </div>
        </div>
    );
};
