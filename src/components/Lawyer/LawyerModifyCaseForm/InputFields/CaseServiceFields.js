import React from 'react';

export const CaseServiceFields = ({ register, name }) => {
    return (
        <div>
            <input className='font-normal py-5 pl-[13px] w-full border border-[#707276] bg-transparent rounded-[3.5px] focus:border-hidden'
                {...register(name)}
                type='text'
                placeholder='Case study/service name'
            />
        </div>
    );
};