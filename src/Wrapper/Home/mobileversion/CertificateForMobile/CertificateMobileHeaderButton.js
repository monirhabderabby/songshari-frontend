import React from "react";

export const CertificateMobileHeaderButton = ({ page, setPage }) => {
    return (
      <div className="mt-[4px] grid grid-cols-2 md:grid-cols-3 gap-[14px]">
        <button
          className={`max-w-[170px] h-[41px] flex justify-center items-center text-[12px] px-2 font-normal font-fira ${
            page === 1
              ? "special_profile_button"
              : "special_profile_button_inactive"
          }`}
          onClick={() => setPage(1)}
        >
          Educational certificate
        </button>
        <button
          className={`max-w-[170px] h-[41px] flex justify-center items-center text-[12px] px-2 font-normal font-fira ${
            page === 2
              ? "special_profile_button"
              : "special_profile_button_inactive"
          }`}
          onClick={() => setPage(2)}
        >
          Professional certificate
        </button>
        <button
          className={`max-w-[170px] h-[41px] flex justify-center items-center text-[12px] font-normal font-fira ${
            page === 4
              ? "special_profile_button"
              : "special_profile_button_inactive"
          }`}
          onClick={() => setPage(4)}
        >
          Marriage Certificate
        </button>
      </div>
    );
};
