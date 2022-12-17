import React, { useEffect, useState } from 'react'



export const AllPosts = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/member/post`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data?.data?.posts));
  }, []);
  return (
    <div>
{/* <h2 className=' text-center mb-5 text-title text-2xl'>Our Popular Courses</h2>
<div className='grid lg:grid-cols-3 sm:grid-cols-1  pt-10 pb-10'>
{
    tools.map(tool=><IndividualTool
    key={tool._id}
    tool={tool}
    
    ></IndividualTool>)
}
</div> */}

    </div>
  )
}