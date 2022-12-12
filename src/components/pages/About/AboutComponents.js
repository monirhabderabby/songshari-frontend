import React from 'react';
import WhyWechoiceCars from '../../CardComopents/WhyWechoiceCars';

const AboutComponents = () => {
    const checkArray = [1, 2, 3, 4];
    const fontFamily = () => {
        return (
            {
                fontFamily: 'Courier New, Courier, monospace'
            }
        )
    }

    return (
        <div className='py-10 my-12' style={{ backgroundColor: '#f3f6fd' }}>
            <div className='container mx-auto'>
                <div style={fontFamily()} className='flex justify-center'>
                    <div className='text-center md:w-2/4'>
                        <h3 className='text-1xl font-bold' style={{ color: '#5650ce', fontSize: '24px' }}>How We’re different</h3>
                        <h1 className='mt-6 mb-8 text-2xl md:text-3xl lg:text-6xl font-extrabold'>Why Choose Us?</h1>
                        <p className=''>There are lots of online dating sites available which makes it difficult to choose the one which can give you a serious partner....</p>
                    </div>
                </div>
                <div className=''>
                    <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            checkArray.map(i => {
                                return (
                                    <div key={i + 1}>
                                        <WhyWechoiceCars />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponents;