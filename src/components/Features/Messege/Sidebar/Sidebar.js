import React from "react";
import { ConversationHeader } from "./ConversationHeader";
import { Conversations } from "./Conversations";

export const Sidebar = () => {
    return (
        <div className="mx-[11px]">
            <ConversationHeader />
            <Conversations />
        </div>
    );
};
