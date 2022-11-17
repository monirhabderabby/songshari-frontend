import React from 'react';
import LoveCard from '../../CardComopents/LoveCard';
import style from "./loveisfeath.module.css";

const LoveIsFeath = () => {
    const checkArray = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className={`container mx-auto ${style.fontmafily} mt-20`}>
            <div className='flex justify-center'>
                <div className='text-center md:w-2/4'>
                    <h3 className='' style={{ color: '#5650ce', fontSize: '24px' }}>Love is faith</h3>
                    <h1 className='my-4 text-2xl md:text-6xl font-extrabold'>Success Story</h1>
                    <p className=''>Aliquam a neque tortor. Donec iaculis auctor turpis. Eporttitor mattis ullamcorper urna. Cras quis elementum</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    checkArray.map(i => {
                        return (
                            <div key={i+1}>
                                <LoveCard />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LoveIsFeath;