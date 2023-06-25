import React from 'react';

const SingleProfileImage = ({currentSlide}) => {
    const dynamicStyle = {
        backgroundImage: `url(${currentSlide.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <div className='w-[200px]' style={dynamicStyle}>
            <h1 className="gradientTextWithBorderLeft animate-bounce">Liked</h1>
            <img src={currentSlide.url} className="image" />
        </div>
    );
}

export default SingleProfileImage;
