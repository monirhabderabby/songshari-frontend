import { Token } from "@mui/icons-material";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { useGetMatchedUsersQuery } from "../../../Redux/features/connections/connectionApi";
import "./Matches.css";

export const Matches = () => {
    // const number = [1, 2, 3, 4, 5, 6, 7, 8];
    const { data, isLoading, error } = useGetMatchedUsersQuery();
    if (data) {
        console.log(data);
    }
    if (isLoading) {
        return;
    }
    if (error) { console.log(error.message) };

    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-4">
                {data.map((info, index) => {
                    return (
                        <div key={index} className=" rounded-lg lg:max-w-lg shadow-xl colorrrrrr">
                            {/* ----------Image-------- */}
                            {/* ------------percent----------- */}
                            <p className="bg-white w-28 text-center ml-3 mt-3 text-[12px] py-[6px] px-[8px] rounded-[8px]">{info.percentage}% Match</p>
                            <img
                                src={info._doc.profilePhoto}
                                className="w-20 h-20 mx-auto rounded-full mt-4"
                                alt="profile"
                            ></img>

                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-white">{info._doc.firstName}</h2>
                                <p className="text-white">Age : 28 </p>
                                <p className="text-white">{info._doc.hometown}, Bangladesh </p>
                                <div className="flex justify-center pt-5 gap-x-[24px] mb-[15px]">
                                    <button className="flex justify-center items-center h-[44px] w-[44px] hover:bg-white bg-[#FFDFF4] rounded-full ">
                                        <TbMessage className="text-[#E41272] h-[20px] w-[20px]" />
                                    </button>
                                    <button className="flex justify-center items-center h-[44px] w-[44px] hover:bg-white bg-[#FFDFF4] rounded-full ">
                                        <BiUserCircle className="text-[#E41272] h-[20px] w-[20px]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
