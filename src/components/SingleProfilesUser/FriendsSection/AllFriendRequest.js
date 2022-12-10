import React from "react";
import { FiUsers } from "react-icons/fi";
import { FriendRequestCard } from "./Cards/FriendRequestCard";
import { SkeletonLoader } from "./SkeletonLoader";

export const AllFriendRequest = ({ data, isLoading, isError, error }) => {
    if (data) {
        console.log(data);
    }
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
            return <FriendRequestCard key={friend._id} {...{ friend }} />;
        });
    }

    return <div className="w-full grid grid-cols-1 gap-y-4">{content}</div>;
};
