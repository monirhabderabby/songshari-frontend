import React, { useEffect, useState } from "react";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { useAddFriendMutation } from "../../../../Redux/features/connections/connectionApi";
export const CardYouMayLike = ({ data }) => {
    const [sent, setSent] = useState(false);
    const [addFriend, { data: response, isLoading: responseLoading }] = useAddFriendMutation();

    const handleSentRequest = async () => {
        await addFriend(data?._id);
    };

    useEffect(() => {
        if (response) setSent(true);
    }, [response]);

    return (
        <div
            className="bg-white rounded-[20px] flex flex-col items-center justify-center px-3 py-2"
            style={{ boxShadow: "0px 4px 4px rgba(62, 73, 84, 0.04)" }}
        >
            <img className="w-[45px] h-[45px] rounded-full" src={data?.profilePhoto} alt="Not Available" />
            <h4 className="text-[15px] leading-[15px] text-[#000000] font-outfit my-2">{data?.firstName}</h4>
            <div className="flex justify-between items-center gap-4">
                <div className="bg-[#FFDFF4] h-[43px] w-[43px] flex justify-center items-center rounded-full">
                    <MdMessage className="text-[#E41272] w-[20px] h-[20px] text-xl" />
                </div>
                <div
                    className={`${
                        sent ? "bg-green-100" : "bg-[#FFDFF4]"
                    } h-[43px] w-[43px] flex justify-center items-center rounded-full transition-all duration-500`}
                >
                    {sent ? (
                        <BiUserCheck className="text-green-400 w-[20px] h-[20px] text-xl transition-all duration-500 " />
                    ) : responseLoading ? (
                        <div class="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
                    ) : (
                        <BiUserPlus className="text-[#E41272] w-[20px] h-[20px] text-xl transition-all duration-500" onClick={handleSentRequest} />
                    )}
                </div>
            </div>
        </div>
    );
};
