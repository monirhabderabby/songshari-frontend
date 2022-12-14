import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getHoursMinutes } from "../../../Helper/helper";
import profile from "../../../assets/images/profile/up1.png";
import love from "../../../assets/images/icons/coolicon.svg";
export const MovDynamicActivity = ({ postRefetch }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/member/post/myposts`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [postRefetch]);
  return (
    <div>
      {posts
        ? posts?.data?.posts.length !== 0
          ? posts?.data?.posts.map((post) => {
              return (
                <div className="ml-8 mr-8 mb-4">
                  <div className="grid grid-cols-4 gap-2">
                    {post?.author?.profilePhoto === null ? (
                      <img
                        className="w-[40px] h-[40px] rounded-full mr-[19px]"
                        src={profile}
                        alt="profile"
                      />
                    ) : (
                      <img
                        className="w-[40px] h-[40px] rounded-full mr-[19px]"
                        src={post?.author?.profilePhoto}
                        alt="profile"
                      />
                    )}

                    <div className="col-span-2">
                      <p className="font-semibold font-fira text-[14px] text-[#333333] mr-[14px]">
                        {post?.author?.firstName} {post?.author?.lastName}
                      </p>
                    </div>

                    <span className="text-[14px] font-normal text-[#333333]">
                      @albertdon .{" "}
                      <span>
                        {getHoursMinutes(post?.createdAt).hours}h &nbsp;
                        {getHoursMinutes(post?.createdAt).minutes}min
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <p className="text-[#333333]">{post?.postBody}</p>

                    {post?.img && (
                      <img
                        className="mt-[23px]"
                        src={post?.img}
                        alt="Not Available"
                      />
                    )}
                  </div>

                  <div className="h-[61px] flex items-end">
                    <div className="flex items-center">
                      <img src={love} alt="likeButton" className="mr-[22px]" />
                      <button className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] py-[6px] px-[10px] text-[13px]">
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : "no data available"
        : "No data available"}
    </div>
  );
};
