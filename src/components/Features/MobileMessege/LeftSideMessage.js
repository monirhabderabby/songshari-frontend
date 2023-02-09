import React, { useEffect, useRef } from "react";

export const LeftSideMessage = ({message}) => {
    const scrollRef=useRef();
    useEffect(()=>{
        scrollRef.current.scrollIntoView({behaviour:"smooth"});
    })
    return (
        <div ref={scrollRef} className="flex w-full justify-start gap-x-[20px] my-[31px]">
            <img
                className="h-[58px] w-[58px] rounded-full"
                src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                alt="profile"
            />
            <div className="content bg-[#F2F2F2] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] px-[20px] py-[10px] max-w-[75%] h-auto duration-300">
                <p className="text-[#000000] text-[16px] font-normal">{message?.message}</p>
            </div>
        </div>
    );
};
