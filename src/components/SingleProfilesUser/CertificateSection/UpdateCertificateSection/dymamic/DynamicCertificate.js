// configuration
import React, { useEffect, useState } from "react";
import { useGetCertificateByIdQuery } from "../../../../../Redux/features/Documents/documentsApi";
import AllCertificateImg from "../AllCertificateImg/AllCertificateImg";
import DynamicNav from "./DynamicNav";
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import DynamicCertificateDetail from "./DynamicCertificateDetail";
import { useParams } from "react-router";
import { LineWaveLoader } from "../../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";

// components

const DynamicCertificate = ({ title }) => {
  const {id} = useParams()
  // hook variable declaration
  const [selected, setSelected] = useState(null);
  const [certificateData, setCertificateData] = useState()

  //Redux API calls
  const { data: response,isLoading } = useGetCertificateByIdQuery(id);

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
      <DynamicNav />
      {isLoading && <div>
        <LineWaveLoader />
      </div>}
      {!isLoading && certificateData?.length!==0 && <div className="mx-auto max-w-[1200px] font-sans">
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
            {(selected || title==="marriage") && <DynamicCertificateDetail {...{ selected, title }} />}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default DynamicCertificate;
