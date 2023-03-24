import React from "react";
/* component */
import FileUploadSection from "./FileUploadSection/FileUploadSection";
import FileReuploadSection from "./FileReuploadSection/FileReuploadSection";
import AddNewMarriageCertificate from "./FileUploadSection/AddNewMarriageCertificate";

const UpLoadMarriageCertificate = ({ editFor, selectedCertificate }) => {
  console.log(selectedCertificate);
  return (
    <div>
      {/* New certificate upload */}
      <AddNewMarriageCertificate selectedCertificate={selectedCertificate}/>
      {/* File reupload section */}
      {selectedCertificate?.status === "askedToResubmit" && (
        <FileReuploadSection {...{ editFor, selectedCertificate }} />
      )}
    </div>
  );
};

export default UpLoadMarriageCertificate;
