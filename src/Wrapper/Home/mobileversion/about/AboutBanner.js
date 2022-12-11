import React from "react";
import aboutUsBanner from "../../../../assets/images/AboutUs/aboutUsBanner.jpg";
import waveImg from "../../../../assets/images/AboutUs/waveImg.png";

const AboutBanner = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 pl-4 pr-4 relative">
        <div className="flex items-center justify-center">
          <h4
            className="text-transparent bg-clip-text text-lg font-bold mt-14 mb-16"
            style={{
              backgroundImage:
                "linear-gradient(96.48deg, #762BB0 7.69%, #000000 99.02%)",
            }}
          >
            Find A Perfect Match For You
          </h4>
        </div>
        <div>
          <img src={aboutUsBanner} className="mt-12" alt="Not Available" />
        </div>
        <img
          className="absolute bottom-2 md:bottom-0"
          src={waveImg}
          alt="Not Available"
        />
      </div>
    </div>
  );
};

export default AboutBanner;
