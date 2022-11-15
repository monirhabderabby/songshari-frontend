import React from 'react';
import soleMate from '../../../../assets/images/HomeImage/soleMate.png';
import bgHeartShape from '../../../../assets/images/HomeImage/heartshape.png';
import ScaleAnimationCSS from '../../../../assets/css/ScaleAnimation.module.css';

const FindSoleMate = () => {
    return (
        <div className='bg-[#5736cb] relative h-80 overflow-hidden mt-5'>
            <img className='absolute top-0' style={{ animation: `${ScaleAnimationCSS.scaleAni} 5s linear infinite` }} src={bgHeartShape} alt="" />
            <div className='h-80 overflow-hidden w-5/6 mx-auto flex items-center'>
                <div className='flex-1'>
                    <h2 className='mb-4 text-4xl font-medium tracking-wide leading-6 text-white'>Best Ways to Find Your True Sole Mate</h2>
                    <button
                        type="submit"
                        className="px-8 pt-3 pb-2 text-2xl text-white font-semibold rounded-md tracking-[.25em] shadow-xl shadow-[#0c4ea54d] cursor-pointer leading-6"
                        style={{ backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)" }}
                    >
                        JOIN NOW!
                    </button>
                </div>
                <div className='flex-1 mr-10'>
                    <img src={soleMate} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FindSoleMate;