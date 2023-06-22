import { AnimatePresence } from "framer-motion";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { MessegeLeft } from "./MessegeLeft";
import { MessegeRight } from "./MessegeRight";
export const MessegeList = ({ user, profile, messages }) => {
    return (
        <div className="relative rounded-br-[20px] rounded-bl-[20px] bg-white">
            <div className="rounded-br-[20px] rounded-bl-[20px] px-[15px]">
                <div className="h-full overflow-auto overflow-x-hidden">
                    <AnimatePresence initial={false}>
                        {messages?.map((messege, index) => {
                            if (!messege.fromSelf) {
                                return <MessegeLeft key={uuidv4()} profile={profile} message={messege} index={index} />;
                            } else {
                                return <MessegeRight key={uuidv4() + 1} profile={user} message={messege} index={index} />;
                            }
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
