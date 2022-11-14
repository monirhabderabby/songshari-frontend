import React from 'react';
import "../../assets/css/anexecutive.css";
import p1 from "../../assets/images/p1.png";
import Title from '../SingleProfilesUser/Title/Title';

const Anexecutive = () => {
    return (
        <div className='container-fluid py-10'>
            <div className='main-container'>
                <div className='section-header'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold text-red-600'>An Executive List Of</h1>
                        <h2 className='text-1xl font-semibold text-red-400 py-6'>Amazing feature</h2>
                        <p className=''>To find meaningfull deal and life petner</p>
                    </div>
                </div>
                <div className='section-body pt-6'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='relative'>
                            <div className='z-10 free-btn absolute top-44 right-0'>
                                <p><small>Start now for</small></p>
                                <p className='py-1 text-3xl font-semibold'>Free</p>
                                <p>7 day Trail</p>
                            </div>
                            <div className='section-img-container z-0'>
                            </div>
                        </div>
                        <div className='section-text-contener'>
                            <div className='flex items-start'>
                                <div>
                                    <img className='rounded-img' src={p1} alt="" />
                                </div>
                                <div className='ml-5 pb-3'>
                                    <Title titleText="Simple to use"></Title>
                                    <p className='my-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                    <p className='mb-2'>Lorem ipsum</p>
                                    <hr />
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div>
                                    <img className='rounded-img' src={p1} alt="" />
                                </div>
                                <div className='ml-5 pb-3'>
                                    <Title titleText="Simple to use"></Title>
                                    <p className='my-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                    <p className='mb-2'>Lorem ipsum</p>
                                    <hr />
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div>
                                    <img className='rounded-img' src={p1} alt="" />
                                </div>
                                <div className='ml-5 pb-3'>
                                    <Title titleText="Simple to use"></Title>
                                    <p className='my-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                    <p className='mb-2'>Lorem ipsum</p>
                                    <hr />
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div>
                                    <img className='rounded-img' src={p1} alt="" />
                                </div>
                                <div className='ml-5 pb-3'>
                                    <Title titleText="Simple to use"></Title>
                                    <p className='my-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                    <p className='mb-2'>Lorem ipsum</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anexecutive;