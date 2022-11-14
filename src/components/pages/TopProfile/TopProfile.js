import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../../assets/css/topProfile.css";

const TopProfile = () => {
  return (
    <div className="bg-[#F8F8FF]">
      <div className="pb-[200px] pt-10 custom-container ">
        <h1 className="text-center text-[50px] text-[#ff317b] pb-[30px]">
          Top Profile
        </h1>

        <div className="top-profile-button flex justify-center items-center">
          <NavLink to="/">
            <p className="text-[1.2rem] text-center">Suggested For You</p>
          </NavLink>

          <NavLink to="/top-gride">
            <p className="text-[1.2rem] text-center">Top Bride</p>
          </NavLink>
          <NavLink to="/top-groom">
            <p className="text-[1.2rem] text-center">Top Groom</p>
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
