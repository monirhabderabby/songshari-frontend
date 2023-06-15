import React, { useEffect, useState } from "react";
// Components
import { Tooltip } from "@material-ui/core";
import { AiOutlinePlayCircle } from "react-icons/ai";
import "../../../assets/css/profileCards.css";
import blackLove from "../../../assets/images/icons/blackLove.png";
import { ageCalculator } from "../../../assets/utilities/AgeCalculation/ageCalculator";
import { ProfileSkeletonLoader } from "../../shared/Cards/Loader/Profile__Card__Skeleton__Loader/ProfileSkeletonLoader";
import { DynamicVideoBioDataContainer } from "./DynamicVideoBioDataContainer";

const DynamicProfileCard = ({ data, isLoading }) => {
    // hook variables
    const [age, setAge] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    // js variable
    const { userMatrimonyPackageInfo } = data || {};
    
    useEffect(() => {
        if (data) {
            const age = ageCalculator(data?.dateOfBirth);
            setAge(age);
        }
    }, [data]);

    // js variable declare
    const name = (data?.firstName ? data?.firstName : "") + " " + (data?.lastName ? data?.lastName : "");
    const likes = data?.likes.length || 0;
    const UserAge = data?.dateOfBirth ? age + "Years old" : "";
    const coverPhoto = (data?.coverPhoto && data.coverPhoto) || "";
    let content = null;

    if (isLoading) {
        content = <ProfileSkeletonLoader />;
    } else if (!isLoading && data) {
        content = (
            <>
                <div className="max-w-[360px] h-[400px] shadow-[0px_10px_5px_rgba(119,123,146,0.02)] bg-white rounded-[10px] relative hidden lg:block">
                    <div
                        style={{ backgroundImage: `url(${coverPhoto})` }}
                        className={`relative h-[150px] w-full rounded-tl-[10px] rounded-tr-[10px] ${
                            !coverPhoto && "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
                        } bg-center bg-cover`}
                    >
                        <div className="h-[135px] absolute -bottom-[50%] left-[110px] w-[135px]  bg-white shadow-sm border-[1px] rounded-full flex justify-center items-center">
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
                        <div className="text-[12px] font-normal font-Inter">{UserAge}</div>
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
                            <h3 className="text-[12px] font-normal font-Inter">{data?.hometown && data?.hometown}</h3>
                        </div>
                        <div className="h-[28px] w-[5px] bg-gray-200 rounded-[4px] mx-[20px]"></div>
                        <button
                    className="special_profile_button text-sm"
                    
                  >
                    {userMatrimonyPackageInfo?.package?.title + " user"}
                  </button>
                    </div>
                    <div className="absolute top-[82%] w-full flex justify-center items-center gap-x-[20px]">
                        <div className="flex items-center">
                            <div className="w-[40px] h-[40px] rounded-full bg-[#F7E9F8] mr-1 flex items-center justify-center">
                                <img src={blackLove} alt="blackLove" />
                            </div>
                            <span>{likes}</span>
                        </div>
                        {data?.videoBioData && <Tooltip title="Click to play">
                            <div onClick={() => setModalOpen(!isModalOpen)}>
                                <AiOutlinePlayCircle className="text-[32px] text-[#ff77aa] hover:text-primary duration-300 cursor-pointer" />
                            </div>
                        </Tooltip>}
                    </div>
                </div>
                {isModalOpen && <DynamicVideoBioDataContainer {...{isModalOpen, setModalOpen,data}} />}
                {/* mobile version  */}
                <div className="lg:hidden">
                    <div className="bg-[#D9D9D9] max-w-[337px] flex justify-center items-center flex-col  mx-auto h-[92px] ">
                        <img src="https://i.ibb.co/YD5hC1J/Rectangle-4471.png" alt="Not Available"></img>
                    </div>
                    <div
                        style={{ boxShadow: " 0px 10px 40px rgba(0, 0, 0, 0.03)" }}
                        className="max-w-[337px] px-[23px]  rounded-sm mx-auto bg-[#ffffff]"
                    >
                        <div>
                            <div className="flex justify-start items-center">
                                <img src={data.photoURL} className="mt-[-20px] w-16 h-16 rounded-full" alt="Not Available" />
                                <h2 className="pl-[7px] text-sm font-semibold text-[#000000]">{name}</h2>
                            </div>
                            <div className="grid grid-cols-4">
                                <div className="heu col-span-1">
                                    <h1 className="">{UserAge}</h1>
                                    <img src="https://i.ibb.co/HNrqrcw/image.png" className="ml-2" alt="Not Available"></img>
                                </div>

                                <div>
                                    <h1 className=" ml-6">Paris,France</h1>
                                </div>

                                <div className="ml-4">
                                    <img className="ml-8" src={blackLove} alt="blackLove"></img>
                                </div>
                                <div>
                                    <span>{likes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return content;
};

export default DynamicProfileCard;
