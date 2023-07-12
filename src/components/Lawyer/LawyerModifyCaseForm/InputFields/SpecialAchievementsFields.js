import React from 'react';

export const SpecialAchievementsFields = ({ register, name }) => {
    return (
        <div className='my-[19px]'>
            <label htmlFor="specialAchievements">Special Achievements</label>
            <textarea className='font-normal py-5 pl-[13px] w-full border border-[#98999C] bg-[#F5F7FA] rounded-[3.5px]'
                {...register(name)}
                type='text' />
        </div>
    );
};