import React from 'react';
/* third party package */
import { NavLink } from "react-router-dom";

const CertificateNav = () => {
    return (
      <div className="mx-auto max-w-[1200px] grid grid-cols-4 gap-4 my-10 w-full font-sans font-normal text-center">
        <NavLink
          to={"/educationalCertificate"}
          className={({ isActive }) =>
            `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center ${
              isActive
                ? "lg:font-semibold md:font-medium font-normal lg:text-2xl md:text-xl text-lg text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3] whitespace-nowrap"
                : "lg:text-2xl md:text-xl text-lg text-[#000000] bg-[#D0DBFF] whitespace-nowrap"
            }`
          }
        >
          Educational Certificate
        </NavLink>
        <NavLink
          to={"/professionalCertificate"}
          className={({ isActive }) =>
            `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center ${
              isActive
                ? "lg:font-semibold md:font-medium font-normal lg:text-2xl md:text-xl text-lg text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3] whitespace-nowrap"
                : "lg:text-2xl md:text-xl text-lg text-[#000000] bg-[#D0DBFF] whitespace-nowrap"
            }`
          }
        >
          Professional Certificate
        </NavLink>
        <NavLink
          to={"/personalCertificate"}
          className={({ isActive }) =>
            `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center ${
              isActive
                ? "lg:font-semibold md:font-medium font-normal lg:text-2xl md:text-xl text-lg text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3] whitespace-nowrap"
                : "lg:text-2xl md:text-xl text-lg text-[#000000] bg-[#D0DBFF] whitespace-nowrap"
            }`
          }
        >
          Personal Certificate
        </NavLink>
        <NavLink
          to={"/marriageCertificate"}
          className={({ isActive }) =>
            `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center ${
              isActive
                ? "lg:font-semibold md:font-medium font-normal lg:text-2xl md:text-xl text-lg text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3] whitespace-nowrap"
                : "lg:text-2xl md:text-xl text-lg text-[#000000] bg-[#D0DBFF] whitespace-nowrap"
            }`
          }
        >
          Marriage Certificate
        </NavLink>
      </div>
    );
};

export default CertificateNav;