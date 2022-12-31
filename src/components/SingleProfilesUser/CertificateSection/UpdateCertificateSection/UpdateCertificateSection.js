import React from "react";
/* component */
import FileUploadSection from "./FileUploadSection/FileUploadSection";
import FileReuploadSection from "./FileReuploadSection/FileReuploadSection";

const UpdateCertificateSection = () => {

    return (
        <div>
            {/* New certificate upload */}
            <FileUploadSection />
            {/* File reupload section */}
            <FileReuploadSection />
        </div>
    );
};

export default UpdateCertificateSection;
