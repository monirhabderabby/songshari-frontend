import React from "react";
/* component */
import FileUploadSection from "./FileUploadSection/FileUploadSection";
import FileReuploadSection from "./FileReuploadSection/FileReuploadSection";

const UpdateCertificateSection = () => {

    return (
        <div className="mx-auto max-w-[1200px] bg-[#FAFBFF] pt-[58px] font-sans ">
            {/* New certificate upload */}
            <FileUploadSection />
            {/* File reupload section */}
            <FileReuploadSection />
        </div>
    );
};

export default UpdateCertificateSection;
