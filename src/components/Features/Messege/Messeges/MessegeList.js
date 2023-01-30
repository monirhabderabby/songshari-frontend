import React from "react";
import { MessegeLeft } from "./MessegeLeft";
import { MessegeRight } from "./MessegeRight";

export const MessegeList = ({ messages }) => {
    return (
        <div className="relative rounded-br-[20px] rounded-bl-[20px] bg-white">
            <div className="px-[15px] overflow-auto rounded-br-[20px] rounded-bl-[20px]">
                <div className="h-full overflow-auto">
                    {messages?.map(messege => {
                        if (!messege.fromSelf) {
                            return <MessegeLeft message={messege} />;
                        } else {
                            return <MessegeRight message={messege} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};
