import React from 'react';
import "../../assets/css/meetcard.css";
import Button from '../comons/Button';

const MeetCard = () => {
    return (
        <div>
            <div className='text-center pt-4 pb-10'>
                <h1 className='text-red-600 text-3xl pb-8'>Lorem ipsum dolor sit amet </h1>
                <h1 className='text-red-600 text-3xl pb-3'>Lorem ipsum dolor</h1>
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
            <div className="card card-container bg-yellow-500 shadow-xl py-6">
                <div className='relative'>
                    <figure className="px-10 flex justify-center">
                        <img className="card-img-container" src="https://placeimg.com/400/225/arch" alt="Shoes" />
                    </figure>
                    <div>
                        <div className='circle-badge flex justify-center items-center absolute top-24 right-12'>
                            <small className='text-white p-1'>12</small>
                        </div>
                    </div>
                </div>
                <div className="card-body items-center text-center px-2 pt-5">
                    <h2 className="card-title text-1xl">Shoes say somethings</h2>
                    <div className='border-bottom'></div>
                    <div className="card-actions pt-3 px-4">
                        <Button btntext="Click me soon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetCard;