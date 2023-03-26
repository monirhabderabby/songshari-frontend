import React, { useState, useEffect } from "react";
import SingleShowcasePhoto from "./SingleShowcasePhoto";
import EducationInfo from "./tables/EducationInfo";
import MarriageInfo from "./tables/MarriageInfo";
import ProfessionInfo from "./tables/ProfessionInfo";
import FileReuploadSection from "./UpdateCertificateSection/FileReuploadSection/FileReuploadSection";
import AddNewMarriageCertificate from "./UpdateCertificateSection/FileUploadSection/AddNewMarriageCertificate";
import FileUploadSection from "./UpdateCertificateSection/FileUploadSection/FileUploadSection";

const CertificateDetail = ({ selected, title }) => {
  const [selectedPhoto, setSelectedPhoto] = useState();
  console.log(selected);
  const { degree, institute, department, position } = selected;

  useEffect(() => {
    if (selected) {
      setSelectedPhoto(selected?.certificates[0]);
    }
  }, [selected]);

  return (
    <div>
      <h1 className="text-left font-semibold text-[32px] text-[#333333]">
        {title === "edu"
          ? `${degree || "Degree"} in ${
              department?.toUpperCase() || "a Department"
            } from ${institute || "a institution"}`
          : `${position || "A Position"} in ${institute || "a institute"}`}
      </h1>

      {/* Selected certificate img showing */}
      {selected?.certificates?.length !== 0 && (
        <>
          <div
            style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }}
            className="bg-[#FFFFFF] py-[15px] px-[18px] rounded-[16px]"
          >
            <img
              className="max-h-[1187px] max-w-[800px] rounded-[16px]"
              src={selectedPhoto?.photo}
              alt="view certificate"
            />
          </div>
          <div className="grid grid-cols-5 gap-4 my-3">
            {selected?.certificates?.map((item) => (
              <SingleShowcasePhoto
                {...{ selectedPhoto, setSelectedPhoto, photo: item }}
              />
            ))}
          </div>
        </>
      )}
      
      {title === "marriage" && <MarriageInfo {...{ selected }} />}
      {title === "prof" && <ProfessionInfo {...{ selected }} />}
      {title === "edu" && <EducationInfo {...{ selected }} />}

      {/* file uploading section */}
      {title === "marriage" && (
        <AddNewMarriageCertificate {...{ selected, selectedPhoto }} />
      )}
      {(title === "edu" || title === "prof") && (
        <FileUploadSection {...{ selected, selectedPhoto }} />
      )}
      {selectedPhoto?.status === "askedToResubmit" && (
        <FileReuploadSection {...{ selected, selectedPhoto }} />
      )}
    </div>
  );
};

export default CertificateDetail;
