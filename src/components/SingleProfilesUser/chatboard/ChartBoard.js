import React from "react";
// import ChatGelary from './ChatGelary';
// import ChatRequest from './ChatRequest';
import { BsCommand } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
import ChartBoardCSS from "../../../assets/css/chartBoard.module.css";
import certificate from "../../../assets/images/certificate.jpg";
import profilePhoto from "../../../assets/images/profileSmile.jpg";
import { useGetSuggestedUsersQuery } from "../../../Redux/features/AllRecentData/recentApi";
import { CardYouMayLike } from "../../pages/Shared/CardYouMayLike/CardYouMayLike";

const ChartBoard = () => {
    const { data, isLoading } = useGetSuggestedUsersQuery();
    const number6 = [1, 2, 3, 4, 5, 6];

    const certificateInfo = [
        { id: 1, text: "Personal Certificate", img: certificate },
        { id: 2, text: "Professional Certificate", img: certificate },
        { id: 3, text: "Educational Certificate", img: certificate },
    ];

    const suggestedProfiles = [
        { id: 1, name: "Mr. Sherlock", img: profilePhoto },
        { id: 2, name: "Mr. Sherlock", img: profilePhoto },
        { id: 3, name: "Mr. Sherlock", img: profilePhoto },
        { id: 4, name: "Mr. Sherlock", img: profilePhoto },
        { id: 5, name: "Mr. Sherlock", img: profilePhoto },
        { id: 6, name: "Mr. Sherlock", img: profilePhoto },
        { id: 7, name: "Mr. Sherlock", img: profilePhoto },
        { id: 8, name: "Mr. Sherlock", img: profilePhoto },
    ];

    return (
        <div>
            {/* <ChatGelary />
            <ChatRequest /> */}

            {/* ----- Certificate ----- */}
            <div className="rounded-xl p-5" style={{ backgroundImage: "linear-gradient(180deg, #FFD7F6 0%, #FFC1E6 100%)" }}>
                <div className="flex justify-start items-center mx-1 gap-6">
                    <TbMessageCircle2 className="text-[#333333] text-2xl" />
                    <h1 className="text-[#333333] text-2xl leading-[34px] font-bold">Certificate</h1>
                </div>
                {certificateInfo.map(certificate => (
                    <div key={certificate.id}>
                        <h3 className="mt-3 mb-2">{certificate.text}</h3>
                        <div className={`relative ${ChartBoardCSS.hasViewButton}`}>
                            <img className="rounded-lg" src={certificate.img} alt="Not Available" />
                            <button
                                className={`${ChartBoardCSS.showViewButton} top-[35%] left-[35%] rounded block bg-white text-sm font-medium leading-[26px] px-4 py-1 duration-300`}
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ----- You may like ----- */}
            <div className="mt-[70px]">
                <div className="flex justify-start items-center mx-1 gap-6 mb-6">
                    <BsCommand className="text-[#2E3A59] text-2xl" />
                    <h1 className="text-[#333333] text-2xl leading-[34px] font-bold">You May Like</h1>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {data
                        ? data.suggestion.map(profile => {
                              return <CardYouMayLike key={profile._id} {...{ profile }} />;
                          })
                        : number6.map(n => {
                              return (
                                  <div
                                      key={n}
                                      className="flex flex-col  items-center justify-center rounded-[20px] bg-white p-2 shadow-[0px_4px_4px_rgba(62,73,84,0.04)]"
                                  >
                                      `<div className="h-[35px] w-[35px] rounded-full bg-gray-200 animate-pulse"></div>
                                      <div className="h-4 w-full animate-pulse bg-gray-200 leading-5 mt-2 rounded-3xl"></div>
                                      <div className="flex items-center justify-between gap-4">
                                          <div className="w-[45px] h-[45px] bg-gray-200 rounded-full mt-2 animate-pulse"></div>
                                          <div className="w-[45px] h-[45px] bg-gray-200 rounded-full mt-2 animate-pulse"></div>
                                      </div>
                                  </div>
                              );
                          })}
                </div>
            </div>
        </div>
    );
};

export default ChartBoard;
