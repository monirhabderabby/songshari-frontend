import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const TopProfession = () => {
  return (
    <>
      <div className="bg-[#F8F8FF]">
        <div className=" pt-10 custom-container ">
          <h1 className="text-center text-[50px] text-[#ff317b] pb-[30px]">
            Top Profession
          </h1>

          <div className="top-profile-button  flex-wrap flex justify-center items-center">
            <NavLink to="/">
              <p className="text-[1.2rem] text-center">Lawyer</p>
            </NavLink>

            <NavLink to="/top-profession/agent">
              <p className="text-[1.2rem] text-center">Agent</p>
            </NavLink>
            <NavLink to="/top-profession/kazi">
              <p className="text-[1.2rem] text-center">Kazi</p>
            </NavLink>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProfession;
