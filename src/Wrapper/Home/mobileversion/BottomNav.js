// Configuration
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import Shop from "../../../assets/images/Logo/Shop.svg";
import member from "../../../assets/images/Logo/Membership.svg";
import cart from "../../../assets/images/Logo/Cart.svg";

// CSS files
import "../mobileversion/TopMenu.css";

export const BottomNav = () => {
  const [mobileUpgradeActive, setMobileUpgradeActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [settingActive, setSettingActive] = useState(false);

  return (
    <div className="rounded bg-bottom-nav z-50">
      <div className="flex items-center justify-between px-4">
        <NavLink
          to="/mobileUpgrade"
          className={({ isActive }) => setMobileUpgradeActive(isActive)}
        >
          <img
            src={member}
            alt="Not Available"
            className={`w-10 mt-1 ${
              mobileUpgradeActive &&
              "-mt-14 border-4 border-[#F8F8FF] bg-[#E8E8E8] rounded-full w-14"
            }`}
          ></img>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => setHomeActive(isActive)}>
          <img
            src="https://i.ibb.co/d5yyNd6/512-512-Icon.png"
            alt="Not Available"
            className={`w-12 ${
              homeActive &&
              "-mt-14 border-4 border-[#EBDEF4] rounded-full w-14 pl-[2px] bg-[#E8E8E8]"
            }`}
          ></img>
        </NavLink>
        <NavLink>
          <img src={Shop} alt="Not Available" className="w-10 mt-1"></img>
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) => setSettingActive(isActive)}
        >
          <img
            src={cart}
            alt="Not Available"
            className={`w-10 mt-1 ${
              settingActive &&
              "-mt-14 border-4 border-white rounded-full w-14 bg-[#E8E8E8]"
            }`}
          ></img>
        </NavLink>
      </div>
    </div>
  );
};
