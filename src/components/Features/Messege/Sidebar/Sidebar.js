import React from "react";
import { useGetAllConnectedConnectionsQuery } from "../../../../Redux/features/connections/connectionApi";
import { ConversationHeader } from "./ConversationHeader";
import { Conversations } from "./Conversations";

export const Sidebar = ({handleChat,profile}) => {
    let { data } = useGetAllConnectedConnectionsQuery(profile?._id);
    // console.log(data?.data);
    return (
        <div className="mx-[11px]">
            <ConversationHeader profile={profile} />
            <Conversations handleChat={handleChat} user={data?.data?.user} />
        </div>
    );
};
