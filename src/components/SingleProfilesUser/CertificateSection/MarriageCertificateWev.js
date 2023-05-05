// configuration
import React, { useEffect, useState } from "react";
import { bindParentIdWithPhotos } from "../../../assets/utilities/certificates/certificate";

// Third party packages
import { useGetMarriageCertificateByAuthQuery } from "../../../Redux/features/Documents/documentsApi";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import CertificateNav from "./CertificateNav";
import AllCertificateImg from "./UpdateCertificateSection/AllCertificateImg/AllCertificateImg";
import UpLoadMarriageCertificate from "./UpdateCertificateSection/UploadMarriageCertificate";

const MarriageCertificateWev = () => {
  // hook variable declaration
  const [certificates, setCertificates] = useState([]);
  const [selected, setSelected] = useState(certificates[0] || {});


  // Redux API calls
  const { data: response } = useGetMarriageCertificateByAuthQuery();

  // useEffect declaration
  useEffect(() => {
    if (response) {
      setCertificates(bindParentIdWithPhotos(response?.data));
    }
  }, [response]);

  useEffect(() => {
    if (certificates) {
      setSelected(certificates[0])
    }
  }, [certificates]);

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
            {response?.data?.length !== 0 && (
              <div
                style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }}
                className="bg-[#FFFFFF] py-[15px] px-[18px] rounded-[16px] mb-8"
              >
                <img
                  className="h-[1187px] w-[800px] rounded-[16px]"
                  src={selected?.photo || certificates[0]?.photo}
                  alt="view certificate"
                />
              </div>
            )}

            {/* file uploading section */}
            <UpLoadMarriageCertificate selectedCertificate={selected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarriageCertificateWev;
