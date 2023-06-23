import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { DatePicker, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import {
  useGetSingleEducationDetailByIdQuery,
  useUpdateEducationalDetailsMutation,
} from "../../../../Redux/features/userInfo/userApi";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";
import { OvalLoader } from "../../../shared/Cards/Loader/OvalLoader/OvalLoader";
import dayjs from "dayjs";

const EditEducationalInfo = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [educationalInfo, setEducationalInfo] = useState({});
  //educational qualification state
  const [degreeName, setDegreeName] = useState(null);
  const [instituteName, setInstituteName] = useState(null);
  const [departmentName, setDepartmentName] = useState(null);
  const [fieldOfStudy, setFieldOfStudy] = useState(null);
  const [cgpa, setCgpa] = useState(null);
  const [updateEducationalDetails, { isSuccess, isLoading, isError }] =
    useUpdateEducationalDetailsMutation();

  const { id } = useParams();
  const { data: educationData, isLoading: educationLoading } =
    useGetSingleEducationDetailByIdQuery(id);

  const {
    degree,
    institute,
    department,
    fieldOfStudy: defaultFieldOfStudy,
    gpaOrCgpa,
    yearOfPassing,
    specialAchievement,
  } = educationData?.data?.detail || {};

  //educational qualification data handler function
  const handleDegreeName = (event, newValue) => {
    if (typeof newValue === "string") {
      setDegreeName({
        title: newValue,
      });
    } else if (newValue && newValue?.inputValue) {
      // Create a new value from the user input
      setDegreeName({
        title: newValue.inputValue,
      });
    } else {
      setDegreeName(newValue);
    }
  };

  const handleInstituteName = (event, newValue) => {
    if (typeof newValue === "string") {
      setInstituteName({
        title: newValue,
      });
    } else if (newValue && newValue?.inputValue) {
      // Create a new value from the user input
      setInstituteName({
        title: newValue.inputValue,
      });
    } else {
      setInstituteName(newValue);
    }
  };

  const handleDepartmentName = (event, newValue) => {
    if (typeof newValue === "string") {
      setDepartmentName({
        title: newValue,
      });
    } else if (newValue && newValue?.inputValue) {
      // Create a new value from the user input
      setDepartmentName({
        title: newValue.inputValue,
      });
    } else {
      setDepartmentName(newValue);
    }
  };

  const handleStudyField = (event, newValue) => {
    if (typeof newValue === "string") {
      setFieldOfStudy({
        title: newValue,
      });
    } else if (newValue && newValue?.inputValue) {
      // Create a new value from the user input
      setFieldOfStudy({
        title: newValue.inputValue,
      });
    } else {
      setFieldOfStudy(newValue);
    }
  };

  const handleCgpa = (event, newValue) => {
    if (typeof newValue === "string") {
      setCgpa({
        title: newValue,
      });
    } else if (newValue && newValue?.inputValue) {
      // Create a new value from the user input
      setCgpa({
        title: newValue?.inputValue,
      });
    } else {
      setCgpa(newValue);
    }
  };
  //passing year handler
  const handlePassingYear = (date, dateString) => {
    setEducationalInfo({ ...educationalInfo, yearOfStudy: date });
  };
  const handleAchiveMents = (e) => {
    if (e?.target?.value !== "") {
      setEducationalInfo({
        ...educationalInfo,
        specialAchievement: e?.target?.value,
      });
    } else {
      const { specialAchievement, ...updatedEducationalInfo } = educationalInfo;
      setEducationalInfo(updatedEducationalInfo);
    }
  };
  // educational qualifitaions options Autocomplete (MUI)
  const degreeOptions = [
    { title: "SSC" },
    { title: "HSC" },
    { title: "HOns" },
    { title: "Masters" },
  ];
  const instituteNameOptions = [
    { title: "Model College" },
    { title: "Brac University" },
  ];
  const departmentOptions = [{ title: "BBA" }, { title: "MBA" }];
  const studyFieldOptions = [{ title: "CSE" }, { title: "Accounting" }];
  const cgpaOptions = [{ title: "1.0 " }, { title: "2.0 " }];

  // mui autocomplete filter
  const filter = createFilterOptions();
  const navigate = useNavigate();
  //data submission handler

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...educationalInfo,
    };
    if (degreeName) {
      data.degree = degreeName?.title;
    }
    if (instituteName) {
      data.institute = instituteName?.title;
    }
    if (departmentName) {
      data.department = departmentName?.title;
    }
    if (fieldOfStudy) {
      data.fieldOfStudy = fieldOfStudy?.title;
    }
    if (cgpa) {
      data.gpaOrCgpa = Number(cgpa?.title);
    }
    await updateEducationalDetails({ data, id });
  };
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

    if (isSuccess) {
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
    if (!isLoading && !isError && isSuccess) {
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    }
  }, [isSuccess, isLoading, isError, messageApi, navigate]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const dateFormat = "YYYY/MM/DD";

  return (
    <div>
      <div className="lg:hidden">
        <MobileBackButton name={"Edit Educational Info"} />
      </div>
      <div className="max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 pt-3 pb-6 mb-4 rounded">
        <div className="hidden lg:flex justify-end mb-3">
          <MdCancel
            onClick={() => navigate(-1)}
            className="cursor-pointer text-3xl text-slate-600"
          />
        </div>
        {educationLoading ? (
          <OvalLoader />
        ) : (
          <form onSubmit={handleSubmit}>
            {/* educational qualification */}
            <div className="pb-4">
              <label className="text-sm block pb-2 text-slate-600	  font-medium">
                Educational Qualification
              </label>
              <div className="flex flex-col md:flex-row justify-between">
                <Autocomplete
                  className="mb-2 w-full md:w-56"
                  defaultValue={degree && degree}
                  onChange={handleDegreeName}
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
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={degreeOptions}
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
                    <TextField {...params} placeholder="Select Degree" />
                  )}
                  sx={{
                    "& input": {
                      height: 6,
                      padding: 0,
                    },
                  }}
                />

                <Autocomplete
                  className="mb-2 w-full md:w-56"
                  defaultValue={institute && institute}
                  onChange={handleInstituteName}
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
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={instituteNameOptions}
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
                    <TextField {...params} placeholder="Select Institute" />
                  )}
                  sx={{
                    "& input": {
                      height: 6,
                      padding: 0,
                    },
                  }}
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <Autocomplete
                  className="mb-2 w-full md:w-36"
                  defaultValue={department && department}
                  onChange={handleDepartmentName}
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
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={departmentOptions}
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
                    <TextField {...params} placeholder="Select Department" />
                  )}
                  sx={{
                    "& input": {
                      height: 6,
                      padding: 0,
                    },
                  }}
                />

                <Autocomplete
                  className="mb-2 w-full md:w-36"
                  defaultValue={defaultFieldOfStudy && defaultFieldOfStudy}
                  onChange={handleStudyField}
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
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={studyFieldOptions}
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
                    <TextField
                      {...params}
                      placeholder="Select Field of study"
                    />
                  )}
                  sx={{
                    "& input": {
                      height: 6,
                      padding: 0,
                    },
                  }}
                />

                <Autocomplete
                  className="mb-2 w-full md:w-36"
                  defaultValue={gpaOrCgpa && gpaOrCgpa}
                  onChange={handleCgpa}
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
                  options={cgpaOptions}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "number") {
                      return option;
                    }
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
                    <TextField {...params} placeholder="Select CGPA" />
                  )}
                  sx={{
                    "& input": {
                      height: 6,
                      padding: 0,
                    },
                  }}
                />
              </div>
            </div>

            <div className="pb-4">
              <div>
                <label
                  htmlFor=""
                  className="text-sm block pb-2 text-slate-600 font-medium"
                >
                  Year of passing
                </label>
                <DatePicker
                  // defaultValue={yearOfPassing && moment(yearOfPassing)}
                  defaultValue={dayjs(yearOfPassing, dateFormat)}
                  onChange={handlePassingYear}
                  className="w-full"
                />
              </div>
            </div>

            <div className="pb-4">
              <div>
                <label
                  htmlFor="nid"
                  className="text-sm block pb-2 text-slate-600 font-medium"
                >
                  Special Achievements
                </label>
                <TextArea
                  rows={4}
                  maxLength={5000}
                  placeholder="Text Here"
                  onChange={handleAchiveMents}
                  defaultValue={specialAchievement && specialAchievement}
                />
              </div>
            </div>

            <div>
              <button
                // type="submit"
                className="w-full text-center py-[10px] text-lg font-medium special_profile_button cursor-pointer"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
      <div>{contextHolder}</div>
      <div className="lg:hidden">
        <div className="h-12"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default EditEducationalInfo;
