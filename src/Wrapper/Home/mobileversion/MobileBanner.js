import React from 'react'
import Slider from "react-slick";

export const MobileBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='mt-8'>
      <Slider {...settings}>
        <div>
          <img src='https://i.ibb.co/FDC2838/Rectangle-4464.png' className='mx-auto' alt="Not Available"></img>

        </div>
        <div>
        <img src='https://i.ibb.co/FDC2838/Rectangle-4464.png' className='mx-auto' alt="Not Available"></img>
        </div>
        <div>
        <img src='https://i.ibb.co/FDC2838/Rectangle-4464.png' className='mx-auto' alt="Not Available"></img>
        </div>
        <div>
        <img src='https://i.ibb.co/FDC2838/Rectangle-4464.png' className='mx-auto' alt="Not Available"></img>
        </div>

      </Slider>
    </div>
  )
}
