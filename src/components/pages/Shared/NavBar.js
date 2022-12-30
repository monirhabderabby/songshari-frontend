import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavBarCSS from "../../../assets/css/navbar.module.css";
import blackLogo from "../../../assets/images/Logo/logoBlack.png";
import blog from "../../../assets/images/NavIcons/Blog.svg";
import findPartner from "../../../assets/images/NavIcons/Find-Your-Partner.svg";
import membership from "../../../assets/images/NavIcons/Membership.svg";
import course from "../../../assets/images/NavIcons/Online-Course.svg";
// import shop from '../../../assets/images/NavIcons/Shop.svg';
import { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import agent from "../../../assets/images/NavIcons/Agent.svg";
// import cart from "../../../assets/images/NavIcons/cart.png";
import kazi from "../../../assets/images/NavIcons/Kazi.svg";
import bng from "../../../assets/images/NavIcons/Language-Switcher-Bangla.svg";
import eng from "../../../assets/images/NavIcons/Language-Switcher-English.svg";
import findALawyer from "../../../assets/images/NavIcons/Lawyer.svg";
import register from "../../../assets/images/NavIcons/Profile-Login-Icon.svg";
import { auth } from "../../../firebase.init";
import { loadUserData } from "../../../Redux/features/userInfo/userInfo";
import MobileNav from "./MobileNav";

const NavBar = ({ bg }) => {
    const [language, setLanguage] = useState(true);
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutButton = async () => {
        dispatch(loadUserData(null));
        await signOut();
        navigate("/");
        localStorage.removeItem("accessToken");
    };
    const allMenu = [
        {
            id: 1,
            to: "/find-partner",
            icon: findPartner,
            tooltip: "Find Your Partner",
        },
        { id: 2, to: "/membership", icon: membership, tooltip: "Membership" },
        { id: 3, to: "/blog", icon: blog, tooltip: "Blog" },
        { id: 4, to: "/course", icon: course, tooltip: "Course" },
        // { id: 5, to: '/shop', icon: shop, tooltip: "Shop" },
        { id: 6, to: "/findalawyer", icon: findALawyer, tooltip: "Find a Lawyer" },
        { id: 7, to: "/kazi", icon: kazi, tooltip: "Kazi" },
        { id: 8, to: "/agent", icon: agent, tooltip: "Agent" },
    ];

    const banglaHandler = () => {
        setLanguage(false);
    };
    const englishHandler = () => {
        setLanguage(true);
    };

    return (
        <>
            <header
                className={`${bg ? "bg-transparent" : "bg-white"} sticky hidden lg:block top-0 lg:h-[90px] z-50 shadow-md body-font ${
                    NavBarCSS.navbar
                }`}
            >
                <div className=" lg:max-w-[1000px]  xl:max-w-[1200px] mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                    <Link to="/" className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                        <img src={blackLogo} alt="Not Available" />
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  	flex flex-wrap items-center text-base justify-center">
                        {allMenu.map(menu => (
                            <div key={menu.id}>
                                <NavLink to={menu.to} className={({ isActive }) => (isActive ? "" : `${NavBarCSS.hasTooltip}`)}>
                                    <div style={{ marginLeft: "15px" }} className="flex flex-col items-center">
                                        <img
                                            className="hover:rotate-[360deg] duration-[2000ms] w-[50px] h-[75px]"
                                            src={menu.icon}
                                            alt="Not Available"
                                        />
                                        <span
                                            className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-[70px] ml-[14px]`}
                                            style={{
                                                transform: "translateX(-50%) rotate(45deg)",
                                                backgroundImage: "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                            }}
                                        ></span>
                                        <span
                                            className={`${NavBarCSS.tooltip} z-50 rounded-[40px] shadow-lg px-3 py-1 text-white text-xs whitespace-nowrap uppercase mt-20`}
                                            style={{
                                                backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                            }}
                                        >
                                            {menu.tooltip}
                                        </span>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </nav>
                    <div>
                        <ul className={"flex justify-end items-center gap-2 h-32"}>
                            <li className={`${NavBarCSS.hasTooltip}`}>
                                <div className="flex flex-col items-center cursor-pointer">
                                    {user?.photoURL ? (
                                        <img className="w-[60px] h-[60px] rounded-[100%]" src={user?.photoURL} alt="" />
                                    ) : (
                                        <img className="w-14" src={register} alt="Not Available" />
                                    )}
                                    <span
                                        className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-14 ml-[14px]`}
                                        style={{
                                            transform: "translateX(-50%) rotate(45deg)",
                                            backgroundImage: "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                        }}
                                    ></span>

                                    {user ? (
                                        <>
                                            <Link
                                                to="/userprofile"
                                                className={`${NavBarCSS.tooltip} rounded-xl z-50 shadow-lg px-3 py-1 text-white text-xs font-bold whitespace-nowrap uppercase mt-[66px]`}
                                                style={{
                                                    backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                                }}
                                            >
                                                Profile
                                            </Link>
                                            <span
                                                className={`${NavBarCSS.tooltip} top-[50px] z-10 h-[15px] w-[15px] mt-14 ml-[14px]`}
                                                style={{
                                                    transform: "translateX(-50%) rotate(45deg)",
                                                    backgroundImage: "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                                }}
                                            ></span>

                                            <button
                                                className={`${NavBarCSS.tooltip} top-[53px] rounded-xl z-50 shadow-lg px-3 py-1 text-white text-xs font-bold whitespace-nowrap uppercase mt-[66px]`}
                                                style={{
                                                    backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                                }}
                                                onClick={logoutButton}
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to="/login"
                                                className={`${NavBarCSS.tooltip} rounded-xl z-50 shadow-lg px-3 py-1 text-white text-xs font-bold whitespace-nowrap uppercase mt-[66px]`}
                                                style={{
                                                    backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                                }}
                                            >
                                                Login
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </li>
                            <ul>
                                <li className={`relative cursor-pointer ${NavBarCSS.engDropdown}`}>
                                    <div>
                                        <img className="w-[60px]" src={language ? eng : bng} alt="Not Available" />
                                    </div>
                                    <div
                                        className={`absolute eng-menu border border-black left-0 z-10 top-[70px] w-[80px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${NavBarCSS.engMenu}`}
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="menu-button"
                                        tabIndex="-1"
                                    >
                                        <div className="py-1 text-center" role="none">
                                            <button
                                                onClick={banglaHandler}
                                                className=" text-[#f36] block px-4   text-[22px]"
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-0"
                                            >
                                                BN
                                            </button>
                                            <button
                                                onClick={englishHandler}
                                                className="block px-4 text-[#f36]  text-[22px]"
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-1"
                                            >
                                                EN
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </header>
            <MobileNav />
        </>
    );
};

export default NavBar;
