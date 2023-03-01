import React from "react";
import { useEffect } from "react";
import { useGetAllConnectedConnectionsQuery } from "../../../../Redux/features/connections/connectionApi";
import { ConversationHeader } from "./ConversationHeader";
import { Conversations } from "./Conversations";
// import moment from "moment";
export const Sidebar = ({handleChat,profile}) => {
    let { data } = useGetAllConnectedConnectionsQuery(profile?._id);
    // console.log(data);
    const [user, setUser] = React.useState(null);
    useEffect(() => {
        if(data?.data?.user){
            setUser(data?.data?.user)
        }
    }, [data?.data?.user]);

    return (
        <div className="mx-[11px]">
            <ConversationHeader profile={profile} />
            <Conversations handleChat={handleChat} user={user} />
        </div>
    );
};
