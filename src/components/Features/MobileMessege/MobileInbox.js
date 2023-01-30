// Configuration
import React from "react";

// Components
import { MessegeList } from "../Messege/Messeges/MessegeList";
import { MobileMessageHeader } from "./MobileMessageHeader";
import { MobileMessgeSenderBox } from "./MobileMessgeSenderBox";

export const MobileInbox = () => {
    return (
        <div className="max-w-[1024px] mx-auto h-screen bg-green-400 flex flex-col">
            <div className="relative w-full">
                <MobileMessageHeader />
            </div>
            <div className="flex-1 bg-blue-400 mt-[60px] h-full">
                <MessegeList />
            </div>
            <MobileMessgeSenderBox />
        </div>
    );
};
