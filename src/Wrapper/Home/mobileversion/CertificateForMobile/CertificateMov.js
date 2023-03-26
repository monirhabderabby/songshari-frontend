/* eslint-disable react-hooks/exhaustive-deps */
// Configuration
import React, { useEffect, useState } from "react";
import { bindParentIdWithPhotos } from "../../../../assets/utilities/certificates/certificate";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { useGetCertificatesWithAuthQuery } from "../../../../Redux/features/Documents/documentsApi";
import { BottomNav } from "../BottomNav";

// Components
import { CertificateMobileHeaderButton } from "./CertificateMobileHeaderButton";
import { MarriageCertificateForMov } from "./MarriageCertificateForMov";
// import { EducationalCertificateForMov } from "./EducationalCertificateForMov";
import { ProfessionalCertificateMov } from "./ProfessionalCertificateMov";
import { SelectedCertificateForMov } from "./SelectedCertificateForMov";

export const CertificateMov = () => {
  // hook variable declaration
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedCertificateName, setSelectedCertificateName] = useState("");
  const [page, setPage] = useState(1);
  const [profPhoto, setProfPhoto] = useState([]);
  const [eduPhoto, setEduPhoto] = useState([]);
  const [marriagePhoto, setMarriagePhoto] = useState([]);

  // Redux Api Call
  const { data: allCertificates } = useGetCertificatesWithAuthQuery();

  useEffect(() => {
    if (allCertificates) {
      setProfPhoto(bindParentIdWithPhotos(allCertificates?.data?.professions));
      setEduPhoto(bindParentIdWithPhotos(allCertificates?.data?.educations));
      setMarriagePhoto(
        bindParentIdWithPhotos(allCertificates?.data?.marriages)
      );
    }
  }, [allCertificates]);

  useEffect(() => {
    // setSelectedCertificate("");
    if (page === 1 && eduPhoto?.length !== 0)
      setSelectedCertificate(eduPhoto?.length !== 0 ? eduPhoto[0] : []);
    if (page === 2 && profPhoto?.length !== 0)
      setSelectedCertificate(profPhoto?.length !== 0 ? profPhoto[0] : []);
    if (page === 4 && marriagePhoto?.length !== 0)
      setSelectedCertificate(
        marriagePhoto?.length !== 0 ? marriagePhoto[0] : []
      );
  }, [page]);

  return (
    <div>
      <MobileBackButton name={"Certificate"} />
      <div className="px-[27px] lg:hidden bg-[#F8F8FF] min-h-screen">
        <p className="text-[#333333] font-semibold text-[16px] font-fira pt-[4px]">
          Certificate
        </p>
        <CertificateMobileHeaderButton {...{ setPage, page }} />
        {selectedCertificate && (
          <SelectedCertificateForMov
            {...{ selectedCertificate, selectedCertificateName }}
          />
        )}
        {page === 2 && (
          <ProfessionalCertificateMov
            {...{
              setSelectedCertificate,
              selectedCertificate,
              certificates: bindParentIdWithPhotos(
                allCertificates?.data?.professions
              ),
              setSelectedCertificateName,
            }}
          />
        )}
        {page === 1 && (
          <ProfessionalCertificateMov
            {...{
              setSelectedCertificate,
              selectedCertificate,
              certificates: bindParentIdWithPhotos(
                allCertificates?.data?.educations
              ),
              setSelectedCertificateName,
            }}
          />
        )}
        {page === 4 && (
          <MarriageCertificateForMov
            {...{
              setSelectedCertificate,
              selectedCertificate,
              certificates: bindParentIdWithPhotos(
                allCertificates?.data?.marriages
              ),
              setSelectedCertificateName,
            }}
          />
        )}
        <div className="h-20"></div>
        <BottomNav />
      </div>
    </div>
  );
};
