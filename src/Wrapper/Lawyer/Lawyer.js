// Configuration
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// Components
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";

const Lawyer = () => {
  return (
    <div>
      <CustomHeader title={"Lawyer Profile"}></CustomHeader>
      {/* Lawyer internal nav */}
      <div className="flex justify-center md:h-[54px] items-center mt-[39px] z-50 mb-16">
        <div className="shadow-[0px_5px_30px_rgba(35,57,184,0.2)] bg-white rounded-[10px] h-full px-[39px]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-[28px] h-full">
            <NavLink to="lawyerService">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "text-[#AC216C] font-medium leading-tight"
                      : "font-medium leading-tight text-gray-800"
                  }
                >
                  Service
                </span>
              )}
            </NavLink>
            <NavLink to="profile">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "text-[#AC216C] font-medium leading-tight"
                      : "font-medium leading-tight text-gray-800"
                  }
                >
                  Profile
                </span>
              )}
            </NavLink>
            <NavLink to="lawyerReview">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "text-[#AC216C] font-medium leading-tight"
                      : "font-medium leading-tight text-gray-800"
                  }
                >
                  Review
                  <sup className="text-white bg_Color px-[6px] py-1 rounded-full text-[10px]">
                    04
                  </sup>
                </span>
              )}
            </NavLink>
            <NavLink to="lawyerActivity">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "text-[#AC216C] font-medium leading-tight"
                      : "font-medium leading-tight text-gray-800"
                  }
                >
                  Activity
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Lawyer;
