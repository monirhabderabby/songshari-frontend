import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAddFriendMutation } from "../../../Redux/features/connections/connectionApi";
import VarientAnimation from "../../../assets/utilities/Animation/VarientAnimation";
import isConnected from "../../../assets/utilities/isConnected/isConnected";

export const DynamicConnectionsCard = ({ data, isLoading }) => {
    const [sent, setSent] = useState(false);
    const navigate = useNavigate();
    const connectedFriendIds = useSelector(state => state?.persistedReducer?.connection?.connectedFriendIds);
    const [addFriend, { data: response, isLoading: responseLoading }] = useAddFriendMutation();

    const handleSentRequest = async () => {
        await addFriend(data?._id);
    };

    useEffect(() => {
        if (response) setSent(true);
    }, [response]);

    // Check if the user is connected
    useEffect(() => {
        const Connected = isConnected(connectedFriendIds, data?._id);
        if (Connected) {
            setSent(true);
        }
    }, [data, connectedFriendIds]);

    return (
        <VarientAnimation direction="right" delay={0.6}>
            <div className="lg:w-[360px] h-[110px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] mt-[30px] flex justify-center items-center">
                <Tooltip title="Chat">
                    <div
                        onClick={() => navigate(`/inbox/${data?._id}`)}
                        className="w-[40px] h-[40px] flex justify-center items-center bg-[#FFDFF4] rounded-full cursor-pointer"
                        style={{
                            backgroundImage: "linear-gradient(309deg, #F664BC 0%, #FB7BBC 35%, #FF92BB 100%)",
                        }}
                    >
                        <BsChatDots className="h-[22px] w-[22px] text-white" />
                    </div>
                </Tooltip>
                <Tooltip title="Click for sent request">
                    <div
                        className={`w-auto min-w-[140px] p-[15px] h-[40px] flex justify-center items-center cursor-pointer rounded-full ml-[20px] hover:shadow-md transition-all duration-500 ${
                            sent ? "bg-green-100" : ""
                        }`}
                        style={{
                            backgroundImage: "linear-gradient(309deg, #F664BC 0%, #FB7BBC 35%, #FF92BB 100%)",
                        }}
                    >
                        {sent ? (
                            <div className="flex items-center gap-x-[8px]">
                                <span className="text-white">Connected</span>
                                <BiUserCheck className="h-[16px] w-[22px] text-white transition-all duration-500 " />
                            </div>
                        ) : responseLoading ? (
                            <div className="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
                        ) : (
                            <div className="flex items-center gap-x-[8px]" onClick={handleSentRequest}>
                                <span className="text-white">Connect</span>
                                <BiUserPlus className="cursor-pointer h-[22px] w-[22px] text-white transition-all duration-500 " />
                            </div>
                        )}
                    </div>
                </Tooltip>
            </div>
        </VarientAnimation>
    );
};
