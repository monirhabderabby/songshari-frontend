import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import loveIcon from "../../../../assets/images/icons/love.png";
import { useAddFriendMutation, useLikeSingleProfileMutation } from "../../../../Redux/features/connections/connectionApi";
export const CardYouMayLike = ({ data }) => {
  const [sent, setSent] = useState(false);
  const [likeSent, setLikeSent] = useState(false);
  const [addFriend, { data: response, isLoading: responseLoading }] = useAddFriendMutation();
  const [likeSingleProfile, { data: likeResponse, isLoading: likeLoading, error: errorLike }] = useLikeSingleProfileMutation();

  // testing variables
  // let likeLoading = false;

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
    console.log(likeResponse);
    if (likeResponse) setLikeSent(true);
  }, [likeResponse]);

  if (errorLike) {
    console.log(errorLike);
  }

  return (
    <div className="lg:w-[263px] h-[179px] bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[20px] px-[20px] py-[17px]">
      <div className="flex items-center justify-between">
        <div className="w-[67px] h-[67px] rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${data?.profilePhoto})` }}></div>
        <div className="flex items-center gap-x-[10px]">
          <div className="w-[44px] h-[44px] bg-[#FFDFF4] rounded-full flex justify-center items-center">
            {/* <img src={loveIcon} alt="loveIcon" /> */}
            {/* {likeSent ? (
                            <div>
                                <AiFillHeart className="text-green-400 w-[20px] h-[20px] text-xl transition-all duration-500 " />
                            </div>
                        ) : likeLoading ? (
                            <div className="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
                        ) : (
                            <img src={loveIcon} alt="loveIcon" />
                        )} */}
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
          <div
            className={`${sent ? "bg-green-100" : "bg-[#FFDFF4]"
              } h-[43px] w-[43px] flex justify-center items-center rounded-full transition-all duration-500`}
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
        <h1 className="text-[24px] text-[#000000] leading-[36px] font-medium font-Inter">{data?.firstName}</h1>
        <div className="">
          <span className="text-[20px] leading-[30px] tracking-[-0.24px] text-[#000000] font-medium font-Inter">26</span>
          <span className=""> | </span>
          <span className="text-[20px] leading-[30px] tracking-[-0.24px] text-[#000000] font-medium font-Inter">Doctor</span>
        </div>
      </div>
    </div>
  );
};