// Configuration
import React from "react";

// Components
import { useGetAllPlansQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";
import MemberShipPremiumCard from "../../../shared/Cards/MemberShipPremiumCards/MemberShipPremiumCard";

// CSS file
import "../../../../assets/css/MembershipPremium.css";

export const MembershipPremium = () => {
  const { data, isLoading, error } = useGetAllPlansQuery();

  return (
    <div className="premium-membership ">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-6 mx-24 mt-20">
          {!isLoading &&
            !error &&
            data?.data?.plans?.map((item) => (
              <MemberShipPremiumCard key={item._id} item={item} />
            ))}
        </div>
      </div>
      <div className="relative">
        <h1 className="text-white text-3xl text-center py-10">
          If you have any questions Contact Us
        </h1>
        <div className="absolute -top-[590px] w-full">
          <div className="ml-10 mr-2 flex justify-between">
            <img
              alt="Not Available"
              src="https://pixner.net/peyamba/peyamba/assets/images/membership/left-img.png"
              className="w-24"
            ></img>
            <img
              alt="Not Available"
              src="https://pixner.net/peyamba/peyamba/assets/images/membership/right-img.png"
              className="w-36"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
