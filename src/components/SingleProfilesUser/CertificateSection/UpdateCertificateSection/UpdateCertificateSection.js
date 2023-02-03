import React from "react";
/* component */
import FileUploadSection from "./FileUploadSection/FileUploadSection";
import FileReuploadSection from "./FileReuploadSection/FileReuploadSection";

const UpdateCertificateSection = ({ editFor, selectedCertificate }) => {
  return (
    <div>
      {/* New certificate upload */}
      <FileUploadSection {...{ editFor, selectedCertificate }} />
      {/* File reupload section */}
      <FileReuploadSection {...{ editFor, selectedCertificate }} />
    </div>
  );
};

export default UpdateCertificateSection;
