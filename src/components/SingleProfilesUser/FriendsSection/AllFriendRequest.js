// configuration, ex: react-router
import React from "react";

// Third party packages, ex: redux
import { AiOutlineWarning } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { useGetAllConnectionRequestQuery } from "../../../Redux/features/connections/connectionApi";
import { FriendRequestLoader } from "../../shared/Cards/Loader/Connections/FriendRequestLoader";

// components
import { useEffect } from "react";
import { FriendRequestCard } from "./Cards/FriendRequestCard";

export const AllFriendRequest = ({ responsive }) => {
    // hook variables
    const { data, isLoading, isError, error, isFetching, refetch } = useGetAllConnectionRequestQuery();

    useEffect(() => {
        refetch();
    }, [refetch]);

    // js variables
    let content;

    if (isLoading || isFetching) {
        content = (
            <div className="w-full grid grid-cols-1 gap-y-4 md:px-4">
                <FriendRequestLoader />
                <FriendRequestLoader />
                <FriendRequestLoader />
            </div>
        );
    } else if (!isLoading && error?.data?.message === "No connections found") {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <FiUsers className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">No Connection Found!</p>
            </div>
        );
    } else if (!isLoading && isError && error?.data?.message === "Cannot check authentication") {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Authentication failed! Try again.</p>
            </div>
        );
    } else if (!isLoading && error) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">server Error</p>
            </div>
        );
    } else if (!isLoading && data?.data?.user?.length === 0) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <FiUsers className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">No Friend Request</p>
            </div>
        );
    } else if (!isLoading && data?.data?.user.length > 0) {
        content = (
            <div className="w-full grid grid-cols-1 gap-y-4 md:px-4">
                {data?.data?.user.map(friend => {
                    return <FriendRequestCard key={friend?._id} {...{ friend, responsive }} />;
                })}
            </div>
        );
    }

    return <div>{content}</div>;
};
