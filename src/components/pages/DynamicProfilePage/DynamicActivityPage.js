// configuration
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// components
import love from "../../../assets/images/icons/coolicon.svg";
import profile from "../../../assets/images/profile/up1.png";
import { getHoursMinutes } from "../../../Helper/helper";

export const DynamicActivityPage = ({ postRefetch }) => {
    const [posts, setPosts] = useState([]);

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
    <div className="grid grid-cols-1 gap-y-[30px]">
      {posts
        ? posts?.data?.posts.length !== 0
          ? posts?.data?.posts.map((post) => {
              return (
                <div>
                  <div
                    key={post?._id}
                    className="max-w-[457px] mx-auto shadow-[2px_2px_4px_rgba(0,0,0,0.12)] bg-white rounded-[10px] p-[30px] hidden md:block"
                  >
                    <div className="flex items-center">
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

                      <p className="font-semibold font-fira text-[18px] text-[#333333] mr-[14px]">
                        {post?.author?.firstName} {post?.author?.lastName}
                      </p>
                      <div className="w-[20px] h-[20px] bg-[#FCE9F3] rounded-full mr-[14px]"></div>
                      <div>
                        <span className="text-[14px] font-normal text-[#333333]">
                          @albertdon .{" "}
                          <span>
                            {getHoursMinutes(post?.createdAt).hours}h &nbsp;
                            {getHoursMinutes(post?.createdAt).minutes}min
                          </span>
                        </span>
                      </div>
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
                    <hr />
                    <div className="h-[61px] flex items-end">
                      <div className="flex items-center">
                        <img
                          src={love}
                          alt="likeButton"
                          className="mr-[22px]"
                        />
                        <button className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] py-[6px] px-[10px] text-[13px]">
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    key={post?._id}
                    className="max-w-full mx-auto shadow-[2px_2px_4px_rgba(0,0,0,0.12)] bg-white rounded-[10px] p-[30px] md:hidden"
                  >
                    <div className="flex items-center w-72">
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

                      <p className="font-semibold font-fira text-[18px] text-[#333333] mr-[14px]">
                        {post?.author?.firstName} {post?.author?.lastName}
                      </p>
                      <div className="w-[20px] h-[20px] bg-[#FCE9F3] rounded-full mr-[14px]"></div>
                      <div>
                        <span className="text-[14px] font-normal text-[#333333]">
                          @albertdon .{" "}
                          <span>
                            {getHoursMinutes(post?.createdAt).hours}h &nbsp;
                            {getHoursMinutes(post?.createdAt).minutes}min
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="my-[23px] ml-[60px] w-[337px]">
                      <p className="text-[#333333]">{post?.postBody}</p>

                      {post?.img && (
                        <img
                          className="mt-[23px]"
                          src={post?.img}
                          alt="Not Available"
                        />
                      )}
                    </div>
                    <hr />
                    <div className="h-[61px] flex items-end">
                      <div className="flex items-center">
                        <img
                          src={love}
                          alt="likeButton"
                          className="mr-[22px]"
                        />
                        <button className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] py-[6px] px-[10px] text-[13px]">
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "No data"
        : "No data Available"}
    </div>
  );
};
