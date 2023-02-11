// Configuration
import React, { useEffect, useState } from "react";

// Third party packages
import Pagination from "@mui/material/Pagination";

// Components
import { useGetAllServicesByroleQuery } from "../../../Redux/features/Service/ServiceApi";
import ServiceCardSkeleton from "../../shared/Cards/Loader/Member/ServiceCardSkeleton";
import ServiceCardV2 from "../../shared/Cards/Member/Service/ServiceCardV2";
import { TBFaceError } from "../../ui/error/TBFaceError";

const UserKaziServices = ({ responsive }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isSuccess } = useGetAllServicesByroleQuery({
    role: "kazi",
    page: page,
    limit: 3,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [isSuccess]);

  const { services, total } = data || {};
  const totalPage = Math.ceil(total / 3);
  const loaderArr = [1, 2, 3];

  let content;
  if (isLoading) {
    content = (
      <div className="flex flex-col items-center gap-y-[10px]">
        {loaderArr.map((item) => {
          return <ServiceCardSkeleton />;
        })}
      </div>
    );
  } else if (!isLoading && error) {
    content = <TBFaceError />;
  } else if (!isLoading && services.length === 0) {
    content = (
      <div className="h-[150px] w-full flex justify-center items-center text-gray-400">
        No Kazi Service Found
      </div>
    );
  } else if (!isLoading && services.length > 0) {
    content = (
      <div className="flex flex-col items-center gap-y-[10px]">
        {services?.map((service) => {
          return (
            <ServiceCardV2
              key={service._id}
              service={service}
              {...{ responsive }}
            />
          );
        })}
      </div>
    );
  }
  return (
    <>
      <div className="max-w-[512px] mx-auto">{content}</div>
      {total > 3 && (
        <div className="mt-[25px] w-full flex justify-center">
          <Pagination
            count={totalPage}
            variant="outlined"
            color="secondary"
            onChange={(event, value) => setPage(value)}
          />
        </div>
      )}
    </>
  );
};

export default UserKaziServices;
