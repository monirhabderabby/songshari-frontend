import React from "react";

// Third party package
import { Checkbox, Radio, Select, Space } from "antd";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

// Components
import { useGetProfessionalFilterTypesQuery } from "../../../../Redux/features/FindLawyerKaziAgentFilter/findLawyerKaziAgentFilterApi";
// const data = { role: "lawyer", type: "Urgent" };
const FindLawyerAgentKaziFilterBox = () => {
  const { data: filterTypes } = useGetProfessionalFilterTypesQuery();

  const handleDesignation = (value) => {};
  const handleCategory = (value) => {};
  const handleServiceProvide = (value) => {};
  const handleChamberLocation = (value) => {};
  const handleCourt = (value) => {};
  const handleHometown = (value) => {};
  const handleCurrentLocation = (value) => {};
  const handleProfessionalExperience = (value) => {};
  const handleEducationalQualification = (value) => {};

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
          {/* Services Provide */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">
              Services Provide
            </h1>
            <Select
              className="w-full mb-4"
              onChange={handleServiceProvide}
              placeholder="Select Service"
            >
              {filterTypes?.uniqueFilter?.serviceProvide?.map((opt, i) => {
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
          {/* Professional experience */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">
              Professional Experience
            </h1>
            <Radio.Group
              onChange={handleProfessionalExperience}
              // value={professionalExperience}
              className="mb-4"
            >
              <Space direction="vertical">
                <Radio value="Less Than 1 Year">Less Than 1 Year</Radio>
                <Radio value="1-2 Years">1-2 Years</Radio>
                <Radio value="2-3 Years">2-3 Years</Radio>
                <Radio value="3-5 Years">3-5 Years</Radio>
                <Radio value="5-10 Years">5-10 Years</Radio>
                <Radio value="10-15 Years">10-15 Years </Radio>
                <Radio value="15 Years+">15 Years+</Radio>
              </Space>
            </Radio.Group>
            <Checkbox.Group
              onChange={handleProfessionalExperience}
              className="mb-4"
            >
              <Space direction="vertical">
                <Checkbox value="Less Than 1 Year">Less Than 1 Year</Checkbox>
                <Checkbox value="1-2 Years">1-2 Years</Checkbox>
                <Checkbox value="2-3 Years">2-3 Years</Checkbox>
                <Checkbox value="3-5 Years">3-5 Years</Checkbox>
                <Checkbox value="5-10 Years">5-10 Years</Checkbox>
                <Checkbox value="10-15 Years">10-15 Years</Checkbox>
                <Checkbox value="15 Years+">15 Years+</Checkbox>
              </Space>
            </Checkbox.Group>
          </div>
          {/* Educational Qualification */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">
              Educational Qualification
            </h1>
            <Select
              className="w-full mb-4"
              onChange={handleEducationalQualification}
              placeholder="Select Educational Qualification"
            >
              {filterTypes?.uniqueFilter?.educationQualification?.map(
                (opt, i) => {
                  return (
                    <Select.Option key={i} value={opt}>
                      {opt}
                    </Select.Option>
                  );
                }
              )}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindLawyerAgentKaziFilterBox;
