import React from 'react';
import bgImage from "../../../assets/images/AboutUs/aboutUsFooterBg.png";

const AboutUsMotive = () => {
    return (
        <div className='pt-32 pb-20 bg-no-repeat bg-center bg-cover'
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className=' w-1/2 mx-auto'>
                <h1 className='text-3xl leading-[52px] font-semibold text-left mb-14'>
                    Success is making those who believed in you look brilliant.
                </h1>
                <p className='text-right'>
                    <span className='text-[#762BB0]'>
                        Dharmesh Shah
                    </span>
                    <br />
                    <span className='text-[#3E5974]'>
                        CTO and Founder of HubSpot
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AboutUsMotive;