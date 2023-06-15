import React from 'react';
import bgHeartShape from '../../../assets/images/HomeImage/heartshape.png';
import soleMate from '../../../assets/images/HomeImage/soleMate.png';
import animetedcss from './animated.module.css';

const AnimatetdBanner = () => {
    const fontFamily = () => {
        return (
            {
                fontFamily: 'Courier New, Courier, monospace'
            }
        )
    }
    return (
      <div
        style={fontFamily()}
        className="bg-[#5736cb] relative h-96 overflow-hidden mt-5"
      >
        <img
          className="absolute top-0"
          style={{ animation: `${animetedcss.scaleAni} 5s linear infinite` }}
          src={bgHeartShape}
          alt="animation"
        />
        <div className="container mx-auto flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full w-full justify-between">
            <div className="text-center md:text-left pt-8 lg:pt-0">
              <h2 className="mb-4 text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                Best Ways to Find Your{" "}
              </h2>
              <h2 className="mb-4 text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                True Sole Mate
              </h2>
              <button type="submit" className="special_profile_button">
                Join Now!
              </button>
            </div>
            <div>
              <img src={soleMate} alt="Not Available" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default AnimatetdBanner;