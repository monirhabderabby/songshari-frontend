import React from 'react';
import MobileMembershipHeader from './MobileMembershipHeader';
import { BsCheckCircleFill } from 'react-icons/bs';
import topShape from "../../../../assets/images/Shape/membershipPageShape.png";

const MobilePlatinumPlan = () => {
    const diamondPlanInfo = [
        { id: 1, text: "All Features Of Diamond" },
        { id: 2, text: "+ 4 Hours of Video Chat" },
        { id: 3, text: "+ Course Fee Free" },
        { id: 4, text: "+ 10% Shopping Discount" },
        { id: 5, text: "+ 10% Discount on Lawyer Fee" },
        { id: 6, text: "+ 20% Discount on Agent Fee" },
    ]
    return (
        <div>
            <MobileMembershipHeader planTitle={"Platinum"} />
            <section>
                <div className='mt-6 flex gap-5 items-center ml-[30px]'>
                    <div className='flex p-4 w-[72px] bg-[#ECEBFF] rounded-2xl'>
                        <div className='w-[19px] h-[38px] bg-[#E41272] rounded-l-full'></div>
                        <div className='w-[19px] h-[38px] bg-[#F664BC] rounded-r-full'></div>
                    </div>
                    <div>
                        <p className='text-[#25292D] text-lg leading-5 font-medium'>
                            Platinum Plan
                        </p>
                        <h2 className='text-[#E41272] text-2xl leading-9 font-bold'>
                            Platinum
                        </h2>
                    </div>
                </div>
                <div>
                    <p className='ml-[30px]'>
                        <span className='text-[#E41272] text-[54px] leading-[66px] font-bold mr-2'>$699</span>
                        <span className='text-[#25292D] text-xl leading-[22px] font-medium'>/monthly</span>
                    </p>
                    <p className='text-[#2F3659] text-lg leading-5 font-bold my-5 ml-[30px]'>
                        What’s included
                    </p>
                </div>
                <div className='ml-[30px]'>
                    {
                        diamondPlanInfo.map(plan => <div key={plan.id}
                            className={`flex items-center gap-3 mb-4 text-[#2F3659] ${plan.id > 1 ? 'font-normal' : 'font-medium'}`}>
                            <BsCheckCircleFill className='text-2xl' />
                            <p className='text-lg leading-5'>
                                {plan.text}
                            </p>
                        </div>)
                    }
                </div>
                <div className='flex justify-center pb-5 relative'>
                    <button
                        className='py-6 px-24 rounded-[96px] text-lg leading-5 font-bold text-white'
                        style={{ backgroundImage: "linear-gradient(180deg, #CC1A7A 0%, #5A3FA0 96.35%, rgba(228, 18, 114, 0) 100%)" }}>
                        Get Started
                    </button>
                    <img className='absolute bottom-0 rotate-180 h-36 w-full' src={topShape} alt="" />
                </div>
            </section>
        </div>
    );
};

export default MobilePlatinumPlan;