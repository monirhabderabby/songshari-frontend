// Configuration
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// Third party packages
import { AiOutlineHeart } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";

// Components
import blackLogo from "../../../assets/images/Logo/logoBlack.png";
import Agent from "../../../assets/images/NavIcons/Agent.svg";
import blog from "../../../assets/images/NavIcons/Blog.svg";
import findPartner from "../../../assets/images/NavIcons/Find-Your-Partner.svg";
import kazi from "../../../assets/images/NavIcons/Kazi.svg";
import findALawyer from "../../../assets/images/NavIcons/Lawyer.svg";
import membership from "../../../assets/images/NavIcons/Membership.svg";
import course from "../../../assets/images/NavIcons/Online-Course.svg";
import register from "../../../assets/images/NavIcons/Profile-Login-Icon.svg";
import shop from "../../../assets/images/NavIcons/Shop.svg";
import { loadPhotos, loadUserData } from "../../../Redux/features/userInfo/userInfo";
import MobileNav from "./MobileNav";

// CSS files
import "../../../App.css";
import NavBarCSS from "../../../assets/css/navbar.module.css";
import { profilePathMaker } from "../../../assets/utilities/profilePathDecisionMaker/profilePathMaker";
import getCookie from "../../../Helper/cookies/getCookie";
import removeCookie from "../../../Helper/cookies/removeCookie";
import isLoggedIn from "../../../Helper/hooks/checkLoggerPersestency/isLoggedIn";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NavBar = ({ bg }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = isLoggedIn();
    const userInfo = useSelector(state => state?.persistedReducer?.userInfo?.userInfo?.user);
    const token = getCookie("token");
    const tokenInfo = decodeToken(token);

    const { role } = tokenInfo || {};
    const userProfilePath = profilePathMaker(role);

    // js variable
    let { profilePhoto } = userInfo || {};

    profilePhoto = profilePhoto ? profilePhoto : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    const allMenu = [
        {
            id: 1,
            to: "/find-partner/suggested",
            icon: findPartner,
            tooltip: "Find Your Partner",
        },
        { id: 2, to: "/membership", icon: membership, tooltip: "Membership" },
        { id: 3, to: "/blog", icon: blog, tooltip: "Blog" },
        { id: 4, to: "/course", icon: course, tooltip: "Course" },
        {
            id: 5,
            to: "/findLawyers/recent",
            icon: findALawyer,
            tooltip: "Find Lawyer",
        },
        {
            id: 6,
            to: "/kazi/recent",
            icon: kazi,
            tooltip: "Find Kazi",
        },
        {
            id: 7,
            to: "/agent/recent",
            icon: Agent,
            tooltip: "Find Agent",
        },
        { id: 8, to: "/shop", icon: shop, tooltip: "Shop" },
    ];

    // function declaration for logout
    let logoutButton = async () => {
        dispatch(loadUserData(null));
        dispatch(loadPhotos([]));
        navigate("/");
        removeCookie("token");
    };

    // Dynamic menu decision
    if (role === "lawyer" || role === "agent" || role === "kazi") {
        allMenu.shift();
    }

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
                                    {user ? (
                                        <img className="w-[50px] h-[50px] rounded-[100%] object-cover" src={profilePhoto} alt="" />
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
                                                to={userProfilePath}
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
                            <li>
                                {user && (
                                    <div className="h-full flex items-center relative -top-[14px]">
                                        <div className="relative hover:scale-110 duration-300 cursor-pointer" onClick={() => navigate("/wishlist")}>
                                            <AiOutlineHeart className="h-[45px] w-[45px] text-[#E42986] -z-20" />
                                            <span className="w-[18px] h-[18px] rounded-full bg-[#E42986] text-white flex justify-center items-center absolute z-50 right-0 top-[0px] text-[12px]">
                                                16
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li>
                                {user && (
                                    <div className="h-full flex items-center relative -top-[14px]">
                                        <div className="relative hover:scale-110 duration-300 cursor-pointer" onClick={() => navigate("/cart")}>
                                            <HiShoppingBag className="h-[45px] w-[45px] text-[#E42986] -z-20" />
                                            <span className="w-[18px] h-[18px] rounded-full bg-[#E42986] text-white flex justify-center items-center absolute z-50 right-0 top-[0px] text-[12px]">
                                                1
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li>
                                <LanguageSwitcher />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <MobileNav />
        </>
    );
};

export default NavBar;
