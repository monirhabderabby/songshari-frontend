import React from "react";
import { Link, Outlet } from "react-router-dom";


const TopProfileMov = () => {
  return (
    <div className="bg-[#F8F8FF]">
     <div className="mt-8 pt-8 md:hidden lg:hidden">
        <Link to="" className='bg-home-suggested pr-4 pt-2 pb-2 pl-2 ml-2  text-white'> Suggested For You </Link>
        <Link to="/" className='pl-4  pt-2 pb-2   bg-gome-2 '> Top Profile </Link>
        <Link to="/" className='pl-4  pt-2 pb-2  bg-gome-3 '> Top Groom </Link>
      </div>
     <div className="mt-8 pt-8 hidden lg:hidden md:block">
        <Link to="" className='bg-home-suggested pr-4 pt-2 pb-2 pl-2 ml-8 mr-32 text-white'> Suggested For You </Link>
        <Link to="/" className='pl-4  pt-2 pb-2 mr-32  bg-gome-2 '> Top Profile </Link>
        <Link to="/" className='pl-4  pt-2 pb-2  bg-gome-3 '> Top Groom </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default TopProfileMov;
