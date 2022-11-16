import React from 'react';

const ThreeEasySteps = () => {

    const stepsInfo = [
        { id: 1, text: 'Join' },
        { id: 2, text: 'Search' },
        { id: 3, text: 'Find Love' }
    ];

    return (
        <div className='relative w-4/5 mx-auto'>
            <div className='absolute bottom-[-75px] z-10 py-5 px-10 w-full rounded-full bg-white'
                style={{ boxShadow: '0px 10px 30px 0px rgb(38 14 116 / 40%)' }}
            >
                <div className='flex items-center'>
                    <div className='flex-[35%] pr-16'>
                        <p className='text-3xl font-bold'>3 EASY STEPS</p>
                        <hr className='w-8 h-1 rounded-sm'
                            style={{ backgroundImage: 'linear-gradient(145deg, #5d38b1f7 0%, #951f1f 100%)' }}
                        />
                        <p className='text-xl whitespace-nowrap'>To Start a Serious Relationship</p>
                    </div>
                    <div className='flex-[50%]'>
                        <div className='relative flex justify-center items-center gap-10 py-3 border-l border-black text-center'>
                            {
                                stepsInfo.map(step => <div key={step.id} className='w-20 relative'>
                                    <div className='flex flex-col justify-center'>
                                        <p className='text-xl text-white font-bold w-4/5 mx-auto bg-[#f664bc] rounded-full inline px-6 py-4 z-30'>{step.id}</p>
                                        <p className='mt-6 font-bold text-[#333333]'>{step.text}</p>
                                        <div className='absolute top-[-5px] left-[5px] w-[70px] h-[70px] rounded-full bg-[#F664BC] opacity-30 -z-50'></div>
                                        <div className='absolute top-[-10px] left-[1px] w-[78px] h-[78px] rounded-full bg-[#F664BC] opacity-30 -z-50'></div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                        <hr className='absolute top-16 right-80 w-[250px] mx-auto h-[2px] border-none bg-[#f664bc]' />
                    </div>
                    <div className='flex-[15%]'>
                        <button
                            type="submit"
                            className="px-4 pt-2 pb-1 text-2xl text-white  font-semibold rounded-md tracking-[.25em] shadow-xl shadow-[#0c4ea54d] cursor-pointer whitespace-nowrap"
                            style={{ backgroundImage: 'linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)' }}
                        >
                            JOIN NOW!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeEasySteps;