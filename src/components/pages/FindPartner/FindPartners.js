import React from "react";
import { Outlet } from "react-router-dom";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import FindPartnersHeader from "./FindPartnersHeader";
import PartnerFilterBox from "./PartnerFilterBox";

const FindPartners = () => {
  return (
    <div className="bg-[#fafbff]">
      <CustomHeader title="Find Partners" />
      <section className="py-10">
        <div className="max-w-[1300px] mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-3  xl:grid-cols-4 gap-4 justify-center ">
            <div>
              <PartnerFilterBox />
            </div>
            <div className="lg:col-span-2 pt-[50px] md:pt-[0px] xl:col-span-3">
              <FindPartnersHeader />
              <div>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FindPartners;
