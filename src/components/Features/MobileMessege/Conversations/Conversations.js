// Configuration
import React from "react";

// Third party packages
import Divider from "@mui/material/Divider";
import moment from "moment";

// Components
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import { useGetAllConnectedConnectionsQuery } from "../../../../Redux/features/connections/connectionApi";
// import { setUser } from "../../../../Redux/chat/chatReducer";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Conversations = () => {
    const res = useSelector(state => state.persistedReducer.userInfo.userInfo);
    let from = res?.data ? res.data.user._id : res?.user._id;
    let { data } = useGetAllConnectedConnectionsQuery(from);
    
    
    // console.log(data)
    // const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleUser = (item) => {
        console.log(item)
        // dispatch(setUser(item));
        navigate(`/mobile-inbox/${item._id}`);
    }

    return (
        <div>
            <MobileBackButton name="Conversation" />
            <div className="max-w-[1024px] mx-auto px-6">
                {data?.data?.user?.map(item => {
                    return (
                        <>
                            <Divider light />
                            <div className="w-full h-[88px] flex gap-x-[34px] mt-[10px]">
                                <img
                                    className="h-[58px] w-[58px] rounded-full"
                                    src={item?.profilePhoto}
                                    alt="profile"
                                />
                                <div onClick={()=>handleUser(item)} className="flex-1 h-full">
                                    <div className="w-full flex justify-between">
                                        <p  className="text-[16px] text-[#000000] font-medium">{item.firstName+" "+item.lastName}</p>
                                        <p className="text-[#898989] text-[14px] font-normal">{moment(item.time).format('LT')}</p>
                                    </div>
                                    <div className="content">
                                        <p className="text-[14px] text-[#000000] font-normal">{item?.lastMsg}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};
