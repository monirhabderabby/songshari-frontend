import React from 'react';
import i1 from "../../assets/images/membership/icon1.png";
import i2 from "../../assets/images/membership/icon2.png";
import i3 from "../../assets/images/membership/icon3.png";
import i4 from "../../assets/images/membership/icon4.png";
import TitleWithBar from '../comons/TitleWithBar';
import styles from "./membership.module.css";

const Membership = () => {
    return (
        <div className='container mx-auto px-4 pt-10 md:-0'>
            <div className={`${styles.set_font_family}`}>
                <div>
                    <div className='text-center'>
                        <h1 className='text-4xl font-extrabold text-red-500 pb-10'>Upgrade Your Plan</h1>
                    </div>
                    <div>
                        <TitleWithBar Color='red' fontsize='4' textData='MemberShip Plan'></TitleWithBar>
                    </div>
                    <div className='pt-10'>
                        <TitleWithBar isHidden='hidden' Color='black' fontsize='1' textData='Choice from one of our membership levels and unlock features you need . Benfine from shongsari at its maximum capacity by choosing the plan that suits you' />
                    </div>
                    <div>
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 pt-16 gap-8`}>
                            <div>
                                <div>
                                    <div className='flex justify-center'>
                                        <img src={i1} alt="Not Available" />
                                    </div>
                                    <div className='py-4'>
                                        <TitleWithBar isHidden='' Color='black' fontsize='2' textData='Unlimited Message' />
                                        <p className='mt-8'></p>
                                    </div>
                                    <div>
                                        <p className=' text-center'>Send and receive message with no limits</p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div>
                                    <div className='flex justify-center'>
                                        <img src={i2} alt="Not Available" />
                                    </div>
                                    <div className='py-4'>
                                        <TitleWithBar isHidden='' Color='black' fontsize='2' textData='Unlimited matched' />
                                        <p className='mt-8'></p>
                                    </div>
                                    <div>
                                        <p className=' text-center'>Send and receive message with no limits</p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div>
                                    <div className='flex justify-center'>
                                        <img src={i3} alt="Not Available" />
                                    </div>
                                    <div className='py-4'>
                                        <TitleWithBar isHidden='' Color='black' fontsize='2' textData='Take more messages' />
                                        <p className='mt-8'></p>
                                    </div>
                                    <div>
                                        <p className=' text-center'>Send and receive message with no limits</p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div>
                                    <div className='flex justify-center'>
                                        <img src={i4} alt="Not Available" />
                                    </div>
                                    <div className='py-4'>
                                        <TitleWithBar isHidden='' Color='black' fontsize='2' textData='Vip Badge' />
                                        <p className='mt-8'></p>
                                    </div>
                                    <div>
                                        <p className=' text-center'>Send and receive message with no limits</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className={`${styles.MembershipButton} font-george`}>MEMBERSHIP DETAILS</button>
            </div>
        </div>
    );
};

export default Membership;