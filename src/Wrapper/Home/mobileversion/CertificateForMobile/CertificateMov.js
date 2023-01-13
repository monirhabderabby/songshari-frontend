// Configuration
import React, { useEffect, useState } from "react";
import { useGetCertificatesWithAuthQuery } from "../../../../Redux/features/Documents/documentsApi";

// Components
import { CertificateMobileHeaderButton } from "./CertificateMobileHeaderButton";
import { EducationalCertificateForMov } from "./EducationalCertificateForMov";
import { ProfessionalCertificateMov } from "./ProfessionalCertificateMov";
import { SelectedCertificateForMov } from "./SelectedCertificateForMov";

export const CertificateMov = () => {
    // hook variable declaration
    const [selectedCertificate, setSelectedCertificate] = useState("");
    const [selectedCertificateName, setSelectedCertificateName] = useState("");
    const [page, setPage] = useState(1);

    // Redux Api Call
    const { data: allCertificates } = useGetCertificatesWithAuthQuery();

    useEffect(() => {
        setSelectedCertificate("");
    }, [page]);

    // js variable declaration
    let educationalCertificates;
    let professionalCertificates;

    if (allCertificates?.success) {
        console.log(allCertificates);
        educationalCertificates = allCertificates.data?.educations || [];
        professionalCertificates = allCertificates.data?.professions || [];
    }
    return (
        <div className="px-[27px] lg:hidden bg-[#F8F8FF] min-h-screen">
            <p className="text-[#333333] font-semibold text-[16px] font-fira pt-[4px]">Certificate</p>
            <CertificateMobileHeaderButton {...{ setPage, page }} />
            <SelectedCertificateForMov {...{ selectedCertificate, selectedCertificateName }} />
            {page === 2 && (
                <ProfessionalCertificateMov
                    {...{ setSelectedCertificate, selectedCertificate, professionalCertificates, setSelectedCertificateName }}
                />
            )}
            {page === 1 && (
                <EducationalCertificateForMov
                    {...{ setSelectedCertificate, selectedCertificate, educationalCertificates, setSelectedCertificateName }}
                />
            )}
        </div>
    );
};
