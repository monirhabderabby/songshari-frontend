import React from "react";

// Third party package
import { Checkbox, Radio, Select, Space } from "antd";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

// Components
import { useGetProfessionalFilterTypesQuery } from "../../../../Redux/features/FindLawyerKaziAgentFilter/findLawyerKaziAgentFilterApi";
import { countries } from "../../AutoSuggestion/countries";
// const data = { role: "lawyer", type: "Urgent" };
const FindLawyerAgentKaziFilterBox = (props) => {
  const { data: filterTypes } = useGetProfessionalFilterTypesQuery();

  const {
    setDesignation,
    setServiceCategory,
    setServiceProvide,
    setOfficeLocation,
    setCourt,
    setHomeTown,
    setCurrentLocation,
    setProfessionalExperience,
    setEducationQualification,
    setRating,
    setCaseCompleted,
    setSuccessRatio,
    setCitizenship,
    setGender,
    setAge,
    handleSubmit,
  } = props;

  const handleDesignation = (value) => {
    setDesignation(value);
  };
  const handleCategory = (value) => {
    setServiceCategory(value);
  };
  const handleServiceProvide = (value) => {
    setServiceProvide(value);
  };
  const handleChamberLocation = (value) => {
    setOfficeLocation(value);
  };
  const handleCourt = (value) => {
    setCourt(value);
  };
  const handleHometown = (value) => {
    setHomeTown(value);
  };
  const handleCurrentLocation = (value) => {
    setCurrentLocation(value);
  };
  const handleProfessionalExperience = (value) => {
    setProfessionalExperience(value);
  };
  const handleEducationalQualification = (value) => {
    setEducationQualification(value);
  };
  const handleRating = (value) => {
    setRating(value);
  };
  const handleCaseCompleted = (value) => {
    setCaseCompleted(value);
  };
  const handleSuccessRatio = (value) => {
    setSuccessRatio(value);
  };
  const handleCitizenship = (value) => {
    setCitizenship(value);
  };
  const handleGender = (value) => {
    setGender(value);
  };
  const handleAge = (value) => {
    setAge(value);
  };

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
              className="mb-4"
            >
              <Space direction="vertical">
                <Radio value="1">Less Than 1 Year</Radio>
                <Radio value="1-2">1-2 Years</Radio>
                <Radio value="2-3">2-3 Years</Radio>
                <Radio value="3-5">3-5 Years</Radio>
                <Radio value="5-10">5-10 Years</Radio>
                <Radio value="10-15">10-15 Years </Radio>
                <Radio value="15">15 Years+</Radio>
              </Space>
            </Radio.Group>
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
          {/* Rating */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">Rating</h1>
            <Checkbox.Group
              onChange={handleRating}
              // value={rating}
              className="mb-4"
            >
              <Space direction="vertical">
                <Checkbox value="0">No Rating</Checkbox>
                <Checkbox value="1">1*</Checkbox>
                <Checkbox value="2">2*</Checkbox>
                <Checkbox value="3">3*</Checkbox>
                <Checkbox value="4">4*</Checkbox>
                <Checkbox value="5">5*</Checkbox>
              </Space>
            </Checkbox.Group>
          </div>
          {/* Case Completed */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">
              Case Completed
            </h1>
            <Checkbox.Group
              onChange={handleCaseCompleted}
              // value={caseCompleted}
              className="mb-4"
            >
              <Space direction="vertical">
                <Checkbox value="10">Less than 10</Checkbox>
                <Checkbox value="10-20">10-20</Checkbox>
                <Checkbox value="20-40">20-40</Checkbox>
                <Checkbox value="40-60">40-60</Checkbox>
                <Checkbox value="60-80">60-80</Checkbox>
                <Checkbox value="80-100">80-100</Checkbox>
                <Checkbox value="100-150">100-150</Checkbox>
                <Checkbox value="150">150+</Checkbox>
              </Space>
            </Checkbox.Group>
          </div>
          {/* Success Ratio */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">
              Success Ratio
            </h1>
            <Checkbox.Group
              onChange={handleSuccessRatio}
              // value={successRatio}
              className="mb-4"
            >
              <Space direction="vertical">
                <Checkbox value="10">Less than 10%</Checkbox>
                <Checkbox value="10-20">10%-20%</Checkbox>
                <Checkbox value="20-30">20%-30%</Checkbox>
                <Checkbox value="30-40">30%-40%</Checkbox>
                <Checkbox value="40-50">40%-50%</Checkbox>
                <Checkbox value="50-60">50%-60%</Checkbox>
                <Checkbox value="60-70">60%-70%</Checkbox>
                <Checkbox value="70-80">70%-80%</Checkbox>
                <Checkbox value="80-90">80%-90%</Checkbox>
                <Checkbox value="90-100">90%-100%</Checkbox>
              </Space>
            </Checkbox.Group>
          </div>
          {/* Citizenship */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">
              Citizenship
            </h1>
            <Select
              className="w-full mb-4"
              onChange={handleCitizenship}
              placeholder="Select Citizenship"
              mode="multiple"
              maxTagCount={2}
              allowClear
              showSearch
              filterOption={(input, option) =>
                (option?.children ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              {countries.map((country) => (
                <Select.Option key={country.id} value={country.value}>
                  {country.label}
                </Select.Option>
              ))}
            </Select>
          </div>
          {/* Gender */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">Gender</h1>
            <Select
              className="w-full mb-4"
              onChange={handleGender}
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "woman",
                  label: "Woman",
                },
                {
                  value: "man",
                  label: "Man",
                },
              ]}
              placeholder="Select Gender"
            />
          </div>
          {/* Age */}
          <div>
            <h1 className="text-base leading-6 font-medium mb-2">Age</h1>
            <Radio.Group onChange={handleAge} className="mb-4">
              <Space direction="vertical">
                <Radio value="25">Less Than 25</Radio>
                <Radio value="25-30">25-30 Years</Radio>
                <Radio value="31-35">31-35 Years</Radio>
                <Radio value="36-40">36-40 Years</Radio>
                <Radio value="41-50">41-50 Years</Radio>
                <Radio value="50">50 Years+</Radio>
              </Space>
            </Radio.Group>
          </div>

          <div className="flex justify-center items-center mt-2">
            <button
              onClick={handleSubmit}
              className="w-[139px] text-center text-lg font-medium special_profile_button hover:bg-primary duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindLawyerAgentKaziFilterBox;
