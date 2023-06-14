// configuration, ex: react-router
import React from "react";
import { useNavigate } from "react-router";

// Third party packages
import moment from "moment";

// components
import tick from "../../../../assets/images/icons/tick.png";
import { useCancleSentRequestMutation } from "../../../../Redux/features/connections/connectionApi";

export const SentReqCard = ({ friend, responsive }) => {
    const navigate = useNavigate();
    // varible declation
    // hook variables
    const [cancleSentRequest] = useCancleSentRequestMutation();

    // js variables
    const { firstName, lastName, profilePhoto, _id } = friend;

    // function declation
    //handle cancle sent request
    const handleCancleRequest = async id => {
        await cancleSentRequest({ id });
    };

    // dynamic route decision
    let dynamicRoute = "";
    responsive ? (dynamicRoute = `/mobileprofile/${friend?._id}`) : (dynamicRoute = `/profile/${friend?._id}`);

    console.log(friend);

    return (
        <div className="p-3 md:p-[21px] h-20 md:h-[141px] w-full mx-auto bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[15px] flex justify-between items-center">
            <div className="h-full flex items-center">
                <div
                    onClick={() => navigate(dynamicRoute)}
                    className="w-10 h-10 md:w-[83px] md:h-[100px] rounded-full md:rounded-[15px] mr-2 md:mr-[21px] bg-center bg-cover cursor-pointer"
                    style={{
                        backgroundImage: `url(${profilePhoto ? profilePhoto : "https://placeimg.com/192/192/people"})`,
                    }}
                ></div>
                <div>
                    <div className="flex items-center">
                        <h1
                            onClick={() => navigate(dynamicRoute)}
                            className="text-sm md:text-[20px] leading-5 md:leading-[30px] text-[#333333] font-bold mr-[4px] cursor-pointer whitespace-nowrap"
                        >
                            {firstName + " " + lastName || ""}
                        </h1>
                        <img src={tick} alt="Not Available" />
                    </div>
                    <span className="text-xs md:text-[16px] leading-4 md:leading-[26px] text-[#333333] font-normal">
                        {moment(friend?.date).fromNow() || ""}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-end gap-y-1 md:gap-y-[20px]">
                <p className="font-Inter text-xs md:text-[14px] leading-4 md:leading-[28px] text-[#000000] whitespace-nowrap">Request Pending</p>
                <button
                    className="h-8 w-[100px] md:h-[42px] md:w-[151px] border-[1px] border-[rgba(0,0,0,0.15)] hover:border-none hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-xs md:text-[17px] hover:text-white duration-150 font-normal font-Inter cursor-pointer rounded-[50px] text-[#E41272] whitespace-nowrap"
                    onClick={() => handleCancleRequest(_id)}
                >
                    Cancel Request
                </button>
            </div>
        </div>
    );
};
