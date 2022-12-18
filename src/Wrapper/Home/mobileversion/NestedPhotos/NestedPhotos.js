import React from 'react';
import ImageContainer from './ImageContainer/ImageContainer';

const NestedPhotos = () => {
    return (
        <div>
            <p className='font-fira font-bold text-base text-[#32353B] py-[15px]'>Lawyer Service name here</p>
            <div>
                <ImageContainer></ImageContainer>
            </div>
        </div>
    );
};

export default NestedPhotos;