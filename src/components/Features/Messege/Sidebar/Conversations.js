import React from "react";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../../../Redux/chat/chatReducer";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useNavigate } from "react-router";
export const Conversations = ({user}) => {
    // const dispatch=useDispatch();
    const navigate=useNavigate();
    

    // console.log(user)
    // const arr = [1, 2, 3, 4];
    // user?.sort((a, b) => {
    //     return new Date(b?.time).toISOString - new Date(a?.time).toISOString;
    // });
    // console.log(user);
    return (
        <div className="mt-[30px] h-[537px] bg-white shadow-[0px_3px_4px_rgba(62,73,84,0.04)] rounded-[20px] px-[30px] ">
            <div className="flex flex-col pt-[30px]">
                {user?.map(p => {
                    return (
                        <div key={uuidv4()} onClick={()=>navigate(`/inbox/${p.reciever._id}`)} className="w-full h-[134px] flex gap-x-[34px]">
                            <img
                                className="h-[58px] w-[58px] rounded-full"
                                // src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                                src={p.reciever.profilePhoto}
                                alt="profile"
                            />
                            <div className="flex-1 h-full">
                                <div  className="w-full flex justify-between">
                                    <p  className="text-[16px] text-[#000000] font-medium">{p.reciever.firstName + " "+ p.reciever?.lastName}</p>
                                    <p className="text-[#898989] text-[14px] font-normal">{moment(p?.last_updated).format('LT')} </p>
                                </div>
                                <div className="content">
                                    <p className="text-[14px] text-[#000000] font-normal">
                                        {p?.lastMsg}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
