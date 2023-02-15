// Configuration
import React from "react";
import { useParams } from "react-router";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

// Components
import { useGetAllConnectedConnectionsQuery } from "../../../../Redux/features/connections/connectionApi";
import { ConnectedConnectionLoader } from "../../../shared/Cards/Loader/Connections/ConnectedConnectionLoader";
import { FriendCard } from "../../../SingleProfilesUser/FriendsSection/Cards/FriendCard";

export const DynamicConnection = () => {
    const { id } = useParams();
    // varible declation
    // hook variables
    const { data, isLoading, isError, error } = useGetAllConnectedConnectionsQuery(id);

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

    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-4">{content}</div>
        </div>
    );
};
