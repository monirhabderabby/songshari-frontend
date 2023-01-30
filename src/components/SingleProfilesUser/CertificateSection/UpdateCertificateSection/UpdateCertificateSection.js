import React from "react";
/* component */
import FileUploadSection from "./FileUploadSection/FileUploadSection";
import FileReuploadSection from "./FileReuploadSection/FileReuploadSection";

const UpdateCertificateSection = ({ selectedCertificate }) => {
  return (
    <div>
      {/* New certificate upload */}
      <FileUploadSection />
      {/* File reupload section */}
      <FileReuploadSection {...{ selectedCertificate }} />
    </div>
  );
};

export default UpdateCertificateSection;
