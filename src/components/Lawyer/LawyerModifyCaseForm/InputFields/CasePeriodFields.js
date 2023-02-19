import React from 'react';

export const CasePeriodFields = ({ register, name }) => {
    return (
        <div className='mt-[19px] mb-6'>
            <label htmlFor="casePeriod">Case Period</label>
            <input className='font-normal py-[9px] pl-[13px] w-full border border-[#C3C8D4] text-[#000000] text-sm rounded-[3.5px bg-transparent'
                {...register(name)}
                type='text'
                placeholder='1 month 5 day'
            />
        </div>
    );
};