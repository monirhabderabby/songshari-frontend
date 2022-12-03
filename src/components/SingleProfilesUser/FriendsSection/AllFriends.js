import React from "react";

import { FriendCard } from "./Cards/FriendCard";

export const AllFriends = () => {
    const friends = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-4">
                {friends?.map(f => {
                    return <FriendCard key={f} />;
                })}
            </div>
        </div>
    );
};
