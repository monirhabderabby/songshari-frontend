import React, { useEffect, useRef } from "react";

export const MessegeLeft = ({profile,message}) => {
    
    const scrollRef=useRef();
    useEffect(()=>{
        scrollRef.current.scrollIntoView({behaviour:"smooth"});
    })
    return (
        <div ref={scrollRef} className={`flex w-full justify-start gap-x-[20px] my-[51px]`}>
            <img
                className="h-[58px] w-[58px] rounded-full"
                src={profile?.profilePhoto}
                // src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                alt="profile"
            />
            <div>
                <div className="content bg-[#F2F2F2] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] px-[20px] py-[9px] w-3/5">
                    <p className="text-[#000000] text-[16px] font-normal">{message?.message}</p>
                </div>
                <p className="text-[#969696] text-[12px] font-normal mt-[13px]">4.30 AM</p>
            </div>
        </div>
    );
};
