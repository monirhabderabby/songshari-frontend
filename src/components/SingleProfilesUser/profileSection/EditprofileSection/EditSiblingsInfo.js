// Configuration
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// Third party packages
import { Select, message, Radio, Space, Slider, DatePicker } from "antd";
import { useForm } from "react-hook-form";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Components
import { useUpdateSiblingDetailMutation } from "../../../../Redux/features/userInfo/userApi";

const EditSiblingsInfo = () => {
  const [elderOrYounger, setElderOrYounger] = useState();
  const [ageGap, setAgeGap] = useState(0);
  const [siblingProfession, setSiblingProfession] = useState(null);
  const [siblingEducationalQualification, setSiblingEducationalQualification] =
    useState(null);
  const [siblingIncome, setSiblingIncome] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [isSiblingAlive, setIsSiblingAlive] = useState("");
  const [siblingDeathDate, setSiblingDeathDate] = useState("");

  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { id } = useParams();

  // Redux api
  const [updateSiblingDetail, { data: response, isError, isLoading }] =
    useUpdateSiblingDetailMutation();

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

  const handleElderYoungerChange = (value) => {
    setElderOrYounger(value);
  };

  const onAgeGapChange = (value) => {
    setAgeGap(value);
  };

  const handleSiblingProfessionChange = (event, newValue) => {
    if (typeof newValue === "string") {
      setSiblingProfession(newValue.title);
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setSiblingProfession(newValue.inputValue);
    } else {
      setSiblingProfession(newValue.title);
    }
  };

  const handleSiblingEducationalQualificationChange = (event, newValue) => {
    if (typeof newValue === "string") {
      setSiblingEducationalQualification(newValue.title);
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setSiblingEducationalQualification(newValue.inputValue);
    } else {
      setSiblingEducationalQualification(newValue.title);
    }
  };

  const handleSiblingIncomeChange = (e) => {
    setSiblingIncome(e.target.value);
  };
  const handleSiblingMaritalStatusChange = (e) => {
    setMaritalStatus(e.target.value);
  };

  const handleIsSiblingAliveChange = (value) => {
    setIsSiblingAlive(value);
  };

  const handleSiblingDeathDate = (date, dateString) => {
    setSiblingDeathDate(dateString);
  };

  const onSubmit = async (data) => {
    data = {
      ...data,
      elderOrYounger,
      ageGap,
      siblingIncome,
      siblingProfession,
      siblingEducationalQualification,
      maritalStatus,
      isSiblingAlive,
      siblingDeathDate,
    };
    await updateSiblingDetail({ id, data });
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
        navigate("/userprofile");
      }, 2000);
    }
  }, [response, isLoading, isError, navigate, messageApi]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4 rounded">
        {/* <h1 className="text-center text-2xl leading-5 font-bold text-[#344054] mb-10 mt-8">
          Add Siblings
        </h1> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="text-sm block mb-2 text-[#344054] font-medium">
              Is your Sibling Alive?
            </label>
            <Select
              style={{ width: 130 }}
              size={"large"}
              placeholder={"Select"}
              onChange={handleIsSiblingAliveChange}
              options={[
                {
                  value: "yes",
                  label: "Yes",
                },
                {
                  value: "no",
                  label: "No",
                },
              ]}
            />
          </div>
          {isSiblingAlive === "yes" && (
            <div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Sibling Name
                </label>
                <input
                  {...register("siblingName")}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-[#D0D5DD]"
                  style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
                />
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Elder/Younger
                </label>
                <Select
                  style={{ width: 130 }}
                  size={"large"}
                  placeholder={"Select"}
                  onChange={handleElderYoungerChange}
                  options={[
                    {
                      value: "elder",
                      label: "Elder",
                    },
                    {
                      value: "younger",
                      label: "Younger",
                    },
                  ]}
                />
              </div>
              <div className="mb-6">
                <label className="text-sm block pb-2 text-[#344054] font-medium">
                  Age Gap
                </label>
                <p className="text-left text-base font-medium"> {ageGap} </p>
                <Slider min={0} max={100} onChange={onAgeGapChange} />
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Sibling Profession
                </label>
                <Autocomplete
                  className="mb-4 w-32"
                  value={siblingProfession}
                  onChange={handleSiblingProfessionChange}
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
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Sibling Educational Qualification
                </label>
                <Autocomplete
                  value={siblingEducationalQualification}
                  className="mb-4 w-32"
                  onChange={handleSiblingEducationalQualificationChange}
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
              <div>
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Sibling Income
                </label>
                <Radio.Group
                  onChange={handleSiblingIncomeChange}
                  value={siblingIncome}
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
              <div>
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Marital Status
                </label>
                <Radio.Group
                  onChange={handleSiblingMaritalStatusChange}
                  value={maritalStatus}
                  className="mb-4"
                >
                  <Space direction="vertical">
                    <Radio value={"married"}>Married</Radio>
                    <Radio value={"unmarried"}>Unmarried</Radio>
                    <Radio value={"divorced"}>Divorced</Radio>
                    <Radio value={"widowed"}>Widowed</Radio>
                  </Space>
                </Radio.Group>
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Sibling Family Information
                </label>
                <textarea
                  {...register("siblingFamilyInfo")}
                  type="text"
                  rows={3}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#67868F]"
                  style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
                />
              </div>
            </div>
          )}

          {isSiblingAlive === "no" && (
            <div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Sibling Death Date
                </label>
                <DatePicker
                  onChange={handleSiblingDeathDate}
                  className="w-full"
                  size="large"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm block mb-2 text-[#344054] font-medium">
                  Sibling Death Reason
                </label>
                <textarea
                  {...register("siblingDeathReason")}
                  type="text"
                  rows={1}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#67868F]"
                  style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
                />
              </div>
            </div>
          )}
          <div>
            <input
              type="submit"
              value="Save"
              style={{
                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
              }}
              className="w-full text-center py-[10px] text-[#fff]  text-lg font-medium rounded"
            />
          </div>
        </form>
      </div>
      <div>{contextHolder}</div>
    </div>
  );
};

export default EditSiblingsInfo;
