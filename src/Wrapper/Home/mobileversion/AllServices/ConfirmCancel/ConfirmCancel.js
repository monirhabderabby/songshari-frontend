import React from 'react';
import NestedPhotos from '../../NestedPhotos/NestedPhotos';
import DetailsReview from '../../DetailsReview/DetailsReview';

const ConfirmCancel = () => {
    return (
        <div className='bg-[#F8F8FF] font-sans font-semibold px-6 pb-5'>
            <div>
                <NestedPhotos></NestedPhotos>
            </div>
            <div className='mb-[59px]'>
                <div className='flex justify-between pt-[19px] mb-[28px]'>
                    <p className='font-bold text-[32px] text-[#000000]'>$100</p>
                    <button className='font-Inter text-[14px] text-[#FFFFFF] bg-[#E43812] shadow-[2px_2px_8px_rgba(0, 0, 0, 0.1)] rounded-[5px] px-[35px]'>Canceled</button>
                </div>
                <div className='flex justify-start mb-[28px]'>
                    <button className='font-bold text-base text-[#FFFFFF] py-2 px-[25px] rounded-lg bg-gradient-to-r from-[#D2174C] to-[#643A92]'>Order Again</button>
                </div>
                <div className='flex gap-[39px] font-semibold text-[14px] text-[#000000] text-center'>
                    <div>
                        <p className='font-light text-[13px]'>Rating</p>
                        <p>100%</p>
                    </div>
                    <div>
                        <p className='font-light text-[13px]'>Response time</p>
                        <p>within a few hours</p>
                    </div>
                </div>
            </div>
            <div>
                <DetailsReview></DetailsReview>
            </div>
        </div>
    );
};

export default ConfirmCancel;