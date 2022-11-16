import React from 'react';
import "../../assets/css/weadingcard.css";
import people from "../../assets/images/icons/people.png";
import world from "../../assets/images/icons/world.png";

const WeadingCards = () => {
    return (
        <div>
            <div className='pt-6 relative'>
                <div className="card md:w-96 bg-base-100 rounded-xl card-hober shadow-lg">
                    <div className='card-overflow-hober'><img className='card-img' src="https://placeimg.com/400/225/arch" alt="Shoes" /></div>
                    <div className=' py-10'>
                        <div className="cards-body md:px-8  px-2">
                            <h2 className="card-title"> 6 days ago </h2>
                            <h2 className="card-title font-bold text-2xl py-2"> Somthing is writen here </h2>
                            <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus?</p>
                        </div>
                        <div className='py-4'>
                            <hr />
                        </div>
                        <div className="flex justify-between items-center md:px-8  px-2 pt-2">
                            <div className='world flex justify-between'>
                                <img src={world} alt="world" />
                                <p className='pl-4'>Public</p>
                            </div>
                            <div className='people flex bg-pink-100 px-6 py-2 rounded-full'>
                            <img src={people} alt="people" />
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