import React from "react";
import certificate from "../../../assets/images/certificate.jpg";
import { TbMessageCircle2 } from "react-icons/tb";
import ChartBoardCSS from "../../../assets/css/chartBoard.module.css";
import { BottomNav } from "./BottomNav";
import { Link } from "react-router-dom";

const certificateInfo = [
  { id: 1, text: "Personal Certificate", img: certificate },
  { id: 2, text: "Professional Certificate", img: certificate },
  { id: 3, text: "Educational Certificate", img: certificate },
];

export const CertificateMov = () => {
  return (
    <div className="px-6">
      <div className="mt-5">
        <div className="grid grid-cols-3">
          <Link to="/setting">
            <i className="fa-solid fa-chevron-left ml-2 mt-3"></i>
          </Link>
          <h1 className="profile-tit text-center mt-2 mb-5">Certificate</h1>
          <div></div>
        </div>
      </div>
      {/* ----- Certificate ----- */}
      <div
        className="rounded-xl p-6"
        style={{
          backgroundImage: "linear-gradient(180deg, #FFD7F6 0%, #FFC1E6 100%)",
        }}
      >
        <div className="flex justify-center items-center mr-6 gap-4 md:py-2">
          <TbMessageCircle2 className="text-[#333333] text-2xl" />
          <h1 className="text-[#333333] text-2xl leading-[34px] font-bold">
            Certificate
          </h1>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-y-4 justify-center items-center">
          {certificateInfo.map((certificate) => (
            <div key={certificate.id} className="px-6 md:px-8">
              <h3 className="mt-3 mb-2 text-base leading-6 whitespace-nowrap">
                {certificate.text}
              </h3>
              <div className={`relative ${ChartBoardCSS.hasViewButton}`}>
                <img
                  className="rounded-lg"
                  src={certificate.img}
                  alt="Not Available"
                />
                <button
                  className={`${ChartBoardCSS.showViewButton} top-[35%] left-[35%] rounded block bg-white text-sm font-medium leading-[26px] px-4 py-1 duration-300`}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-base tracking-wider text-center px-8 mt-14 mb-14 md:mt-16">
          You can view all of your certificate from here.
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
    </div>
  );
};
