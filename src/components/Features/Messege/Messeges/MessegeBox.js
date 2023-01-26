import React, { useEffect, useState } from "react";

// thids party package
import { AiFillLike } from "react-icons/ai";

// components
import mic from "../../../../assets/images/messges/Audio.svg";
import emoji from "../../../../assets/images/messges/Emoji.svg";
import gallary from "../../../../assets/images/messges/Gallery.svg";
import photo from "../../../../assets/images/messges/Photo.svg";
import { MessegeList } from "./MessegeList";
import { MessegesHeader } from "./MessegesHeader";
import { useCreateMessageMutation } from "../../../../Redux/chat/chatApi";
export const MessegeBox = ({msg,setMsg,message,setMessage,socket}) => {
   

    const [createMessage]=useCreateMessageMutation();
    const [arivalMsg,setArivalMsg]=useState(null)
    const handleMessage=async(e)=>{
        if(e.code==='Enter'||e.type==='click'){
           createMessage(message);
           socket.current.emit("sendMessage",{
            to:message.to,
            from:message.from,
            message:message.message
        })
       
        let newMsg=[...msg]
        newMsg.push({fromSelf:true,message:message.message});
        setMsg(newMsg)
           e.target.value=''
        }
    }
    
    useEffect(()=>{
        // if(socket?.current){
            socket?.current?.on("messageReceived",(msgs)=>{
                if(message.to===msgs.from){
                    setArivalMsg({fromSelf:false,message:msgs.message})
                }
            })
        // }
            
    },[message,socket])
    
    useEffect(()=>{
        
        arivalMsg  && setMsg((prev=>[...prev,arivalMsg]))
        setArivalMsg(null)
        
    },[arivalMsg,setMsg,msg])
    
    return (
        <div  className="h-full bg-white rounded-[20px] shadow-[0px_3px_4px_rgba(62,73,84,0.04)] relative">
            <MessegesHeader />
            <MessegeList messages={msg} />
            <div className="h-[92px] bg-white w-full  bottom-0 px-[15px] ">
                <div className="flex items-center h-full mt-100 gap-x-[24px]">
                    <input onChange={(e)=>setMessage({...message,message:e.target.value})} onKeyPress={(e)=>handleMessage(e)} type="text" className="flex-1 h-full outline-none text-[#B0B0B0] text-[16px] px-[29px]" placeholder="Type messege" />
                    <img src={photo} alt="gallary" className="text-[22px]" />
                    <img src={gallary} alt="gallary" className="text-[22px]" />
                    <img src={mic} alt="gallary" className="text-[22px]" />
                    <img src={emoji} alt="gallary" className="text-[22px]" />
                    <AiFillLike className="text-[#A32BCA] text-[22px]" />
                    <button onClick={(e)=>handleMessage(e)} className="bg-[#EFF3FF] rounded-[20px] h-[64px] w-[121px] flex justify-center items-center text-[#A32BCA] text-[16px] font-medium">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
