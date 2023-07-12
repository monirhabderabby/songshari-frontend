// configuration
import React, { useState, useEffect } from "react";

// Components
import { useGetCertificatesWithAuthQuery } from "../../../../../Redux/features/Documents/documentsApi";
import { BottomNav } from "../../BottomNav";
import AllCertificateImgMobile from "../AllCertificateImgMobile/AllCertificateImgMobile";
import MobileCertificateNav from "../MobileCertificateNav/MobileCertificateNav";

const PersonalCertificateMobile = () => {
  // hook variable declaration
  const [certificateId, setCertificateId] = useState(0);
  const [certificates, setCertificates] = useState([]);

  // Redux API calls
  const { data: response } = useGetCertificatesWithAuthQuery();

  // useEffect declaration
  useEffect(() => {
    if (response) {
      setCertificates(response?.data?.educations);
    }
  }, [response]);

  return (
    <div className="bg-[#FAFBFF] h-full">
      <div className="px-7 pt-2 font-sans ">
        <div className="">
          {/* certificate navigation */}
          <div className="">
            <h1 className="text-left font-semibold text-[16px] text-[#333333]">
              Certificate
            </h1>
            <MobileCertificateNav />

            {/* Selected certificate img showing */}
            <div
              style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }}
              className="bg-[#FFFFFF] p-2 rounded-[16px]"
            >
              <img
                className="max-h-[335px]"
                src={certificates[certificateId]?.certificatePhoto}
                alt="view certificate"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {certificates.map((certificate, index) => (
              <AllCertificateImgMobile
                key={certificate._id}
                index={index}
                certificateFor="education"
                certificate={certificate}
                setCertificateId={setCertificateId}
                certificateId={certificateId}
              />
            ))}
          </div>
        </div>
        <div className="h-20"></div>
      </div>
      <BottomNav />
    </div>
  );
};

export default PersonalCertificateMobile;
