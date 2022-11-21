import React from 'react';
import completeIcon from '../../../assets/images/LawyerProfileImg/completedCaseLogo.png';
import { AiOutlineClockCircle } from 'react-icons/ai';

const CompletedCase = () => {

    const completedCasesInfo = [
        { id: 1, caseName: "Lawyer Case Name", price: 5000, time: '4h 30m', img: completeIcon },
        { id: 2, caseName: "Lawyer Case Name", price: 2500, time: '4h 30m', img: completeIcon },
        { id: 3, caseName: "Lawyer Case Name", price: 8000, time: '4h 30m', img: completeIcon },
    ];

    return (
        <div className='mb-12 md:mb-16 lg:mb-28'>
            <h1 className='text-3xl font-medium leading-7 mb-10'>
                Completed Case
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12'>
                {
                    completedCasesInfo.map(singleCase => <div
                        key={singleCase.id}
                        className="rounded-xl p-6"
                        style={{ backgroundImage: "linear-gradient(180deg, #F4FFF5 0%, #FFFBF1 100%)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className='grid grid-cols-3'>
                            <div className='col-span-1'>
                                <img className='rounded-xl' src={singleCase.img} alt="" />
                            </div>
                            <div className='col-span-2 ml-6 my-auto'>
                                <p className='font-medium leading-6 mb-4'>
                                    {singleCase.caseName}
                                </p>
                                <p className='font-medium text-lg leading-6'>
                                    $ {singleCase.price}
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 mt-5'>
                            <span>
                                <AiOutlineClockCircle />
                            </span>
                            <p>{singleCase.time}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CompletedCase;