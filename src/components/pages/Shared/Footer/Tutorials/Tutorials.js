// Configuration
import React, { useEffect } from "react";

// Components
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import Footer from "../../../../shared/Footer/Footer";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import logoShort from "../../../../../assets/images/Logo/logoShort.png";

const Tutorials = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="hidden lg:block">
        <CustomHeader title={"Tutorials"} />
      </div>
      <div className="lg:hidden">
        <MobileBackButton name={"Tutorials"} />
      </div>
      <div className="max-w-[1200px] mx-auto pb-12 px-6 lg:px-0">
        <h1 className="text-center w-full md:w-2/3 mx-auto font-Nunito text-3xl md:text-[50px] md:leading-[50px] font-bold mt-5">
          Complete guideline of Shongshari users described in this tutorial
        </h1>
        <h1 className="text-center w-2/3 mx-auto font-Nunito text-xl font-medium mt-2 text-gray-600">
          Watch our video tutorials in minutes
        </h1>

        <div className="flex justify-center my-5">
          <iframe
            title="YouTube video player"
            width="660"
            height="415"
            src="https://www.youtube.com/embed/hbsiCSHDits"
            frameborder="0"
            allowfullscreen
          />
        </div>
        <div className="w-full md:w-[660px] mx-auto shadow-xl rounded-lg rounded-t-none">
          <div className="flex justify-start items-center border-t-4 border-pink-500">
            <img className="w-16 h-16 mr-3" src={logoShort} alt="" />
            <p className="font-Nunito text-lg font-medium">
              Find your perfect match in a easiest and authentic way.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Footer />
      </div>
      <div className="lg:hidden">
        <div className="h-16"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Tutorials;
