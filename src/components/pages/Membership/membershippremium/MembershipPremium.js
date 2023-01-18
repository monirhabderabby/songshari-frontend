import React from "react";
import "../../../../assets/css/MembershipPremium.css";
import { useGetAllPlansQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";
import MemberShipPremiumCard from "../../../shared/Cards/MemberShipPremiumCards/MemberShipPremiumCard";
export const MembershipPremium = () => {
  const { data, isLoading, error } = useGetAllPlansQuery();

  return (
    <div className="premium-membership ">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-6 mx-auto ml-28 mr-28 mt-20">
          {!isLoading &&
            !error &&
            data?.data?.plans?.map((item) => (
              <MemberShipPremiumCard key={item.id} item={item} />
            ))}
        </div>
      </div>
      <h1 className="text-white text-3xl text-center">
        If you have any questions Contact Us
      </h1>
      <div className="grid lg:grid-cols-6 sm:grid-cols-1 gap-2 mx-auto ml-14 mr-14 mt-20">
        <div>
          <img
            alt="Not Available"
            src="https://pixner.net/peyamba/peyamba/assets/images/membership/left-img.png"
            className="hhh"
          ></img>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <img
            alt="Not Available"
            src="https://pixner.net/peyamba/peyamba/assets/images/membership/right-img.png"
            className="hhhh"
          ></img>
        </div>
      </div>
    </div>
  );
};
