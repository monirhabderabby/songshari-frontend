// normal import
import React from "react";

// configuration
import { Link } from "react-router-dom";

// images
import love from "../../../../assets/images/icons/coolicon.svg";
import profile from "../../../../assets/images/profile/up1.png";
import { useGetMemberAllPostQuery } from "../../../../Redux/features/userInfo/userApi";

export const AllPosts = () => {
  const { data } = useGetMemberAllPostQuery();
  const posts = data?.data?.posts;

  return (
    <div>
      <div className="pt-2">
        <div className="grid grid-cols-3">
          <Link to="/setting">
            <i className="fa-solid fa-chevron-left ml-6 mt-3"></i>
          </Link>
          <h1 className="text-center mt-2 mb-5 text-lg">All Posts</h1>
          <div></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1  pt-10 pb-10">
        {posts.map((post) => (
          <div>
            <div
              key={post?._id}
              className=" max-w-full shadow-allposts mb-4 bg-white rounded-[10px] p-[30px] md:hidden"
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
                  {post?.author?.firstName}
                </p>

                <div>
                  <span className="text-[12px] font-bold text-[#333333]  ml-[138px]">
                    20 min
                  </span>
                </div>
              </div>
              <div className="my-[23px] ml-[60px] w-[237px]">
                <p className="text-[#333333]">{post?.postBody}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};
