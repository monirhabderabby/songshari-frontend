import React from "react";
import review from "../../../../assets/images/LawyerProfile/review.png";
import LawyerProfileCSS from "../../../../assets/css/LawyerProfile.module.css";

const LawyerServiceDetailsReview = () => {
  return (
    <section className="mt-[80px]">
      <h2 className="text-[#707276] mb-[30px] text-[26px] leading-10">
        Reviews (135)
      </h2>

      <div className="flex justify-between ">
        <div
          className={`w-[131px] text-right border-r-[1px] relative ${LawyerProfileCSS.details}`}
        >
          <h5 className="mr-[20px] text-[10px] text-[#98999C] ">Wed 10:03am</h5>
          <div className="ml-[70px] mt-[10px]">
            <img className="  " src={review} alt="" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] mt-[20px] ml-[10px] p-[13px] flex items-center w-[657px] h-[76px] border border-[#DFE0E3]">
          <div>
            <h6 className="text-[#707276] text-[15px] font-semibold">
              Soner Y.
            </h6>
            <h6 className="text-[14px] text-[#707276]">excellent</h6>
          </div>
          <p className="ml-[30px] uppercase text-[11px] text-[#707276]">
            Leyton, United Kingdom
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div
          className={`w-[131px] text-right border-r-[1px] relative ${LawyerProfileCSS.details}`}
        >
          <h5 className="mr-[20px] text-[10px] text-[#98999C] ">Wed 10:03am</h5>
          <div className="ml-[70px] mt-[10px]">
            <img className="  " src={review} alt="" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] mt-[20px] ml-[10px] p-[13px] flex items-center w-[657px] h-[76px] border border-[#DFE0E3]">
          <div>
            <h6 className="text-[#707276] text-[15px] font-semibold">
              Soner Y.
            </h6>
            <h6 className="text-[14px] text-[#707276]">excellent</h6>
          </div>
          <p className="ml-[30px] uppercase text-[11px] text-[#707276]">
            Leyton, United Kingdom
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div
          className={`w-[131px] text-right border-r-[1px] relative ${LawyerProfileCSS.details}`}
        >
          <h5 className="mr-[20px] text-[10px] text-[#98999C] ">Wed 10:03am</h5>
          <div className="ml-[70px] mt-[10px]">
            <img className="  " src={review} alt="" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] mt-[20px] ml-[10px] p-[13px] flex items-center w-[657px] h-[76px] border border-[#DFE0E3]">
          <div>
            <h6 className="text-[#707276] text-[15px] font-semibold">
              Soner Y.
            </h6>
            <h6 className="text-[14px] text-[#707276]">excellent</h6>
          </div>
          <p className="ml-[30px] uppercase text-[11px] text-[#707276]">
            Leyton, United Kingdom
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[20px]">
        <button className="  rounded-2xl w-[32px] text-[18px] font-semibold h-[32px] bg-[#32353B] text-[#fff]">
          1
        </button>
        <button className="ml-[15px] font-semibold text-[18px] text-black">
          2
        </button>
        <button className="ml-[15px] font-semibold text-[18px] text-black">
          3
        </button>
        <button className="ml-[15px] font-semibold text-[18px] text-black">
          4
        </button>
        <button className="ml-[15px] font-semibold text-[18px] text-black">
          5
        </button>
        <button className="ml-[15px] font-semibold text-[18px] text-black">
          6
        </button>
        <button className="ml-[15px] font-semibold text-[18px] text-black">
          7
        </button>
        <button className="ml-[15px] font-semibold text-[18px] text-black">
          8
        </button>
        <button className="ml-[15px] font-semibold text-[18px] text-black">
          ...
        </button>
        <button className="ml-[15px] font-semibold text-[18px] text-black">
          14
        </button>
        <button className="ml-[20px] font-semibold text-[20px] text-black">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default LawyerServiceDetailsReview;
