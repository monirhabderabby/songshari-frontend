import React, { useEffect, useState } from "react";

// thids party package

// components

import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { MessageSenderBox } from "./MessageSenderBox";
import { MessegeList } from "./MessegeList";
import { MessegesHeader } from "./MessegesHeader";
export const MessegeBox = ({ msg, setMsg, message, setMessage, user,receiver, socket }) => {
    // console.log(user, reciver);
    // const receiver = useSelector(state => state?.persistedReducer?.chat?.user);

    // console.log(res)
    // const [receiver, setReceiver] = useState(res);
    // let start=true;
    const [arivalMsg, setArivalMsg] = useState(null);

    //     useEffect(() => {

    //         if(receiver?._id){
    //             setMessage({...message,to:receiver?._id});
    //         }

    //  }, [receiver?._id]);
    // console.log(message)

    useEffect(() => {
        if (message.to) {
            socket.current = io("http://localhost:4000");
            socket.current.emit("addUser", message.to);
        }
    }, [message.to]);
    useEffect(() => {
        // if(socket?.current){
        socket?.current?.on("messageReceived", msgs => {
            if (message.to === msgs.from) {
                setArivalMsg({ fromSelf: false, message: msgs.message });
            }
        });
        // }
    }, [message, socket]);
    // let c=1;

    // console.log(start)
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
                <MessegeList user={user} profile={receiver} messages={msg} />
            </div>
            <div className="h-[92px] w-full bg-white rounded-br-[20px] rounded-bl-[20px] pr-[15px]">
                <MessageSenderBox msg={msg} setMsg={setMsg} message={message} setMessage={setMessage} socket={socket} />
            </div>
        </div>
    );
};
