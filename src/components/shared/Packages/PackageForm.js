/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useEffect } from "react";
import {
  useBuyPackageMutation,
  useBuyPackageWithWalletMutation,
} from "../../../Redux/features/package/packageApi";
import { SuccessSnackBar } from "../../ui/error/snackBar/SuccessSnackBar";
import Error from "../../ui/error/Error";

const PackageForm = ({ setShowPopup, pack, useCase, setSelectedPack }) => {
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [total, setTotal] = useState(pack?.priceMonth);
  const [selectedOption, setSelectedOption] = useState("30");
  const [isChecked, setIsChecked] = useState(false);
  const [customError, setCustomError] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Redux api call
  const [buyPackage, { data, isLoading }] = useBuyPackageMutation();
  const [
    buyPackageByPoint,
    { data: pointData, isLoading: pointLoading, error: pointError },
  ] = useBuyPackageWithWalletMutation();

  const handleSubmit = () => {
    if (isChecked) {
      buyPackageByPoint({
        amount: total,
        numberOfDay: selectedOption * 1,
        packageId: pack._id,
      });
    } else {
      buyPackage({
        amount: total,
        numberOfDay: selectedOption * 1,
        packageId: pack._id,
      });
    }
  };
  useEffect(() => {
    if (data) {
      window.location.replace(data?.data);
    }
  }, [data]);
  useEffect(() => {
    if (pointData) {
      setSuccessSnackBarOpen(true);
      setTimeout(() =>
        useCase === "home"
          ? setSelectedPack(null)
          : setShowPopup(false),800
      );
    }
    if (pointError) {
      setCustomError(pointError?.data?.message);
    }
  },[pointData])
  useEffect(() => {
    if (selectedOption === "30") {
      if (isChecked) {
        return setTotal(pack?.priceMonthInPoint)
      } else {
        setTotal(pack?.priceMonth); 
      }
    }
    if (selectedOption === "90") {
      if (isChecked) {
        setTotal(pack?.priceThreeMonthInPoint)
      } else {
        setTotal(pack?.priceThreeMonth);
      }
      
    }
    if (selectedOption === "180") {
      if (isChecked) {
        setTotal(pack?.priceSixMonthInPoint)
      } else {
        setTotal(pack?.priceSixMonth);
      }
      
    }
    if (selectedOption === "365") {
      if (isChecked) {
        setTotal(pack?.priceYearInPoint);
      } else {
        setTotal(pack?.priceYear);
      }
      
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
          {isChecked?"POINT": "BDT"}
        </p>

        <button
          onClick={handleSubmit}
          className="bg-white font-bold text-lg px-4 py-2 rounded hover:bg-gray-100"
        >
          {(isLoading || pointLoading) ? "Loading" : "Submit"}
        </button>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
            value={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="text-white font-bold">Buy with SHONSHARI wallet</span>
        </label>
        {customError && <Error message={customError} />}
      </div>
      <SuccessSnackBar
        {...{
          successSnackBarOpen,
          setSuccessSnackBarOpen,
          message: "Successful",
        }}
      />
    </>
  );
};

export default PackageForm;
