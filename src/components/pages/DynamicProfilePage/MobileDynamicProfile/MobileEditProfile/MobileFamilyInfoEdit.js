// Configuration
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Third party packages
import { useForm } from "react-hook-form";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Radio, Space, DatePicker, message } from "antd";

// Components
import { useUpdateFamilyDetailsMutation } from "../../../../../Redux/features/userInfo/userApi";
import { Link } from "react-router-dom";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";

const MobileFamilyInfoEdit = () => {
  const [fatherProfession, setFatherProfession] = useState(null);
  const [fatherIncome, setFatherIncome] = useState("");
  const [fatherEducationalQualification, setFatherEducationalQualification] =
    useState(null);
  const [fatherDateOfBirth, setFatherDateOfBirth] = useState("");
  const [fatherDeathDate, setFatherDeathDate] = useState("");
  const [isFatherAlive, setIsFatherAlive] = useState("");

  const [isMotherAlive, setIsMotherAlive] = useState("");
  const [motherProfession, setMotherProfession] = useState(null);
  const [motherIncome, setMotherIncome] = useState("");
  const [motherEducationalQualification, setMotherEducationalQualification] =
    useState(null);
  const [motherDateOfBirth, setMotherDateOfBirth] = useState("");
  const [motherDeathDate, setMotherDeathDate] = useState("");

  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  // Redux api
  const [updateFamilyDetails, { data: response, isError, isLoading }] =
    useUpdateFamilyDetailsMutation();

  //Profession name options
  const professionNameOptions = [
    { title: "Teacher" },
    { title: "Doctor" },
    { title: "Student" },
    { title: "Business" },
  ];

  //Educational Qualifications Options
  const educationalInfoOptions = [
    { title: "Ssc" },
    { title: "Hsc" },
    { title: "Hons" },
    { title: "Masters" },
  ];

  // ------- Father Profession name handler -------------
  const handleFatherProfessionChange = (event, newValue) => {
    if (typeof newValue === "string") {
      setFatherProfession(newValue.title);
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setFatherProfession(newValue.inputValue);
    } else {
      setFatherProfession(newValue.title);
    }
  };

  const handleFatherEducationalQualificationChange = (event, newValue) => {
    if (typeof newValue === "string") {
      setFatherEducationalQualification(newValue.title);
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setFatherEducationalQualification(newValue.inputValue);
    } else {
      setFatherEducationalQualification(newValue.title);
    }
  };

  // Father income
  const handleFatherIncomeChange = (e) => {
    setFatherIncome(e.target.value);
  };

  const handleFatherDateOfBirth = (date, dateString) => {
    setFatherDateOfBirth(dateString);
  };
  const handleFatherDeathDate = (date, dateString) => {
    setFatherDeathDate(dateString);
  };
  const handleFatherStatusChange = (e) => {
    setIsFatherAlive(e.target.value);
  };

  // ------- Mother Profession name handler -------------
  const handleMotherProfessionChange = (event, newValue) => {
    if (typeof newValue === "string") {
      setMotherProfession(newValue.title);
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setMotherProfession(newValue.inputValue);
    } else {
      setMotherProfession(newValue.title);
    }
  };

  const handleMotherEducationalQualificationChange = (event, newValue) => {
    if (typeof newValue === "string") {
      setMotherEducationalQualification(newValue.title);
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setMotherEducationalQualification(newValue.inputValue);
    } else {
      setMotherEducationalQualification(newValue.title);
    }
  };

  // Mother income
  const handleMotherIncomeChange = (e) => {
    setMotherIncome(e.target.value);
  };

  const handleMotherDateOfBirth = (date, dateString) => {
    setMotherDateOfBirth(dateString);
  };

  const handleMotherDeathDate = (date, dateString) => {
    setMotherDeathDate(dateString);
  };
  const handleMotherStatusChange = (e) => {
    setIsMotherAlive(e.target.value);
  };

  const onSubmit = async (data) => {
    data = {
      ...data,
      isFatherAlive,
      fatherProfession,
      fatherIncome,
      fatherEducationalQualification,
      fatherDateOfBirth,
      fatherDeathDate,
      isMotherAlive,
      motherProfession,
      motherIncome,
      motherEducationalQualification,
      motherDateOfBirth,
      motherDeathDate,
    };
    await updateFamilyDetails(data);
  };

  //filter options for type search select (Autocomplete MUI)
  const filter = createFilterOptions();

  // error success and loading handler
  useEffect(() => {
    const key = "updated";
    if (isLoading) {
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
      });
    }

    if (response) {
      messageApi.open({
        key,
        type: "success",
        content: "Data updated successfully",
        duration: 2,
      });
    }

    if (isError) {
      messageApi.open({
        key,
        type: "error",
        content: "Server error! try again!!",
      });
    }
    if (!isLoading && !isError && response) {
      setTimeout(() => {
        navigate("/mobileuserprofile");
      }, 2000);
    }
  }, [response, isLoading, isError, navigate, messageApi]);

  return (
    <div className="mx-6 mb-20">
      {/* Navigate previous page */}
      <div className="bg-[#FFFFFF] py-[10px] sticky top-0">
        <div className="bg-white w-full grid grid-cols-6 h-[48px]">
          <div className="pl-1 col-span-1">
            <Link onClick={() => navigate(-1)}>
              <i className="fa-solid text-sm text-[#1E2022] fa-chevron-left "></i>
            </Link>
          </div>
          <div className="col-span-4 ">
            <p className="text-center">Edit Family Details</p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <div className=" bg-white drop-shadow-lg px-4 py-6 mb-4 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Father info */}
          <div className="mb-6">
            <label className="text-sm block mb-2 text-[#344054] font-medium">
              Father Status
            </label>
            <Radio.Group
              onChange={handleFatherStatusChange}
              value={isFatherAlive}
            >
              <Space direction="vertical">
                <Radio value={"yes"}>Alive</Radio>
                <Radio value={"no"}>Dead</Radio>
              </Space>
            </Radio.Group>
          </div>
          {isFatherAlive === "yes" && (
            <div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Father Name
                </label>
                <input
                  {...register("fatherName")}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-[#D0D5DD]"
                  style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
                />
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Father Profession
                </label>
                <Autocomplete
                  className="mb-4 w-36"
                  value={fatherProfession}
                  onChange={handleFatherProfessionChange}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some(
                      (option) => inputValue === option.title
                    );
                    if (inputValue !== "" && !isExisting) {
                      filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                      });
                    }

                    return filtered;
                  }}
                  selectOnFocus
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={professionNameOptions}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    // Regular option
                    return option.title;
                  }}
                  renderOption={(props, option) => (
                    <li {...props}>{option.title}</li>
                  )}
                  freeSolo
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                  sx={{
                    "& input": {
                      height: 6,
                      padding: 0,
                    },
                  }}
                />
              </div>
              <div>
                <h1 className="text-sm block mb-2 text-[#344054] font-medium">
                  Father Income
                </h1>
                <Radio.Group
                  onChange={handleFatherIncomeChange}
                  value={fatherIncome}
                  className="mb-4"
                >
                  <Space direction="vertical">
                    <Radio value={"Below 15,000 BDT"}>Below 15,000 BDT</Radio>
                    <Radio value={"15000-20000 BDT"}>15000-20000 BDT</Radio>
                    <Radio value={"20000-25000 BDT"}>20000-25000 BDT</Radio>
                    <Radio value={"25000-30000 BDT"}>25000-30000 BDT</Radio>
                    <Radio value={"30000-35000 BDT"}>30000-35000 BDT</Radio>
                    <Radio value={"35000-40000 BDT"}>35000-40000 BDT</Radio>
                    <Radio value={"45000-50000 BDT"}>45000-50000 BDT</Radio>
                    <Radio value={"50000-60000 BDT"}>50000-60000 BDT</Radio>
                    <Radio value={"60000-70000 BDT"}>60000-70000 BDT</Radio>
                    <Radio value={"70000-80000 BDT"}>70000-80000 BDT</Radio>
                    <Radio value={"80000-90000 BDT"}>80000-90000 BDT</Radio>
                    <Radio value={"90000-100000 BDT"}>90000-100000 BDT</Radio>
                    <Radio value={"100000-150000 BDT"}>100000-150000 BDT</Radio>
                    <Radio value={"150000-200000 BDT"}>150000-200000 BDT</Radio>
                    <Radio value={"200000-250000 BDT"}>200000-250000 BDT</Radio>
                    <Radio value={"300000+ BDT"}>300000+ BDT</Radio>
                  </Space>
                </Radio.Group>
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Father Education
                </label>
                <Autocomplete
                  value={fatherEducationalQualification}
                  className="mb-4 w-36"
                  onChange={handleFatherEducationalQualificationChange}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some(
                      (option) => inputValue === option.title
                    );
                    if (inputValue !== "" && !isExisting) {
                      filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                      });
                    }

                    return filtered;
                  }}
                  selectOnFocus
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={educationalInfoOptions}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    // Regular option
                    return option.title;
                  }}
                  renderOption={(props, option) => (
                    <li {...props}>{option.title}</li>
                  )}
                  freeSolo
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                  sx={{
                    "& input": {
                      height: 6,
                      padding: 0,
                    },
                  }}
                />
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Father Date of Birth
                </label>
                <DatePicker
                  onChange={handleFatherDateOfBirth}
                  className="w-full"
                  size="large"
                />
              </div>
            </div>
          )}
          {/* Father Death Date */}
          {isFatherAlive === "no" && (
            <div className="mb-6">
              <label className="text-sm block mb-2 text-[#344054] font-medium">
                Father Death Date
              </label>
              <DatePicker
                onChange={handleFatherDeathDate}
                className="w-full"
                size="large"
              />
            </div>
          )}

          {/* Mother info */}
          <div className="mb-6">
            <label className="text-sm block mb-2 text-[#344054] font-medium">
              Mother Status
            </label>
            <Radio.Group
              onChange={handleMotherStatusChange}
              value={isMotherAlive}
            >
              <Space direction="vertical">
                <Radio value={"yes"}>Alive</Radio>
                <Radio value={"no"}>Dead</Radio>
              </Space>
            </Radio.Group>
          </div>
          {isMotherAlive === "yes" && (
            <div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Mother Name
                </label>
                <input
                  {...register("motherName")}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-[#D0D5DD]"
                  style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
                />
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Mother Profession
                </label>
                <Autocomplete
                  className="mb-4 w-36"
                  value={motherProfession}
                  onChange={handleMotherProfessionChange}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some(
                      (option) => inputValue === option.title
                    );
                    if (inputValue !== "" && !isExisting) {
                      filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                      });
                    }

                    return filtered;
                  }}
                  selectOnFocus
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={professionNameOptions}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    // Regular option
                    return option.title;
                  }}
                  renderOption={(props, option) => (
                    <li {...props}>{option.title}</li>
                  )}
                  freeSolo
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                  sx={{
                    "& input": {
                      height: 6,
                      padding: 0,
                    },
                  }}
                />
              </div>
              <div>
                <h1 className="text-sm block mb-2 text-[#344054] font-medium">
                  Mother Income
                </h1>
                <Radio.Group
                  onChange={handleMotherIncomeChange}
                  value={motherIncome}
                  className="mb-4"
                >
                  <Space direction="vertical">
                    <Radio value={"Below 15,000 BDT"}>Below 15,000 BDT</Radio>
                    <Radio value={"15000-20000 BDT"}>15000-20000 BDT</Radio>
                    <Radio value={"20000-25000 BDT"}>20000-25000 BDT</Radio>
                    <Radio value={"25000-30000 BDT"}>25000-30000 BDT</Radio>
                    <Radio value={"30000-35000 BDT"}>30000-35000 BDT</Radio>
                    <Radio value={"35000-40000 BDT"}>35000-40000 BDT</Radio>
                    <Radio value={"45000-50000 BDT"}>45000-50000 BDT</Radio>
                    <Radio value={"50000-60000 BDT"}>50000-60000 BDT</Radio>
                    <Radio value={"60000-70000 BDT"}>60000-70000 BDT</Radio>
                    <Radio value={"70000-80000 BDT"}>70000-80000 BDT</Radio>
                    <Radio value={"80000-90000 BDT"}>80000-90000 BDT</Radio>
                    <Radio value={"90000-100000 BDT"}>90000-100000 BDT</Radio>
                    <Radio value={"100000-150000 BDT"}>100000-150000 BDT</Radio>
                    <Radio value={"150000-200000 BDT"}>150000-200000 BDT</Radio>
                    <Radio value={"200000-250000 BDT"}>200000-250000 BDT</Radio>
                    <Radio value={"300000+ BDT"}>300000+ BDT</Radio>
                  </Space>
                </Radio.Group>
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Mother Education
                </label>
                <Autocomplete
                  value={motherEducationalQualification}
                  className="mb-4 w-36"
                  onChange={handleMotherEducationalQualificationChange}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some(
                      (option) => inputValue === option.title
                    );
                    if (inputValue !== "" && !isExisting) {
                      filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                      });
                    }

                    return filtered;
                  }}
                  selectOnFocus
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={educationalInfoOptions}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    // Regular option
                    return option.title;
                  }}
                  renderOption={(props, option) => (
                    <li {...props}>{option.title}</li>
                  )}
                  freeSolo
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                  sx={{
                    "& input": {
                      height: 6,
                      padding: 0,
                    },
                  }}
                />
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Mother Date of Birth
                </label>
                <DatePicker
                  onChange={handleMotherDateOfBirth}
                  className="w-full"
                  size="large"
                />
              </div>
            </div>
          )}
          {/* Mother death date */}
          {isMotherAlive === "no" && (
            <div className="mb-6">
              <label className="text-sm block mb-2 text-[#344054] font-medium">
                Mother Death Date
              </label>
              <DatePicker
                onChange={handleMotherDeathDate}
                className="w-full"
                size="large"
              />
            </div>
          )}

          <div>
            <input
              type="submit"
              value={isLoading ? "Saving..." : "Save"}
              style={{
                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
              }}
              className="w-full text-center py-[10px] text-[#fff]  text-lg font-medium rounded"
            />
          </div>
        </form>
      </div>
      <div>{contextHolder}</div>
      <BottomNav />
    </div>
  );
};

export default MobileFamilyInfoEdit;
