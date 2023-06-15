import React from "react";
import { Link } from "react-router-dom";
import ScaleAnimationCSS from "../../../../assets/css/ScaleAnimation.module.css";
import bgCircle from "../../../../assets/images/HomeImage/circle.png";
import findImg from "../../../../assets/images/HomeImage/illutration.png";

const BeginFamilyJourney = () => {
    return (
      <div className="custom-container max-w-[1200px] pt-8 pb-24 w-11/12 lg:w-4/5 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="md:flex-1"
          >
            <h6 className="text-[#5650ce] text-2xl md:text-xl lg:text-2xl font-bold mb-3 md:mb-1 lg:mb-6">
              Meet Your Perfect Life Partner!
            </h6>
            <h2 className="text-4xl lg:text-5xl font-bold mb-3 md:mb-1 lg:mb-3 text-[#292929]">
              Begin Family Journey
            </h2>
            <p className="md:mr-8 mb-4 md:mb-2 lg:mb-4 text-xl md:text-lg lg:text-xl tracking-wide md:tracking-normal lg:tracking-wide md:leading-tight lg:leading-normal">
              Shongshari.com is the ultimate Matchmaking, Matrimony, and Family
              Management platform in Bangladesh. We are working to achieve a
              simple objective - to help people find happiness.
            </p>
            <p className="md:mr-8 mb-4 md:mb-1 lg:mb-4 text-xl md:text-lg lg:text-xl tracking-wide md:tracking-normal lg:tracking-wide md:leading-tight lg:leading-normal">
              Shongshari.com - a trusted matrimonial & matchmaking service, has
              always differentiated itself from other matrimonials through its
              innovation-led approach not only by redefining the way Bangladeshi
              brides and grooms meet for marriage, but also maintain and make
              their family journey smoother!
            </p>
            <Link
              to="/find-partner/suggested"
              className="px-4 md:px-6 lg:px-8 pt-2 pb-1 text-xl lg:text-2xl special_profile_button font-semibold cursor-pointer"
            >
              SEEK YOUR PARTNER
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="md:flex-1 relative mt-20 md:mt-4 lg:mt-0"
          >
            <div className="flex justify-center items-center">
              <img src={findImg} alt="Not Available" />
            </div>
            <div
              className="absolute -z-10 top-[-45px] left-[2px]"
              style={{
                animation: `${ScaleAnimationCSS.scaleAni} 5s linear infinite`,
              }}
            >
              <img src={bgCircle} alt="Not Available" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default BeginFamilyJourney;
