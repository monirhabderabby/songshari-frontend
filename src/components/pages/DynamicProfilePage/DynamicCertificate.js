import React from "react";
// Third party packages
import { Link } from "react-router-dom";
/* icon & img */
import chat from '../../../assets/images/user profile/chatIcon.png';
import certificate from "../../../assets/images/certificate.jpg";
/* components */
import { YouMayLike } from "../../SingleProfilesUser/chatboard/YouMayLike/YouMayLike";
/* css */
import ChartBoardCSS from "../../../assets/css/chartBoard.module.css";

const DynamicCertificate = () => {
  const certificateInfo = [
    { id: 1, text: "Personal Certificate", img: certificate, path: "/personalCertificate" },
    { id: 2, text: "Professional Certificate", img: certificate, path: "/professionalCertificate" },
    { id: 3, text: "Educational Certificate", img: certificate, path: "/educationalCertificate" },
  ];

  return (
    <div>
      {/* ----- Certificate ----- */}
      <div className="rounded-xl p-5 font-sans font-normal text-base text-[#000000]" style={{ backgroundImage: "linear-gradient(180deg, #FFD7F6 0%, #FFC1E6 100%)" }}>
        <div className="flex justify-start items-center mx-1 gap-[25px]">
          <img className="h-6 w-[27px]" src={chat} alt="chat icon" />
          <h1 className="text-[#333333] text-2xl font-semibold">Certificate</h1>
        </div>
        {certificateInfo.map((certificate) => (
          <div key={certificate.id}>
            <h3 className="mt-3 mb-2">{certificate.text}</h3>
            <div className={`relative ${ChartBoardCSS.hasViewButton}`}>
              <img className="rounded-lg" src={certificate.img} alt="Not Available" />
              <Link to={certificate.path} className={`${ChartBoardCSS.showViewButton} top-[35%] left-[35%] rounded block bg-white text-sm font-medium px-4 py-1 duration-300`}>View</Link>
            </div>
          </div>
        ))}
      </div>

      {/* ----- You may like ----- */}
      <YouMayLike />
    </div>
  );
};

export default DynamicCertificate;
