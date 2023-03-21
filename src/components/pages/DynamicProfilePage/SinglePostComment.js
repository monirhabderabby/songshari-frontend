import React, { useState,useEffect } from "react";
// import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SendIcon from "@mui/icons-material/Send";
import { useAddCommentMutation, useGetAllCommentOfPostQuery } from "../../../Redux/features/comment/commentApi";
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import SingleComment from "./SingleComment";

const SinglePostComment = ({post}) => {
  const { data } = useGetProfileDetailsWIthAuthQuery();
  const [addComment, { data: comments }] = useAddCommentMutation();
  const { data: allComments } = useGetAllCommentOfPostQuery({ postId: post?._id });

  const [comment, setComment] = useState("");
  const handleCommentSubmit = () => {
    if (comment) {
      addComment({postId:post?._id, data:{body:comment}})
    }
  }
  useEffect(() => {
    if (comments) {
      setComment("")
    }
  },[comments])

  return (
    <div>
      {allComments?.data?.comments?.map((item) => (
        <SingleComment comment={item} />
      ))}
      <div>
        <div className="pt-2 flex relative">
          <img
            className="w-[40px] h-[40px] rounded-full mr-5"
            src={data?.profilePhoto}
            alt="Not Available"
          />
          <textarea
            id="commentText"
            className="text-[#757575] pt-1 w-full focus:outline-none bg-gray-50 rounded p-1"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write comment ..."
          ></textarea>
          <div
            onClick={handleCommentSubmit}
            className=" p-1 flex justify-center items-center text-[#F22876] absolute h-10 w-10 rounded-full right-3 top-4 hover:bg-gray-200 cursor-pointer"
          >
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostComment;
