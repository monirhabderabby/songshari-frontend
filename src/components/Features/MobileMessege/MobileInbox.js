// Configuration
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import {  useGetAllMessageQuery } from "../../../Redux/chat/chatApi";
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

    const [arivalMsg, setArivalMsg] = useState(null);
    let from = res?.data ? res.data.user._id : res?.user._id;
    // console.log(receiver)
    
    const [message, setMessage] = useState({
        message: "",
        to: receiver._id,
        from: from,
    });
    const {data} = useGetAllMessageQuery(message);
    // console.log(data)
    // setMessage({...message,from:res?.user?._id});
    useEffect(() => {
        if (receiver._id) {
            socket.current = io("http://localhost:4000");
            socket.current.emit("addUser", receiver._id);
        }
    }, [receiver._id]);
    const [msg, setMsg] = useState(null);
    // console.log(msg)
    // useEffect(() => {
    //     if (receiver._id) {
    //         (async () => {
                 
    //             setMsg(data?.data?.message);
    //         })();
            
    //     }
    // }, [receiver._id]);
    useEffect(() => {
        if(data?.message){
            setMsg(data?.message);  
            dispatch(allMessage(data?.message))  
        }
    }, [data?.message]);
    

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
    // console.log(msg)
    return (
        <div className="max-w-[1024px] mx-auto h-screen flex flex-col">
            <div className="relative w-full ">
                <MobileMessageHeader profile={receiver} />
            </div>

            <div className="flex-1 mt-[60px] h-full">
                <MessageListMobile messages={msg}  />

            </div>
            <div className="bg-white">
                <MobileMessgeSenderBox msg={msg} setMsg={setMsg} message={message} setMessage={setMessage} socket={socket} />
            </div>
        </div>
    );
};
