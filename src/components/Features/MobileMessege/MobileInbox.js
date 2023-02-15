// Configuration
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useCreateMessageMutation, useGetAllMessageMutation } from "../../../Redux/chat/chatApi";
import { allMessage } from "../../../Redux/chat/chatReducer";

// Components
import { MessageListMobile } from "./MessageListMobile";
import { MobileMessageHeader } from "./MobileMessageHeader";
import { MobileMessgeSenderBox } from "./MobileMessgeSenderBox";

// CSS
import "../../../App.css";

export const MobileInbox = () => {
    const socket = useRef();
    const dispatch = useDispatch();
    const res = useSelector(state => state.persistedReducer.userInfo.userInfo);
    const receiver = useSelector(state => state?.persistedReducer?.chat?.user);
    const totalMessages = useSelector(state => state?.persistedReducer?.chat?.messages);
    const [createMessage] = useCreateMessageMutation();
    const [arivalMsg, setArivalMsg] = useState(null);
    let from = res?.data ? res.data.user._id : res?.user._id;

    const [getAllMessage, data] = useGetAllMessageMutation();
    // console.log(data)
    const [message, setMessage] = useState({
        message: "",
        to: receiver,
        from: from,
    });
    // setMessage({...message,from:res?.user?._id});
    useEffect(() => {
        if (receiver) {
            socket.current = io("http://localhost:4000");
            socket.current.emit("addUser", receiver);
        }
    }, [receiver]);
    const [msg, setMsg] = useState(totalMessages);
    console.log(msg)
    useEffect(() => {
        if (receiver) {
            (async () => {
                getAllMessage(message);
                dispatch(allMessage(data?.data?.message))
                setMsg(data?.data?.message);
            })();
        }
    }, [receiver]);

    const handleMessage = async e => {
        // console.log(e)
        if (e.code === "Enter" || e.type === "click") {
            createMessage(message);
            socket.current.emit("sendMessage", {
                to: message.to,
                from: message.from,
                message: message.message,
            });
            // console.log(msg)
            let newMsg = [];
            newMsg = [...msg];
            // let newMsg=msg
            newMsg.push({ fromSelf: true, message: message.message });
            setMsg(newMsg);
            e.target.value = "";
        }
    };

    useEffect(() => {
        // if(socket?.current){
        socket?.current?.on("messageReceived", msgs => {
            // console.log(msgs)
            if (message.to === msgs.from) {
                setArivalMsg({ fromSelf: false, message: msgs.message });
            }
        });
        // }
    }, [message, socket]);

    useEffect(() => {
        arivalMsg && setMsg(prev => [...prev, arivalMsg]);
        setArivalMsg(null);
    }, [arivalMsg, setMsg, msg]);
    return (
        <div className="max-w-[1024px] mx-auto h-screen flex flex-col">
            <div className="relative w-full ">
                <MobileMessageHeader />
            </div>

            <div className="flex-1 mt-[60px] h-full">
                <MessageListMobile messages={msg}  />

            </div>
            <div className="bg-white">
                <MobileMessgeSenderBox handleMessage={handleMessage} message={message} setMessage={setMessage} />
            </div>
        </div>
    );
};
