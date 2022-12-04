import React from "react";
import { SentReqCard } from "./Cards/SentReqCard";

export const AllSentRequest = () => {
    const friends = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-4">
                {friends?.map(f => {
                    return <SentReqCard />;
                })}
            </div>
        </div>
    );
};
