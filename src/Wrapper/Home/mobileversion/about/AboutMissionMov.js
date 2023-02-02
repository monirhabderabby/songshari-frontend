import React from "react";

import aboutUsMission1 from "../../../../assets/images/AboutUs/aboutUsMission1.jpg";
import aboutUsMission2 from "../../../../assets/images/AboutUs/aboutUsMission2.jpg";

const AboutMission = () => {
  return (
    <div className="md:mt-6">
      <div className=" ml-4 mr-4 gap-4">
        <div className="flex items-center justify-center mb-14">
          <div>
            <h3 className="text-lg font-semibold mt-8">Our Mission</h3>
            <div className="relative mt-6 mb-12 md:mb-16">
              <img
                className="z-0 rounded-bl-[75px] md:rounded-bl-[85px] w-full md:w-4/5 h-full md:h-full rounded"
                src={aboutUsMission1}
                alt=""
              />
              <img
                className="absolute -bottom-8 md:-bottom-12 rounded-tr-[108px] rounded-bl-[107px] w-1/2 md:w-60 z-10"
                src={aboutUsMission2}
                alt=""
              />
            </div>
            <h4 className="text-black  text-sm mt-2">
              "Choosing the Perfect Life Partner" is the core condition of a
              happy and beautiful family. Shongshari.Com started its journey to
              become the most reliable source of finding the right life partner.
              Not only in the terms of finding the right life partner, but
              Shongshari.Com also wants to support and aid its users and
              well-wishers in every step of their family journey. Thus, in
              addition to matchmaking and matchmaking, Shongshari.Com is
              developing a Legal Assistance Platform built with the best lawyers
              in the country to solve all kinds of legal complications related
              to the family. In addition, there will be Exclusive Kazi Service
              for marital needs. Highly Skilled Professional Service Providers
              of Shongshari.Com would be available to help and assist you in
              every step of your daily life. Regular talk shows and special
              courses for the users of Shongshari.com about marriage or any
              necessary work would be helpful to make anyone well-prepared to
              maintain a family easily.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
