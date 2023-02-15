// configuration
import React, { useEffect } from "react";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";
import { FaUsersSlash } from "react-icons/fa";
import { Pagination } from "@mui/material";

// components
import { MobilePartnerLoader } from "./Loader/MobilePartnerLoader";
import { MobilePartnerCard } from "./MobilePartnerCard";

export const AllPartnersCards = ({ data, isLoading, error, setPage }) => {
  let totalData = Math.ceil(data?.data?.total / 6) || 0;
  // js variable declaration
  let content;
  if (isLoading) {
    content = (
      <div className="mt-[18px] grid grid-cols-2 md:grid-cols-3 gap-[20px] w-full">
        <MobilePartnerLoader />
        <MobilePartnerLoader />
        <MobilePartnerLoader />
        <MobilePartnerLoader />
      </div>
    );
  } else if (!isLoading && data?.data?.members?.length === 0) {
    content = (
      <div className="mt-[18px] w-full flex flex-col items-center">
        <FaUsersSlash className="text-[48px] text-gray-400" />
        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
          No user found!
        </p>
      </div>
    );
  } else if (!isLoading && error) {
    content = (
      <div className="mt-[18px] w-full flex flex-col items-center">
        <AiOutlineWarning className="text-[48px] text-gray-400" />
        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
          Server Error!
        </p>
      </div>
    );
  } else if (!isLoading && data?.data?.members?.length > 0) {
    content = (
      <div className="mt-[18px] grid grid-cols-2 md:grid-cols-3 gap-[20px] w-full">
        {data.data.members?.map((user) => {
          return <MobilePartnerCard {...{ user }} key={user._id} />;
        })}
      </div>
    );
  }
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div>{content}</div>
      <div className="my-[30px] w-full flex justify-center">
        <Pagination
          count={totalData}
          variant="outlined"
          color="secondary"
          onChange={(e, val) => setPage(val)}
        />
      </div>
    </div>
  );
};
