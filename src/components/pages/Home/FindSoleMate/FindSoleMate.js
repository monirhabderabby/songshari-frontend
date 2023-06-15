// Configuration
import React from "react";
import { Link } from "react-router-dom";

// Components
import bgHeartShape from "../../../../assets/images/HomeImage/heartshape.png";
import soleMate from "../../../../assets/images/HomeImage/soleMate.png";

// CSS file
import ScaleAnimationCSS from "../../../../assets/css/ScaleAnimation.module.css";

const FindSoleMate = () => {
    return (
        <div className="bg-[#F8F8FF] pb-10">
            <div className="bg-[#5736cb] relative h-60 lg:h-72 overflow-hidden">
                <img
                    className="absolute top-0"
                    style={{
                        animation: `${ScaleAnimationCSS.scaleAni} 5s linear infinite`,
                    }}
                    src={bgHeartShape}
                    alt="Not Available"
                />
                <div className="h-60 lg:h-72 overflow-hidden w-5/6 md:w-11/12 lg:w-5/6 mx-auto flex flex-col md:flex-row items-center max-w-[1200px]">
                    <div className="md:flex-1 my-auto z-10 bg-black md:bg-none rounded-md md:rounded-none bg-opacity-30 md:bg-opacity-0 py-2 md:py-0 px-2 md:px-0">
                        <div>
                            <h2 className="mb-2 lg:mb-4 text-3xl lg:text-4xl font-medium tracking-wide leading-8 md:leading-6 text-white">
                                Best Ways to Find Your True Sole Mate
                            </h2>
                            <Link
                                to={"/find-partner/suggested"}
                                className="px-8 special_profile_button md:px-6 lg:px-8 pt-3 md:pt-2 lg:pt-3 pb-2 md:pb-1 lg:pb-2 text-2xl md:text-xl lg:text-2xl text-white font-semibold tracking-[.25em] shadow-xl cursor-pointer leading-6 md:leading-5 lg:leading6"
                                
                            >
                                JOIN NOW!
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 absolute md:static -z-0 lg:mr-10">
                        <img src={soleMate} alt="Not Available" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindSoleMate;
