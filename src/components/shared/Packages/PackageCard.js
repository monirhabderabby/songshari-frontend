import React from "react";
import PackageForm from "./PackageForm";
import { useState } from "react";
import getCookie from "../../../Helper/cookies/getCookie";
import { useNavigate } from "react-router";

const PackageCard = ({
  pack,
  packages,
  index,
  user,
  setSuccessSnackBarOpen,
  setSelectedPack,
  useCase,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
// console.log(pack)
  // bg color decision
  const bgColor = pack?.title?.toLowerCase()?.includes("free")
    ? "bg-[#06B6D4]"
    : pack?.title?.toLowerCase()?.includes("silver")
    ? "bg-[#718096]"
    : pack?.title?.toLowerCase()?.includes("plus")
    ? "bg-[#9932CC]"
    : pack?.title?.toLowerCase() === "super"
    ? "bg-[#FFC0CB]"
    : pack?.title?.toLowerCase()?.includes("deluxe")
    ? "bg-[#00FF00]"
    : pack?.title?.toLowerCase()?.includes("gold")
    ? "bg-[#FBBF24]"
    : "bg-[#DC2626]";

  const handleBuyPack = () => {
    if (getCookie("token")) {
      if (useCase === "home") {
        return setSelectedPack(pack);
      }
      return setShowPopup(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-left w-[340px]">
          <div className={`rounded-lg bg-white p-6 shadow-xl`}>
            <div className="relative">
              <p
                className={`text-2xl font-semibold font-Inter mb-4 text-white w-48 py-[6px] pl-7 -ml-10 ${bgColor}`}
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%, 0% 50%)",
                }}
              >
                {pack?.title}
              </p>
              <div
                className={`w-4 px-4 py-[21px] absolute -bottom-[40px] -left-[39px] -z-50 ${bgColor}`}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 6%)" }}
              ></div>
            </div>
            <div className="flex flex-col mb-4">
              <h3 className="text-base font-Inter text-gray-600">
                <span className="text-6xl font-semibold font-playFair">
                  {pack?.priceMonth}
                </span>
                BDT/month
              </h3>
              <p className="ml-6 text-2xl font-bold">Or,</p>
              <p>
                <span className="text-yellow-500 font-bold text-3xl">
                  {pack?.priceMonthInPoint}
                </span>{" "}
                point/month
              </p>
            </div>
            <ul className="list-disc pl-6 text-lg font-Inter text-gray-500 h-[450px]">
              {pack?.title?.toLowerCase()?.includes("free") && (
                <>
                  <li className="whitespace-nowrap">Browse Basic Features</li>
                  <li>Register/Login</li>
                  <li>Complete Profile</li>
                </>
              )}
              {index !== 0 && (
                <li>All feature of {packages[index - 1]?.title}</li>
              )}
              <li>{pack?.chatRequestPerDay} chat request every 24hours </li>
              <li>{pack?.swapPerDay || "Unlimited"} Swap every 24hours</li>
              <li>{pack?.messageLimit || "Unlimited"} Message Per Day</li>
              {pack?.videoCall !== 0 && (
                <li>Video Chat: {pack?.videoCall} Minutes a Day</li>
              )}
              {pack?.videoCallPerMonth !== 0 && (
                <li>{pack?.videoCallPerMonth} Minutes+ Video Chat Per Month</li>
              )}
              {pack?.timelinePost && <li>Timeline Post</li>}
              {pack?.courseDiscount !== 0 && (
                <li>Course Discount {pack?.courseDiscount}%</li>
              )}
              {pack?.uploadMarriageCertificate && (
                <li>Upload Marriage Certificate</li>
              )}
              {pack?.freeKaziContact && <li>Free Kazi Contact</li>}
              {pack?.shoppingDiscount !== 0 && (
                <li>{pack?.shoppingDiscount}% Shopping Discount</li>
              )}
              {pack?.lawyerDiscount !== 0 && (
                <li>{pack?.lawyerDiscount}% Discount on Lawyer Fee</li>
              )}
              {pack?.agentDiscount !== 0 && (
                <li>{pack?.agentDiscount}% Discount on Agent Fee</li>
              )}
              {pack?.kaziDiscount !== 0 && (
                <li>{pack?.kaziDiscount}% Discount on Agent Fee</li>
              )}
              {pack?.specialSupport && <li>Special Support</li>}
              {pack?.videoBioData && <li>Video Biodata</li>}
              {pack?.profileBoost !== 0 && (
                <li>{pack?.profileBoost} Profile Boost Per Month</li>
              )}
            </ul>
            {!pack?.title?.toLowerCase()?.includes("free") && (
              <button
                onClick={handleBuyPack}
                className={`mt-6 rounded ${bgColor} px-4 py-2 font-medium text-white text-lg font-Inter`}
              >
                Buy Pack
              </button>
            )}
            {pack?.title?.toLowerCase()?.includes("free") && (
              <button
                disabled={true}
                className="mt-6 cursor-not-allowed rounded bg-[#06B6D4] px-4 py-2 font-medium text-white text-lg font-Inter"
              >
                Try free
              </button>
            )}
          </div>
        </div>
      </div>
      {showPopup && useCase !== "home" && (
        <PackageForm {...{ pack, setShowPopup, setSuccessSnackBarOpen }} />
      )}
    </>
  );
};

export default PackageCard;
