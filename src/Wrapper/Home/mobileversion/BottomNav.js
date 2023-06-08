// Configuration
import React from "react";
import { NavLink } from "react-router-dom";

// Components
import cart from "../../../assets/images/Logo/Cart.svg";
import member from "../../../assets/images/Logo/Membership.svg";
import Shop from "../../../assets/images/Logo/Shop.svg";

// CSS files
import "../mobileversion/TopMenu.css";

export const BottomNav = () => {
    return (
        <div className="rounded bg-bottom-nav z-50 max-w-[1024px] mx-auto">
            <div className="flex items-center justify-between px-4">
                <NavLink to="/packages">
                    {({ isActive }) => (
                        <img
                            src={member}
                            alt="Not Available"
                            className={`w-10 mt-1 ${isActive && "-mt-14 border-4 border-[#F8F8FF] bg-[#E8E8E8] rounded-full w-14"}`}
                        ></img>
                    )}
                </NavLink>
                <NavLink to="/">
                    {({ isActive }) => (
                        <img
                            src="https://i.ibb.co/d5yyNd6/512-512-Icon.png"
                            alt="Not Available"
                            className={`w-12 ${isActive && "-mt-14 border-4 border-[#EBDEF4] rounded-full w-14 pl-[2px] bg-[#E8E8E8]"}`}
                        ></img>
                    )}
                </NavLink>
                <a href="https://shop.shongshari.com" target="_blank" rel="noreferrer">
                    <img src={Shop} alt="Not Available" className={`w-12`}></img>
                    {/* <img src={Shop} alt="Not Available" className="w-10 mt-1"></img> */}
                </a>
                <NavLink to="/setting">
                    {({ isActive }) => (
                        <img
                            src={cart}
                            alt="Not Available"
                            className={`w-10 mt-1 ${isActive && "-mt-14 border-4 border-white rounded-full w-14 bg-[#E8E8E8]"}`}
                        ></img>
                    )}
                </NavLink>
            </div>
        </div>
    );
};
