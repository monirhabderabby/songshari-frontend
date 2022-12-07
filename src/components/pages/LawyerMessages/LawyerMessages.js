import React from 'react';
import AllMessage from '../../LawyerMessage/AllMessage/AllMessage';
import MessageBody from '../../LawyerMessage/MessageBody/MessageBody';
import UserHeader from '../../LawyerMessage/UserHeader/UserHeader';

const LawyerMessages = () => {
    return (
        <div className='flex w-full bg-[#FAFBFF]'>
            <div className='flex mx-auto mt-[74px] mb-[77px]'>
                <div className='px-3 w-[40%]'>
                    <UserHeader></UserHeader>
                    <AllMessage></AllMessage>
                </div>
                <div className='pr-[11px] w-[60%]'>
                    <MessageBody></MessageBody>
                </div>
            </div>
        </div>
    );
};

export default LawyerMessages;