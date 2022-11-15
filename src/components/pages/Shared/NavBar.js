import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavBarCSS from "../../../assets/css/navbar.module.css";
import blackLogo from "../../../assets/images/Logo/logoBlack.png";
import blog from "../../../assets/images/NavIcons/Blog.svg";
import findPartner from "../../../assets/images/NavIcons/Find-Your-Partner.svg";
import membership from "../../../assets/images/NavIcons/Membership.svg";
import course from "../../../assets/images/NavIcons/Online-Course.svg";
// import shop from '../../../assets/images/NavIcons/Shop.svg';
import agent from "../../../assets/images/NavIcons/Agent.svg";
import cart from "../../../assets/images/NavIcons/cart.png";
import kazi from "../../../assets/images/NavIcons/Kazi.svg";
import findALawyer from "../../../assets/images/NavIcons/Lawyer.svg";
import register from "../../../assets/images/NavIcons/Profile-Login-Icon.svg";

const NavBar = () => {
    const allMenu = [
        { id: 1, to: "/findpartner", icon: findPartner, tooltip: "Find Your Partner" },
        { id: 2, to: "/membership", icon: membership, tooltip: "Membership" },
        { id: 3, to: "/blog", icon: blog, tooltip: "Blog" },
        { id: 4, to: "/course", icon: course, tooltip: "Course" },
        // { id: 5, to: '/shop', icon: shop, tooltip: "Shop" },
        { id: 6, to: "/findalawyer", icon: findALawyer, tooltip: "Find a Lawyer" },
        { id: 7, to: "/kazi", icon: kazi, tooltip: "Kazi" },
        { id: 8, to: "/agent", icon: agent, tooltip: "Agent" },
    ];

    return (
        <div className="h-32 bg-white sticky top-0 z-50 shadow-md">
            <div className="grid grid-cols-5 w-5/6 mx-auto">
                <div className="col-span-1 mt-7 mr-6 ">
                    <Link to={"/"}>
                        <img src={blackLogo} alt="" />
                    </Link>
                </div>
                <div className="col-span-3">
                    <ul className="flex justify-start gap-2 w-11/12 h-32">
                        {allMenu.map(menu => (
                            <li key={menu.id}>
                                <NavLink to={menu.to} className={({ isActive }) => (isActive ? "" : `${NavBarCSS.hasTooltip}`)}>
                                    <div className="flex flex-col items-center">
                                        <img className="hover:rotate-[360deg] duration-[2000ms] w-[60px] h-[85px]" src={menu.icon} alt="" />
                                        <span
                                            className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-[70px] ml-[14px]`}
                                            style={{
                                                transform: "translateX(-50%) rotate(45deg)",
                                                backgroundImage: "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                            }}
                                        ></span>
                                        <span
                                            className={`${NavBarCSS.tooltip} z-50 rounded-[40px] shadow-lg px-3 py-1 text-white text-xs whitespace-nowrap uppercase mt-20`}
                                            style={{ backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)" }}
                                        >
                                            {menu.tooltip}
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className={"flex justify-end items-center gap-6 h-32"}>
                        <li className={`${NavBarCSS.hasTooltip}`}>
                            <div className="flex flex-col items-center">
                                <img className="w-14" src={register} alt="img" />
                                <span
                                    className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-14 ml-[14px]`}
                                    style={{
                                        transform: "translateX(-50%) rotate(45deg)",
                                        backgroundImage: "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                    }}
                                ></span>
                                <span
                                    className={`${NavBarCSS.tooltip} rounded-xl z-50 shadow-lg px-3 py-1 text-white text-xs font-bold whitespace-nowrap uppercase mt-[66px]`}
                                    style={{ backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)" }}
                                >
                                    <div className="flex flex-col z-50">
                                        <Link className="text-center my-1" to="/login">
                                            login
                                        </Link>
                                        <Link className="text-center my-1" to="/register-member">
                                            Register as Member
                                        </Link>
                                        <Link className="text-center my-1" to="/regAsProfessional">
                                            Register as a Professional
                                        </Link>
                                    </div>
                                </span>
                            </div>
                        </li>
                        <li className="">
                            <Link to="/cart" className={`${NavBarCSS.hasTooltip}`}>
                                <div className="flex flex-col items-center">
                                    <img src={cart} className="w-8" alt="" />
                                    <span className="absolute top-10 right-16 text-white px-[6px] py-[2px] text-xs font-bold bg-[#dc3545] rounded">
                                        0
                                    </span>
                                    <span
                                        className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-10 ml-[14px]`}
                                        style={{
                                            transform: "translateX(-50%) rotate(45deg)",
                                            backgroundImage: "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                                        }}
                                    ></span>
                                    <span
                                        className={`${NavBarCSS.tooltip} z-50 rounded-[40px] shadow-lg px-3 py-1 text-white text-xs whitespace-nowrap uppercase mt-[50px]`}
                                        style={{ backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)" }}
                                    >
                                        Cart
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className=" text-center">
                            <select
                                className="text-[#ff3366] text-2xl font-medium font-fira pr-2 relative top-1 border-none cursor-pointer"
                                name="lan"
                                id="lan"
                            >
                                <option value="">EN</option>
                                <option value="">IN</option>
                                <option value="">BN</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
