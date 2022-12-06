import React from "react";
import { useGetAllSentRequestQuery } from "../../../Redux/features/connections/connectionApi";
import { SentReqCard } from "./Cards/SentReqCard";
import { SkeletonLoader } from "./SkeletonLoader";

export const AllSentRequest = () => {
    const friends = [1, 2, 3, 4, 5, 6, 7];
    const { data, isLoading, isError, error } = useGetAllSentRequestQuery();

    if (data) {
        console.log(data);
    }
    let content = null;

    if (isLoading) {
        content = (
            <div className="w-full grid grid-cols-1 gap-y-4">
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = <p>{error?.message}</p>;
    } else if (!isLoading && !isError && data?.user?.connectionSentRequests?.length === 0) {
        content = <p>No Request found!</p>;
    } else if (!isLoading && !isError && data?.user?.connectionSentRequests?.length > 0) {
        content = data?.user?.connectionSentRequests?.map(friend => {
            return <SentReqCard key={friend._id} {...{ friend }} />;
        });
    }

    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-4">{content}</div>
        </div>
    );
};
