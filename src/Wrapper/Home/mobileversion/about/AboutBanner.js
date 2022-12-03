import React from 'react';
import aboutUsBanner from "../../../../assets/images/AboutUs/aboutUsBanner.jpg";
import waveImg from "../../../../assets/images/AboutUs/waveImg.png";

const AboutBanner = () => {
    // const fontFamily = () => {
    //     return (
    //         {
    //             fontFamily: 'Courier New, Courier, monospace'
    //         }
    //     )
    // }
    return (
        <div
            // style={fontFamily()} 
            className='relative'>
            <div className='grid grid-cols-2 ml-4 mr-4'>
                <div className='flex items-center justify-center mb-32'>
                    <h4
                        className='text-transparent bg-clip-text text-lg font-bold mt-14'
                        style={{ backgroundImage: "linear-gradient(96.48deg, #762BB0 7.69%, #000000 99.02%)" }}
                    >
                        Find A Perfect Match For You
                    </h4>
                </div>
                <div>
                    <img src={aboutUsBanner} className='mt-12' alt="Not Available" />
                </div>
            </div>
            <img className=' wave-mov' src={waveImg} alt="Not Available" />
        </div>
    );
};

export default AboutBanner;