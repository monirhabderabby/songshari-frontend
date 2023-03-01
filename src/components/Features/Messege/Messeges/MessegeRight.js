import React, { useEffect, useRef } from "react";
import moment from "moment";
export const MessegeRight = ({profile,message}) => {
    // console.log(message)
    // console.log(profile.profilePhoto)
    const scrollRef=useRef();
    useEffect(()=>{
        scrollRef.current.scrollIntoView({behaviour:"smooth"});
    })
    return (
        <div ref={scrollRef} className="flex w-full justify-end gap-x-[20px] my-[51px]">
            <div className="flex flex-col flex-wrap-reverse">
                <div className="content bg-[#A32BCA] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] px-[20px] py-[9px] w-3/5">
                    <p className="text-white text-[16px] font-normal">{message?.message}</p>
                </div>
                <p className="text-[#969696] text-[12px] text-right font-normal mt-[13px]">{moment(message?.time).format('LT')}</p>
            </div>
            <img
                className="h-[58px] w-[58px] rounded-full"
                // src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                src={profile?.profilePhoto}
                alt="profile"
            />
        </div>
    );
};
