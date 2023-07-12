import React from "react";
import { useGetMyServicesQuery } from "../../../../../Redux/features/Service/ServiceApi";
import ServicesCard from "../../../../Lawyer/LawyerServicesPage/Services/ServicesCard";
// Third party services
import { TBFaceError } from "../../../../ui/error/TBFaceError";
import { LineWaveLoader } from "../../../Cards/Loader/lineWaveLoader/LineWaveLoader";

export const ServicesContainer = ({ responsive }) => {
  const { data, isLoading, error } = useGetMyServicesQuery();

  // js variable declarations
  let content;
  const { services } = data || {};
  if (isLoading) {
    content = <LineWaveLoader />;
  } else if (!isLoading && error) {
    content = <TBFaceError />;
  } else if (!isLoading && services?.length > 0) {
    content = (
      <div className="h-auto w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((service) => (
          <ServicesCard key={service?._id} {...{ service, responsive }} />
        ))}
      </div>
    );
  }

  return content;
};
