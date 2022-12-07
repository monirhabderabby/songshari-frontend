import React, { useEffect, useState } from "react";
import "../../assets/css/profileCards.css";
import blackLove from "../../assets/images/icons/blackLove.png";
import { ageCalculator } from "../../assets/utilities/AgeCalculation/ageCalculator";

const ProfileCard = ({ data, isLoading }) => {
    const [age, setAge] = useState("");
    useEffect(() => {
        if (data) {
            const age = ageCalculator(data?.dateOfBirth);
            setAge(age);
        }
    }, [data]);
    return (
        <div style={{ boxShadow: "0px 10px 5px rgba(119, 123, 146, 0.02)" }} className="rounded-xl">
            <div className="card_container shadow-4xl px-2 md:px-0">
                <div className="Card-header"></div>
                <div className="relative w-52 h-52 rounded-full">
                    <div className="bottom-20 left-20 lg:left-[61px] md:left-16 absolute">
                        <div className="relative card-img w-48 h-48">
                            <img
                                className="w-44 h-44 rounded-full img-fluid"
                                src={data?.profilePhoto ? data?.profilePhoto : "https://cdn-icons-png.flaticon.com/512/194/194938.png"}
                                alt="profileImage"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center -mt-10">
                    <h2 className="text-2xl font-semibold">{data?.firstName + " " + data?.lastName}</h2>
                    <div className="flex justify-center  my-2">
                        <h3 className="mr-4">{age} years old | </h3>
                        <div className="flex">
                            <h3>
                                <svg
                                    color="#FF1D8E"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </h3>
                            <h3 className="ml-2">{data?.hometown || "Not provided"}</h3>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-around mt-5">
                    <div className="flex items-center">
                        <div className="w-[40px] h-[40px] rounded-full bg-[#F7E9F8] mr-1 flex items-center justify-center">
                            <img src={blackLove} alt="blackLove" />
                        </div>
                        <span>257</span>
                    </div>
                    <div>
                        {data ? (
                            <button className="special_profile_button">Upgrade Membership</button>
                        ) : (
                            <button className="special_profile_button">Send Connection Request</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
