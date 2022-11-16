import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUndo, FaTimes, FaStar, FaHeart, FaBolt } from "react-icons/fa";

import { Navigation } from "swiper";
import dummyData from './TopProfile/dummyData';

const SwipeMatch = () => {
    return (
        <div className='w-1/4 h-fit'>
            <div className='rounded-t-xl'
                style={{ backgroundImage: 'linear-gradient(145deg,rgba(81, 27, 231, 1) 0%,rgba(228, 18, 114,1)100%)' }}>
                <p className='py-3 text-center text-lg font-bold text-white'>Swipe & Match</p>
            </div>
            <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation]}
                className="mySwiper text-center">
                {
                    dummyData.map((data) => <SwiperSlide
                        key={data.id}
                        className='relative rounded-b-xl'
                    >
                        <img className='w-full rounded-b-xl' src={data.img} alt="" />
                        <div className='absolute bottom-4 left-8 text-white w-4/5'>
                            <p className='mb-2'>{data.name} {data.age}</p>
                            <div className='flex justify-between'>
                                <div
                                    className='border-2 border-[#ff337c] p-2 rounded-full'
                                    style={{ backgroundImage: 'linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)' }}>
                                    <FaUndo className='text-xl'></FaUndo>
                                </div>
                                <div
                                    className='border-2 border-[#ff337c] p-2 rounded-full'
                                    style={{ backgroundImage: 'linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)' }}>
                                    <FaTimes className='text-xl'></FaTimes>
                                </div>
                                <div
                                    className='border-2 border-[#ff337c] p-2 rounded-full'
                                    style={{ backgroundImage: 'linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)' }}>
                                    <FaStar className='text-xl'></FaStar>
                                </div>
                                <div
                                    className='border-2 border-[#ff337c] p-2 rounded-full'
                                    style={{ backgroundImage: 'linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)' }}>
                                    <FaHeart className='text-xl'></FaHeart>
                                </div>
                                <div
                                    className='border-2 border-[#ff337c] p-2 rounded-full'
                                    style={{ backgroundImage: 'linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)' }}>
                                    <FaBolt className='text-xl'></FaBolt>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default SwipeMatch;