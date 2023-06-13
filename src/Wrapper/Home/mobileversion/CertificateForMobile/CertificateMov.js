/* eslint-disable react-hooks/exhaustive-deps */
// Configuration
import React, { useEffect, useState } from "react";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { useGetCertificatesWithAuthQuery } from "../../../../Redux/features/Documents/documentsApi";
import { BottomNav } from "../BottomNav";

// Components
import { CertificateMobileHeaderButton } from "./CertificateMobileHeaderButton";
import { MarriageCertificateForMov } from "./MarriageCertificateForMov";
// import { EducationalCertificateForMov } from "./EducationalCertificateForMov";
import { ProfessionalCertificateMov } from "./ProfessionalCertificateMov";
import { SelectedCertificateForMov } from "./SelectedCertificateForMov";
import CertificateCategoryContainer from "./CertificateCategoryContainer";
import { LineWaveLoader } from "../../../../components/shared/Cards/Loader/lineWaveLoader/LineWaveLoader";

export const CertificateMov = () => {
  // hook variable declaration
  const [category, setCategory] = useState([])
  const [selected, setSelected] = useState();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [page, setPage] = useState(1);

  // Redux Api Call
  const { data: allCertificates, isLoading } = useGetCertificatesWithAuthQuery();
  console.log("slslsl", isLoading);

  useEffect(() => {
    setSelectedCertificate("");
    if (page === 1)
      setCategory(allCertificates?.data?.educations || []);
    if (page === 2)
      setCategory(allCertificates?.data?.professions || []);
    if (page === 4)
      setCategory(allCertificates?.data?.marriages || []);
  }, [page, allCertificates]);

  useEffect(() => {
    if (category.length !== 0) {
      setSelected(category[0]);
      setSelectedCertificate(category[0]?.certificates[0])
    }
  }, [category]);

  return (
    <>
      <div>
        <MobileBackButton name={"Certificate"} />
        <div className="px-[27px] lg:hidden bg-[#F8F8FF] min-h-screen">
          <p className="text-[#333333] my-4 font-semibold text-[16px] font-fira pt-[4px]">
            Certificates
          </p>
          <CertificateMobileHeaderButton {...{ setPage, page }} />
          <h1 className="mt-6 text-2xl font-semibold">
            Certificate Categories
          </h1>
          {isLoading && <div>
            <LineWaveLoader />
          </div>}
          {!isLoading && category?.length === 0 && page!==4 && (
            <div className="flex flex-col items-center justify-center text-gray-400 mt-8">
              <p className="font-bold text-3xl">404</p>
              <p className="font-semibold">No Certificate found</p>
            </div>
          )}

          <div className="grid grid-cols-2 mt-2 gap-x-2 gap-y-4">
            {category.map((item) => (
              <CertificateCategoryContainer
                {...{key:item._id, item, selected, setSelected }}
              />
            ))}
          </div>
          {selectedCertificate && (
            <SelectedCertificateForMov {...{ selectedCertificate, selected }} />
          )}

          {page === 2 && category?.length !== 0 && (
            <ProfessionalCertificateMov
              {...{
                selected,
                setSelectedCertificate,
                selectedCertificate,
              }}
            />
          )}
          {page === 1 && category?.length !== 0 && (
            <ProfessionalCertificateMov
              {...{
                selected,
                setSelectedCertificate,
                selectedCertificate,
              }}
            />
          )}
          {page === 4 && (
            <MarriageCertificateForMov
              {...{
                selected,
                setSelectedCertificate,
                selectedCertificate,
              }}
            />
          )}
          <div className="h-20"></div>
          <BottomNav />
        </div>
      </div>
    </>
  );
};
