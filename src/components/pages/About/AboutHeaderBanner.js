import React from 'react';
import aboutBanner from "../../../assets/images/banner/about-page-left.html.png";

const AboutHeaderBanner = () => {
    const fontFamily = () => {
        return (
            {
                fontFamily: 'Courier New, Courier, monospace'
            }
        )
    }
    return (
        <div style={fontFamily()} className='container mx-auto'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:px-16'>
                    <div className='text-right'>
                        <img src={aboutBanner} alt="" />
                    </div>
                    <div className='text-left'>
                        <div>
                            <h4 style={{ color: "#5650ce" }} className='text-2xl '>Get to know more</h4>
                            <h2 className='text-4xl font-extrabold py-6'>About Us</h2>
                            <p>We are here to build emotion, connect people and create happy stories.Online dating sites are the way to go for people seeking love or to meet singles while they don’t know where to find them. There are lots of online dating sites available which makes it .</p>
                            <p className='pt-12'>As a result, the customer service desk recommends that customers should consider contacting them via their website. We realize that it’s not a simple task to understand what options you have when it comes to contact with their help desk. We, therefore, find it helpful if we share some of our research work with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeaderBanner;