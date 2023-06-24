import React from "react";

// Third party package
import { Select } from "antd";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

// Components
import { useGetProfessionalFilterTypesQuery } from "../../../../Redux/features/FindLawyerKaziAgentFilter/findLawyerKaziAgentFilterApi";
// const data = { role: "lawyer", type: "Urgent" };
const FindLawyerAgentKaziFilterBox = () => {
  const { data: filterTypes } = useGetProfessionalFilterTypesQuery();

  const handleDesignation = (value) => {};

  const handleCategory = (value) => {};

  const handleChamberLocation = (value) => {};
  const handleCourt = (value) => {};
  const handleHometown = (value) => {};
  const handleCurrentLocation = (value) => {};

  //   const onsubmit = ()=> {
  //     data.role = "Agent"
  //   }

  return (
    <div>
      <div
        className={`bg-[#fff] w-[300px] lg:w-full mx-auto rounded-[10px] px-[30px] pt-[20px] pb-[30px]`}
        style={{
          visibility: "visible",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.12)",
        }}
      >
        <p className="flex items-center">
          <HiOutlineAdjustmentsHorizontal className="text-[28px] mr-2" />{" "}
          <span className="text-[24px] font-medium font-Inter">Filter</span>
        </p>

        {/* All input fields for filter */}
        <div className="mt-5">
          {/* Designation */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">
              Designation
            </h1>
            <Select
              className="w-full mb-4"
              onChange={handleDesignation}
              placeholder="Select Designation"
            >
              {filterTypes?.uniqueFilter?.designation?.map((opt, i) => {
                return (
                  <Select.Option key={i} value={opt}>
                    {opt}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
          {/* category */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">Category</h1>
            <Select
              className="w-full mb-4"
              onChange={handleCategory}
              placeholder="Select Category"
            >
              {filterTypes?.uniqueFilter?.serviceCategory?.map((opt, i) => {
                return (
                  <Select.Option key={i} value={opt}>
                    {opt}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
          {/* Chamber Location */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">
              Chamber Location
            </h1>
            <Select
              className="w-full mb-4"
              onChange={handleChamberLocation}
              placeholder="Select Chamber Location"
            >
              {filterTypes?.uniqueFilter?.officeLocation?.map((opt, i) => {
                return (
                  <Select.Option key={i} value={opt}>
                    {opt}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
          {/* Court */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">Court</h1>
            <Select
              className="w-full mb-4"
              onChange={handleCourt}
              placeholder="Select Court"
            >
              {filterTypes?.uniqueFilter?.officeLocation?.map((opt, i) => {
                return (
                  <Select.Option key={i} value={opt}>
                    {opt}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
          {/* Hometown */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">Hometown</h1>
            <Select
              className="w-full mb-4"
              onChange={handleHometown}
              placeholder="Select Hometown"
            >
              {filterTypes?.uniqueFilter?.hometown?.map((opt, i) => {
                return (
                  <Select.Option key={i} value={opt}>
                    {opt}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
          {/* Current Location */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">
              Current Location
            </h1>
            <Select
              className="w-full mb-4"
              onChange={handleCurrentLocation}
              placeholder="Select Current Location"
            >
              {filterTypes?.uniqueFilter?.currentLocation?.map((opt, i) => {
                return (
                  <Select.Option key={i} value={opt}>
                    {opt}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindLawyerAgentKaziFilterBox;
