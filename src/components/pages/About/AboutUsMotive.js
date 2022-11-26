import React from 'react';
import bgImage from "../../../assets/images/AboutUs/aboutUsFooterBg.png";

const AboutUsMotive = () => {
    return (
        <div className='pt-32 pb-20 bg-no-repeat bg-cover mt-8'
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className=' w-1/2 mx-auto'>
                <h1 className='text-3xl leading-[52px] font-semibold text-left'>
                    Success is making those who believed in you look brilliant.
                </h1>
                <p className='text-right'>
                    Dharmesh Shah <br /> CTO and Founder of HubSpot
                </p>
            </div>

        </div>
    );
};

export default AboutUsMotive;