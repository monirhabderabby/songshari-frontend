// Configuration
import React, { useEffect, useState } from "react";

// Components
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { useNavigate } from "react-router";
// import { setUser } from "../../../../Redux/chat/chatReducer";
import { useAddFriendMutation } from "../../../../Redux/features/connections/connectionApi";
export const MobileDynamicConnectionsCard = ({ data }) => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [sent, setSent] = useState(false);

    const [addFriend, { data: response, isLoading: responseLoading }] = useAddFriendMutation();

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
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#FFDFF4] rounded-full">
                    <MdMessage onClick={() => handleChat(data)} className="h-5 w-5 text-[#E41272]" />
                </div>
                <div
                    className={`w-[40px] h-[40px] flex justify-center items-center rounded-full transition-all duration-500 ${
                        sent ? "bg-green-100" : "bg-[#FFDFF4]"
                    }`}
                >
                    {sent ? (
                        <BiUserCheck className="h-5 w-5 text-green-400 transition-all duration-500 " />
                    ) : responseLoading ? (
                        <div className="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
                    ) : (
                        <BiUserPlus className="h-5 w-5 text-[#E41272] transition-all duration-500 " onClick={handleSentRequest} />
                    )}
                </div>
            </div>
        </section>
    );
};
