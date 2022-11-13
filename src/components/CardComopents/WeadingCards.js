import React from 'react';
import "../../assets/css/weadingcard.css";

const WeadingCards = () => {
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
                    <figure><img className='card-img' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className=' py-10'>
                        <div className="cards-body md:px-8  px-2">
                            <h2 className="card-title"> 6 days ago </h2>
                            <h2 className="card-title font-bold text-2xl"> Somthing is writen here </h2>
                            <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus?</p>
                        </div>
                        <div className='py-3'>
                            <hr />
                        </div>
                        <div className="flex justify-between items-center md:px-8  px-2 pt-2">
                            <div className='flex justify-between'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path  color='orange' stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                                </svg>

                                <p className='pl-2'>Public</p>
                            </div>
                            <div className='flex bg-pink-100 px-6 py-2 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path color='red' stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                <p className='pl-5'>100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeadingCards;