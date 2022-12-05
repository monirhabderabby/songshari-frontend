import React from "react";
import { useGetAllFriendRequestQuery } from "../../../Redux/features/connections/connectionApi";
import { FriendRequestCard } from "./Cards/FriendRequestCard";

export const AllFriendRequest = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const { data, isLoading } = useGetAllFriendRequestQuery();

    if (data) {
        console.log(data);
    }

    return (
        <div className="grid grid-cols-1 gap-y-4 w-full">
            {data?.connectionRequests.map(friend => {
                return <FriendRequestCard key={friend._id} {...{ friend }} />;
            })}
        </div>
    );
};
