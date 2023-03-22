import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../../../assets/utilities/TimeCalculator/TimeAgo';
import { useLikeSingleReplyMutation } from '../../../Redux/features/comment/commentApi';
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
const SingleCommentReply = ({ reply }) => {
  const { data } = useGetProfileDetailsWIthAuthQuery();
  const [replyLiked, setReplyLiked] = useState(reply?.likes?.includes(data?._id));
  const [likeSingleReplay] = useLikeSingleReplyMutation();
    return (
      <div className="ml-[50px]">
        <div>
          <div className="pt-2 flex">
            <img
              className="w-[30px] h-[30px] rounded-full mr-5"
              src={reply?.author?.profilePhoto}
              alt="Not Available"
            />
            <div>
              <div className="bg-gray-100 rounded-xl p-3">
                <h3 className="font-bold">
                  <Link to="/">
                    {reply?.author?.firstName} {reply?.author?.lastName}
                  </Link>
                </h3>
                <p className="text-justify">{reply?.body} </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    setReplyLiked(!replyLiked);
                    likeSingleReplay(reply?._id);
                  }}
                  className={`${
                    replyLiked ? "text-[#E41272]" : "text-gray-400"
                  } font-bold mx-4 hover:underline`}
                >
                  {reply?.likes?.length === 0
                    ? "Like"
                    : reply?.likes?.length === 1
                    ? "1 Like"
                    : reply?.likes?.length + " Likes"}
                </button>
                <label
                  htmlFor={reply?.comment}
                  className="text-gray-400 font-bold mx-4 hover:underline"
                >
                  Reply
                </label>
                <span className="text-gray-400 mx-4">
                  {timeAgo(reply?.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SingleCommentReply;
