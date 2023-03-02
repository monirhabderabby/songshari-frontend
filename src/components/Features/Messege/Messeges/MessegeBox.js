import React, { useEffect, useState,useRef } from "react";

// thids party package

// components

import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { MessageSenderBox } from "./MessageSenderBox";
import { MessegeList } from "./MessegeList";
import { MessegesHeader } from "./MessegesHeader";
import { useGetAllMessageQuery } from "../../../../Redux/chat/chatApi";
import { useParams } from "react-router";
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
export const MessegeBox = () => {
    const socket = useRef();
    const {id}=useParams();
    const res = useSelector(state => state.persistedReducer.userInfo.userInfo);
    
    let profile = res?.data ? res.data.user : res?.user;
    const [message, setMessage] = useState({
        from: profile?._id,
        to: "",
        message: "",
    });
    useEffect(() => {
        setMessage({ ...message, to: id });
    }, [id]);
    //
    const [receiver, setReceiver] = useState(null);
    const {data}=useGetProfileDetailsQuery(id);
    // console.log(data)
    useEffect(() => {
        if(data){
            setReceiver(data);
        }
    }, [data]);

    let result = useGetAllMessageQuery({from:profile?._id,to:id});
    // console.log(result);
    useEffect(() => {
        if (result?.data?.message) {
            setMsg(result?.data?.message);
        }
    }, [result?.data?.message]);
    const [msg, setMsg] = useState(null);

    const [arivalMsg, setArivalMsg] = useState(null);


    useEffect(() => {
        if (message?.to) {
            socket.current = io("http://localhost:4000");
            socket.current.emit("addUser", message.to);
        }
    }, [message?.to]);
    useEffect(() => {
        // if(socket?.current){
        socket?.current?.on("messageReceived", msgs => {
            if (message?.to === msgs.from) {
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
        <div className="h-full rounded-[20px] shadow-[0px_3px_4px_rgba(62,73,84,0.04)] relative flex flex-col ">
            <div>
                <MessegesHeader profile={receiver} />
            </div>
            <div className="flex-1 overflow-auto">
                <MessegeList user={profile} profile={receiver} messages={msg} />
            </div>
            <div className="h-[92px] w-full bg-white rounded-br-[20px] rounded-bl-[20px] pr-[15px]">
                <MessageSenderBox msg={msg} setMsg={setMsg} message={message} setMessage={setMessage} socket={socket} />
            </div>
        </div>
    );
};
