import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../../App.css";
import "../../../assets/css/customHeader.css";
import NavBar from "../../pages/Shared/NavBar";

export const CustomHeader = ({ title }) => {
    return (
        <div className="h-[30vh] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">
            <NavBar />

            <div className="hidden sm:flex h-[calc(30vh-90px)] flex-col justify-center max-w-[1200px] mx-auto f">
                <h1 className="text-[50px] text-white font-fira leading-[60px] font-bold">{title}</h1>
                <div className="flex items-center text-[#ffd0fd] text-[18px]">
                    <Link to="/" className="hover:text-white font-bold">
                        HOME
                    </Link>{" "}
                    <IoIosArrowForward /> {title}
                </div>
            </div>
        </div>
    );
};

export default CustomHeader;
