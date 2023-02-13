import React from "react";
import { useGetAllConnectedConnectionsQuery } from "../../../../Redux/features/connections/connectionApi";
import { ConversationHeader } from "./ConversationHeader";
import { Conversations } from "./Conversations";

export const Sidebar = ({profile,handleChat}) => {
    let { data } = useGetAllConnectedConnectionsQuery();
    // console.log(data?.data);
    return (
        <div className="mx-[11px]">
            <ConversationHeader profile={profile} />
            <Conversations handleChat={handleChat} user={data?.data?.user} />
        </div>
    );
};
