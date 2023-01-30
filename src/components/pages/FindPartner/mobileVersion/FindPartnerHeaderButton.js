import React from "react";
import { NavLink } from "react-router-dom";

export const FindPartnerHeaderButton = () => {
    return (
        <div className="flex items-center h-[65px] justify-evenly md:justify-center gap-x-[25px] sticky top-[65px] bg-[#F8F8FF]">
            <NavLink to="/mobile-find-partner/suggested">
                {({ isActive }) => (
                    <span
                        className={
                            isActive
                                ? "text-[14px] font-bold font-Inter w-[168px] h-[42px] flex justify-center items-center bg-[linear-gradient(155deg,#E41242_0%,#4844A5_100%)] shadow-[2px_2px_8px_rgba(0,0,0,0.1)] rounded-[5px] text-white"
                                : "text-[14px] font-bold font-Inter w-[168px] h-[42px] flex justify-center items-center shadow-[2px_2px_8px_rgba(0,0,0,0.1)] bg-white rounded-[5px] text-black"
                        }
                    >
                        Suggested For You
                    </span>
                )}
            </NavLink>
            <NavLink to="/mobile-find-partner/new-partners">
                {({ isActive }) => (
                    <span
                        className={
                            isActive
                                ? "text-[14px] font-bold font-Inter h-[42px] w-[65px] flex justify-center items-center text-white bg-[linear-gradient(155deg,#E41242_0%,#4844A5_100%)] shadow-[2px_2px_8px_rgba(0,0,0,0.1)] rounded-[5px]"
                                : "text-[14px] font-bold font-Inter py-[9px] px-[25px] text-black bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.1)] rounded-[5px] h-[42px] w-[65px] flex justify-center items-center"
                        }
                    >
                        New
                    </span>
                )}
            </NavLink>
            <NavLink to="/mobile-find-partner/top-partners">
                {({ isActive }) => (
                    <span
                        className={
                            isActive
                                ? "text-[14px] font-bold font-Inter h-[42px] w-[65px] flex justify-center items-center text-white bg-[linear-gradient(155deg,#E41242_0%,#4844A5_100%)] shadow-[2px_2px_8px_rgba(0,0,0,0.1)] rounded-[5px]"
                                : "text-[14px] font-bold font-Inter py-[9px] px-[25px] text-black bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.1)] rounded-[5px] h-[42px] w-[65px] flex justify-center items-center"
                        }
                    >
                        Top
                    </span>
                )}
            </NavLink>
        </div>
    );
};
