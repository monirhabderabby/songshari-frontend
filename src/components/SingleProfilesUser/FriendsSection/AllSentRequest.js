import React from "react";
import { useGetAllSentRequestQuery } from "../../../Redux/features/connections/connectionApi";
import { SentReqCard } from "./Cards/SentReqCard";

export const AllSentRequest = () => {
    const friends = [1, 2, 3, 4, 5, 6, 7];
    const { data, isError, error } = useGetAllSentRequestQuery();

    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-4">
                {data?.sentRequests?.map(friend => {
                    return <SentReqCard key={friend._id} {...{ friend }} />;
                })}
            </div>
        </div>
    );
};
