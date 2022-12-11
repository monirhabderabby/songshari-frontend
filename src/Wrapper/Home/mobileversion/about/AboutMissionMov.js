import React from "react";

import aboutUsMission1 from "../../../../assets/images/AboutUs/aboutUsMission1.jpg";
import aboutUsMission2 from "../../../../assets/images/AboutUs/aboutUsMission2.jpg";

const AboutMission = () => {
  return (
    <div className="md:mt-6">
      <div className="grid grid-cols-2 ml-4 mr-4 gap-4">
        <div className="flex items-center justify-center mb-14">
          <div>
            <h3 className="text-lg font-semibold mt-8">Our Mission</h3>
            <h4 className="text-black  text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur. Suspendisse sit duis
              platea dapibus urna aliquet. Massa fringilla mauris morbi
              tincidunt vitae in.
            </h4>
          </div>
        </div>
        <div className="relative mt-6 mb-12">
          <img
            className="z-0 rounded-bl-[45px] md:rounded-bl-[85px] w-40 md:w-full h-40 md:h-full"
            src={aboutUsMission1}
            alt=""
          />
          <img
            className="absolute bottom-0 md:-bottom-12 rounded-tr-[128px] rounded-bl-[127px] w-28 md:w-60 z-10"
            src={aboutUsMission2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
