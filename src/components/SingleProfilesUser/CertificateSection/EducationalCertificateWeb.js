// configuration
import React, { useEffect, useState } from "react";

// components
import { useGetCertificatesWithAuthQuery } from "../../../Redux/features/Documents/documentsApi";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import CertificateDetail from "./CertificateDetail";
import CertificateNav from "./CertificateNav";
import AllCertificateImg from "./UpdateCertificateSection/AllCertificateImg/AllCertificateImg";

const EducationalCertificateWeb = ({title}) => {
  // hook variable declaration
  const [selected, setSelected] = useState(null);
  const [certificateData, setCertificateData] = useState()

  //Redux API calls
  const { data: response } = useGetCertificatesWithAuthQuery();
  console.log(response)

  // useEffect declaration
  useEffect(() => {
    if (response) {
      setCertificateData(
        title === "edu"
          ? response?.data?.educations
          : title === "prof"
          ? response?.data?.professions
          : response?.data?.marriages
      );
    }
  }, [response, title]);
  useEffect(() => {
    if (certificateData) {
      setSelected(certificateData[0]);
    }
  },[certificateData])

  return (
    <div className="bg-[#FAFBFF]">
      {/* header section */}
      <CustomHeader title={"Photos"} />
      <CertificateNav />
      <div className="mx-auto max-w-[1200px] font-sans">
        <div className="flex pt-[58px] gap-[51px]">
          {/* Left side all certificates img */}
          <div className="w-[349px]">
            {certificateData?.map((education, index) => (
              <AllCertificateImg
                key={education._id}
                education={education}
                setSelected={setSelected}
                selected={selected}
              />
            ))}
          </div>
          {/* certificate navigation */}
          <div className="w-[800px]">
            {selected && <CertificateDetail {...{ selected, title }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalCertificateWeb;
