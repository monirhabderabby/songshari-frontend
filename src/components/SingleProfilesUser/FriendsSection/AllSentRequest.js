// configuration, ex: react-router
import React from "react";

// Third party packages, ex: redux
import { FiUsers } from "react-icons/fi";

// components
import { useGetAllSentRequestQuery } from "../../../Redux/features/connections/connectionApi";
import { SentReqCard } from "./Cards/SentReqCard";
import { SkeletonLoader } from "./SkeletonLoader";

export const AllSentRequest = () => {
    // varible declation
    // hook variables
    const { data, isLoading, isError, error } = useGetAllSentRequestQuery();

    // js variables
    let content = null;

    if (isLoading) {
        content = (
            <div className="w-full grid grid-cols-1 gap-y-4 px-4">
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
            </div>
        );
    } else if (!isLoading && data?.data?.length === 0) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <FiUsers className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">No Request sent</p>
            </div>
        );
    } else if (!isLoading && data?.data?.length > 0) {
        content = data?.data?.map(friend => {
            return <SentReqCard key={friend._id} {...{ friend }} />;
        });
    }

    if (data) {
        console.log("data", data);
    }
    if (isError) {
        console.log("isError", isError);
    }
    if (error) console.log("error", error);

    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-4 px-4">{content}</div>
        </div>
    );
};
