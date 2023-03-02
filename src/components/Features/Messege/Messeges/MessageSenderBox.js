import React from "react";
import { useCreateMessageMutation } from "../../../../Redux/chat/chatApi";
import mic from "../../../../assets/images/messges/Audio.svg";
import emoji from "../../../../assets/images/messges/Emoji.svg";
import gallary from "../../../../assets/images/messges/Gallery.svg";
import photo from "../../../../assets/images/messges/Photo.svg";
import { AiFillLike } from "react-icons/ai";
export const MessageSenderBox = ({msg,setMsg,message,setMessage ,socket}) => {
    const [createMessage] = useCreateMessageMutation();
    // console.log(message)
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
    return (
        <div className="flex items-center h-full gap-x-[24px]">
                    <input
                        onChange={e => setMessage({ ...message, message: e.target.value })}
                        onKeyPress={e => handleMessage(e)}
                        type="text"
                        className="flex-1 input h-full outline-none text-[#B0B0B0] text-[16px] px-[29px]"
                        placeholder="Type messege"
                    />
                    <img src={photo} alt="gallary" className="text-[22px]" />
                    <img src={gallary} alt="gallary" className="text-[22px]" />
                    <img src={mic} alt="gallary" className="text-[22px]" />
                    <img src={emoji} alt="gallary" className="text-[22px]" />
                    <AiFillLike className="text-[#A32BCA] text-[22px]" />
                    <button
                        onClick={e => handleMessage(e)}
                        className="bg-[#EFF3FF] rounded-[20px] h-[64px] w-[121px] flex justify-center items-center text-[#A32BCA] text-[16px] font-medium"
                    >
                        Send
                    </button>
                </div>
    );
};
