import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../../../assets/css/topProfile.css";

const TopProfile = () => {
  return (
    <div className="">
        <h1 className='font-bold ml-5 mt-10 mb-4'>Top Profile</h1>
      <div className=" custom-container">
        <div className="  top-profile-button-mov flex mx-4">
          <NavLink to="/" className='mr-2'>
            <p className="text-[11px] text-center">Suggested For You</p>
          </NavLink>

          <NavLink to="/top-gride" className='mr-2'>
            <p className="text-[11px] text-center pl-[16px] pr-[16px] font-semibold">Top Bride</p>
          </NavLink>

          <NavLink to="/top-groom">
            <p className="text-[11px] text-center pl-[16px] pr-[16px] font-semibold">Top Groom</p>
          </NavLink>
        </div>

        <div>
          <Outlet />
        </div>
        
      </div>
    </div>
  );
};

export default TopProfile;
