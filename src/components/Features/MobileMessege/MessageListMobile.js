import React from "react";
import { LeftSideMessage } from "./LeftSideMessage";
import { RightSideMessage } from "./RightSideMessage";

export const MessageListMobile = ({messages}) => {
    return (
        <div className="relative rounded-br-[20px] rounded-bl-[20px]">
            <div className="px-[15px] overflow-auto rounded-br-[20px] rounded-bl-[20px]">
                <div className="h-full overflow-auto">
                {messages?.map(messege => {
                        if (!messege.fromSelf) {
                            return <LeftSideMessage message={messege} />;
                        } else {
                            return <RightSideMessage message={messege} />;
                        }
                    })}

                </div>
            </div>
        </div>
    );
};
