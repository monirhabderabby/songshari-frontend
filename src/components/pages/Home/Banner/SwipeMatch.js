import React, { useEffect, useState } from 'react';
import { FaBolt, FaHeart, FaStar, FaTimes, FaUndo } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";
import dummyData from "./TopProfile/dummyData";


const SwipeMatch = () => {

  const [ambulance,setAmbulance] = useState([])
    useEffect(()=>{
        fetch(' https://shanshari-temp.vercel.app/withoutLogin/recentMembers')
        .then(res => res.json())
        .then(data => setAmbulance(data))
    },[])

  return (
    <div
      className="w-11/12 md:w-1/3 lg:w-[350px] xl:w-1/4 mx-auto absolute md:static top-12 left-[4%] h-fit lg:h-[320px] 2xl:h-[70vh]"
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div
        className="rounded-t-xl"
        style={{
          backgroundImage:
            "linear-gradient(145deg,rgba(81, 27, 231, 1) 0%,rgba(228, 18, 114,1)100%)",
        }}
      >
        <p className="py-3 md:pt-1 md:pb-2 lg:py-3 text-center text-lg font-bold text-white">
          Swipe & Match
        </p>
      </div>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper text-center"
      >
        {ambulance.map((data) => (
          <SwiperSlide key={data.id} className="relative">
            <img className="w-full rounded-b-xl" src={data.profilePhoto} alt="" />
            <div className="absolute bottom-4 left-8 text-white w-4/5">
              <div className="text-left pl-6">
                <p className="mb-2 text-black font-bold text-2xl text-center mt-20">
                  {data.firstName} {data.lastName}
                </p>
                <p className="flex gap-1">
                  <FaStar className="font-bold text-sm text-green-900"></FaStar>
                  <span className="text-xs">Login First</span>
                </p>
                <p className="flex gap-1 mb-4">
                  <FaStar className="font-bold text-sm"></FaStar>
                  <span className="text-xs">Login First</span>
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <div
                  className="border-2 border-[#ff337c] p-2 rounded-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                  }}
                >
                  <FaUndo className="text-xl"></FaUndo>
                </div>
                <div
                  className="border-2 border-[#ff337c] p-2 rounded-full"
                  style={{ backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)" }}
                >
                  <FaTimes className="text-xl"></FaTimes>
                </div>
                <div
                  className="border-2 border-[#ff337c] p-2 rounded-full"
                  style={{ backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)" }}
                >
                  <FaStar className="text-xl"></FaStar>
                </div>
                <div
                  className="border-2 border-[#ff337c] p-2 rounded-full"
                  style={{ backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)" }}
                >
                  <FaHeart className="text-xl"></FaHeart>
                </div>
                <div
                  className="border-2 border-[#ff337c] p-2 rounded-full"
                  style={{ backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)" }}
                >
                  <FaBolt className="text-xl"></FaBolt>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeMatch;