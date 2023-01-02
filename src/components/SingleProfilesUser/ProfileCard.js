// configuration, ex: react-router
import React, { useEffect, useState } from "react";

// components
import blackLove from "../../assets/images/icons/blackLove.png";
import { ageCalculator } from "../../assets/utilities/AgeCalculation/ageCalculator";
import { ProfileSkeletonLoader } from "../shared/Cards/Loader/Profile__Card__Skeleton__Loader/ProfileSkeletonLoader";

// css files
import "../../assets/css/profileCards.css";

const ProfileCard = ({ data, isLoading }) => {
    // hook variables
    const [age, setAge] = useState(0);
    useEffect(() => {
        if (data) {
            const age = ageCalculator(data?.dateOfBirth);
            setAge(age);
        }
    }, [data]);

    // js variable declare
    const name = data?.firstName + " " + data?.lastName || "Not Available";
    const likes = data?.likes.length || 0;
    const UserAge = data?.dateOfBirth ? `${age + "Years old"}` : "Not provided yet";
    let content = null;

    if (isLoading) {
        content = <ProfileSkeletonLoader />;
    } else if (!isLoading && data) {
        content = (
            <div className="max-w-[360px] h-[400px] shadow-[0px_10px_5px_rgba(119,123,146,0.02)] bg-white rounded-[10px] relative">
                <div className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] relative h-[150px] w-full rounded-tl-[10px] rounded-tr-[10px]">
                    <div className="h-[135px] absolute -bottom-[50%] left-[110px] w-[135px] z-50 bg-white shadow-sm border-[1px] rounded-full flex justify-center items-center">
                        <div
                            style={{
                                backgroundImage: `url(${
                                    data?.profilePhoto ? data?.profilePhoto : "https://cdn-icons-png.flaticon.com/512/194/194938.png"
                                })`,
                            }}
                            className="h-[120px] w-[120px] bg-gray-200 rounded-full bg-center bg-cover"
                        ></div>
                    </div>
                </div>
                <h2 className="text-center mt-[85px] text-[28px] font-semibold font-fira">{name}</h2>
                {/* content */}
                <div className="w-full flex justify-center items-center absolute top-[70%]">
                    <div className="text-[17px] font-normal font-Inter">{UserAge}</div>
                    <div className="h-[28px] w-[5px] bg-gray-200 rounded-[4px] mx-[20px]"></div>
                    <div className="flex items-center">
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
                        <h3 className="ml-2 text-[17px] font-normal font-Inter">{data?.hometown || "Not Available"}</h3>
                    </div>
                </div>
                <div className="absolute top-[82%] w-full flex justify-center items-center gap-x-[20px]">
                    <div className="flex items-center">
                        <div className="w-[40px] h-[40px] rounded-full bg-[#F7E9F8] mr-1 flex items-center justify-center">
                            <img src={blackLove} alt="blackLove" />
                        </div>
                        <span>{likes}</span>
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
        );
    }
    return content;
};

export default ProfileCard;
