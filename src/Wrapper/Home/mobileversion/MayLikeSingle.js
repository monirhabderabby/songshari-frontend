import React, { useEffect, useState } from "react";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { useAddFriendMutation } from "../../../Redux/features/connections/connectionApi";

const MayLikeSingle = ({ data }) => {
    const [sent, setSent] = useState(false);
    const [addFriend, { data: response, isLoading: responseLoading }] = useAddFriendMutation();

    const handleSentRequest = async () => {
        await addFriend(data?._id);
    };

    useEffect(() => {
        if (response) setSent(true);
    }, [response]);

    return (
        <div>
            <div
                className="bg-white ggg rounded-[20px] flex flex-col items-center justify-center  py-2"
                style={{ boxShadow: "0px 4px 4px rgba(62, 73, 84, 0.04)" }}
            >
                <img className="w-[45px] h-[45px] rounded-full" src={data.profilePhoto} alt="Not Available" />
                <h4 className="text-xs leading-5 font-semibold">{data.firstName}</h4>
                <div className="flex justify-between items-center gap-4">
                    <span className="bg-[#FFDFF4] p-3 rounded-full">
                        <MdMessage className="text-[#E41272] text-xl" />
                    </span>
                    <span className="bg-[#FFDFF4] p-3 rounded-full">
                        {sent ? (
                            <BiUserCheck className="text-green-400 w-[20px] h-[20px] text-xl transition-all duration-500 " />
                        ) : responseLoading ? (
                            <div className="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
                        ) : (
                            <BiUserPlus
                                className="text-[#E41272] w-[20px] h-[20px] text-xl transition-all duration-500"
                                onClick={handleSentRequest}
                            />
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MayLikeSingle;
