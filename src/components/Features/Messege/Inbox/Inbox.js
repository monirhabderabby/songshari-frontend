import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { useGetAllConnectedConnectionsQuery } from "../../../../Redux/features/connections/connectionApi";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { MessegeBox } from "../Messeges/MessegeBox";
import { Sidebar } from "../Sidebar/Sidebar";
import {io} from 'socket.io-client'
export const Inbox = () => {
    const socket=useRef()
    const res=useSelector(state=>state.persistedReducer.userInfo.userInfo)
    // console.log(res)
    let from=res?.data?res.data.user._id:res?.user._id
    
    const { data } = useGetAllConnectedConnectionsQuery();
    
    const [message,setMessage]=useState({
        message:"",
        to:"",
        from:from

    });
    // setMessage({...message,from:res?.user?._id});
    useEffect(() => {
        if(message.to){
          socket.current=io('ws://localhost:4000');
          socket.current.emit('addUser',message.to);
        }
      }, [message.to])
    const [msg,setMsg]=useState(null)
    
    // console.log(arivalMsg)
    const handleChat=async(id)=>{
        setMessage({...message,to:id});
       

    }
    

    
    return (
        <div className="bg-[#FAFBFF]">
            <CustomHeader title="Chat" />
            <div className="lg:w-full xl:max-w-[1400px] h-[calc(100vh-30vh)] mx-auto flex mt-[66px]">
                <div className="lg:w-[437px] xl:w-[557px] h-full">
                    <Sidebar handleChat={handleChat} user={data?.data?.user} />
                </div>
                <MessegeBox msgs={msg} setMsg={setMsg} message={message} setMessage={setMessage} socket={socket}/>
                <div className="flex-1 h-[calc(100vh-30vh)]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
