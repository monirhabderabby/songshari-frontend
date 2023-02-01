import React from "react";

export const RightSideMessage = () => {
    return (
        <div className="flex w-full justify-end gap-x-[20px] my-[31px]">
            <div className="content bg-[#A32BCA] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] px-[20px] py-[9px] max-w-[75%] h-auto duration-300">
                <p className="text-white text-[16px] font-normal">
                    Great. Do you know about technology revulation of 2023. 2023 is a big revulation of chatGpt. ChatGpt is awsame but AI is not good
                    for humans.
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
