import React, { useEffect, useRef } from "react";


export const RightSideMessage = ({message}) => {
    const scrollRef=useRef();
    useEffect(()=>{
        scrollRef.current.scrollIntoView({behaviour:"smooth"});
    })
    return (
        <div ref={scrollRef} className="flex w-full justify-end gap-x-[20px] my-[31px]">
            <div className="content bg-[#A32BCA] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] px-[20px] py-[9px] max-w-[75%] h-auto duration-300">
                <p className="text-white text-[16px] font-normal">
                    {message?.message}
                </p>
            </div>
            <img
                className="h-[58px] w-[58px] rounded-full"
                src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                alt="profile"
            />
        </div>
    );
};
