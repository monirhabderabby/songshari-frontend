import React, { useEffect } from "react";

export const EducationalCertificateForMov = ({
    setSelectedCertificate,
    selectedCertificate,
    educationalCertificates,
    setSelectedCertificateName,
}) => {
    // useEffect declaration
    useEffect(() => {
        if (educationalCertificates) {
            setSelectedCertificate(educationalCertificates[0]?.certificatePhoto);
            setSelectedCertificateName(educationalCertificates[0]?.degree);
        }
    }, [educationalCertificates, setSelectedCertificate, setSelectedCertificateName]);

    return (
        <div className="mt-[14px] w-full grid grid-cols-3 gap-[11px]">
            {educationalCertificates?.map(certificate => {
                return (
                    <div key={certificate._id} className="flex flex-col gap-y-[10px] items-start">
                        <p className="text-[9px] text-left ml-[3px]">{certificate.degree}</p>
                        <div className="relative">
                            <img
                                className={`w-[104px] text-[#000000] font-medium font-fira h-[70px] rounded-[12px] ${
                                    selectedCertificate === certificate.certificatePhoto &&
                                    "border-[2px] border-[#E41272] shadow-[3px_3px_12px_rgba(0,0,0,0.12)]"
                                }`}
                                src={certificate.certificatePhoto}
                                alt="certificate"
                                onClick={() => {
                                    setSelectedCertificate(certificate.certificatePhoto);
                                    setSelectedCertificateName(certificate.degree);
                                }}
                            />
                            {selectedCertificate === certificate.certificatePhoto && (
                                <button className="text-white text-[10px] font-fira font-medium bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] flex justify-center items-center px-[8px] py-[6px] rounded-[10px] relative top-[-50%] left-[20%]">
                                    Selected
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
