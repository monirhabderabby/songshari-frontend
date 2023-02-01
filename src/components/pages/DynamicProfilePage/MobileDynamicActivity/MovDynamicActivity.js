// configuration
import React from "react";

// components
import love from "../../../../assets/images/icons/coolicon.svg";
import profile from "../../../../assets/images/profile/up1.png";
import { getHoursMinutes } from "../../../../Helper/helper";
import { useGetMyPostsQuery } from "../../../../Redux/features/Post/postApi";

export const MovDynamicActivity = ({ postRefetch }) => {
    const { data: posts, isLoading } = useGetMyPostsQuery();

    if (isLoading) {
        return (
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
    }

    return (
        <div>
            {posts
                ? posts?.data?.posts.length !== 0
                    ? posts?.data?.posts.map(post => {
                          return (
                              <div key={post?._id} className="ml-8 mr-8 mb-4">
                                  <div className="grid grid-cols-4 gap-2">
                                      {post?.author?.profilePhoto === null ? (
                                          <img className="w-[40px] h-[40px] rounded-full mr-[19px]" src={profile} alt="profile" />
                                      ) : (
                                          <img className="w-[40px] h-[40px] rounded-full mr-[19px]" src={post?.author?.profilePhoto} alt="profile" />
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

                                      {post?.img && <img className="mt-[23px]" src={post?.img} alt="Not Available" />}
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
