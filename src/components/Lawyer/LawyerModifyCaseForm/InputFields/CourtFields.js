import React from 'react';

export const CourtFields = ({ register, name }) => {
    return (
        <div className='mt-[19px] mb-6'>
            <label htmlFor="court">Court</label>
            <input className='font-normal py-[9px] pl-[13px] w-full border border-[#C3C8D4] text-[#000000] text-sm rounded-[3.5px] bg-transparent'
                {...register(name)}
                type='text'
                placeholder='select court'
            />
        </div>
    );
};