// configuration, ex: react-router
import React from "react";
import { useGetAllConnectedConnectionsQuery } from "../../../Redux/features/connections/connectionApi";
import { ConnectedConnectionLoader } from "../../pages/Shared/Loader/ConnectedConnectionLoader";

// components
import { useGetAllConnectedConnectionsQuery } from "../../../Redux/features/connections/connectionApi";
import { ConnectedConnectionLoader } from "../../pages/Shared/Loader/connections/ConnectedConnectionLoader";
import { FriendCard } from "./Cards/FriendCard";

export const AllFriends = () => {
    const friends = [1, 2, 3, 4, 5, 6, 7];
    const { data, isLoading, isError, error } = useGetAllConnectedConnectionsQuery();

    // useEffect(() => {
    //     fetch(`http://localhost:4000/member/connections`, {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // }, []);

    let content = null;

    if (isLoading) {
        content = (
            <div className="w-full grid grid-cols-1 gap-y-4">
                <ConnectedConnectionLoader />
                <ConnectedConnectionLoader />
                <ConnectedConnectionLoader />
            </div>
        );
    } else if (!isLoading || isError) {
        content = <p>{error?.message}</p>;
    } else if (!isLoading && isError) {
        console.log("ffdd");
    } else if (!isLoading && !isError && data?.data?.length === 0) {
        content = <p>You have no connected connection!</p>;
    } else if (!isLoading && !isError && data?.data.length > 0) {
        content = data?.data?.map((friend, index) => {
            return <FriendCard key={index} />;
        });
    }

    if (data) console.log(data);
    if (isError) {
        console.log(error.message);
    }
    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-4">{content}</div>
        </div>
    );
};
