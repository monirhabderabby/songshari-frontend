// Configuration
import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";
import { MdOutlineFilterHdr } from "react-icons/md";
import { useSelector } from "react-redux";

// Components
import { useFindFilteredUserMutation } from "../../../../Redux/features/userInfo/userApi";
import { ProfileCardSkeletonLoader } from "../../../shared/Cards/Loader/ProfileCardSkeletonLoader";
import { UserCard } from "../../Shared/userCard/UserCard";

export const FilterResults = () => {
  // hook variable declareation
  const [page, setPage] = useState(1);
  const filterObject = useSelector(
    (state) => state?.persistedReducer?.filter?.filterObject
  );
  const keyword =
    useSelector(
      (state) => state?.persistedReducer?.findPartnerSlice?.searchTerm
    ) || "";

  const [findFilteredUser, { data: filteredUser, isLoading, error }] =
    useFindFilteredUserMutation();
  console.log(filteredUser);
  useEffect(() => {
    findFilteredUser({ data: filterObject, keyword: keyword, page: page });
  }, [filterObject, findFilteredUser, keyword, page]);

  // js variable declaration
  let content;
  const loaderArray = [1, 2, 3, 4, 5, 6];

  if (isLoading) {
    content = (
      <div className="grid grid-cols-3">
        {loaderArray?.map((key) => (
          <ProfileCardSkeletonLoader key={key} />
        ))}
      </div>
    );
  } else if (!isLoading && filteredUser?.data?.total === 0) {
    content = (
      <div className="mt-[100px] flex flex-col w-full justify-center items-center">
        <MdOutlineFilterHdr className="text-[50px]" />
        <p className="text-gray-400 text-[24px]">
          Please change your filters or try different keywords
        </p>
      </div>
    );
  } else if (!isLoading && error?.data?.message === "No user found") {
    content = (
      <div className="mt-[100px] flex flex-col w-full justify-center items-center">
        <MdOutlineFilterHdr className="text-[50px]" />
        <p className="text-gray-400 text-[24px]">
          Please change your filters or try different keywords
        </p>
      </div>
    );
  } else if (!isLoading && error) {
    content = (
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <AiOutlineWarning className="text-[48px] text-gray-400" />
        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
          Internel Server Error
        </p>
        <p className="text-gray-400 text-[14px]">Please Try again later</p>
      </div>
    );
  } else if (!isLoading && filteredUser?.data?.total > 0) {
    content = (
      <div className="grid grid-cols-3 gap-[30px]">
        {filteredUser?.data?.users?.map((profile) => {
          return <UserCard key={profile?._id} {...{ profile }} />;
        })}
      </div>
    );
  }
  // else if(!isLoading && filteredUser)
  return (
    <>
      <div className="mt-[30px] max-w-[950px] mx-auto">{content}</div>
      <div className="my-[30px] w-full flex justify-center">
        <Pagination
          count={Math.ceil(filteredUser?.data?.total / 9)}
          variant="outlined"
          color="secondary"
          onChange={(e, val) => setPage(val)}
        />
      </div>
    </>
  );
};
