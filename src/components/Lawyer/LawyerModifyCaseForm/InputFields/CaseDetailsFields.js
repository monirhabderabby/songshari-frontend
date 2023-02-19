import React from 'react';

export const CaseDetailsFields = ({ register, name }) => {
    return (
        <div className='mt-6 mb-[19px]'>
            <label htmlFor="caseDetails">Case Details</label>
            <textarea className='font-normal py-5 pl-[13px] w-full border border-[#98999C] bg-[#F5F7FA] rounded-[3.5px]'
                {...register(name)}
                type='text' />
        </div>
    );
};