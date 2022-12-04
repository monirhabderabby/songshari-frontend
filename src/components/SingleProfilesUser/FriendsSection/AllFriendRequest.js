import React from "react";
import { FriendRequestCard } from "./Cards/FriendRequestCard";

export const AllFriendRequest = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    return (
        <div className="grid grid-cols-1 gap-y-4 w-full">
            {arr.map(f => {
                return <FriendRequestCard key={f} />;
            })}
        </div>
    );
};
