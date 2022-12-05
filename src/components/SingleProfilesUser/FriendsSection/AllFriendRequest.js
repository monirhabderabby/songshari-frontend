import React, { useEffect } from "react";
import { useGetAllRequestQuery } from "../../../Redux/features/connections/connectionApi";
import { FriendRequestCard } from "./Cards/FriendRequestCard";

export const AllFriendRequest = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const { data, isError, error } = useGetAllRequestQuery();
    useEffect(() => {
        if (data) console.log(data);
        if (isError) console.log(error);
    }, [data, isError, error]);

    return (
        <div className="grid grid-cols-1 gap-y-4 w-full">
            {arr.map(f => {
                return <FriendRequestCard key={f} />;
            })}
        </div>
    );
};
