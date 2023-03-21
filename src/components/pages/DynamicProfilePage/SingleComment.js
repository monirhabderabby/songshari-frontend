import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import SingleCommentReply from "./SingleCommentReply";
import { useAddReplyToCommentMutation, useLikeSingleCommentMutation } from "../../../Redux/features/comment/commentApi";

const SingleComment = ({ comment }) => {
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState("");
  const { data } = useGetProfileDetailsWIthAuthQuery();
  const [addReplyToComment, { data: replyData }] =
    useAddReplyToCommentMutation();
  const [likeComment, { data: likeData, isLoading: likeLoading, error: likeError }] = useLikeSingleCommentMutation();
  console.log(likeData, likeLoading, likeError);


  const handleReplySubmit = () => {
    if (reply) {
      addReplyToComment({ data: { body: reply }, commentId: comment._id });
    }
  };
  useEffect(() => {
    if (replyData) {
      setReply("");
    }
  }, [replyData]);
  return (
    <div>
      <div className="pt-2 flex">
        <img
          className="w-[40px] h-[40px] rounded-full mr-5 mt-3"
          src={comment?.author?.profilePhoto}
          alt="Not Available"
        />
        <div>
          <div className="bg-gray-100 rounded-xl p-3">
            <h3 className="font-bold">
              <Link to="/">{`${comment?.author?.firstName} ${comment?.author?.lastName}`}</Link>
            </h3>
            <p className="text-justify">{comment?.body}</p>
          </div>
          <div>
            <button
              onClick={() => likeComment(comment?._id)}
              className={`${
                comment?.like?.includes(data?._id)
                  ? "text-[#E41272]"
                  : "text-gray-400"
              } font-bold mx-4 hover:underline`}
            >
              {comment?.likes?.length === 0
                ? "Like"
                : comment?.likes?.length === 1
                ? "1 Like"
                : comment?.likes?.length + " Likes"}
            </button>
            <button
              onClick={() => setShowReply(!showReply)}
              className="text-gray-400 font-bold mx-4 hover:underline"
            >{`${
              comment?.replies?.length === 0
                ? "Reply"
                : comment?.replies?.length + " Replies"
            }`}</button>
            <span className="text-gray-400 mx-4">7hr</span>
          </div>
        </div>
      </div>
      {showReply &&
        comment?.replies?.map((item) => <SingleCommentReply reply={item} />)}
      {showReply && (
        <div className="ml-[50px]">
          <div>
            <div className="pt-2 flex relative">
              <img
                className="w-[30px] h-[30px] rounded-full mr-5"
                src={data?.profilePhoto}
                alt="Not Available"
              />
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                id="replyText"
                className="text-[#757575] pt-1 w-full focus:outline-none bg-gray-50 p-1"
                placeholder="Write Reply......"
              ></textarea>
              <div
                onClick={handleReplySubmit}
                className=" p-1 flex justify-center items-center text-[#F22876] absolute h-10 w-10 rounded-full right-3 top-4 hover:bg-gray-200 cursor-pointer"
              >
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleComment;
