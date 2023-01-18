import React from "react";

const SelectSizeCard = ({ size, setSelectedSize, selectedSize, i }) => {
  return (
    <div
      onClick={() => setSelectedSize(i)}
      className={`py-3 px-6 cursor-pointer border ${
        selectedSize === i ? "border-[#52525B]" : "border-slate-200"
      } rounded-lg`}
    >
      <p className="text-[#272727] text-xl leading-8">{size.height}</p>
      <p className="capitalize text-[#52525B] text-xs leading-4">{size.type}</p>
    </div>
  );
};

export default SelectSizeCard;
