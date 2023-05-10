import React,{useEffect} from "react";
import { useBuyPackageMutation } from "../../../Redux/features/package/packageApi";
import PackageForm from "./PackageForm";

const PackageCard = ({ pack,packages, index, user }) => {
  // redux api call
  const [buyPackage, { data, isLoading, error }] = useBuyPackageMutation();
  console.log(data, isLoading, error)

  // bg color decision
  const bgColor =
    pack?.title === "Free"
      ? "bg-[#06B6D4]"
      : pack.name === "Silver"
      ? "bg-[#718096]"
      : pack.name === "Gold"
      ? "bg-[#FBBF24]"
          : "bg-[#DC2626]";
  
  useEffect(() => {
    if (data) {
      window.location.replace(data?.data)
    }
  },[data])

  return (
    <div className="text-left w-[350px]">
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
            className={`w-4 px-4 py-[21px] absolute -bottom-[40px] -left-[39px] -z-50 ${
              pack?.title === "Free"
                ? "bg-[#059cb7]"
                : pack.name === "Silver"
                ? "bg-[#5d6a7c]"
                : pack.name === "Gold"
                ? "bg-[#ce9b1d]"
                : "bg-[#ad1e1e]"
            }`}
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
          <p><span className="text-yellow-500 font-bold text-3xl">{pack?.priceMonthInPoint}</span> point/month</p>
        </div>
        <ul className="list-disc pl-6 text-lg font-Inter text-gray-500 h-[450px]">
          {pack?.title?.toLowerCase() === "free" && (
            <>
              <li className="whitespace-nowrap">Browse Basic Features</li>
              <li>Register/Login</li>
              <li>Complete Profile</li>
            </>
          )}
          {index !== 0 && <li>All feature of {packages[index - 1]?.title}</li>}
          <li>{pack?.chatRequestPerDay} chat request every 24hours </li>
          <li>{pack?.swapPerDay || "Unlimited"} chat request every 24hours</li>
          <li>{pack?.messagePerDay || "Unlimited"} Message Per Day</li>
          <li>Video Chat: {pack?.videoCall} Minutes a Day</li>
          {pack?.timelinePost && <li>Timeline Post</li>}
          {pack?.courseDiscount !== 0 && (
            <li>Course Discount {pack?.courseDiscount}%</li>
          )}
          <li>Upload Marriage Certificate</li>
          <li>Free Kazi Contact</li>
          {pack?.shoppingDiscount !== 0 && (
            <li>{pack?.shoppingDiscount}% Shopping Discount</li>
          )}
          {pack?.lawyerDiscount !== 0 && (
            <li>{pack?.lawyerDiscount}% Discount on Lawyer Fee</li>
          )}
          {pack?.agentDiscount !== 0 && (
            <li>{pack?.agentDiscount}% Discount on Agent Fee</li>
          )}
        </ul>
        {pack?.title?.toLowerCase() !== "free" && (
          <button
            onClick={() =>
              buyPackage({
                amount: pack?.priceMonth,
                packageId: pack?._id,
                numberOfDay: 30,
              })
            }
            className="mt-6 rounded bg-pink-500 px-4 py-2 font-medium text-white hover:bg-pink-600 text-lg font-Inter"
          >
            {isLoading ? "Loading..." : "Buy Pack"}
          </button>
        )}
        {pack?.title?.toLowerCase() === "free" && (
          <button
            onClick={() =>
              buyPackage({
                amount: pack?.priceMonth,
                packageId: pack?._id,
                numberOfDay: 30,
              })
            }
            className="mt-6 rounded bg-[#06B6D4] px-4 py-2 font-medium text-white hover:bg-pink-600 text-lg font-Inter"
          >
            {isLoading ? "Loading..." : "Try free"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
