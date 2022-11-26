import React from 'react';
import waveImg from "../../../assets/images/AboutUs/waveImg.png";

const AboutUsCommunity = () => {
    return (
        <div className='bg-[#5B0775]'>
            <h1 className='text-3xl text-white text-center leading-[44px] font-semibold py-[72px]'>
                Our Community
            </h1>
            <div className='relative'>
                <div className='max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 text-white text-center pb-72'>
                    <div className='border-r-2 border-b-2 border-white pt-20 pb-10'>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            7000+
                        </h1>
                        <p className='leading-8'>
                            Employees in
                        </p>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            11
                        </h1>
                        <p className='leading-8'>
                            Global offices
                        </p>
                        <a className='text-sm leading-6' href="/">Learn More</a>
                    </div>
                    <div className='border-r-2 border-b-2 border-white pt-20 pb-10'>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            150,000+
                        </h1>
                        <p className='leading-8'>
                            Customers in
                        </p>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            120+
                        </h1>
                        <p className='leading-8'>
                            Countries
                        </p>
                        <a className='text-sm leading-6' href="/">Learn More</a>
                    </div>
                    <div className='border-b-2 border-white pt-20 pb-10'>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            1160+
                        </h1>
                        <p className='leading-8'>
                            Integrations
                        </p>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            .
                        </h1>
                        <p className='leading-8'>
                            .
                        </p>
                        <a className='text-sm leading-6' href="/">Learn More</a>
                    </div>
                    <div className='border-r-2 border-white pt-20 pb-10'>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            150+
                        </h1>
                        <p className='leading-8'>
                            User Groups in
                        </p>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            21
                        </h1>
                        <p className='leading-8'>
                            Countries
                        </p>
                        <a className='text-sm leading-6' href="/">Learn More</a>
                    </div>
                    <div className='border-r-2 border-white pt-20 pb-10'>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            70,000+
                        </h1>
                        <p className='leading-8'>
                            INBOUND 2021
                        </p>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            11
                        </h1>
                        <p className='leading-8'>
                            Attendees
                        </p>
                        <a className='text-sm leading-6' href="/">Learn More</a>
                    </div>
                    <div className='pt-20 pb-10'>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            453,000+
                        </h1>
                        <p className='leading-8'>
                            Inbound professionals trained and certified
                        </p>
                        <h1 className='text-3xl leading-[56px] font-medium'>
                            .
                        </h1>
                        <p className='leading-8'>
                            .
                        </p>
                        <a className='text-sm leading-6' href="/">Learn More</a>
                    </div>
                </div>
                <img className='absolute bottom-0 bg-transparent z-50' src={waveImg} alt="" />
            </div>
        </div>
    );
};

export default AboutUsCommunity;