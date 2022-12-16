// normal import 
import React from "react";

// configuration 
import { Link, Outlet } from "react-router-dom";

const TopProfileMov = () => {
  return (
    <div>
     <h1 className='font-bold ml-5 mt-10 mb-4'>Top Profile</h1>
    <div className="hello11  mx-5">
<div className="bg-suggested-mov rounded">
  <button className="text-[12px] text-white px-2">Suggested For You</button>
</div>
<div>
  <button className="text-[12px] bg-[#FFFFFF] rounded px-4 mx-3 pt-1 pb-1 font-bold">Top Profile</button>
</div>
<div>
  <button className="text-[12px] bg-[#FFFFFF] rounded px-4 pt-1 pb-1 font-bold">Top Groom</button>
</div>
    </div>
    </div>
  );
};

export default TopProfileMov;
