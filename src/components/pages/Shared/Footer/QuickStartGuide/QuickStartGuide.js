// Configuration
import React, { useEffect } from "react";

// Components
import Footer from "../../../../shared/Footer/Footer";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import QuickStartNav from "./QuickStartNav/QuickStartNav";
import { useState } from "react";

const QuickStartGuide = () => {
  const [page, setPage] = useState(1);
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="hidden lg:block">
        <CustomHeader title={"Quick Start Guide"} />
      </div>
      <div className="lg:hidden">
        <MobileBackButton name={"Quick Start Guide"} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <h1 className="font-Nunito text-3xl md:text-5xl font-bold mt-5 mb-3">
          Get Started With Shongshari
        </h1>
        <p className="text-lg font-normal font-Inter ">
          Shongshari.com - a trusted matrimonial & matchmaking service, has
          always differentiated itself from other matrimonials through its
          innovation-led approach not only by redefining the way Bangladeshi
          brides and grooms meet for marriage, but also maintain and make their
          family journey smoother!
        </p>

        <div>
          <h3 className="font-Nunito text-xl font-bold mt-8 mb-5">
            Portions Guideline
          </h3>
          <QuickStartNav {...{ page, setPage }} />
          <hr className="text-black text-xl mb-4" />

          <p className="text-base font-light font-Nunito mb-8">
            Shongshari.com is the ultimate Matchmaking, Matrimony, and Family
            Management platform in Bangladesh. We are working to achieve a
            simple objective - to help people find happiness.
            <br />
            <br />
            Shongshari.com - a trusted matrimonial & matchmaking service, has
            always differentiated itself from other matrimonials through its
            innovation-led approach not only by redefining the way Bangladeshi
            brides and grooms meet for marriage, but also maintain and make
            their family journey smoother!
          </p>
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

export default QuickStartGuide;
