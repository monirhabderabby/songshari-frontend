import React from 'react';
import aboutUsBanner from "../../../assets/images/AboutUs/aboutUsBanner.jpg";

// CSS files
import WaveEffectCSS from "../../../assets/css/aboutUsWaveEffect.module.css";

const AboutHeaderBanner = () => {
    return (
        <div
            className='relative'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex items-center justify-center mb-32'>
                    <h4
                        className='text-transparent bg-clip-text text-6xl font-bold leading-[70px]'
                        style={{ backgroundImage: "linear-gradient(96.48deg, #762BB0 7.69%, #000000 99.02%)" }}
                    >
                        Find A Perfect <br /> Match For You
                    </h4>
                </div>
                <div>
                    <img src={aboutUsBanner} alt="Not Available" />
                </div>
            </div>
            <img className='absolute bottom-0 w-full' src={waveImg} alt="Not Available" />
        </div>
    );
};

export default AboutHeaderBanner;