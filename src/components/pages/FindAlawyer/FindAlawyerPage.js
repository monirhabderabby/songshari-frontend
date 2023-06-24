// Configuration
import React from "react";
import { Outlet } from "react-router";

// Components
import { FindLawyerKaziAgentHeader } from "../../shared/Components/FindLawyerKaziAgent/FindLawyerKaziAgentHeader";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import FindLawyerAgentKaziFilterBox from "../../shared/Components/FindLawyerKaziAgent/FindLawyerAgentKaziFilterBox";
const FindAlawyerPage = () => {
  return (
    <>
      <CustomHeader title="Find Lawyer" />
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 mt-5 min-h-screen">
        <div className="col-span-1">
          <FindLawyerAgentKaziFilterBox />
        </div>
        <div className="flex flex-col col-span-3">
          <FindLawyerKaziAgentHeader page="lawyer" />
          <div className="h-full w-full mt-[20px] px-[20px]">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <Footer />
      </div>
    </>
  );
};

export default FindAlawyerPage;
