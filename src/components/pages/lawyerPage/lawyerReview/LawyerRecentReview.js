import React from "react";
import bg2 from "../../../../assets/images/LawyerProfile/LawyerReviewBG (1).png";
import bg1 from "../../../../assets/images/LawyerProfile/LawyerReviewBG.png";
import { recentReview } from "./LawyerReviewData";
const LawyerRecentReview = () => {
  return (
    <section className="bg-[#FFE2EF]  py-[91px]">
      <h1 className="text-[#E41272] text-base font-semibold text-center pb-[24px]">
        You Avarage Rating Is 4.5 out of 5
      </h1>
      <h2 className="text-[#090914] mb-[92px] text-center text-[52px] font-semibold">
        Recent Review{" "}
      </h2>
      <div className="custom-container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex justify-center items-center">
            <div>
              <img src={bg1} alt="Not Available" />
            </div>
            <div className="pl-6">
              <div className="text-[#E41272] text-[14px]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid pl-1 fa-star"></i>
                <i className="fa-solid pl-1 fa-star"></i>
                <i className="fa-solid pl-1 fa-star"></i>
                <i className="fa-solid pl-1 fa-star"></i>
              </div>
              <p className="w-[346px] pt-6 text-lg text-[#090914] font-medium">
                "We love it ! Our designers were using it for their projects, so
                we already knew what kind of design they want." cheeers
              </p>
              <h1 className="mt-5 text-base">
                <span className=" text-[#090914] font-semibold">
                  Jenny Wilson
                </span>
                <span className="text-[#64748B] pl-2">Grower.io</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img src={bg2} alt="Not Available" />
            </div>
            <div className="pl-6">
              <div className="text-[#E41272] text-[14px]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid pl-1 fa-star"></i>
                <i className="fa-solid pl-1 fa-star"></i>
                <i className="fa-solid pl-1 fa-star"></i>
                <i className="fa-solid pl-1 fa-star"></i>
              </div>
              <p className="w-[346px] pt-6 text-lg text-[#090914] font-medium">
                "We love it ! Our designers were using it for their projects, so
                we already knew what kind of design they want." cheeers
              </p>
              <h1 className="mt-5 text-base">
                <span className=" text-[#090914] font-semibold">
                  Jenny Wilson
                </span>
                <span className="text-[#64748B] pl-2">Grower.io</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="pt-[92px] max-w-[1048px] mx-auto  justify-center items-center grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 gap-5">
          {recentReview.map((data) => (
            <div>
              <div className="bg-[#FFFFFF] border rounded-md border-[#DEDEDE] py-[30px] px-[35px]">
                <div className="text-[#E41272] pb-[15px] text-[14px]">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid pl-1 fa-star"></i>
                  <i className="fa-solid pl-1 fa-star"></i>
                  <i className="fa-solid pl-1 fa-star"></i>
                  <i className="fa-solid pl-1 fa-star"></i>
                </div>
                <p className="text-sm text-[#737373]">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="flex  items-center justify-center pt-[10px]">
                  <img src={data.img} alt="Not Available" />
                  <div className="ml-3">
                    <h3 className="text-sm text-[#E41272] font-bold">
                      Regina Miles
                    </h3>
                    <h3 className="text-sm text-[#252B42] font-bold">
                      Designer
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawyerRecentReview;
