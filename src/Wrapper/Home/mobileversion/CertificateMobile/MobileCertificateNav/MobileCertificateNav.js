import React from "react";

/* third party package */
import { NavLink } from "react-router-dom";

const MobileCertificateNav = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-2 mb-4 w-full font-sans text-sm font-normal text-center">
      <NavLink
        to={"/educationalCertificateMov"}
        className={({ isActive }) =>
          `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center px-2 ${
            isActive
              ? "text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3] whitespace-nowrap"
              : " text-[#000000] bg-[#D0DBFF] whitespace-nowrap w-[160px]"
          }`
        }
      >
        Educational Certificate
      </NavLink>
      <NavLink
        to={"/professionalCertificateMov"}
        className={({ isActive }) =>
          `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center px-2 ${
            isActive
              ? " text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3] whitespace-nowrap"
              : "w-[160px] text-[#000000] bg-[#D0DBFF] whitespace-nowrap"
          }`
        }
      >
        Professional Certificate
      </NavLink>
      <NavLink
        to={"/personalCertificateMov"}
        className={({ isActive }) =>
          `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center px-2 ${
            isActive
              ? "text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3] whitespace-nowrap"
              : "w-[140px] text-[#000000] bg-[#D0DBFF] whitespace-nowrap"
          }`
        }
      >
        Personal Certificate
      </NavLink>
    </div>
  );
};

export default MobileCertificateNav;
