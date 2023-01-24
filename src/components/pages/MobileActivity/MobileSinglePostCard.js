// Configuration
import React, { useEffect, useState } from "react";

// Third party package
import moment from "moment";

// components
import { AiFillHeart } from "react-icons/ai";
import love from "../../../assets/images/icons/coolicon.svg";
import { useLikeSinglePostMutation } from "../../../Redux/features/connections/connectionApi";

const MobileSinglePostCard = ({ post }) => {
  const [postLiked, setPostLiked] = useState(false);
  const [likeSinglePost, { data: likeResponse, isLoading: likeLoading }] =
    useLikeSinglePostMutation();

  const handleLikePost = async () => {
    await likeSinglePost(post?._id);
  };

  useEffect(() => {
    if (likeResponse) {
      setPostLiked(true);
    }
  }, [likeResponse]);

  return (
    <div>
      <div className="shadow-[2px_2px_4px_rgba(0,0,0,0.12)] bg-white rounded-[10px] px-6 py-3">
        <div className="flex items-center">
          {post?.author?.profilePhoto ? (
            <img
              className="w-[40px] h-[40px] rounded-full mr-[19px]"
              src={post?.author?.profilePhoto}
              alt="profile"
            />
          ) : (
            <img
              className="w-[40px] h-[40px] rounded-full mr-[19px]"
              src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
              alt="profile"
            />
          )}
          <div>
            <p className="font-semibold font-fira text-[18px] text-[#333333] mr-[10px] whitespace-nowrap">
              {post?.author?.firstName} {post?.author?.lastName}
            </p>
            <p className="text-[14px] font-normal text-[#67868F]">
              {moment(post?.createdAt).startOf("day").endOf("day").fromNow()}
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-[#333333] my-3 ml-[60px] mr-[6px] text-justify">
            {post?.postBody}
          </p>
          {post?.attachment?.length > 0 && (
            <img
              className="ml-[60px] w-64 mb-3"
              src={post?.attachment[0]}
              alt=""
            />
          )}
        </div>
        <hr />
        <div className="mt-3 px-2 flex items-end">
          <div className="flex items-center">
            {postLiked || post?.likes?.length !== 0 ? (
              <div>
                <AiFillHeart className="text-red-400 w-[24px] h-[24px] mr-[22px] text-xl transition-all duration-500 " />
              </div>
            ) : likeLoading ? (
              <div className="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] mr-[22px] text-[#E41272] transition-all duration-500 "></div>
            ) : (
              <button onClick={handleLikePost}>
                <img src={love} alt="likeButton" className="mr-[22px]" />
              </button>
            )}
            <button className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] px-[16px] text-[13px] leading-[30px] text-[#333333]">
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSinglePostCard;
