import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

import { useGetAllMessageQuery } from "../../../../Redux/chat/chatApi";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { MessegeBox } from "../Messeges/MessegeBox";
import { Sidebar } from "../Sidebar/Sidebar";
export const Inbox = () => {
    const socket = useRef();
    const res = useSelector(state => state.persistedReducer.userInfo.userInfo);
    // console.log(res)
    // const receiver = useSelector(state => state?.persistedReducer?.chat?.user);
    let profile = res?.data ? res.data.user : res?.user;
    // const [message, setMessage] = useState({
    //     from: profile?._id,
    //     to: "",
    //     message: "",
    // });
    // const [receiver, setReceiver] = useState(null);
    // let result = useGetAllMessageQuery(message);
    // console.log(result);
    // const [msg, setMsg] = useState(null);
    // const handleChat = user => {
    //     // console.log(user);
    //     setReceiver(user);
    //     setMessage({ ...message, to: user._id });
    //     if (result?.data?.message) {
    //         setMsg(result?.data?.message);
    //     }
    // };

    // const [msg, setMsg] = useState(null);
    // useEffect(() => {

    // }, []);

    return (
        <div className="bg-[#FAFBFF] pb-[230px]">
            <CustomHeader title="Chat" />
            <div className="lg:w-full xl:max-w-[1200px] h-[calc(100vh-30vh)] mx-auto flex mt-[66px]">
                <div className="lg:w-[437px] xl:w-[557px] h-full">
                    <Sidebar profile={profile} />
                </div>
                <div className="flex-1 h-[calc(30vh + 66px - 100vh)]">
                    <Outlet/>
                    {/* <MessegeBox msg={msg} setMsg={setMsg} message={message} setMessage={setMessage} user={profile} receiver={receiver} socket={socket} /> */}
                </div>
            </div>
        </div>
    );
};
