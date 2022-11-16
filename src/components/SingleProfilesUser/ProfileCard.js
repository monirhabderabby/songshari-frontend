import React from "react";
import "../../assets/css/profileCards.css";

const ProfileCard = () => {
    return (
        <div>
            <div className="card_container shadow px-2 md:px-0">
                <div className="Card-header"></div>
                <div className="relative w-52 h-52 rounded-full">
                    <div className="bottom-20 left-24 lg:left-24 md:left-16 absolute">
                        <div className="relative card-img w-48 h-48">
                            <img className="w-44 bg-pink-300 h-44 rounded-full img-fluid" src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-center -mt-10">
                    <h2 className="text-2xl font-semibold">Partho bepary</h2>
                    <div className="flex justify-center  my-2">
                        <h3 className="mr-4">21 years old | </h3>
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
                            <h3 className="ml-2">Dhaka</h3>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-around mt-5">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100">
                        <div className="flex items-center">
                            <svg
                                color="#FF1D8E"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>

                        <button className="special_profile_button">Send me Money</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
