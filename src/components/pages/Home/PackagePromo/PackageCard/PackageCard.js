// Configuration
import React from "react";
import { useNavigate } from "react-router";

// Third party package
import { TbCurrencyTaka } from "react-icons/tb";

const PackageCard = ({ pack }) => {
  const navigate = useNavigate();
  return (
    <div className="rounded shadow-lg">
      <img
        src="https://www.meetingsolutions.net/Images/PackagesGraphic.jpg"
        alt="package"
        className="w-full h-80"
      />
      <div className="p-4">
        <h1 className="text-2xl font-Nunito h-28">Name of Package</h1>
        <div className="flex items-center gap-x-2 text-[22px] font-Nunito">
          <span className="flex items-center">
            <TbCurrencyTaka className="text-gray-400" />
            <del className="text-gray-400 font-normal">5000</del>
          </span>
          <span className="flex items-center">
            <TbCurrencyTaka />
            <span className="text-gray-600 font-bold">3900</span>
          </span>
        </div>
        <div className="w-full mt-2">
          <button
            onClick={() => navigate(`/package/${pack}`)}
            className="w-full h-[44px] rounded-[4px] bg-pink-500 hover:bg-pink-600 text-white font-Nunito text-[20px] font-medium duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
