import React, { useEffect } from "react";
import tick from "../../../../assets/images/icons/tick.png";
import { useCancleSentRequestMutation } from "../../../../Redux/features/connections/connectionApi";

export const SentReqCard = ({ friend }) => {
    const [cancleSentRequest, { data, isError, error }] = useCancleSentRequestMutation();
    const name = friend.firstName + " " + friend.lastName;

    //handle cancle sent request
    const handleCancleRequest = id => {
        cancleSentRequest({ id });
    };

    useEffect(() => {
        if (isError) {
            console.log(error?.message);
        }
        if (data) {
            console.log(data);
        }
    }, [isError, error, data]);

    return (
        <div className="p-[21px] h-[141px] min-w-[501px] mx-auto bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[15px] flex justify-between items-center">
            <div className="h-full flex items-center">
                <div
                    className="w-[83px] h-[100px] rounded-[15px] mr-[21px] bg-center bg-cover"
                    style={{ backgroundImage: `url(${friend?.profilePhoto ? friend?.profilePhoto : "https://placeimg.com/192/192/people"})` }}
                ></div>
                <div>
                    <div className="flex items-center">
                        <h1 className="text-[20px] leading-[30px] text-[#333333] font-bold mr-[4px]">{name}</h1>
                        <img src={tick} alt="Not Available" />
                    </div>
                    <span className="text-[16px] leading-[26px] text-[#333333] font-normal">A month ago</span>
                </div>
            </div>
            <div className="flex flex-col items-end gap-y-[20px]">
                <p className="font-Inter text-[14px] leading-[28px] text-[#000000]">Request Pending</p>
                <button
                    className="h-[42px] w-[151px] border-[1px] border-[rgba(0,0,0,0.15)] hover:border-none hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[17px] hover:text-white duration-150 font-normal font-Inter cursor-pointer rounded-[50px] text-[#E41272]"
                    onClick={() => handleCancleRequest(friend?._id)}
                >
                    Cancle Request
                </button>
            </div>
        </div>
    );
};
