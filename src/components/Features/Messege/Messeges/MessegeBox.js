import React from "react";
import { MessegeList } from "./MessegeList";
import { MessegesHeader } from "./MessegesHeader";

export const MessegeBox = () => {
    return (
        <div className="h-full bg-white rounded-[20px] shadow-[0px_3px_4px_rgba(62,73,84,0.04)]">
            <MessegesHeader />
            <MessegeList />
        </div>
    );
};
