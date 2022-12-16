import React from 'react';
import { AiFillStar } from "react-icons/ai";
import NestedPhotos from '../../NestedPhotos/NestedPhotos';
import DetailsReview from '../../DetailsReview/DetailsReview';

const CompleteOrder = () => {
    return (
        <div className='bg-[#F8F8FF] font-sans font-semibold px-6 pb-5'>
            <div>
                <NestedPhotos></NestedPhotos>
            </div>
            <div className='mb-[59px]'>
                <div className='flex justify-between pt-[19px] mb-[28px]'>
                    <p className='font-bold text-[32px] text-[#000000]'>$100</p>
                    <div>
                        <div className='flex w-full justify-end mb-2'>
                            <button className='font-Inter text-[14px] text-[#FFFFFF] bg-gradient-to-r from-[#12E427] to-[#46A33E] shadow-[2px_2px_8px_rgba(0, 0, 0, 0.1)] rounded-[5px] px-[35px] py-1'>Completed</button>
                        </div>
                        <div className='flex gap-[30px] font-sans font-semibold text-center text-[#000000] text-sm'>
                            <div>
                                <p className='font-light text-[13px]'>Delivered in</p>
                                <p>02-03-2022</p>
                            </div>
                            <div>
                                <p className='font-light text-[13px]'>Rating</p>
                                <p>100%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='font-semibold text-[14px] text-[#000000] text-start'>
                    <p className='font-semibold text-[14px] text-[#000000] mb-1'>Your Review</p>
                    <div className='flex text-[15px] text-[#F59E0B] gap-[6px]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p className='font-normal text-[14px] text-[#18181B] mt-[6px]'>You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.</p>
                </div>
            </div>
            <div>
                <DetailsReview></DetailsReview>
            </div>
        </div>
    );
};

export default CompleteOrder;