import React,{useState, useEffect} from 'react';
import { useLikeSinglePostMutation } from '../../../Redux/features/connections/connectionApi';
import love from "../../../assets/images/icons/coolicon.svg";
import { AiFillHeart } from 'react-icons/ai';
import { useGetProfileDetailsWIthAuthQuery } from '../../../Redux/features/userInfo/userApi';

const SinglePostFooter = ({post}) => {
  const [postLiked, setPostLiked] = useState(false);
  const { data } = useGetProfileDetailsWIthAuthQuery();
    const [
      likeSinglePost,
      { data: likeResponse, isLoading: likeLoading, error: errorLike },
  ] = useLikeSinglePostMutation();
  console.log(likeResponse);

    const handleLikePost = async () => {
      await likeSinglePost(post?._id);
  };
  
    useEffect(() => {
      if (likeResponse) {
        setPostLiked(true);
      }
      if (errorLike) {
        console.log(errorLike);
      }
    }, [likeResponse, errorLike]);
    return (
      <div className="h-[50px] flex items-end mb-4">
        <div className="flex items-center">
          {postLiked || post?.likes?.includes(data?._id) ? (
            <div
              onClick={() => {
                setPostLiked(!postLiked);
                handleLikePost();
              }}
            >
              <AiFillHeart className="text-red-400 w-[24px] h-[24px] mr-[22px] text-xl transition-all duration-500 " />
            </div>
          ) : likeLoading ? (
            <div className="h-[16px] bg-[#E41272] rounded-full animate-ping w-[16px] mr-[22px] text-[#E41272] transition-all duration-500 "></div>
          ) : (
            <button
              onClick={() => {
                setPostLiked(!postLiked);
                handleLikePost();
              }}
            >
              <img src={love} alt="likeButton" className="mr-[22px]" />
            </button>
          )}
          <label
            htmlFor="commentText"
            className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] px-[16px] text-[13px] leading-[30px] text-[#333333]"
          >
            Comment
          </label>
        </div>
      </div>
    );
}

export default SinglePostFooter;
