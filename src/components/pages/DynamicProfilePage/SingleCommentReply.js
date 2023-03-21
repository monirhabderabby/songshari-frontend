import React from 'react';
import { Link } from 'react-router-dom';
const SingleCommentReply = ({ reply }) => {
  console.log(reply);
    return (
      <div className="ml-[50px]">
        <div>
          <div className="pt-2 flex">
            <img
              className="w-[30px] h-[30px] rounded-full mr-5"
              src={reply?.profilePhoto}
              alt="Not Available"
            />
            <div>
              <div className="bg-gray-100 rounded-xl p-3">
                <h3 className="font-bold">
                  <Link to="/">{reply?.authorName}</Link>
                </h3>
                <p className="text-justify">{reply?.body}  </p>
              </div>
              <div>
                <button className="text-gray-400 font-bold mx-4">like</button>
                <button className="text-gray-400 font-bold mx-4">reply</button>
                <span className="text-gray-400 mx-4">7hr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SingleCommentReply;
