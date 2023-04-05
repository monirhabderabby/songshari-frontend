// configuration
import React, { useState } from "react";

// Third party packages
import { Pagination } from "@mui/material";

// components
import { OrderHistoryCard } from "../../../components/shared/Cards/Shop/OrderHistoryCard";
import { useMyOrderQuery } from "../../../Redux/features/Shop/shopApi";
import { ServerErrorMessage } from "../../../components/ui/error/ServerErrorMessage";
import { OvalLoader } from "../../../components/shared/Cards/Loader/OvalLoader/OvalLoader";

export const OrderHistoryContainer = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data, isError } = useMyOrderQuery({
    page: page,
    limit: 8,
    status: "",
  });

  let content;
  if (isLoading) {
    content = (
      <div>
        <OvalLoader title={"Loading..."} />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="w-full h-[320px] flex justify-center items-center ">
        <ServerErrorMessage />
      </div>
    );
  } else if (data?.orders?.length === 0) {
    content = (
      <div className="w-full h-[320px] flex justify-center items-center">
        <span className="text-[22px] font-Inter text-gray-400">
          No Orders Found!
        </span>
      </div>
    );
  } else if (data?.orders?.length > 0) {
    content = (
      <div className="mt-[40px] grid grid-cols-2 lg:grid-cols-4 gap-x-[10px] gap-y-[16px]">
        {data?.orders?.map((order) => {
          return <OrderHistoryCard key={order?._id} {...{ order }} />;
        })}
      </div>
    );
  }

  return (
    <div className="mt-[82px]">
      <h3 className="text-[32px] font-bold font-Poppins text-left text-[#00000]">
        Order History
      </h3>
      <div>{content}</div>
      <div className="w-full flex items-center justify-between mt-[55px]">
        <p className="text-[16px] text-[#3E4954] font-medium font-Poppins">
          Showing {data?.count} from {data?.total} data
        </p>
        <Pagination
          onChange={(event, value) => {
            setPage(value);
          }}
          count={Math.ceil(data?.total / 8) || 1}
        />
      </div>
    </div>
  );
};
