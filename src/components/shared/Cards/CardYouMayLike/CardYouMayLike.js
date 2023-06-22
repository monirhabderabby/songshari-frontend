// configuration
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Third party packages
import { AiFillHeart } from "react-icons/ai";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";

// components
import { useAddFriendMutation, useLikeSingleProfileMutation } from "../../../../Redux/features/connections/connectionApi";
import loveIcon from "../../../../assets/images/icons/love.png";
import { ageCalculator } from "../../../../assets/utilities/AgeCalculation/ageCalculator";
import VarientAnimation from "../../../../assets/utilities/Animation/VarientAnimation";
import customFunc from "../../../../assets/utilities/customFunc";

export const CardYouMayLike = ({ data, variant }) => {
    const [sent, setSent] = useState(false);
    const [likeSent, setLikeSent] = useState(false);
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const [addFriend, { data: response, isLoading: responseLoading }] = useAddFriendMutation();
    const [likeSingleProfile, { data: likeResponse, isLoading: likeLoading }] = useLikeSingleProfileMutation();

    // profile photo handler
    const { profilePhotoDecisionMaker } = customFunc;

    const handleSentRequest = async () => {
        await addFriend(data?._id);
    };

    const handleLikeProfile = async () => {
        await likeSingleProfile(data?._id);
    };

    useEffect(() => {
        if (response) setSent(true);
    }, [response]);

    useEffect(() => {
        if (likeResponse) setLikeSent(true);
    }, [likeResponse]);

    useEffect(() => {
        if (data) {
            const age = ageCalculator(data?.dateOfBirth);
            setAge(age);
        }
    }, [data]);

    return (
        <VarientAnimation direction="up" delay={0.3}>
            <div className="lg:w-[263px] h-[179px] bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[20px] px-[20px] py-[17px]">
                <div className="flex items-center justify-between">
                    <div
                        onClick={() => navigate(`/profile/${data?._id}`)}
                        className="w-[67px] h-[67px] rounded-full bg-cover bg-center cursor-pointer"
                        style={{
                            backgroundImage: `url(${profilePhotoDecisionMaker(data?.profilePhoto)})`,
                        }}
                    ></div>
                    <div className="flex items-center gap-x-[10px]">
                        {!variant?.includes("swap") && (
                            <div className="w-[44px] h-[44px] cursor-pointer bg-[#FFDFF4] rounded-full flex justify-center items-center">
                                {likeSent ? (
                                    <div>
                                        <AiFillHeart className="text-green-400 w-[20px] h-[20px] text-xl transition-all duration-500 " />
                                    </div>
                                ) : likeLoading ? (
                                    <div className="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
                                ) : (
                                    <img onClick={handleLikeProfile} src={loveIcon} alt="loveIcon" />
                                )}
                            </div>
                        )}
                        <div
                            className={`${
                                sent ? "bg-green-100" : "bg-[#FFDFF4]"
                            } h-[43px] w-[43px] cursor-pointer flex justify-center items-center rounded-full transition-all duration-500`}
                        >
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
                        </div>
                    </div>
                </div>
                <div className="mt-[10px]">
                    <h1
                        onClick={() => navigate(`/profile/${data?._id}`)}
                        className="cursor-pointer text-[24px] text-[#000000] leading-[36px] font-medium font-Inter"
                    >
                        {data?.firstName}
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-[20px] leading-[30px] tracking-[-0.24px] text-[#000000] font-medium font-Inter">{age ? age : ""}</span>
                        {data?.dateOfBirth && data?.designation && <span className="block mb-1"> | </span>}
                        <span className="text-[20px] leading-[30px] tracking-[-0.24px] text-[#000000] font-medium font-Inter">
                            {data?.designation && data?.designation}
                        </span>
                    </div>
                </div>
            </div>
        </VarientAnimation>
    );
};
