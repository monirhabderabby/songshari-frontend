import React from "react";
import review from "../../../assets/images/LawyerProfile/review.png";
import LawyerProfileCSS from "../../../assets/css/LawyerProfile.module.css";

const LawyerServiceDetailsReview = () => {
  return (
    <section className="mt-[80px]">
      <h2 className="text-[#707276] mb-[30px] text-[26px] leading-10">
        Reviews (135)
      </h2>

      <div className="flex justify-between items-center">
        <div
          className={`w-[131px] border-r-[1px] relative ${LawyerProfileCSS.details}`}
        >
          <h5>Wed 10:03am</h5>
          <img className="block" src={review} alt="" />
        </div>
        <div className="bg-[#FFFFFF] ml-[10px] p-[13px] flex items-center w-[657px] h-[76px] border border-[#DFE0E3]">
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
    </section>
  );
};

export default LawyerServiceDetailsReview;
