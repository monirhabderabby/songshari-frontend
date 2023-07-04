/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import styles from "./../../../../assets/css/bannerSlider.module.css"
import slider1 from './../../../../assets/images/BannerSliders/slider1.jpg'
import slider2 from './../../../../assets/images/BannerSliders/slider2.jpg'
import slider3 from './../../../../assets/images/BannerSliders/slider3.jpg'
import slider4 from './../../../../assets/images/BannerSliders/slider4.jpeg'

export default function BannerSlider() {
  const sliderImages = [
    {
      url: slider1
    },
    {
      url: slider2
    },
    {
      url: slider3
    },
    {
      url: slider4
    }
  ];
  const [current, setCurrent] = useState(0);
  const [like, setLike] = useState(false);
  const [reject, setReject] = useState(false);
  const length = sliderImages.length;
  const nextSlide = () => {
    // setTimeout(() => {
    setLike(true)
    // }, 2000)
  };
  useEffect(() => {
    if (like) {
      setCurrent(current === length - 1 ? 0 : current + 1);
      setLike(false);
    }
  }, [like])
  useEffect(() => {
    if (reject) {
      setCurrent(current === 0 ? length - 1 : current - 1);
      setReject(false);
    }
  }, [reject])
  // const prevSlide = () => {
  //   setReject(true);
  // };
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [current]);



  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  return (
    <div>      
      <section className="image-slider">
        {/* <div className={styles.left}>
          <ArrowBackIosIcon onClick={prevSlide} />
        </div>
        <div className={styles.right}>
          <ArrowForwardIosIcon onClick={nextSlide} />
        </div> */}
        {sliderImages.map((currentSlide, index) => {
          return (
            <div
              className={index === current ? "currentSlide active" : "currentSlide"}
              key={index}
            >
              {index === current && <img src={currentSlide.url} className={styles.image} alt="sss" />}
            </div>
          );
        })}
      </section>
    </div>
  );
}