// configuration
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Third party packages
import { FileAddFilled } from "@ant-design/icons";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import {
  DatePicker,
  InputNumber,
  Radio,
  Select,
  Slider,
  Space,
  Upload,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import TextField from "@mui/material/TextField";

// Components
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseStorage } from "../../../../firebase.init";
import { useUpdatePersonalDetailsMutation } from "../../../../Redux/features/userInfo/userApi";
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Dragger } = Upload;

const EditPersonalInfo = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [personalInfo, setPersonalInfo] = useState({});
  const [physicalInfo, setPhysicalInfo] = useState({});
  const [educationalInfo, setEducationalInfo] = useState({});
  //educational qualification state
  const [degreeName, setDegreeName] = useState(null);
  const [instituteName, setInstituteName] = useState(null);
  const [departmentName, setDepartmentName] = useState(null);
  const [fieldOfStudy, setFieldOfStudy] = useState(null);
  const [cgpa, setCgpa] = useState(null);
  // current position state
  const [currentPosition, setCurrentPosition] = useState(null);
  // institue state
  const [currentInstitute, setCurrentInstitute] = useState(null);
  const [professionalInfo, setProfessionalInfo] = useState({});

  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState([]);
  const [marriageDetails, setMarriageDetails] = useState({});
  const [divorceDetails, setDivorceDetails] = useState({});
  const [widowedDetails, setWidowedDetails] = useState({});
  //phone number managing state
  const [countryCode, setCountryCode] = useState("+880");
  //others physical information state
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const [brother, setBrother] = useState(0);
  const [sister, setSister] = useState(0);
  const [parentStatus, setParentStatus] = useState("");
  //uploaded image url data state
  const [nidOrPassportPhoto, setNidOrPassportPhoto] = useState({});
  const [updatePersonalDetails, { data: updateResponse, isLoading, error }] =
    useUpdatePersonalDetailsMutation();
  useEffect(() => {
    fetch("/json/countries.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    fetch("/json/district.json")
      .then((res) => res.json())
      .then((data) => setCity(data));
  }, []);

  //handle mobile number
  const handlePhoneNumber = (value) => {
    const phone = countryCode + value;
    setPersonalInfo({ ...personalInfo, phone: phone });
  };
  const handleCountryCode = (value) => {
    setCountryCode(value);
  };
  // Mobile number country code selection option
  const CountryCode = (
    <Select
      defaultValue="+880"
      style={{
        width: 70,
      }}
      onChange={handleCountryCode}
    >
      <Option value="+880">BD</Option>
      <Option value="+966">KSA</Option>
    </Select>
  );

  // handle file upload change data
  const handleUpload = async (event) => {
    const file = event.file;
    const storageRef = ref(firebaseStorage, `nidOrPassport/${file?.name}`);
    await uploadBytes(storageRef, file).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setNidOrPassportPhoto({ frontSide: url });
      });
    });
  };

  // some data collection handler function like name,email etc
  const handleData = (e) => {
    const data = { ...personalInfo };
    data[e.target.name] = e.target.value;
    setPersonalInfo(data);
    console.log(data);
    e.preventDefault();
  };
  //educational qualification data handler function
  const handleDegreeName = (event, newValue) => {
    if (typeof newValue === "string") {
      setDegreeName({
        title: newValue,
      });
    } else if (newValue && newValue.inputValue) {
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
    } else if (newValue && newValue.inputValue) {
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
    } else if (newValue && newValue.inputValue) {
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
    } else if (newValue && newValue.inputValue) {
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
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setCgpa({
        title: newValue.inputValue,
      });
    } else {
      setCgpa(newValue);
    }
  };
  //passing year handler
  const handlePassingYear = (date, dateString) => {
    setEducationalInfo({ ...educationalInfo, yearOfPassing: date });
  };

  // current position state handler
  const handleCurrentPosition = (event, newValue) => {
    if (typeof newValue === "string") {
      setCurrentPosition({
        title: newValue,
      });
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setCurrentPosition({
        title: newValue.inputValue,
      });
    } else {
      setCurrentPosition(newValue);
    }
  };
  // current institute handler function
  const handleCurrentInstitute = (event, newValue) => {
    if (typeof newValue === "string") {
      setCurrentInstitute({
        title: newValue,
      });
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setCurrentInstitute({
        title: newValue.inputValue,
      });
    } else {
      setCurrentInstitute(newValue);
    }
  };
  // working period data handler
  const handleWorkingPeriod = (date, dateString) => {
    setProfessionalInfo({ ...professionalInfo, workingPeriod: dateString });
  };
  // handle achievements data change
  const handleAchivements = (e) => {
    setProfessionalInfo({
      ...professionalInfo,
      specialAchievement: e?.target.value,
    });
  };

  //handle marriage reason data

  //martial status change handler
  const handleMaritalStatusChange = (value) => {
    setPersonalInfo({ ...personalInfo, maritialStatus: value });
  };
  const handleMarriageReason = (e) => {
    const data = { ...marriageDetails };
    data[e?.target.name] = e?.target.value;
    setMarriageDetails(data);
  };
  const handleAwareOFMarriage = (value) => {
    setMarriageDetails({ ...marriageDetails, isPartnerAwarOfMarriage: value });
  };
  const handleMarriageDate = (date, dateString) => {
    setMarriageDetails({ ...marriageDetails, marriageDate: dateString });
  };
  const handleChildrenStatus = (value) => {
    setMarriageDetails({ ...marriageDetails, childrenStatus: value });
  };

  // handle devorce data change
  const handleDivorceReason = (e) => {
    const data = { ...divorceDetails };
    data[e.target.name] = e.target.name;
    setDivorceDetails(data);
  };
  const handleDivorceDate = (date, dateString) => {
    setDivorceDetails({ ...divorceDetails, divorceDate: dateString });
  };
  const handleDivorceChildrenStatus = (value) => {
    setDivorceDetails({ ...divorceDetails, childrenStatus: value });
  };

  // widwed details data change handler function
  const handleWidowed = (e) => {
    const data = { ...widowedDetails };
    data[e?.target?.name] = e?.target?.value;
    setWidowedDetails(data);
  };
  const handleWidowedChildrenStatus = (value) => {
    setWidowedDetails({ ...widowedDetails, childrenStatus: value });
  };
  const handleWidowedDate = (value) => {
    setWidowedDetails({ ...widowedDetails, partnerDeathDay: value });
  };
  //date of birth handle data function
  const handleDateOfBirth = (date, dateString) => {
    setPersonalInfo({ ...personalInfo, dateOfBirth: date });
  };

  // handle citizenship status
  const handleCitizenshipChange = (value) => {
    setPersonalInfo({ ...personalInfo, citizenShip: value });
  };
  // handle current city status
  const handleCurrentCity = (value) => {
    setPersonalInfo({ ...personalInfo, hometown: value });
  };
  //zodaic sign change handler
  const handleZodiacSign = (value) => {
    setPersonalInfo({ ...personalInfo, zodaicSign: value });
  };

  //phycsical information data change handler
  const onHeightChange = (value) => {
    setHeight(value);
  };
  const onAfterHeightChange = (value) => { };
  const onWeightChange = (value) => {
    setWeight(value);
  };
  const onAfterWeightChange = (value) => { };
  const handleUserAncestryChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, ancestry: value });
  };
  const handleUserSkinToneChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, skinTune: value });
  };
  const handleUserHairColorChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, hairColor: value });
  };
  const handleUserHairTypeChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, hairType: value });
  };
  const handleUserEyeColorChange = (value) => {
    setPhysicalInfo({ ...physicalInfo, eyeColor: value });
  };
  const handleNumberOfTeeth = (value) => {
    setPhysicalInfo({ ...physicalInfo, teethNumber: value });
  };

  // --------- Others Information ------------

  const handleParentsStatus = (e) => {
    setParentStatus(e.target.value);
    setPersonalInfo({ ...personalInfo, parentStatus: e?.target.value });
  };

  // hanlde hoby
  const handleHoby = (value) => {
    setPersonalInfo({ ...personalInfo, hobbies: value });
  };

  // current position options (MUI Autocomplete)
  const currentPositionOptions = [
    { title: "Deveoper" },
    { title: "Hr" },
    { title: "Accouantant" },
    { title: "Office assitanat" },
  ];
  // current institue option (MUI Autocomplete)
  const currentInstituteOptions = [
    { title: "Developer company" },
    { title: "ItCO " },
    { title: "Microsoft" },
    { title: "Google" },
  ];
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
  const cgpaOptions = [{ title: "1.0 out of 4" }, { title: "2.0 out of 4" }];

  const navigate = useNavigate();

  //form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...personalInfo,
      numberOfBrother: brother?.toString(),
      numberOfSister: sister?.toString(),
      ...marriageDetails,
      ...divorceDetails,
      ...widowedDetails,
      ...professionalInfo,
      institute: currentInstitute?.title,
      position: currentPosition?.title,
      ...educationalInfo,
      degree: degreeName?.title,
      department: departmentName?.title,
      feildOfStudy: fieldOfStudy?.title,
      gpaOrCgpa: cgpa?.title,
      ...physicalInfo,
      height: height?.toString(),
      weight: weight?.toString(),
      NidOrPassportPhoto: nidOrPassportPhoto,
    };
    await updatePersonalDetails(data);
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

    if (error) {
      messageApi.open({
        key,
        type: "error",
        content: "Server error! try again!!",
      });
    }

    if (updateResponse) {
      messageApi.open({
        key,
        type: "success",
        content: "Data updated successfully",
        duration: 2,
      });
      navigate("/userprofile");
    }
  }, [updateResponse, isLoading, error, messageApi, navigate]);

  //this filter for mui autocomplete
  const filter = createFilterOptions();

  return (
    <div className="max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4 rounded">
      <div className="hidden md:block">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between pb-4">
            <div>
              <label
                htmlFor="firstName"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-56 "
                onChange={handleData}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-56 "
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@email.com"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="number"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Phone Nmber
              </label>
              <InputNumber
                placeholder="17000000000"
                className="w-full p-1 "
                id="number"
                name="phone"
                addonBefore={CountryCode}
                onChange={handlePhoneNumber}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                NID/Passport Number
              </label>
              <input
                type="text"
                name="NidOrPassportNumber"
                id="nid"
                placeholder="000000000/A025615"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                NID/Passport Photo
              </label>

              <Dragger onChange={handleUpload}>
                <div className="flex justify-center items-center">
                  <p>File Upload</p>
                  <p className="ant-upload-drag-icon pl-4">
                    <FileAddFilled
                      style={{ color: "#E41272" }}
                      onChange={handleUpload}
                    />
                  </p>
                </div>
              </Dragger>
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Date of Birth
              </label>
              <DatePicker
                onChange={handleDateOfBirth}
                className="w-full"
                size="large"
              />
            </div>
          </div>
          {/* educational qualification */}
          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600	  font-medium">
              Educational Qualification
            </label>
            <div className="flex justify-between">
              <Autocomplete
                className="mb-2 w-56"
                value={degreeName}
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
                  return option?.title;
                }}
                renderOption={(props, option) => (
                  <li {...props}>{option?.title}</li>
                )}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select Degree" />
                )}
              />

              <Autocomplete
                className="mb-2 w-56"
                value={instituteName}
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

            <div className="flex justify-between">
              <Autocomplete
                className="mb-2 w-36"
                value={departmentName}
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
                className="mb-2 w-36"
                value={fieldOfStudy}
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
                  <TextField {...params} placeholder="Select Field of study" />
                )}
                sx={{
                  "& input": {
                    height: 6,
                    padding: 0,
                  },
                }}
              />

              <Autocomplete
                className="mb-2 w-36"
                value={cgpa}
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
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={cgpaOptions}
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
                renderOption={(prop, option) => (
                  <li {...prop}>{option.title}</li>
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
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Year of passing
              </label>
              <DatePicker onChange={handlePassingYear} className="w-full" />
            </div>
          </div>

          {/* some professional information */}
          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600	  font-medium">
              Current Position
            </label>
            <div className="flex justify-between">
              <Autocomplete
                className="mb-2 w-56"
                value={currentPosition}
                onChange={handleCurrentPosition}
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
                options={currentPositionOptions}
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
                renderOption={(prop, option) => (
                  <li {...prop}>{option.title}</li>
                )}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select Position" />
                )}
                sx={{
                  "& input": {
                    height: 6,
                    padding: 0,
                  },
                }}
              />

              <Autocomplete
                className="mb-2 w-56"
                value={currentInstitute}
                onChange={handleCurrentInstitute}
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
                options={currentInstituteOptions}
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
                renderOption={(prop, option) => (
                  <li {...prop}>{option.title}</li>
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
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Working Period
              </label>
              <RangePicker className="w-full" onChange={handleWorkingPeriod} />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Monthly Income
              </label>
              <input
                type="number"
                name="monthlyIncome"
                placeholder="Monthly Income"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
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
                placeholder="Text Here"
                name="achivements"
                onChange={handleAchivements}
              />
            </div>
          </div>
          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600	  font-medium">
              Martial Status
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleMaritalStatusChange}
              placeholder="Select Status"
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              size="large"
              options={[
                {
                  value: "single",
                  label: "Never Married",
                },
                {
                  value: "married",
                  label: "Married",
                },
                {
                  value: "divorced",
                  label: "Divorced",
                },
                {
                  value: "widowed",
                  label: "Widowed",
                },
              ]}
            />
            {/* married details  */}
            {personalInfo?.maritialStatus === "married" && (
              <div className="py-4">
                <div className="mb-2">
                  <input
                    type="number"
                    name="numberOfPartner"
                    placeholder="Number of Partner"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                    onChange={handleMarriageReason}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="reasonOfMarriage"
                    placeholder="Reason of Marriage"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                    onChange={handleMarriageReason}
                  />
                </div>

                <Select
                  className="w-full mb-2"
                  onChange={handleAwareOFMarriage}
                  placeholder="Is partner aware of marriage?"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  size="large"
                  options={[
                    {
                      value: "yes",
                      label: "yes",
                    },
                    {
                      value: "no",
                      label: "no",
                    },
                  ]}
                />
                <div className="mb-2">
                  <DatePicker
                    onChange={handleMarriageDate}
                    placeholder="Marriage Date"
                    className="w-full"
                    size="large"
                  />
                </div>

                <div>
                  <Select
                    className="w-full mb-2"
                    onChange={handleChildrenStatus}
                    placeholder="Do you have children?"
                    showSearch
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    size="large"
                    options={[
                      {
                        value: "yes",
                        label: "yes",
                      },
                      {
                        value: "no",
                        label: "no",
                      },
                    ]}
                  />
                  {marriageDetails.childrenStatus === "yes" && (
                    <div>
                      <input
                        type="number"
                        name="numberOfBoy"
                        placeholder="Number of Boy"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 "
                        onChange={handleMarriageReason}
                      />
                      <input
                        type="number"
                        name="agesOfBoy"
                        placeholder="Age of Boy"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                        onChange={handleMarriageReason}
                      />
                      <input
                        type="number"
                        name="numberOfGirl"
                        placeholder="Number of Girl"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2"
                        onChange={handleMarriageReason}
                      />
                      <input
                        type="number"
                        name="agesOfGirl"
                        placeholder="Age of Girl"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                        onChange={handleMarriageReason}
                      />
                    </div>
                  )}

                  { }
                </div>
              </div>
            )}
            {/* divorced details  */}
            {personalInfo?.maritialStatus === "divorced" && (
              <div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="reasonOfDivorce"
                    placeholder="Divorce Reason"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                    onChange={handleDivorceReason}
                  />
                </div>
                <div className="mb-2">
                  <DatePicker
                    onChange={handleDivorceDate}
                    placeholder="Divorce Date"
                    className="w-full"
                    size="large"
                  />
                </div>
                <Select
                  className="w-full mb-2"
                  onChange={handleDivorceChildrenStatus}
                  placeholder="Do you have children?"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  size="large"
                  options={[
                    {
                      value: "yes",
                      label: "yes",
                    },
                    {
                      value: "no",
                      label: "no",
                    },
                  ]}
                />
                {divorceDetails?.childrenStatus === "yes" && (
                  <div>
                    <input
                      type="number"
                      name="numberOfBoy"
                      placeholder="Number of Boy"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 "
                      onChange={handleDivorceReason}
                    />
                    <input
                      type="number"
                      name="agesOfBoy"
                      placeholder="Age of Boy"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      onChange={handleDivorceReason}
                    />
                    <input
                      type="number"
                      name="numberOfGirl"
                      placeholder="Number of Girl"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2"
                      onChange={handleDivorceReason}
                    />
                    <input
                      type="number"
                      name="agesOfGirl"
                      placeholder="Age of Girl"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      onChange={handleDivorceReason}
                    />
                  </div>
                )}
              </div>
            )}

            {personalInfo?.maritialStatus === "widowed" && (
              <div>
                <div className="mb-2">
                  <DatePicker
                    onChange={handleWidowedDate}
                    placeholder="Divorce Date"
                    className="w-full"
                    size="large"
                  />
                </div>
                <Select
                  className="w-full mb-2"
                  onChange={handleWidowedChildrenStatus}
                  placeholder="Do you have children?"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  size="large"
                  options={[
                    {
                      value: "yes",
                      label: "yes",
                    },
                    {
                      value: "no",
                      label: "no",
                    },
                  ]}
                />
                {widowedDetails?.childrenStatus === "yes" && (
                  <div>
                    <input
                      type="number"
                      name="numberOfBoy"
                      placeholder="Number of Boy"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 "
                      onChange={handleWidowed}
                    />
                    <input
                      type="number"
                      name="agesOfBoy"
                      placeholder="Age of Boy"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      onChange={handleWidowed}
                    />
                    <input
                      type="number"
                      name="numberOfGirl"
                      placeholder="Number of Girl"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2"
                      onChange={handleWidowed}
                    />
                    <input
                      type="number"
                      name="agesOfGirl"
                      placeholder="Age of Girl"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      onChange={handleWidowed}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="pb-4">
            <div>
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Citizenship
              </label>
              <Select
                className="w-full mb-2"
                onChange={handleCitizenshipChange}
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
                size="large"
              >
                {countries.map((country) => (
                  <Select.Option key={country.id} value={country.value}>
                    {country.label}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Current City
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleCurrentCity}
              placeholder="Select City"
              showSearch
              filterOption={(input, option) =>
                (option?.children ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              size="large"
            >
              {city.map((town) => {
                return (
                  <Select.Option key={town.id} value={town.value}>
                    {town.name}
                  </Select.Option>
                );
              })}
            </Select>
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600	  font-medium">
              Zodaic Sign
            </label>
            <Select
              className="w-full mb-2 "
              onChange={handleZodiacSign}
              placeholder="Select Sign"
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              size="large"
              options={[
                {
                  value: "Mesh",
                  label: "Mesh",
                },
                {
                  value: "Singha",
                  label: "singha",
                },
              ]}
            />
          </div>

          {/* some physical information  */}

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Height
            </label>
            <p className="text-left text-base font-medium"> {height}" </p>
            <Slider
              min={0}
              max={200}
              onChange={onHeightChange}
              onAfterChange={onAfterHeightChange}
            />
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Weight
            </label>
            <p className="text-left text-base font-medium"> {weight} Kg </p>
            <Slider
              onChange={onWeightChange}
              onAfterChange={onAfterWeightChange}
              min={0}
              max={200}
            />
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Ancestry
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleUserAncestryChange}
              size="large"
              placeholder="Select Ancestry"
              options={[
                {
                  value: "option",
                  label: "no options",
                },
                {
                  value: "option no",
                  label: "others options",
                },
              ]}
            />
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Skin Tone
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleUserSkinToneChange}
              placeholder="Select skin tone"
              size="large"
              allowClear
              options={[
                {
                  value: "light",
                  label: "Light",
                },
                {
                  value: "fair",
                  label: "Fair",
                },
                {
                  value: "medium",
                  label: "Medium",
                },
                {
                  value: "deep",
                  label: "Deep (Dark)",
                },
              ]}
            />
          </div>
          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Hair Color
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleUserHairColorChange}
              placeholder="Select hair color"
              size="large"
              allowClear
              options={[
                {
                  value: "black",
                  label: "Black",
                },
                {
                  value: "brown",
                  label: "Brown",
                },
                {
                  value: "blond",
                  label: "Blond",
                },
                {
                  value: "white",
                  label: "White",
                },
                {
                  value: "gray",
                  label: "Gray",
                },
                {
                  value: "rarely red",
                  label: "Rarely Red",
                },
              ]}
            />
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Hair Type
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleUserHairTypeChange}
              placeholder="Select hair type"
              size="large"
              allowClear
              options={[
                {
                  value: "fine",
                  label: "Fine",
                },
                {
                  value: "thick",
                  label: "Thick",
                },
                {
                  value: "long",
                  label: "Long",
                },
                {
                  value: "short",
                  label: "Short",
                },
                {
                  value: "matte",
                  label: "Matte",
                },
                {
                  value: "glossy",
                  label: "Glossy",
                },
                {
                  value: "curly",
                  label: "Curly",
                },
                {
                  value: "coily",
                  label: "Coily",
                },
                {
                  value: "straight",
                  label: "Straight",
                },
                {
                  value: "wavy",
                  label: "Wavy",
                },
              ]}
            />
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Eye Color
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleUserEyeColorChange}
              placeholder="Select hair type"
              allowClear
              size="large"
              options={[
                {
                  value: "brown",
                  label: "Brown",
                },
                {
                  value: "hazel",
                  label: "Hazel",
                },
                {
                  value: "blue",
                  label: "Blue",
                },
                {
                  value: "green",
                  label: "Green",
                },
                {
                  value: "gray",
                  label: "Gray",
                },
                {
                  value: "amber",
                  label: "Amber",
                },
              ]}
            />
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Number of Teeth
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleNumberOfTeeth}
              placeholder="Select teeth number"
              size="large"
              allowClear
              options={[
                {
                  value: "20",
                  label: "20",
                },
                {
                  value: "21",
                  label: "21",
                },
                {
                  value: "22",
                  label: "22",
                },
                {
                  value: "23",
                  label: "23",
                },
                {
                  value: "24",
                  label: "24",
                },
                {
                  value: "25",
                  label: "25",
                },
                {
                  value: "26",
                  label: "26",
                },
                {
                  value: "27",
                  label: "27",
                },
                {
                  value: "28",
                  label: "28",
                },
                {
                  value: "29",
                  label: "29",
                },
                {
                  value: "30",
                  label: "30",
                },
                {
                  value: "31",
                  label: "31",
                },
                {
                  value: "32",
                  label: "32",
                },
              ]}
            />
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                About You
              </label>
              <TextArea
                rows={4}
                placeholder="Text Here"
                name="aboutYou"
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                What are you looking for
              </label>
              <TextArea
                rows={4}
                placeholder="Text Here"
                name="whatAreYouLookingFor"
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Permanent Address
              </label>
              <TextArea
                rows={4}
                placeholder="Text Here"
                onChange={handleData}
                name="permanentAdress"
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Present Address
              </label>
              <TextArea
                rows={4}
                placeholder="Text Here"
                onChange={handleData}
                name="present Address"
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="siblings"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Siblings
              </label>
              <div id="siblings">
                <p>Brother</p>
                <div className="flex justify-center items-center mb-2">
                  <button
                    // onClick={() =>
                    //   brother === 0 || brother > 0
                    //     ? setBrother(brother - 1)
                    //     : setBrother(brother)
                    // }
                    onClick={() => setBrother((prevCount) => prevCount - 1)}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg"
                  >
                    -
                  </button>
                  <div className="text-lg text-center leading-6 font-medium w-24 py-2 bg-gray-200">
                    {brother}
                  </div>
                  <button
                    onClick={() => setBrother((prevCount) => prevCount + 1)}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <div id="siblings">
                <p>Sister</p>
                <div className="flex justify-center items-center mb-2">
                  <button
                    onClick={() =>
                      sister === 0 || sister > 0
                        ? setSister(sister - 1)
                        : setBrother(brother)
                    }
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg"
                  >
                    -
                  </button>
                  <div className="text-lg text-center leading-6 font-medium w-24 py-2 bg-gray-200">
                    {sister}
                  </div>
                  <button
                    onClick={() => setSister(sister + 1)}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Are your Parents Alive?
              </label>
              <Radio.Group onChange={handleParentsStatus} value={parentStatus}>
                <Space direction="vertical">
                  <Radio value={"alive"}>Alive</Radio>
                  <Radio value={"dead"}>Dead</Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="linkdin"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Linkedin
              </label>
              <input
                type="text"
                name="LinkedInId"
                id="linkdin"
                placeholder="your linkdin profile link"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>
          <div className="pb-4">
            <div>
              <label
                htmlFor="instagram"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                instagram
              </label>
              <input
                type="text"
                name="instagramId"
                id="instagram"
                placeholder="your instagram profile link"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>
          <div className="pb-4">
            <div>
              <label
                htmlFor="facebook"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Facebook
              </label>
              <input
                type="text"
                name="faceBookId"
                id="facebook"
                placeholder="your facebook profile link"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label className="text-sm block pb-2 text-slate-600	  font-medium">
                Hobby
              </label>
              <Select
                size="large"
                mode="multiple"
                className="w-full"
                onChange={handleHoby}
                placeholder="select hoby"
                showSearch
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "play",
                    label: "play",
                  },
                  {
                    value: "reading",
                    label: "reading",
                  },
                ]}
              />
            </div>
          </div>

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
      <div className="md:hidden">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between pb-4">
            <div>
              <label
                htmlFor="fristName"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                name="fristName"
                id="fristName"
                placeholder="Frist Name"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-80"
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@email.com"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="number"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Phone Nmber
              </label>
              <InputNumber
                placeholder="17000000000"
                className="w-full p-1 "
                id="number"
                name="phone"
                addonBefore={CountryCode}
                onChange={handlePhoneNumber}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                NID/Passport Number
              </label>
              <input
                type="text"
                name="NidOrPassportNumber"
                id="nid"
                placeholder="000000000/A025615"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                NID/Passport Photo
              </label>

              <Dragger onChange={handleUpload}>
                <div className="flex justify-center items-center">
                  <p>File Upload</p>
                  <p className="ant-upload-drag-icon pl-4">
                    <FileAddFilled
                      style={{ color: "#E41272" }}
                      onChange={handleUpload}
                    />
                  </p>
                </div>
              </Dragger>
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Date of Birth
              </label>
              <DatePicker
                onChange={handleDateOfBirth}
                className="w-full"
                size="large"
              />
            </div>
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600	  font-medium">
              Martial Status
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleMaritalStatusChange}
              placeholder="Select Status"
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              size="large"
              options={[
                {
                  value: "single",
                  label: "Never Married",
                },
                {
                  value: "married",
                  label: "Married",
                },
                {
                  value: "divorced",
                  label: "Divorced",
                },
                {
                  value: "widowed",
                  label: "Widowed",
                },
              ]}
            />
            {/* married details  */}
            {personalInfo?.martialStatus === "married" && (
              <div className="py-4">
                <div className="mb-2">
                  <input
                    type="number"
                    name="numberOfPartner"
                    placeholder="Number of Partner"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                    onChange={handleMarriageReason}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="marriageReason"
                    placeholder="Reason of Marriage"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                    onChange={handleMarriageReason}
                  />
                </div>

                <Select
                  className="w-full mb-2"
                  onChange={handleAwareOFMarriage}
                  placeholder="Is partner aware of marriage?"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  size="large"
                  options={[
                    {
                      value: "yes",
                      label: "yes",
                    },
                    {
                      value: "no",
                      label: "no",
                    },
                  ]}
                />
                <div className="mb-2">
                  <DatePicker
                    onChange={handleMarriageDate}
                    placeholder="Marriage Date"
                    className="w-full"
                    size="large"
                  />
                </div>

                <div>
                  <Select
                    className="w-full mb-2"
                    onChange={handleChildrenStatus}
                    placeholder="Do you have children?"
                    showSearch
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    size="large"
                    options={[
                      {
                        value: "yes",
                        label: "yes",
                      },
                      {
                        value: "no",
                        label: "no",
                      },
                    ]}
                  />
                  {marriageDetails.childrenStatus === "yes" && (
                    <div>
                      <input
                        type="number"
                        name="numberOfBoy"
                        placeholder="Number of Boy"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 "
                        onChange={handleMarriageReason}
                      />
                      <input
                        type="number"
                        name="ageOfBoy"
                        placeholder="Age of Boy"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                        onChange={handleMarriageReason}
                      />
                      <input
                        type="number"
                        name="numberOfGirl"
                        placeholder="Number of Girl"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2"
                        onChange={handleMarriageReason}
                      />
                      <input
                        type="number"
                        name="ageOfGirl"
                        placeholder="Age of Girl"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                        onChange={handleMarriageReason}
                      />
                    </div>
                  )}

                  { }
                </div>
              </div>
            )}
            {/* divorced details  */}
            {personalInfo?.martialStatus === "divorced" && (
              <div>
                <div className="mb-2">
                  <input
                    type="number"
                    name="reasonOfDivorce"
                    placeholder="Divorce Reason"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                    onChange={handleDivorceReason}
                  />
                </div>
                <div className="mb-2">
                  <DatePicker
                    onChange={handleDivorceDate}
                    placeholder="Divorce Date"
                    className="w-full"
                    size="large"
                  />
                </div>
                <Select
                  className="w-full mb-2"
                  onChange={handleDivorceChildrenStatus}
                  placeholder="Do you have children?"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  size="large"
                  options={[
                    {
                      value: "yes",
                      label: "yes",
                    },
                    {
                      value: "no",
                      label: "no",
                    },
                  ]}
                />
                {divorceDetails?.childrenStatus === "yes" && (
                  <div>
                    <input
                      type="number"
                      name="numberOfBoy"
                      placeholder="Number of Boy"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 "
                      onChange={handleDivorceReason}
                    />
                    <input
                      type="number"
                      name="ageOfBoy"
                      placeholder="Age of Boy"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      onChange={handleDivorceReason}
                    />
                    <input
                      type="number"
                      name="numberOfGirl"
                      placeholder="Number of Girl"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2"
                      onChange={handleDivorceReason}
                    />
                    <input
                      type="number"
                      name="ageOfGirl"
                      placeholder="Age of Girl"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      onChange={handleDivorceReason}
                    />
                  </div>
                )}
              </div>
            )}

            {personalInfo?.martialStatus === "widowed" && (
              <div>
                <div className="mb-2">
                  <DatePicker
                    onChange={handleWidowedDate}
                    placeholder="Divorce Date"
                    className="w-full"
                    size="large"
                  />
                </div>
                <Select
                  className="w-full mb-2"
                  onChange={handleWidowedChildrenStatus}
                  placeholder="Do you have children?"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  size="large"
                  options={[
                    {
                      value: "yes",
                      label: "yes",
                    },
                    {
                      value: "no",
                      label: "no",
                    },
                  ]}
                />
                {widowedDetails?.childrenStatus === "yes" && (
                  <div>
                    <input
                      type="number"
                      name="numberOfBoy"
                      placeholder="Number of Boy"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 "
                      onChange={handleWidowed}
                    />
                    <input
                      type="number"
                      name="ageOfBoy"
                      placeholder="Age of Boy"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      onChange={handleWidowed}
                    />
                    <input
                      type="number"
                      name="numberOfGirl"
                      placeholder="Number of Girl"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2"
                      onChange={handleWidowed}
                    />
                    <input
                      type="number"
                      name="ageOfGirl"
                      placeholder="Age of Girl"
                      className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      onChange={handleWidowed}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="pb-4">
            <div>
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Citizenship
              </label>
              <Select
                className="w-full mb-2"
                onChange={handleCitizenshipChange}
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
                size="large"
              >
                {countries.map((country) => (
                  <Select.Option key={country.id} value={country.value}>
                    {country.label}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600 font-medium">
              Current City
            </label>
            <Select
              className="w-full mb-2"
              onChange={handleCurrentCity}
              placeholder="Select City"
              showSearch
              filterOption={(input, option) =>
                (option?.children ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              size="large"
            >
              {city.map((town) => {
                return (
                  <Select.Option key={town.id} value={town.value}>
                    {town.name}
                  </Select.Option>
                );
              })}
            </Select>
          </div>

          <div className="pb-4">
            <label className="text-sm block pb-2 text-slate-600	  font-medium">
              Zodaic Sign
            </label>
            <Select
              className="w-full mb-2 "
              onChange={handleZodiacSign}
              placeholder="Select Sign"
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              size="large"
              options={[
                {
                  value: "Mesh",
                  label: "Mesh",
                },
                {
                  value: "Singha",
                  label: "singha",
                },
              ]}
            />
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                About You
              </label>
              <TextArea
                rows={4}
                placeholder="Text Here"
                maxLength={6}
                name="about"
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                What are you looking for
              </label>
              <TextArea
                rows={4}
                placeholder="Text Here"
                maxLength={6}
                name="lookingFor"
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Permanent Address
              </label>
              <TextArea
                rows={4}
                placeholder="Text Here"
                maxLength={6}
                onChange={handleData}
                name="permanentAddress"
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Present Address
              </label>
              <TextArea
                rows={4}
                placeholder="Text Here"
                maxLength={6}
                onChange={handleData}
                name="present Address"
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Siblings
              </label>
              <div>
                <p>Brother</p>
                <div className="flex justify-center items-center mb-2">
                  <button
                    // onClick={() =>
                    //   brother === 0 || brother > 0
                    //     ? setBrother(brother - 1)
                    //     : setBrother(brother)
                    // }
                    onClick={() => setBrother((prevCount) => prevCount - 1)}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg"
                  >
                    -
                  </button>
                  <div className="text-lg text-center leading-6 font-medium w-24 py-2 bg-gray-200">
                    {brother}
                  </div>
                  <button
                    onClick={() => setBrother((prevCount) => prevCount + 1)}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <p>Sister</p>
                <div className="flex justify-center items-center mb-2">
                  <button
                    onClick={() =>
                      sister === 0 || sister > 0
                        ? setSister(sister - 1)
                        : setBrother(brother)
                    }
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg"
                  >
                    -
                  </button>
                  <div className="text-lg text-center leading-6 font-medium w-24 py-2 bg-gray-200">
                    {sister}
                  </div>
                  <button
                    onClick={() => setSister(sister + 1)}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Are your Parents Alive?
              </label>
              <Radio.Group onChange={handleParentsStatus} value={parentStatus}>
                <Space direction="vertical">
                  <Radio value={"alive"}>Alive</Radio>
                  <Radio value={"dead"}>Dead</Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="linkdin"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Linkedin
              </label>
              <input
                type="text"
                name="linkdin"
                id="linkdin"
                placeholder="your linkdin profile link"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>
          <div className="pb-4">
            <div>
              <label
                htmlFor="instagram"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Instagram
              </label>
              <input
                type="text"
                name="instagram"
                id="instagram"
                placeholder="your instagram profile link"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>
          <div className="pb-4">
            <div>
              <label
                htmlFor="facebook"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Facebook
              </label>
              <input
                type="text"
                name="facebook"
                id="facebook"
                placeholder="your facebook profile link"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                onChange={handleData}
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label className="text-sm block pb-2 text-slate-600	  font-medium">
                Hobby
              </label>
              <Select
                size="large"
                mode="multiple"
                className="w-full"
                onChange={handleHoby}
                placeholder="select hoby"
                showSearch
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "play",
                    label: "play",
                  },
                  {
                    value: "reading",
                    label: "reading",
                  },
                ]}
              />
            </div>
          </div>

          <div>
            <input
              type="submit"
              value="Save"
              style={{
                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
              }}
              className="w-full text-center text-[#fff]  text-lg font-medium rounded"
            />
          </div>
        </form>
      </div>
      <div>{contextHolder}</div>
    </div>
  );
};

export default EditPersonalInfo;
