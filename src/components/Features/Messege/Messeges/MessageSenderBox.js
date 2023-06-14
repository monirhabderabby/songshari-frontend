/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useCreateMessageMutation } from "../../../../Redux/chat/chatApi";
import GoPremium from "../../../shared/Package/GoPremium";

const popupMessage = "You have reached you chat request limit. Go premium to chat with more people";
export const MessageSenderBox = ({ msg, setMsg, message, setMessage, socket }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [createMessage, { error }] = useCreateMessageMutation();
    const handleMessage = async e => {
        if (e.code === "Enter" || e.type === "click") {
            createMessage(message);
            socket.current.emit("sendMessage", {
                to: message.to,
                from: message.from,
                message: message.message,
            });

            let newMsg = [...msg];
            newMsg.push({ fromSelf: true, message: message.message });
            setMsg(newMsg);
            // e.target.value = "";
            document.querySelector(".input").value = "";
        }
    };
    useEffect(() => {
        if (error?.status === 400) {
            let newMsg = [...msg];
            newMsg.pop();
            setMsg(newMsg);
            setShowPopup(true);
        }
    }, [error]);
    return (
        <>
            <div className="flex items-center h-full gap-x-[24px]">
                <input
                    onChange={e => setMessage({ ...message, message: e.target.value })}
                    onKeyPress={e => handleMessage(e)}
                    type="text"
                    className="flex-1 input h-full outline-none text-[#B0B0B0] text-[16px] px-[29px]"
                    placeholder="Type messege"
                />
                <button
                    onClick={e => handleMessage(e)}
                    className="bg-[#EFF3FF] rounded-[20px] h-[64px] w-[121px] flex justify-center items-center text-[#A32BCA] text-[16px] font-medium"
                >
                    Send
                </button>
            </div>
            {showPopup && <GoPremium {...{ message: popupMessage, setShowPopup }} />}
        </>
    );
};
