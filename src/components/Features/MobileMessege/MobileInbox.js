// Configuration
import React, { useEffect, useRef, useState } from "react";
import {  useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useGetAllMessageQuery } from "../../../Redux/chat/chatApi";
// import { allMessage } from "../../../Redux/chat/chatReducer";

// Components
import { MessageListMobile } from "./MessageListMobile";
import { MobileMessageHeader } from "./MobileMessageHeader";
import { MobileMessgeSenderBox } from "./MobileMessgeSenderBox";
import { useParams } from "react-router";
// CSS
import "../../../App.css";
import { useGetProfileDetailsQuery } from "../../../Redux/features/userInfo/userApi";

export const MobileInbox = () => {
    const socket = useRef();
    // const dispatch = useDispatch();
    const {id}=useParams();
    const res = useSelector(state => state.persistedReducer.userInfo.userInfo);
    const [receiver, setReceiver] = useState(null);
    const [msg, setMsg] = useState(null);
    const user=useGetProfileDetailsQuery(id);
    const [arivalMsg, setArivalMsg] = useState(null);
    let from = res?.data ? res.data.user._id : res?.user._id;
    // console.log(receiver)
    useEffect(() => {
        if (user?.data) {
            setReceiver(user?.data);
        }
    }, [user?.data]);

    const [message, setMessage] = useState({
        message: "",
        to:"" ,
        from: from,
    });
    useEffect(() => {
        if (id) {
            setMessage(m=>({...m,to:id}));
        }
    }, [id]);
    const { data } = useGetAllMessageQuery({ from, to: id});
    // console.log(data)
    // setMessage({...message,from:res?.user?._id});
    useEffect(() => {
        if (receiver?._id) {
            socket.current = io("http://localhost:4000");
            socket.current.emit("addUser", receiver._id);
        }
    }, [receiver?._id]);

    useEffect(() => {
        if (data?.message) {
            setMsg(data?.message);
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
            <div className="relative w-full z-50">
                <MobileMessageHeader profile={receiver} />
            </div>

            <div className="flex-1 overflow-y-auto mt-[60px]">
                <MessageListMobile receiver={receiver} messages={msg} />
            </div>
            <div className="bg-white">
                <MobileMessgeSenderBox msg={msg} setMsg={setMsg} message={message} setMessage={setMessage} socket={socket} />
            </div>
        </div>
    );
};
