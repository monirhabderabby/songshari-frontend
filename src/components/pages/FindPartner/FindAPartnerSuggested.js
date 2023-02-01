// configuration
import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { FaUserAltSlash } from "react-icons/fa";
import { useSelector } from "react-redux";
import useDocumentTitle from "../../../assets/utilities/useDocumentTitle";

// components
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import { ProfileCardSkeletonLoader } from "../../shared/Cards/Loader/ProfileCardSkeletonLoader";
import { UserCard } from "../Shared/userCard/UserCard";

export const FindAPartnerSuggested = () => {
    // page title
    useDocumentTitle("Shongshari | Suggested");
    // variable declaration
    // hook variables
    const searchTerm = useSelector(state => state?.persistedReducer?.findPartnerSlice?.searchTerm);
    const { data, isLoading, error } = useGetRecentMembersQuery({ searchTerm: searchTerm });

    let content;
    const loaderArray = [1, 2, 3, 4, 5, 6];

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
                <p className="text-gray-400 text-[14px]">No User Found as {searchTerm}</p>
            </div>
        );
    } else if (!isLoading && data?.data?.members !== 0) {
        content = (
            <div className="grid grid-cols-3 gap-[30px]">
                {data?.data?.members.map(profile => {
                    return <UserCard key={profile._id} {...{ profile }} />;
                })}
            </div>
        );
    }

    return <div className="mt-[30px] max-w-[950px] mx-auto">{content}</div>;
};
