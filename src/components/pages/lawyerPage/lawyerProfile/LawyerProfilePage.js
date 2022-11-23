import React from "react";

import { CustomHeader } from "../../../shared/CustomHeader/CustomHeader";
import Footer from "../../../shared/Footer/Footer";

import UtilitisCard from "../../../SingleProfilesUser/UtilitisCard";
import LawyerProfileChat from "./LawyerProfileChat";
import LawyerProfileContent from "./LawyerProfileContent";
import LawyerUserProfile from "./LawyerUserProfile";
const LawyerProfilePage = () => {
  return (
    <>
      <div className="bg-[#fafbff] pb-20">
        <CustomHeader title="Lawyer Profile" />
        <div className="custom-container mx-auto">
          <div className="block lg:flex">
            <div className="md:w-full lg:w-9/12">
              <div>
                <div className="block md:flex">
                  <div className="w-full md:w-2/5 mr-2">
                    <div>
                      {/* <ProfileCard /> */}
                      <LawyerUserProfile />
                      <div className="shadow-lg py-[10px] mt-[20px] rounded-lg bg-[#fff]">
                        <UtilitisCard />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-3/5">
                    <div>
                      <LawyerProfileContent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-full lg:w-3/12 ml-2">
              <div className="flex justify-center">
                <LawyerProfileChat />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LawyerProfilePage;
