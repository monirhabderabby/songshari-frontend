import React, { useEffect, useState } from "react";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { useAddFriendMutation } from "../../../Redux/features/connections/connectionApi";

export const DynamicConnectionsCard = ({ data, isLoading }) => {
    const [sent, setSent] = useState(false);
    const [addFriend, { data: response, isLoading: responseLoading }] = useAddFriendMutation();

    const handleSentRequest = async () => {
        await addFriend(data?._id);
    };

    useEffect(() => {
        if (response) setSent(true);
    }, [response]);

    return (
        <section>
            <div className="w-[360px] h-[110px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] mt-[30px] flex justify-center items-center">
                <div className="w-[80px] h-[80px] flex justify-center items-center bg-[#FFDFF4] rounded-full">
                    <MdMessage className="h-[36px] w-[36px] text-[#E41272]" />
                </div>
                <div
                    className={`w-[80px] h-[80px] flex justify-center items-center rounded-full ml-[40px] transition-all duration-500 ${
                        sent ? "bg-green-100" : "bg-[#FFDFF4]"
                    }`}
                >
                    {sent ? (
                        <BiUserCheck className="h-[36px] w-[36px] text-green-400 transition-all duration-500 " />
                    ) : responseLoading ? (
                        <div class="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
                    ) : (
                        <BiUserPlus className="h-[36px] w-[36px] text-[#E41272] transition-all duration-500 " onClick={handleSentRequest} />
                    )}

                    {/* bg-[#FFDFF4] */}
                </div>
            </div>
        </section>
    );
};
