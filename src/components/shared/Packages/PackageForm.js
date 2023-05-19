/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useEffect } from "react";
import { useBuyPackageMutation } from "../../../Redux/features/package/packageApi";
// import { useBuyPackageMutation } from "../../../Redux/features/package/packageApi";

const PackageForm = ({ setShowPopup, pack, useCase, setSelectedPack }) => {
  // const [isChecked, setIsChecked] = useState(false);
  const [total, setTotal] = useState(pack?.priceMonth);
  const [selectedOption, setSelectedOption] = useState("30");
  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Redux api call
  const [buyPackage, { data, isLoading }] = useBuyPackageMutation();
  useEffect(() => {
    if (data) {
      window.location.replace(data?.data);
    }
  }, [data]);
  useEffect(() => {
    if (selectedOption === "30") {
      setTotal(pack?.priceMonth);
    }
    if (selectedOption === "90") {
      setTotal(pack?.priceThreeMonth);
    }
    if (selectedOption === "180") {
      setTotal(pack?.priceSixMonth);
    }
    if (selectedOption === "365") {
      setTotal(pack?.priceYear);
    }
  }, [selectedOption]);
  return (
    <>
      <div
        onClick={
          useCase === "home"
            ? () => setSelectedPack(null)
            : (e) => setShowPopup(false)
        }
        className="fixed w-full h-full top-0 left-0 inset-0 z-10 bg-black/40 cursor-pointer"
      ></div>
      <div className="rounded-xl sm:max-w-full bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-[400px] space-y-4 bg-white p-6 fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-white text-xl font-bold">Purchase Package for:</h3>
        <div>
          <label className="text-white inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              value="30"
              checked={selectedOption === "30"}
              onChange={handleOptionChange}
            />
            <span className="ml-2 text-white">1 Month</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              value="90"
              checked={selectedOption === "90"}
              onChange={handleOptionChange}
            />
            <span className="ml-2 text-white">3 Month</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              value="180"
              checked={selectedOption === "180"}
              onChange={handleOptionChange}
            />
            <span className="ml-2 text-white">6 Month</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              value="365"
              checked={selectedOption === "365"}
              onChange={handleOptionChange}
            />
            <span className="ml-2 text-white">1 Year</span>
          </label>
        </div>

        <p className="font-bold text-xl text-white">
          Package cost: <span className="text-2xl font-bold">{total} </span>
          BDT
        </p>

        <button
          onClick={() =>
            buyPackage({
              amount: total,
              numberOfDay: selectedOption * 1,
              packageId: pack._id,
            })
          }
          className="bg-white font-bold text-lg px-4 py-2 rounded hover:bg-gray-100"
        >
          {isLoading ? "Loading" : "Submit"}
        </button>
      </div>
    </>
  );
};

export default PackageForm;
