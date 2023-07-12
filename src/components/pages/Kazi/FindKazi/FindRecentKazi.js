import React, { useState } from "react";

// Third party packages
import { Pagination } from "@mui/material";
import { AiOutlineWarning } from "react-icons/ai";
import { FaUserAltSlash } from "react-icons/fa";

// Components
import { useSelector } from "react-redux";
import { useGetRecentMembersQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";
import { ProfileCardSkeletonLoader } from "../../../shared/Cards/Loader/ProfileCardSkeletonLoader";
import { UserCard } from "../../Shared/userCard/UserCard";

export const FindRecentKazi = ({role}) => {
    // Hook variable declaration
    const [page, setPage] = useState(1);

    const searchTerm = useSelector(state => state?.persistedReducer?.findLawyerKaziAgent?.kazi?.searchTerm);
    const { data, isLoading, error } = useGetRecentMembersQuery({ searchTerm: searchTerm, page: page, role: "kazi", limit: 8 });

    let totalData = data?.data?.total / 8;
    const loaderArray = [1, 2, 3, 4, 5, 6];
    let content;

    if (isLoading) {
        content = (
            <div className="grid grid-cols-3 gap-[30px]">
                {loaderArray?.map(key => (
                    <ProfileCardSkeletonLoader key={key} />
                ))}
            </div>
        );
    } else if (!isLoading && error) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[100px]">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Internel Server Error</p>
                <p className="text-gray-400 text-[14px]">Please Try again later</p>
            </div>
        );
    } else if (!isLoading && data?.data?.members.length === 0) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[100px]">
                <FaUserAltSlash className="text-[48px] text-gray-400" />
                <p className="text-gray-400 text-[14px]">No User Found as searchTerm</p>
            </div>
        );
    } else if (!isLoading && data?.data?.members !== 0) {
        content = (
            <div className="grid grid-cols-4 gap-[30px]">
                {data?.data?.members.map(profile => {
                    return <UserCard key={profile._id} {...{role, profile }} />;
                })}
            </div>
        );
    }
    return (
        <>
            <div className="mt-[30px] w-full mx-auto">{content}</div>
            <div className="my-[30px] w-full flex justify-center">
                {totalData > 8 && (
                    <Pagination count={Math.ceil(totalData)} variant="outlined" color="secondary" onChange={(e, val) => setPage(val)} />
                )}
            </div>
        </>
    );
};
