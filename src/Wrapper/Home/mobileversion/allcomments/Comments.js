// normal import 
import React, { useEffect, useState } from 'react'

// configuration 
import { Link } from 'react-router-dom';

// images
import love from "../../../../assets/images/icons/coolicon.svg";
import profile from "../../../../assets/images/profile/up1.png";

export const Comments = () => {
  // hooks variable 
    const [posts, setPosts] = useState([]);

// hooks functions 
  useEffect(() => {
    fetch(``, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data?.data?.posts));
  }, []);
  return (
    <div>
        <div className="pt-2">
        <div className="grid grid-cols-3">
          <Link to="/setting">
            <i className="fa-solid fa-chevron-left ml-6 mt-3"></i>
          </Link>
          <h1 className="text-center mt-2 mb-5 text-lg">Comment</h1>
          <div></div>
        </div>
      </div>
<div className='grid lg:grid-cols-3 sm:grid-cols-1  pt-10 pb-10'>

      <div>
      <div
      
        className=" max-w-full shadow-allposts mb-4 bg-white rounded-[10px] p-[30px] md:hidden"
      >
        <div className="flex items-center">
          
            <img
              className="w-[40px] h-[40px] rounded-full mr-[19px]"
              src={profile}
              alt="profile"
            />
         
          <p className="font-semibold font-fira text-[18px] text-[#333333] mr-[14px]">
            Gerson 
          </p>
          
          <div>
            <span className="text-[12px] font-bold text-[#333333]  ml-[138px]">
              20 min             
            </span>
          </div>
        </div>
        <div className="my-[23px] ml-[60px] w-[237px]">
          <p className="text-[#333333]">This is nice website</p>    
        </div>
        
      </div>
    </div>
    

</div> 
    </div>
  )
}