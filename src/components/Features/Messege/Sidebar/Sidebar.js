import React from "react";
import { ConversationHeader } from "./ConversationHeader";
import { Conversations } from "./Conversations";

export const Sidebar = ({handleChat,user}) => {
    return (
        <div className="mx-[11px]">
            <ConversationHeader />
            <Conversations handleChat={handleChat} user={user} />
        </div>
    );
};
