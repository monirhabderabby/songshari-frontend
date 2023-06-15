// Configuration
import React, { useEffect, useState } from "react";

// Components
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { useNavigate } from "react-router";
// import { setUser } from "../../../../Redux/chat/chatReducer";
import { useSelector } from "react-redux";
import { useAddFriendMutation } from "../../../../Redux/features/connections/connectionApi";
import isConnected from "../../../../assets/utilities/isConnected/isConnected";
export const MobileDynamicConnectionsCard = ({ data }) => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [sent, setSent] = useState(false);

    const [addFriend, { data: response, isLoading: responseLoading }] = useAddFriendMutation();
    const connectedFriendIds = useSelector(state => state?.persistedReducer?.connection?.connectedFriendIds);

    // Check if the user is connected
    useEffect(() => {
        const Connected = isConnected(connectedFriendIds, data?._id);
        if (Connected) {
            setSent(true);
        }
    }, [data, connectedFriendIds]);

    const handleSentRequest = async () => {
        await addFriend(data?._id);
    };

    useEffect(() => {
        if (response) setSent(true);
    }, [response]);
    const handleChat = async data => {
        // dispatch(setUser(data));
        navigate(`/mobile-inbox/${data?._id}`);
    };
    return (
        <section>
            <div className="bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] flex justify-start items-center gap-5">
                <div
                    className="w-[40px] h-[40px] flex justify-center items-center bg-[#FFDFF4] rounded-full"
                    style={{
                        backgroundImage: "linear-gradient(309deg, #F664BC 0%, #FB7BBC 35%, #FF92BB 100%)",
                    }}
                    onClick={handleChat}
                >
                    <BsChatDots className="h-[22px] w-[22px] text-white" />
                </div>
                <div
                    className={`w-auto min-w-[100px] h-[30px] px-4 flex justify-center items-center rounded-full transition-all duration-500 ${
                        sent ? "bg-green-100" : "bg-[#FFDFF4]"
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
                            <BiUserPlus className="cursor-pointer h-3 w-3 text-white transition-all duration-500 " />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
