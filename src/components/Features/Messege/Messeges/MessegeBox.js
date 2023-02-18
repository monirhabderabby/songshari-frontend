import React, { useEffect, useState } from "react";

// thids party package


// components

import {useGetAllMessageQuery } from "../../../../Redux/chat/chatApi";
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
import { MessageSenderBox } from "./MessageSenderBox";
import { MessegeList } from "./MessegeList";
import { MessegesHeader } from "./MessegesHeader";
export const MessegeBox = ({ user, message, setMessage, socket }) => {
    const [arivalMsg, setArivalMsg] = useState(null);
    const { data, isLoading, error } = useGetProfileDetailsQuery(message.to);
    const [msg, setMsg] = useState(null);
    const result = useGetAllMessageQuery(message);
    useEffect(() => {
        if(result?.data?.message){
            setMsg(result?.data?.message);  
        }
    }, [result?.data?.message]);

    useEffect(() => {
        // if(socket?.current){
        socket?.current?.on("messageReceived", msgs => {
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
        <div className="h-full rounded-[20px] shadow-[0px_3px_4px_rgba(62,73,84,0.04)] relative flex flex-col">
            <div>
                <MessegesHeader profile={data} />
            </div>
            <div className="flex-1">
                <MessegeList user={user} profile={data} messages={msg} />
            </div>
            <div className="h-[92px] w-full bg-white rounded-br-[20px] rounded-bl-[20px] pr-[15px]">
                <MessageSenderBox msg={msg} setMsg={setMsg} message={message} setMessage={setMessage} socket={socket}/>
            </div>
        </div>
    );
};
