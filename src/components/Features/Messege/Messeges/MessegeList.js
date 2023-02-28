import React from "react";
import { MessegeLeft } from "./MessegeLeft";
import { MessegeRight } from "./MessegeRight";
import { v4 as uuidv4 } from 'uuid';
export const MessegeList = ({user,profile, messages }) => {
    
    return (
        <div className="relative rounded-br-[20px] rounded-bl-[20px] bg-white">
            <div className="px-[15px] overflow-auto rounded-br-[20px] rounded-bl-[20px]">
                <div className="h-full overflow-auto">
                    {messages?.map(messege => {
                        if (!messege.fromSelf) {
                            return <MessegeLeft key={uuidv4()} profile={profile} message={messege} />;
                        } else {
                            return <MessegeRight key={uuidv4()+1} profile={user} message={messege} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};
