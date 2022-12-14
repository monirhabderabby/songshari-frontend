
import React from 'react';
import PlanCard from './PlanCard';
import UserPlanHeader from './UserPlanHeader';

const UpgradeUserPlan = () => {
    return (
        <div className='flex justify-center mb-8'>
            <div>
                <section>
                    <div className='flex justify-center mb-8'>
                        <h1 className='font-semibold text-4xl font-Nunito'>Upgrade User Plan</h1>
                    </div>
                    <UserPlanHeader data={{ userName: 'John Willium', age: 26 }} />
                </section>
                <section className=' mt-8'>
                    <div className='flex justify-between mb-8'>
                        <div className='mr-4'>
                            <h1 className='text-3xl font-semibold mb-4'>Current Plan</h1>
                            <PlanCard data={{ amount: 0, planName: 'Free', included: ['10 Chat Request', '10 Swap Every 24 Hour', '100 Message Per Day', 'Video Chat 30 Minutes a Day', 'Timeline Post', 'Course Discount 25%', 'Upload marrige Certificate', 'Free Kazi Contact'] }} />
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold mb-4'>Suggested Plan</h1>
                            <PlanCard data={{ amount: 699, planName: 'Platinum', included: ['10 Chat Request', '10 Swap Every 24 Hour', '100 Message Per Day', 'Video Chat 30 Minutes a Day', 'Timeline Post', 'Course Discount 25%', 'Upload marrige Certificate', 'Free Kazi Contact'] }} />
                        </div>
                    </div>
                    <div className=' mt-8 pt-4'>
                        <h1 className='text-3xl font-semibold mb-4'>More Plan</h1>
                        <div className='flex justify-between'>
                            <div className='mr-4'>
                                <PlanCard data={{ amount: 299, planName: 'Gold', included: ['10 Chat Request', '10 Swap Every 24 Hour', '100 Message Per Day', 'Video Chat 30 Minutes a Day', 'Timeline Post', 'Course Discount 25%', 'Upload marrige Certificate', 'Free Kazi Contact'] }} />
                            </div>
                            <div>
                                <PlanCard data={{ amount: 499, planName: 'Diamond', included: ['10 Chat Request', '10 Swap Every 24 Hour', '100 Message Per Day', 'Video Chat 30 Minutes a Day', 'Timeline Post', 'Course Discount 25%', 'Upload marrige Certificate', 'Free Kazi Contact'] }} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default UpgradeUserPlan;
