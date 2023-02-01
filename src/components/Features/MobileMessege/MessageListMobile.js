import React from "react";
import { LeftSideMessage } from "./LeftSideMessage";
import { RightSideMessage } from "./RightSideMessage";

export const MessageListMobile = () => {
    return (
        <div className="relative rounded-br-[20px] rounded-bl-[20px]">
            <div className="px-[15px] overflow-auto rounded-br-[20px] rounded-bl-[20px]">
                <div className="h-full overflow-auto">
                    <LeftSideMessage />
                    <RightSideMessage />
                </div>
            </div>
        </div>
    );
};
