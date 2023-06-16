import React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDeletePostMutation } from "../../../Redux/features/Post/postApi";
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import timeAgo from "../../../assets/utilities/TimeCalculator/TimeAgo";
import customFunc from "../../../assets/utilities/customFunc";

const SinglePostHeader = ({ post }) => {
  const { data } = useGetProfileDetailsWIthAuthQuery();
  const [deletePost] = useDeletePostMutation();
  const handleDelete = () => {
    deletePost(post?._id);
    handleClose();
  };
  // mui three dot
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // profile photo decision maker
  const { profilePhotoDecisionMaker } = customFunc;

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-[40px] h-[40px] rounded-full mr-[19px]"
            src={profilePhotoDecisionMaker(post?.author?.profilePhoto)}
            alt="profile"
          />

          <div className="flex md:items-center flex-col md:flex-row">
            <p className="font-semibold font-fira text-[18px] leading-7 text-[#333333] mr-[10px]">
              {post?.author?.firstName} {post?.author?.lastName}
            </p>
            <div className="w-[20px] h-[20px] bg-[#FCE9F3] rounded-full mr-[14px] hidden md:block"></div>
            <div>
              <span className="text-[14px] leading-7 font-normal text-[#333333]">
                <span>{timeAgo(post?.createdAt)}</span>
              </span>
            </div>
          </div>
        </div>
        {data?._id === post?.author?._id && (
          <div>
            <BsThreeDotsVertical
              id="long-button"
              aria-controls={open ? "long-button" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="hover:text-black cursor-pointer"
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
          </div>
        )}
      </div>
      <div className="">
        <p className="text-[#333333] my-6 ml-2 mr-[6px] text-justify">
          {post?.postBody}
        </p>
        {post?.attachment?.length > 0 && (
          <img
            className="mt-[23px] max-h-[390px] w-full"
            src={post?.attachment[0]}
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default SinglePostHeader;
