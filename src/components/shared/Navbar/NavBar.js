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
    {
      id: 1,
      to: "/findpartner",
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

  return (
    <header class="bg-white sticky top-0 z-50 shadow-md body-font">
      <div class="custom-container container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <Link
          to="/"
          class="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={blackLogo} alt="" />
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4  	flex flex-wrap items-center text-base justify-center">
          {allMenu.map((menu) => (
            <div key={menu.id}>
              <NavLink
                to={menu.to}
                className={({ isActive }) =>
                  isActive ? "" : `${NavBarCSS.hasTooltip}`
                }
              >
                <div
                  style={{ marginLeft: "15px" }}
                  className="flex flex-col items-center"
                >
                  <img
                    className="hover:rotate-[360deg] duration-[2000ms] w-[60px] h-[85px]"
                    src={menu.icon}
                    alt=""
                  />
                  <span
                    className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-[70px] ml-[14px]`}
                    style={{
                      transform: "translateX(-50%) rotate(45deg)",
                      backgroundImage:
                        "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                    }}
                  ></span>
                  <span
                    className={`${NavBarCSS.tooltip} z-50 rounded-[40px] shadow-lg px-3 py-1 text-white text-xs whitespace-nowrap uppercase mt-20`}
                    style={{
                      backgroundImage:
                        "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
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
          <ul className={"flex justify-end items-center gap-6 h-32"}>
            <li className={`${NavBarCSS.hasTooltip}`}>
              <div className="flex flex-col items-center cursor-pointer">
                <img className="w-14" src={register} alt="img" />
                <span
                  className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-14 ml-[14px]`}
                  style={{
                    transform: "translateX(-50%) rotate(45deg)",
                    backgroundImage:
                      "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                  }}
                ></span>
                <Link
                  to="/login"
                  className={`${NavBarCSS.tooltip} rounded-xl z-50 shadow-lg px-3 py-1 text-white text-xs font-bold whitespace-nowrap uppercase mt-[66px]`}
                  style={{
                    backgroundImage:
                      "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                  }}
                >
                  Login
                </Link>
              </div>
            </li>
            <li className="relative ">
              <Link to="/cart" className={`${NavBarCSS.hasTooltip}`}>
                <div className="flex flex-col items-center ">
                  <img src={cart} className="w-8" alt="" />
                  <span className="absolute top-[-10px] right-[-5px] text-white px-[6px] py-[2px] text-xs font-bold bg-[#dc3545] rounded">
                    0
                  </span>

                  <span
                    className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-10 ml-[14px]`}
                    style={{
                      transform: "translateX(-50%) rotate(45deg)",
                      backgroundImage:
                        "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                    }}
                  ></span>
                  <span
                    className={`${NavBarCSS.tooltip} z-50 rounded-[40px] shadow-lg px-3 py-1 text-white text-xs whitespace-nowrap uppercase mt-[50px]`}
                    style={{
                      backgroundImage:
                        "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                    }}
                  >
                    Cart
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <div>
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Options
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </li>
            {/* <li className=" text-center">
              <select
                className="text-[#ff3366] text-2xl  font-medium font-fira pr-2 px-3 relative top-1 border-none cursor-pointer"
                name="lan"
                id="lan"
              >
                <option value="">EN</option>
                <option value="">IN</option>
                <option value="">BN</option>
              </select>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
