import React, { useEffect, useState } from "react";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { useAddFriendMutation } from "../../../Redux/features/connections/connectionApi";

const MayLikeSingle = ({ data }) => {
  const [sent, setSent] = useState(false);
  const [likeSent, setLikeSent] = useState(false);
  const [addFriend, { data: response, isLoading: responseLoading }] =
    useAddFriendMutation();
  const [
    likeSingleProfile,
    { data: likeResponse, isLoading: likeLoading, error: errorLike },
  ] = useLikeSingleProfileMutation();

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

  if (errorLike) {
    console.log(errorLike);
  }

  return (
    <div>
      {/* <div
        className="bg-white ggg rounded-[20px] flex flex-col items-center justify-center  py-2"
        style={{ boxShadow: "0px 4px 4px rgba(62, 73, 84, 0.04)" }}
      >
        <img
          className="w-[45px] h-[45px] rounded-full"
          src={data.profilePhoto}
          alt="Not Available"
        />
        <h4 className="text-xs leading-5 font-semibold">{data.firstName}</h4>
        <div className="flex justify-between items-center gap-4">
          <span className="bg-[#FFDFF4] p-3 rounded-full">
            <MdMessage className="text-[#E41272] text-xl" />
          </span>
          <span className="bg-[#FFDFF4] p-3 rounded-full">
            {sent ? (
              <BiUserCheck className="text-green-400 w-[20px] h-[20px] text-xl transition-all duration-500 " />
            ) : responseLoading ? (
              <div class="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
            ) : (
              <BiUserPlus
                className="text-[#E41272] w-[20px] h-[20px] text-xl transition-all duration-500"
                onClick={handleSentRequest}
              />
            )}
          </span>
        </div>
      </div> */}
      {/* this is the break */}
      <div
        className="mx-8 md:mx-12 p-5 rounded-[20px]"
        style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.12)" }}
      >
        <div className="flex items-center justify-between">
          <div
            className="w-[67px] h-[67px] rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${data?.profilePhoto})` }}
          ></div>
          <div className="flex items-center gap-x-[10px]">
            <div className="w-[44px] h-[44px] bg-[#FFDFF4] rounded-full flex justify-center items-center">
              {likeSent ? (
                <div>
                  <AiFillHeart className="text-green-400 w-[20px] h-[20px] text-xl transition-all duration-500 " />
                </div>
              ) : likeLoading ? (
                <div className="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
              ) : (
                <img
                  onClick={handleLikeProfile}
                  src={loveIcon}
                  alt="loveIcon"
                />
              )}
            </div>
            <div
              className={`${
                sent ? "bg-green-100" : "bg-[#FFDFF4]"
              } h-[43px] w-[43px] flex justify-center items-center rounded-full transition-all duration-500`}
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
        </div>
        <div className="mt-[10px]">
          <h1 className="text-[24px] text-[#000000] leading-[36px] font-medium font-Inter">
            {data?.firstName}
          </h1>
          <div className="">
            <span className="text-[20px] leading-[30px] tracking-[-0.24px] text-[#000000] font-medium font-Inter">
              26
            </span>
            <span className=""> | </span>
            <span className="text-[20px] leading-[30px] tracking-[-0.24px] text-[#000000] font-medium font-Inter">
              Doctor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MayLikeSingle;
