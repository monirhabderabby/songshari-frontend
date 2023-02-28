// Configuration
import React, { useEffect, useState } from "react";

// Third party packages
import Pagination from "@mui/material/Pagination";

// Components
import ServiceCard from "../../../components/shared/Cards/Member/Service/ServiceCard";
import { useGetAllOrderByMemberQuery } from "../../../Redux/features/Service/OrderApi";
import ServiceCardSkeleton from "../../shared/Cards/Loader/Member/ServiceCardSkeleton";
import { TBFaceError } from "../../ui/error/TBFaceError";

const UserCanceledServices = ({ responsive }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isSuccess } = useGetAllOrderByMemberQuery({
    status: "rejected",
    page: page,
    limit: 3,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [isSuccess]);

  const { orders, total } = data || {};
  const totalPage = Math.ceil(total / 3);
  const loaderArr = [1, 2, 3];

  let content;
  if (isLoading) {
    content = (
      <div className="flex flex-col items-center gap-y-[10px]">
        {loaderArr.map((item) => {
          return <ServiceCardSkeleton key={item} />;
        })}
      </div>
    );
  } else if (!isLoading && error) {
    content = <TBFaceError />;
  } else if (!isLoading && orders.length === 0) {
    content = (
      <div className="h-[150px] w-full flex justify-center items-center text-gray-400">
        You havn't onGoing service
      </div>
    );
  } else if (!isLoading && orders.length > 0) {
    content = (
      <div className="flex flex-col items-center gap-y-[10px]">
        {orders?.map((order) => {
          return (
            <ServiceCard
              key={order._id}
              service={order}
              status="cancelled"
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

export default UserCanceledServices;
