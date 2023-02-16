// Configuration
import React from "react";

// Third party packages
import Divider from "@mui/material/Divider";
import moment from "moment";

// Components
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import { useGetAllConnectedConnectionsQuery } from "../../../../Redux/features/connections/connectionApi";
import { setUser } from "../../../../Redux/chat/chatReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const Conversations = () => {
    let { data } = useGetAllConnectedConnectionsQuery();
    console.log(data)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleUser = (item) => {
        dispatch(setUser(item));
        navigate("/mobile-inbox");
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
                                    src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                                    alt="profile"
                                />
                                <div className="flex-1 h-full">
                                    <div className="w-full flex justify-between">
                                        <p onClick={()=>handleUser(item)} className="text-[16px] text-[#000000] font-medium">{item.firstName}</p>
                                        {/* <p className="text-[#898989] text-[14px] font-normal">{moment(item.).startOf("hour").fromNow()}</p> */}
                                    </div>
                                    <div className="content">
                                        {/* <p className="text-[14px] text-[#000000] font-normal">{item.message}</p> */}
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
