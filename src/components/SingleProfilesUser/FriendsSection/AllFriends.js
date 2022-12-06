import React from "react";
import { useGetAllConnectedConnectionsQuery } from "../../../Redux/features/connections/connectionApi";

import { FriendCard } from "./Cards/FriendCard";

export const AllFriends = () => {
    const friends = [1, 2, 3, 4, 5, 6, 7];
    const { data } = useGetAllConnectedConnectionsQuery();

    if (data) {
        console.log(data);
    }

    if (data) console.log(data);
    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-4">
                {data?.sentRequests.map(friend => {
                    return <FriendCard key={friend._id} {...{ friend }} />;
                })}
            </div>
        </div>
    );
};
