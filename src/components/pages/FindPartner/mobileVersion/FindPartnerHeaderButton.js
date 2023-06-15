import React from "react";
import { NavLink } from "react-router-dom";

export const FindPartnerHeaderButton = () => {
  return (
    <div className="flex items-center h-[65px] justify-evenly md:justify-center gap-x-[20px] sticky top-[65px] bg-[#F8F8FF] z-50">
      <NavLink to="/mobile-find-partner/suggested">
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "text-[14px] font-bold font-Inter w-[160px] h-[42px] flex justify-center items-center special_profile_button"
                : "text-[14px] font-bold font-Inter w-[168px] h-[42px] flex justify-center items-center special_profile_button_inactive"
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
                ? "text-[14px] font-bold font-Inter w-[65px] h-[42px] flex justify-center items-center special_profile_button"
                : "text-[14px] font-bold font-Inter w-[65px] h-[42px] flex justify-center items-center special_profile_button_inactive"
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
                ? "text-[14px] font-bold font-Inter w-[65px] h-[42px] flex justify-center items-center special_profile_button"
                : "text-[14px] font-bold font-Inter w-[65px] h-[42px] flex justify-center items-center special_profile_button_inactive"
            }
          >
            Top
          </span>
        )}
      </NavLink>
    </div>
  );
};
