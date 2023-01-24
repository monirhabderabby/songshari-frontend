// Configuration
import React, { useState, useEffect } from "react";

// Components
import MobileSocialMediaBox from "../../../SingleProfilesUser/MobileSingleProfilesUser/SocialMediaMobile/MobileSocialMediaBox";
import { ageCalculator } from "../../../../assets/utilities/AgeCalculation/ageCalculator";
import blackLove from "../../../../assets/images/icons/blackLove.png";
import { MobileDynamicConnectionsCard } from "./MobileDynamicConnectionsCard";

const MobileDynamicProfileHeader = ({ data }) => {
  const [SocialBoxOpen, setSocialBoxOpen] = useState(false);
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (data) {
      const age = ageCalculator(data?.dateOfBirth);
      setAge(age);
    }
  }, [data]);

  // decision making about social Box
  const { LinkedInId } = data || {};
  const { faceBookId } = data || {};
  const { instagramId } = data || {};
  useEffect(() => {
    if (LinkedInId || faceBookId || instagramId) {
      setSocialBoxOpen(true);
    }
  }, [LinkedInId, faceBookId, instagramId, setSocialBoxOpen]);
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full mx-7 rounded">
          {data?.coverPhoto ? (
            <div>
              <img
                className="max-h-28 md:max-h-52 w-full border border-gray-100 rounded-t-[4px]"
                src={data?.coverPhoto}
                alt=""
              />
            </div>
          ) : (
            <div className="bg-[#D9D9D9] rounded-t-[4px] flex justify-center items-center flex-col  mx-auto h-[92px]"></div>
          )}
          <div
            style={{ boxShadow: " 0px 10px 40px rgba(0, 0, 0, 0.03)" }}
            className="px-[23px] w-full rounded-sm mx-auto bg-[#ffffff]"
          >
            <div>
              <div className="flex justify-start items-center">
                <img
                  src={
                    data?.profilePhoto
                      ? data?.profilePhoto
                      : "https://cdn-icons-png.flaticon.com/512/194/194938.png"
                  }
                  className="mt-[-20px] w-16 h-16 rounded-full"
                  alt="Not Available"
                />
                <h2 className="pl-[7px] text-sm font-semibold text-[#000000]">
                  {data?.firstName + " " + data?.lastName}
                </h2>
              </div>
              <div className="flex justify-between items-center mt-3 mb-4">
                <div className="flex items-center gap-7">
                  <p className="text-[#333333] text-xs leading-7 font-Inter whitespace-nowrap">
                    {age} Years Old
                  </p>
                  <div className="w-[2px] h-4 bg-[#333333]"></div>
                  <p className="text-[#333333] text-xs leading-7 font-Inter">
                    {data?.hometown}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F7E9F8] mr-1 flex items-center justify-center">
                    <img src={blackLove} alt="blackLove" />
                  </div>
                  <span className="text-xs leading-7 font-bold text-[#333333]">
                    {data?.likes?.length || 0}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <MobileDynamicConnectionsCard {...{ data }} />
                <button
                  className="text-white text-xs leading-7 font-Inter px-3 py-2 rounded-[50px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(309deg, #F664BC 0%, #FB7BBC 35%, #FF92BB 100%)",
                    boxShadow: "0px 5px 20px rgba(139, 122, 132, 0.5)",
                  }}
                >
                  Diamond User
                </button>
              </div>
              <div className="w-40 pb-4">
                {SocialBoxOpen && (
                  <MobileSocialMediaBox
                    {...{ LinkedInId, faceBookId, instagramId }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDynamicProfileHeader;
