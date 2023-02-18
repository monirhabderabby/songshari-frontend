import React from "react";

export const Conversations = ({handleChat,user}) => {
    console.log(user)
    // const arr = [1, 2, 3, 4];
    return (
        <div className="mt-[30px] h-[537px] bg-white shadow-[0px_3px_4px_rgba(62,73,84,0.04)] rounded-[20px] px-[30px] ">
            <div className="flex flex-col pt-[30px]">
                {user?.map(p => {
                    return (
                        <div onClick={()=>handleChat(p._id)} className="w-full h-[134px] flex gap-x-[34px]">
                            <img
                                className="h-[58px] w-[58px] rounded-full"
                                // src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                                src={p.profilePhoto}
                                alt="profile"
                            />
                            <div className="flex-1 h-full">
                                <div  className="w-full flex justify-between">
                                    <p  className="text-[16px] text-[#000000] font-medium">{p.firstName}</p>
                                    <p className="text-[#898989] text-[14px] font-normal">25m ago</p>
                                </div>
                                <div className="content">
                                    {/* <p className="text-[14px] text-[#000000] font-normal">
                                        Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
