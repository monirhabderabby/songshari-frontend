import React from "react";

export const CertificateMobileHeaderButton = ({ page, setPage }) => {
    return (
      <div className="mt-[4px] grid grid-cols-2 md:grid-cols-3 gap-[18px]">
        <button
          className={`max-w-[159px] h-[41px] flex justify-center items-center text-[14px] font-normal font-fira   rounded-[10px] ${
            page === 1
              ? "bg-[linear-gradient(106.79deg,_#E52982_25.24%,_#A72BC3_88.25%)] text-white"
              : "text-[#000000] bg-[#D0DBFF]"
          }`}
          onClick={() => setPage(1)}
        >
          Educational certificate
        </button>
        <button
          className={`max-w-[159px] h-[41px] flex justify-center items-center text-[14px] font-normal font-fira   rounded-[10px] ${
            page === 2
              ? "bg-[linear-gradient(106.79deg,_#E52982_25.24%,_#A72BC3_88.25%)] text-white"
              : "text-[#000000] bg-[#D0DBFF]"
          }`}
          onClick={() => setPage(2)}
        >
          Professional certificate
        </button>
        <button
          className={`max-w-[159px] h-[41px] flex justify-center items-center text-[14px] font-normal font-fira   rounded-[10px] ${
            page === 4
              ? "bg-[linear-gradient(106.79deg,_#E52982_25.24%,_#A72BC3_88.25%)] text-white"
              : "text-[#000000] bg-[#D0DBFF]"
          }`}
          onClick={() => setPage(4)}
        >
          Marriage Certificate
        </button>
      </div>
    );
};
