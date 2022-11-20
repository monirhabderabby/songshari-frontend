import React from 'react';
import img1 from "../../../assets/images/Slider/Slider2.jpeg";
import style from './lowyercard.module.css';

const LawyerCard = () => {
    return (
        <div>
            <div className="px-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className={`pl-4 pr-6 pt-4 pb-1 ${style.card_body} rounded-md`}>
                        <div>
                            <div className={`${style.img_container}`}>
                                <img className={`rounded-md ${style.img}`} src={img1} alt="service image" />
                            </div>
                            <div>
                                <h1 className='py-2 text-[20px] font-bold'>Lawyer service name here</h1>
                                <p>Please add your content test here.Keep it short and smile. And more smile :)</p>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='font-bold'>Your name</h1>
                                    <div className='flex items-center'>
                                        <p className='bg-gray-300 w-4 h-4 rounded-full'></p>
                                        <p className='pl-2'>Layer</p>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <p className='pr-2 font-bold'>$ 100</p>
                                    <button className={`${style.btn}`}>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`pl-4 pr-6 pt-4 pb-1 ${style.card_body} rounded-md`}>
                        <div>
                            <div className={`${style.img_container}`}>
                                <img className={`rounded-md ${style.img}`} src={img1} alt="service image" />
                            </div>
                            <div>
                                <h1 className='py-2 text-[20px] font-bold'>Lawyer service name here</h1>
                                <p>Please add your content test here.Keep it short and smile. And more smile :)</p>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='font-bold'>Your name</h1>
                                    <div className='flex items-center'>
                                        <p className='bg-gray-300 w-4 h-4 rounded-full'></p>
                                        <p className='pl-2'>Layer</p>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <p className='pr-2 font-bold'>$ 100</p>
                                    <button className={`${style.btn}`}>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyerCard;