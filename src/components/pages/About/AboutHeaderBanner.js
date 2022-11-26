import React from 'react';
import aboutUsBanner from "../../../assets/images/AboutUs/aboutUsBanner.jpg";

const AboutHeaderBanner = () => {
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
        >
            <div className='custom-container grid grid-cols-1 md:grid-cols-2'>
                <div className='flex items-center'>
                    <h4
                        className='text-transparent bg-clip-text text-6xl font-bold leading-[70px]'
                        style={{ backgroundImage: "linear-gradient(96.48deg, #762BB0 7.69%, #000000 99.02%)" }}
                    >
                        Find A Perfect <br /> Match For You
                    </h4>
                </div>
                <div>
                    <img src={aboutUsBanner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutHeaderBanner;