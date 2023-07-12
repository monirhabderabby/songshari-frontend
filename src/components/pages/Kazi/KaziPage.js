import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import KaziFindBox from "./KaziFindBox";

const KaziPage = () => {
    return (
        <>
            <CustomHeader title="Kazi" />
            <section className="py-10">
                <div className="max-w-[1300px] mx-auto font-george">
                    <div className="grid grid-cols-1 lg:grid-cols-3  xl:grid-cols-4 gap-4 justify-center ">
                        <div>
                            <KaziFindBox />
                        </div>
                        <div className="lg:col-span-2 xl:col-span-3">
                            <div>
                                <div className="flex lg:flex-row flex-col justify-between items-center">
                                    {/* <!-- search --> */}
                                    <div>
                                        <div
                                            style={{
                                                border: "2px solid #FFE8F3",
                                            }}
                                            className="relative flex items-center w-[386px] h-[52px] shadow-sm rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
                                        >
                                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                                type="text"
                                                id="search"
                                                placeholder="Search user name.."
                                            />
                                        </div>
                                    </div>
                                    <div className="find-partner-button mt-[10px] lg:mt-0 flex-wrap flex justify-between items-center">
                                        {" "}
                                        <NavLink
                                            style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)" }}
                                            to="/find-partner"
                                            className="w-[242px] bg-[#FFFFFF] text-[#000] font-semibold flex justify-center rounded items-center h-[50px]"
                                        >
                                            Suggested For You
                                        </NavLink>
                                        <NavLink
                                            style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)" }}
                                            className="bg-[#FFFFFF] h-[50px] font-semibold ml-[24px]  w-[105px] flex justify-center rounded items-center  text-[#000]"
                                            to="top"
                                        >
                                            Top
                                        </NavLink>
                                        <NavLink
                                            style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)" }}
                                            className="bg-[#FFFFFF] h-[50px] font-semibold ml-[24px]  w-[105px] flex justify-center rounded items-center  text-[#000]"
                                            to="nearest"
                                        >
                                            Nearest
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default KaziPage;
