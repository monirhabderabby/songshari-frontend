import React from "react";

const PackageCard = ({ pack }) => {
  // bg color decision
  const bgColor =
    pack.name === "Free"
      ? "bg-[#06B6D4]"
      : pack.name === "Silver"
      ? "bg-[#718096]"
      : pack.name === "Gold"
      ? "bg-[#FBBF24]"
      : "bg-[#DC2626]";

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
            {pack.name}
          </p>
          <div
            className={`w-4 px-4 py-[21px] absolute -bottom-[40px] -left-[39px] -z-50 ${
              pack.name === "Free"
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
        <h3 className="text-base font-Inter text-gray-600 mb-4">
          <span className="text-6xl font-semibold font-playFair">
            {pack.prize}
          </span>
          BDT/month
        </h3>
        <ul className="list-disc pl-6 text-lg font-Inter text-gray-500 h-72">
          {pack.details.map((p, i) => (
            <li key={i} className="whitespace-nowrap">
              {p}
            </li>
          ))}
        </ul>
        <button className="mt-6 rounded bg-pink-500 px-4 py-2 font-medium text-white hover:bg-pink-600 text-lg font-Inter">
          Buy Pack
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
