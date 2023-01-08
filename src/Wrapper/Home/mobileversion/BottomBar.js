import React from "react";
import Shop from "../../../assets/images/Logo/Shop.svg";
import member from "../../../assets/images/Logo/Membership.svg";
import cart from "../../../assets/images/Logo/Cart.svg";
import { NavLink } from "react-router-dom";

export const BottomBar = ({ activeRoute }) => {
  return (
    <div className="rounded bg-bottom-nav mt-4 z-50">
      <div className="grid grid-cols-4 gap-4 bottom-bar">
        <NavLink
          to="/mobileUpgrade"
          className={({ isActive }) => (isActive ? "-mt-8" : "")}
          onClick={() => console.log(window.location.pathname)}
        >
          <img src={member} alt="Not Available" className={`w-10 mt-1`}></img>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "-mt-8" : "")}
          onClick={() => console.log(window.location.pathname)}
        >
          <img
            src="https://i.ibb.co/d5yyNd6/512-512-Icon.png"
            alt="Not Available"
            className={`w-12 h-12`}
          ></img>
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive }) => (isActive ? "-mt-8" : "")}
          onClick={() => console.log(window.location.pathname)}
        >
          <img src={Shop} alt="Not Available" className="w-10 mt-1"></img>
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) => (isActive ? "-mt-8" : "")}
          onClick={() => console.log(window.location.pathname)}
        >
          <img src={cart} alt="Not Available" className="w-10 mt-1"></img>
        </NavLink>
      </div>
    </div>
  );
};
