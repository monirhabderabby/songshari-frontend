import React from 'react';
import MobileMembershipHeader from './MobileMembershipHeader';
import { BsCheckCircleFill } from 'react-icons/bs';
import topShape from "../../../../assets/images/Shape/membershipPageShape.png";
import { BottomNav } from '../../../../Wrapper/Home/mobileversion/BottomNav';

const MobileFreePlan = () => {
    const freePlanInfo = [
        { id: 1, text: "10 Chat Request" },
        { id: 2, text: "10 Swap Every 24 Hour" },
        { id: 3, text: "100 Message Per Day" },
        { id: 4, text: "Video Chat: 30 Minutes a Day" },
        { id: 5, text: "Timeline Post" },
        { id: 6, text: "Course Discount 25%" },
        { id: 7, text: "Upload marriage Certificate" },
        { id: 8, text: "Free Kazi Contact" },
    ]
    return (
        <div>
            <MobileMembershipHeader planTitle={"Free"} />
            <section>
                <div className='mt-6 flex gap-5 items-center ml-[30px]'>
                    <div className='flex p-4 w-[72px] bg-[#ECEBFF] rounded-2xl'>
                        <div className='w-[19px] h-[38px] bg-[#E41272] rounded-l-full'></div>
                        <div className='w-[19px] h-[38px] bg-[#F664BC] rounded-r-full'></div>
                    </div>
                    <div>
                        <p className='text-[#25292D] text-lg leading-5 font-medium'>
                            Free Plan
                        </p>
                        <h2 className='text-[#E41272] text-2xl leading-9 font-bold'>
                            Free
                        </h2>
                    </div>
                </div>
                <div>
                    <p className='ml-[30px]'>
                        <span className='text-[#E41272] text-[54px] leading-[66px] font-bold mr-2'>$0</span>
                        <span className='text-[#25292D] text-xl leading-[22px] font-medium'>/monthly</span>
                    </p>
                    <p className='text-[#E41272] text-lg leading-5 font-bold my-5 ml-[30px]'>
                        What’s included
                    </p>
                </div>
                <div className='ml-[30px]'>
                    {
                        freePlanInfo.map(plan => <div key={plan.id}
                            className={`flex items-center gap-3 mb-4 text-[#2F3659] ${plan.id > 3 ? 'text-[#757575]' : 'text-[#2F3659]'}`}>
                            <BsCheckCircleFill className='text-2xl' />
                            <p className='text-lg leading-5'>
                                {plan.text}
                            </p>
                        </div>)
                    }
                </div>
                <div className='flex justify-center pb-5 mb-10 relative'>
                    <button
                        className='py-6 px-24 rounded-[96px] text-lg leading-5 font-bold text-white'
                        style={{ backgroundImage: "linear-gradient(180deg, #CC1A7A 0%, #5A3FA0 96.35%, rgba(228, 18, 114, 0) 100%)" }}>
                        Get Started
                    </button>
                    <img className='absolute bottom-0 rotate-180 h-36 w-full' src={topShape} alt="Not Available" />
                </div>
            </section>
            <BottomNav></BottomNav>
        </div>
    );
};

export default MobileFreePlan;