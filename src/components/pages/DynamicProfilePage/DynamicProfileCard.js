import React from "react";
import "../../../assets/css/profileCards.css";

const DynamicProfileCard = ({ user }) => {
    return (
        <div>
            <div className="card_container shadow-[0px_10px_5px_rgba(119,123,146,0.02)] px-2 md:px-0">
                <div className="Card-header"></div>
                <div className="relative w-52 h-52 rounded-full">
                    <div className="bottom-20 left-20 lg:left-20 md:left-16 absolute">
                        <div className="relative card-img w-48 h-48">
                            <img
                                className="w-44 h-44 rounded-full img-fluid"
                                src={user?.profilePhoto ? user.profilePhoto : "https://cdn-icons-png.flaticon.com/512/194/194938.png"}
                                alt="profileImage"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center -mt-10">
                    <h2 className="text-2xl font-semibold">{user?.firstName + " " + user?.lastName}</h2>
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
                    <div>
                        <button className="special_profile_button">Send me Money</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicProfileCard;
