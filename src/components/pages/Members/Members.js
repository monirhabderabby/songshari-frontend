import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaSlidersH } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../../App.css";

export const Members = () => {
    const [value, setValue] = useState("LATEST ACTIVE");

    const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div>
            <div className="h-[264px] w-full bg_Color">
                <div className="custom-container flex h-full justify-start items-center">
                    <div>
                        <h1 className="pb-[15px] text-white text-[50px] leading-[60px] font-bold font-fira">Members</h1>
                        <div className="flex items-center text-[#ffd0fd] text-[18px]">
                            <Link to="/" className="hover:text-white font-bold">
                                HOME
                            </Link>{" "}
                            <IoIosArrowForward /> Members
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-container mt-[118px] px-3">
                <hr />
                <div className="w-full h-[83px] flex justify-between items-center">
                    <button className="flex items-center py-[6px] px-[30px] button_shadow rounded-full">
                        <span>
                            <FaSlidersH className="text-primary mr-[4px]" />
                        </span>{" "}
                        Filter your search
                    </button>
                    <div className="flex gap-x-2 items-center">
                        Order By:{" "}
                        <select
                            name="orderBy"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            className="outline-none button_shadow py-[6px] px-[20px] rounded-full"
                        >
                            <option value="LATEST ACTIVE">LATEST ACTIVE</option>
                            <option value="NEW">NEW</option>
                            <option value="OLD">OLD</option>
                            <option value="POPULER">POPULER</option>
                        </select>
                    </div>
                </div>
                <hr />
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 custom-container gap-[33px] py-[33px] px-3">
                {products.map((p, index) => {
                    return (
                        <div
                            className="p-[21px] h-[141px] lg:w-[555px] border-[1px] border-[rgba(0,0,0,0.1)] rounded-[15px] flex justify-between items-center"
                            key={index}
                        >
                            <div className="h-full flex items-center">
                                <img className="w-[83px] h-[100px] rounded-[15px] mr-[21px]" src="https://placeimg.com/192/192/people" alt="" />
                                <div>
                                    <div className="flex items-center">
                                        <h1 className="text-[20px] leading-[30px] text-[#333333] font-bold mr-[4px]">Erma Porter</h1>
                                        <AiFillCheckCircle className="text-primary" />
                                    </div>
                                    <span className="text-[16px] leading-[26px] text-[#333333] font-normal">A month ago</span>
                                </div>
                            </div>
                            <button
                                className={`hover:text-white text-[#333333] transition-[0.3s] border-[1px] h-[40px] w-[133px] border-[rgba(0,0,0,0.15)] rounded-full hover:bg-primary`}
                            >
                                Connected
                            </button>
                        </div>
                    );
                })}
            </section>
            <div className="custom-container flex items-center gap-x-[9px] justify-center pb-[132px]">
                <button className="text-[#333333] bg-white shadow-xl rounded-full h-[50px] w-[50px] text-[20px]">1</button>
                <button className="text-[#333333] bg-white shadow-xl rounded-full h-[50px] w-[50px] text-[20px]">2</button>
                <button className="text-white bg_Color shadow-xl rounded-full h-[50px] w-[50px] text-[20px]">3</button>
                <button className="text-[#333333] bg-white shadow-xl rounded-full h-[50px] w-[50px] text-[20px]">4</button>
                <button className="text-[#333333] bg-white shadow-xl rounded-full h-[50px] w-[50px] text-[20px]">5</button>
                <button className="text-[#333333] bg-white shadow-xl rounded-full h-[50px] w-[50px] text-[20px]">6</button>
            </div>
        </div>
    );
};
