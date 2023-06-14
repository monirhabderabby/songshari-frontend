/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// Third party packages

// Components
import { useCreateMessageMutation } from "../../../Redux/chat/chatApi";
import GoPremium from "../../shared/Package/GoPremium";

const popupMessage = "You have reached you chat request limit. Go premium to chat with more people";
export const MobileMessgeSenderBox = ({ msg, setMsg, message, setMessage, socket }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [createMessage, { error }] = useCreateMessageMutation();
    const handleMessage = async e => {
        // console.log(e)
        if (e.code === "Enter" || e.type === "click") {
            await createMessage(message);
            socket.current.emit("sendMessage", {
                to: message.to,
                from: message.from,
                message: message.message,
            });

            let newMsg = [...msg];
            newMsg.push({ fromSelf: true, message: message.message });
            setMsg(newMsg);
            e.target.value = "";
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
            <div className="h-[52px] w-full bg-white">
                <section className="h-full flex justify-between items-center px-[15px] gap-x-[10px]">
                    <div className="h-[36px] bg-[rgba(0,0,0,0.05)] flex-1 rounded-[4px] max-w-[355px] relative transition-all duration-500">
                        <input
                            onKeyPress={e => handleMessage(e)}
                            onChange={e => setMessage({ ...message, message: e.target.value })}
                            type="text"
                            className="bg-transparent w-full h-full rounded-[18px] -z-30 outline-none px-[15px] font-normal font-Poppins text-[14px] text-[#999999] pr-[35px]"
                            placeholder="Type here..."
                        />
                    </div>
                    <div>
                        <button
                            onClick={e => handleMessage(e)}
                            className="bg-[#EFF3FF] rounded-[4px] h-[36px] w-[91px] flex justify-center items-center text-[#A32BCA] text-[16px] font-medium"
                        >
                            Send
                        </button>
                    </div>
                </section>
            </div>
            {showPopup && <GoPremium {...{ message: popupMessage, setShowPopup }} />}
        </>
    );
};
