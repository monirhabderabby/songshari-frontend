import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";


const TopProfileMov = () => {
  return (
    <div className="bg-[#F8F8FF]">
     <div className="ml-12 mt-24">
        <Link to="/profile/suggest" className='bg-home-suggested pr-4 pt-2 pb-2 pl-2 mr-8 text-white'> Suggested For You </Link>
        <Link to="/profile/top-gride" className='pl-4 pr-4 pt-2 pb-2 mr-8  bg-gome-2 '> Top Profile </Link>
        <Link to="/profile/top-groom" className='pl-4 pr-4 pt-2 pb-2  bg-gome-3 '> Top Groom </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default TopProfileMov;
