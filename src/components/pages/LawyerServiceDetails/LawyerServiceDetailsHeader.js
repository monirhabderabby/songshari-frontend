import React from "react";

const LawyerServiceDetailsHeader = () => {
  return (
    <>
      <div
        style={{ boxShadow: "0px 5px 30px rgba(35, 57, 184, 0.2)" }}
        className=" mx-auto w-[523px] rounded-[10px] py-[20px] px-8 flex justify-around items-center bg-[#FFFFFF]"
      >
        <a className="text-[15px] font-semibold text-[#AC216C] " href="!#">
          Service
        </a>
        <a className="text-[15px] font-semibold text-[#000]" href="!#">
          Profile
        </a>

        <a
          className="text-[15px] relative inline-block font-semibold text-[#000]"
          href="!#"
        >
          Review
          <span
            style={{
              background: "linear-gradient(166deg, #F22876 0%, #942DD9 100%)",
            }}
            className="  text-[8px] absolute top-[-7px] right-[-18px] font-semibold rounded-[30px] py-[3px] px-[7px] text-white"
          >
            4
          </span>
        </a>

        <a className="text-[15px] font-semibold text-[#000]" href="!#">
          Activity
        </a>
      </div>
    </>
  );
};

export default LawyerServiceDetailsHeader;
