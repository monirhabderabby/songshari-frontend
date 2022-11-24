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
            <img src='https://i.ibb.co/FDC2838/Rectangle-4464.png' className='lg:max-w-lg mx-auto'></img>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
         
        </Slider>
    </div>
  )
}
