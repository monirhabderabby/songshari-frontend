// configuration
import React, { useEffect, useState } from "react";
import { bindParentIdWithPhotos } from "../../../assets/utilities/certificates/certificate";

// components
import { useGetCertificatesWithAuthQuery } from "../../../Redux/features/Documents/documentsApi";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import CertificateNav from "./CertificateNav";
import AllCertificateImg from "./UpdateCertificateSection/AllCertificateImg/AllCertificateImg";
import UpdateCertificateSection from "./UpdateCertificateSection/UpdateCertificateSection";

const EducationalCertificateWeb = () => {
  // hook variable declaration
  const [selected, setSelected] = useState({});
  const [certificates, setCertificates] = useState([]);

  //Redux API calls
  const { data: response } = useGetCertificatesWithAuthQuery();

  // useEffect declaration
  useEffect(() => {
    if (response) {
      setCertificates(bindParentIdWithPhotos(response?.data?.educations));
    }
  }, [response]);

  return (
    <div className="bg-[#FAFBFF]">
      {/* header section */}
      <CustomHeader title={"Photos"} />

      <div className="mx-auto max-w-[1200px] font-sans ">
        <div className="flex pt-[58px] gap-[51px]">
          {/* Left side all certificates img */}
          <div className="w-[349px]">
            {certificates.map((certificate, index) => (
              <AllCertificateImg
                key={certificate._id}
                certificate={certificate}
                setSelected={setSelected}
                selected={selected}
              />
            ))}
          </div>

          {/* certificate navigation */}
          <div className="w-[800px]">
            <h1 className="text-left font-semibold text-[32px] text-[#333333]">
              Certificate
            </h1>
            <CertificateNav />

            {/* Selected certificate img showing */}
            <div
              style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }}
              className="bg-[#FFFFFF] py-[15px] px-[18px] rounded-[16px]"
            >
              <img
                className="max-h-[1187px] max-w-[800px] rounded-[16px]"
                src={selected?.photo}
                alt="view certificate"
              />
            </div>

            {/* file uploading section */}
            <UpdateCertificateSection
              editFor="educational"
              selectedCertificate={selected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalCertificateWeb;
