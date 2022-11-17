import React from 'react';
import { Link } from 'react-router-dom';
import style from "./commonbanner.module.css";

const CommonBanner = ({ title, currentStage }) => {
    return (
        <div className={`${style.banner_container} mb-20`}>
            <div className='container mx-auto'>
                <div className='text-left'>
                    <h1 className='text-1xl md:text-6xl font-extrabold text-white'>{title}</h1>
                    <div className='flex mt-4 text-white text-1xl md:text-2xl'>
                        <Link className='pr-2' to='/'>Home</Link>
                        <p>{currentStage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;