// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { AiFillHeart } from "react-icons/ai";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";

// components
import loveIcon from "../../../assets/images/icons/love.png";
import { ageCalculator } from "../../../assets/utilities/AgeCalculation/ageCalculator";
import {
  useAddFriendMutation,
  useLikeSingleProfileMutation,
} from "../../../Redux/features/connections/connectionApi";

export const MayLikeSingle = ({ data }) => {
  const [sent, setSent] = useState(false);
  const [likeSent, setLikeSent] = useState(false);
  const [age, setAge] = useState();
  const [addFriend, { data: response, isLoading: responseLoading }] =
    useAddFriendMutation();
  const [likeSingleProfile, { data: likeResponse, isLoading: likeLoading }] =
    useLikeSingleProfileMutation();

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
    if (likeResponse && likeSent === true) {
      setLikeSent(false);
    }
    if (likeResponse && likeSent === false) {
      setLikeSent(true);
    }
  }, [likeResponse, likeSent]);

  useEffect(() => {
    if (data) {
      const age = ageCalculator(data?.dateOfBirth);
      setAge(age);
    }
  }, [data]);

  return (
    <div className="w-[263px] h-[179px] bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[20px]  py-[17px] mx-auto">
      <div className="flex items-center justify-between px-5">
        <div
          className="w-[67px] h-[67px] rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              data?.profilePhoto
                ? data?.profilePhoto
                : "https://cdn-icons-png.flaticon.com/512/194/194938.png"
            })`,
          }}
        ></div>
        <div className="flex items-center gap-x-[10px]">
          <div
            className={`w-[44px] h-[44px] rounded-full flex justify-center items-center ${
              likeSent ? "bg-green-100" : "bg-[#FFDFF4]"
            }`}
            onClick={handleLikeProfile}
          >
            {likeSent ? (
              <div>
                <AiFillHeart className="text-green-400  w-[20px] h-[20px] text-xl transition-all duration-500 " />
              </div>
            ) : likeLoading ? (
              <div className="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
            ) : (
              <img
                onClick={handleLikeProfile}
                src={loveIcon}
                alt="loveIcon"
                className=""
              />
            )}
          </div>
          <div
            className={`${
              sent ? "bg-green-100" : "bg-[#FFDFF4]"
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
      <div className="mt-[10px] px-5">
        <h1 className="text-[24px] text-[#000000] leading-[36px] font-medium font-poppins">
          {data?.firstName}
        </h1>
        <div className="">
          <span className="text-[20px] leading-[30px] tracking-[-0.24px] text-[#000000] font-medium font-Inter">
            {age ? age : ""}
          </span>
          {data?.dateOfBirth && data?.designation && (
            <span className=""> | </span>
          )}
          <span className="text-[20px] leading-[30px] tracking-[-0.24px] text-[#000000] font-medium font-Inter">
            {data?.designation ? data?.designation : ""}
          </span>
        </div>
      </div>
    </div>
  );
};
