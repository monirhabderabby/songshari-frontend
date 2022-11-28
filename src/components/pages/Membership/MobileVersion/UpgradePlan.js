import React from 'react';
import upgradeBanner from '../../../../assets/images/UpgradePlan/upgradeBanner.png';
import avatar from '../../../../assets/images/UpgradePlan/upgradeProfile.png';
import close from '../../../../assets/images/UpgradePlan/close.png';
import upgrade from '../../../../assets/images/UpgradePlan/upgrade.png';
import { Switch } from 'antd';
import { SlArrowRight } from "react-icons/sl";
import '../../../../assets/css/UpgradePlan.css';
import { BottomNav } from '../../../../Wrapper/Home/mobileversion/BottomNav';
import { Link } from 'react-router-dom';

const UpgradePlan = () => {

    const plan = [
        {
            id: 1,
            name: "Gold",
            price: "$299",
            path: "/mobileGoldPlan"
        },
        {
            id: 2,
            name: "Diamond",
            price: "$499",
            path: "/mobileDiamondPlan"
        },
        {
            id: 3,
            name: "Platinum",
            price: "$699",
            path: "/mobilePlatinumPlan"
        }
    ];

    return (
        <div className='bg-[#F8F8FF]'>
            <div className='relative'>
                <img className='mx-auto' src={upgradeBanner} alt="Upgrade Banner" />
                <img className='absolute -bottom-8 left-12' src={avatar} alt="Avatar" />
            </div>

            <h1 className='text-center font-Inter font-medium text-sm text-[#000000] mt-2 -ml-3'>Marvis Ighedosa</h1>

            <div className='plan-card flex mx-6 bg-[#FFFFFF] rounded font-Inter mt-6 mb-10 px-5 py-3'>
                <div className='w-full'>
                    <p className='font-normal text-xs text-[#979C9E]'>Current Plan</p>
                    <h1 className='font-bold text-lg text-[#E41272]'>Free</h1>
                    <h1 className='font-normal text-sm text-[#979C9E]'>Upgrade for more features</h1>
                </div>
                <div className='flex items-center'>
                    <Link to={'/mobileFreePlan'}>
                        <button className='font-medium text-[8px] text-[#FFFFFF] bg-red-400 rounded-[5px] bg-gradient-to-br from-[#E41272] to-[#4844A5] h-6 w-16'>View Details</button>
                    </Link>
                </div>
            </div>

            <div className='flex w-full px-5 items-center justify-between font-Inter font-normal text-2xl text-[#000000]'>
                <h1>Upgrade Now </h1>
                <img src={close} alt="Close" />
            </div>

            <div className='flex flex-col gap-6 mt-6 mx-6 mb-10'>
                {
                    plan.map((item) =>
                        <Link key={item.id} to={item.path}>
                            <div className='flex px-4 py-4 bg-[#FFFFFF] rounded-xl'>
                                <div>
                                    <img src={upgrade} alt="Upgrade" />
                                </div>

                                <div className='flex w-full items-center'>
                                    <div className='ml-[10px] mr-[53px] font-Inter font-medium text-base text-[#000000] w-5/12'>
                                        <h1>{item?.name}</h1>
                                        <h1 className='font-sans font-normal text-xs'>Monthly</h1>
                                        <h1 className='text-[#E41272]'>{item?.price}</h1>
                                    </div>
                                    <div className='flex w-10/12 items-center justify-between'>
                                        <div>
                                            <Switch size="small" defaultChecked />
                                        </div>
                                        <div className='font-sans font-normal text-xs text-[#8A8A8E]'>
                                            <h1>Annually</h1>
                                        </div>
                                        <div className='toggler h-2 w-3 text-[rgba(60, 60, 67, 0.6)]'>
                                            <SlArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            <br></br>
            <br></br>
            <BottomNav></BottomNav>
        </div>
    );
};

export default UpgradePlan;