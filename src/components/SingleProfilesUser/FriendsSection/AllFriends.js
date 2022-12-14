// configuration, ex: react-router
import React from "react";

// Third party packages, ex: redux
import { AiOutlineWarning } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

// components
import { useGetAllConnectedConnectionsQuery } from "../../../Redux/features/connections/connectionApi";
import { ConnectedConnectionLoader } from "../../pages/Shared/Loader/connections/ConnectedConnectionLoader";
import { FriendCard } from "./Cards/FriendCard";

export const AllFriends = () => {
    // varible declation
    // hook variables
    const { data, isLoading, isError, error } = useGetAllConnectedConnectionsQuery();

    // js variables
    let content = null;

    if (isLoading) {
        content = (
            <div className="w-full grid grid-cols-1 gap-y-4 px-4">
                <ConnectedConnectionLoader />
                <ConnectedConnectionLoader />
                <ConnectedConnectionLoader />
            </div>
        );
    } else if (!isLoading && isError && error?.data?.message.includes("No connection found")) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <FiUsers className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">No Connection Found!</p>
            </div>
        );
    } else if (!isLoading && isError && error?.data?.message.includes("Cannot check authentication")) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Authentication failed! Try again.</p>
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Server Error</p>
            </div>
        );
    } else if (!isLoading && data?.data?.user?.length === 0) {
        content = (
            <div className="flex flex-col items-center justify-center mt-[30%]">
                <FiUsers className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">No Friend Found!</p>
            </div>
        );
    } else if (!isLoading && data?.data?.user.length > 0) {
        content = (
            <div className="w-full grid grid-cols-1 gap-y-4 px-4">
                {data?.data?.user.map(friend => {
                    return <FriendCard key={friend?._id} {...{ friend }} />;
                })}
            </div>
        );
    }

    if (data) console.log(data);
    if (isError) {
        console.log(error);
    }
    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-4">{content}</div>
        </div>
    );
};
