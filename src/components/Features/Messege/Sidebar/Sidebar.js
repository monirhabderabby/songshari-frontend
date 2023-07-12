import React from "react";
import { useEffect } from "react";
import { ConversationHeader } from "./ConversationHeader";
import { Conversations } from "./Conversations";
import { useGetConversationsQuery } from "../../../../Redux/chat/chatApi";
// import moment from "moment";
export const Sidebar = ({handleChat,profile}) => {
    let { data } = useGetConversationsQuery();
    const [user, setUser] = React.useState(null);
    useEffect(() => {
        if(data?.conversations){
            setUser(data?.conversations)
        }
    }, [data?.conversations]);

    return (
        <div className="mx-[11px]">
            <ConversationHeader profile={profile} />
            <Conversations handleChat={handleChat} user={user} />
        </div>
    );
};
