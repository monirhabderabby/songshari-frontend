// configuration
import React from "react";

// Third party packages, ex: redux
import { Link } from "react-router-dom";

// components
import { TbMessageCircle2 } from "react-icons/tb";
import certificate from "../../../assets/images/certificate.jpg";
import { YouMayLike } from "./YouMayLike/YouMayLike";

// css files
import ChartBoardCSS from "../../../assets/css/chartBoard.module.css";

const ChartBoard = () => {
  const certificateInfo = [
    {
      id: 1,
      text: "Personal Certificate",
      img: certificate,
      link: "/personalCertificate",
    },
    {
      id: 2,
      text: "Professional Certificate",
      img: certificate,
      link: "/professionalCertificate",
    },
    {
      id: 3,
      text: "Educational Certificate",
      img: certificate,
      link: "/educationalCertificate",
    },
  ];

  return (
    <div>
      {/* ----- Certificate ----- */}
      <div
        className="rounded-xl p-5"
        style={{
          backgroundImage: "linear-gradient(180deg, #FFD7F6 0%, #FFC1E6 100%)",
        }}
      >
        <div className="flex justify-start items-center mx-1 gap-6">
          <TbMessageCircle2 className="text-[#333333] text-2xl" />
          <h1 className="text-[#333333] text-2xl leading-[34px] font-bold">
            Certificate
          </h1>
        </div>
        {certificateInfo.map((certificate) => (
          <div key={certificate.id}>
            <h3 className="mt-3 mb-2">{certificate.text}</h3>
            <div className={`relative ${ChartBoardCSS.hasViewButton}`}>
              <img
                className="rounded-lg"
                src={certificate.img}
                alt="Not Available"
              />
              <Link
                to={certificate.link}
                className={`${ChartBoardCSS.showViewButton} top-[35%] left-[35%] rounded block bg-white text-sm font-medium leading-[26px] px-4 py-1 duration-300`}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ----- You may like ----- */}
      <YouMayLike />
    </div>
  );
};

export default ChartBoard;
