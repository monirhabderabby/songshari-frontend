import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useGetAllMessageMutation } from "../../../../Redux/chat/chatApi";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { MessegeBox } from "../Messeges/MessegeBox";
import { Sidebar } from "../Sidebar/Sidebar";
export const Inbox = () => {
    const socket = useRef();
    const res = useSelector(state => state.persistedReducer.userInfo.userInfo);
    // console.log(res)
    let from = res?.data ? res.data.user._id : res?.user._id;

    const [getAllMessage, data] = useGetAllMessageMutation();
    // console.log(data)
    const [message, setMessage] = useState({
        message: "",
        to: "",
        from: from,
    });
    // setMessage({...message,from:res?.user?._id});
    useEffect(() => {
        if (message.to) {
            socket.current = io("http://localhost:4000");
            socket.current.emit("addUser", message.to);
        }
    }, [message.to]);
    const [msg, setMsg] = useState(null);
    const handleChat = async id => {
        setMessage({ ...message, to: id });
        getAllMessage(message);
        setMsg(data?.data?.message);
    };
    // console.log(msg)

    return (
        <div className="bg-[#FAFBFF] pb-[230px]">
            <CustomHeader title="Chat" />
            <div className="lg:w-full xl:max-w-[1200px] h-[calc(100vh-30vh)] mx-auto flex mt-[66px]">
                <div className="lg:w-[437px] xl:w-[557px] h-full">
                    <Sidebar handleChat={handleChat} />
                </div>
                <div className="flex-1 h-full">
                    <MessegeBox msg={msg} setMsg={setMsg} message={message} setMessage={setMessage} socket={socket} />
                </div>
            </div>
        </div>
    );
};
