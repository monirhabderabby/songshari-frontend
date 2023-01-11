// configuration
import React from "react";

// components
import { AiOutlineWarning } from "react-icons/ai";
import { MdOutlinePostAdd } from "react-icons/md";
import MobileSinglePostCard from "./MobileSinglePostCard";

const MobileActivityPost = ({ posts, isLoading, error }) => {
  // js variables
  let content = null;

  if (isLoading) {
    content = (
      <div className="border border-blue-50 shadow rounded-md p-4 max-w-[457px] h-40 w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-3 bg-slate-200 rounded"></div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-5">
                <div className="h-3 bg-slate-200 rounded col-span-2 mb-1"></div>
                <div className="h-3 bg-slate-200 rounded col-span-2 mb-1"></div>
                <div className="h-3 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-3 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!isLoading && posts?.data?.posts?.length === 0) {
    content = (
      <div className="flex flex-col items-center justify-center mt-[15%] w-full">
        <MdOutlinePostAdd className="text-[48px] text-gray-400" />
        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
          No Posts Found!
        </p>
      </div>
    );
  } else if (!isLoading && error) {
    content = (
      <div className="grid grid-cols-1 gap-y-[30px]">
        <div className="flex flex-col items-center justify-center mt-[15%]">
          <AiOutlineWarning className="text-[48px] text-gray-400" />
          <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
            Server Error
          </p>
        </div>
      </div>
    );
  } else if (!isLoading && posts?.data?.posts?.length > 0) {
    content = (
      <div className="grid grid-cols-1 gap-y-2">
        {posts?.data?.posts.map((post) => (
          <MobileSinglePostCard key={post?._id} post={post} />
        ))}
      </div>
    );
  }

  return content;
};

export default MobileActivityPost;
