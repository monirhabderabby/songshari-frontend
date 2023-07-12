import React from "react";
import SinglePostComment from "./SinglePostComment";

// Third party package

// components
import SinglePostFooter from "./SinglePostFooter";
import SinglePostHeader from "./SinglePostHeader";

const SinglePostCard = ({ post }) => {
  
  return (
    <div>
      <div className="max-w-[457px] mx-auto shadow-[2px_2px_4px_rgba(0,0,0,0.12)] bg-white rounded-[10px] p-[30px]">
        <SinglePostHeader post={post} />
        <hr />
        <SinglePostFooter post={post} />
        <hr />
        <SinglePostComment post={post} />
      </div>
    </div>
  );
};

export default SinglePostCard;
