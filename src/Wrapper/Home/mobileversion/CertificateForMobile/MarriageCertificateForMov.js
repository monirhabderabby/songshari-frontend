import React from "react";
import { Toaster } from "react-hot-toast";
import FileReuploadSection from "../../../../components/SingleProfilesUser/CertificateSection/UpdateCertificateSection/FileReuploadSection/FileReuploadSection";
import AddNewMarriageCertificate from "../../../../components/SingleProfilesUser/CertificateSection/UpdateCertificateSection/FileUploadSection/AddNewMarriageCertificate";

export const MarriageCertificateForMov = ({
  id,
  setSelectedCertificate,
  selectedCertificate,
  selected
}) => {
  const { certificates } = selected || {};
  return (
    <div className="mt-[14px]">
      <div className="w-full grid grid-cols-3 gap-[11px]">
        {certificates?.map((certificate) => {
          return (
            <div
              key={certificate?._id}
              className="flex flex-col gap-y-[10px] items-start"
            >
              <p className="text-[9px] ml-[3px] ">{certificate.name}</p>
              <div className="relative">
                <img
                  className={`w-[104px] text-[#000000] font-medium font-fira h-[70px] rounded-[12px] ${
                    selectedCertificate?._id === certificate?._id &&
                    "border-[2px] border-[#E41272] shadow-[3px_3px_12px_rgba(0,0,0,0.12)]"
                  }`}
                  src={certificate?.photo}
                  alt="certificate"
                  onClick={() => {
                    setSelectedCertificate(certificate);
                  }}
                />
                {selectedCertificate?._id === certificate?._id && (
                  <button className="text-[10px] font-fira font-medium special_profile_button flex justify-center items-center px-[8px] py-[6px] relative top-[-50%] left-[20%]">
                    Selected
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {selectedCertificate?.status === "askedToResubmit" && !id && (
        <FileReuploadSection {...{ selectedPhoto:selectedCertificate,selected }} />
      )}
      {!id && <div className="w-full">
        <AddNewMarriageCertificate selected={selected} />
      </div>}
      <Toaster />
    </div>
  );
};
