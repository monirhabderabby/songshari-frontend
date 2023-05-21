// configuration
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Third party packages
import { FileAddFilled } from "@ant-design/icons";
import { DatePicker, Radio, Select, Space, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "react-hook-form";

// Components
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseStorage } from "../../../../../firebase.init";
import { useUpdatePersonalDetailsMutation } from "../../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { Link } from "react-router-dom";
const { Dragger } = Upload;

const MobilePersonalInfoEdit = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [personalInfo, setPersonalInfo] = useState({});

  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState([]);
  const [marriageDetails, setMarriageDetails] = useState({});
  const [divorceDetails, setDivorceDetails] = useState({});
  const [widowedDetails, setWidowedDetails] = useState({});

  const [brother, setBrother] = useState(0);
  const [sister, setSister] = useState(0);
  const [parentStatus, setParentStatus] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  //uploaded image url data state
  const [nidOrPassportPhoto, setNidOrPassportPhoto] = useState({});
  // API from redux
  const [updatePersonalDetails, { data: updateResponse, isLoading, error }] =
    useUpdatePersonalDetailsMutation();

  const { register, handleSubmit } = useForm();

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

  const handleLookingForChange = (value) => {
    setLookingFor(value);
  };

  //marital status change handler
  const handleMaritalStatusChange = (value) => {
    setPersonalInfo({ ...personalInfo, maritalStatus: value });
  };

  const handleAwareOFMarriage = (value) => {
    setMarriageDetails({ ...marriageDetails, isPartnerAwareOfMarriage: value });
  };
  const handleMarriageDate = (date, dateString) => {
    setMarriageDetails({ ...marriageDetails, marriageDate: dateString });
  };
  const handleChildrenStatus = (value) => {
    setMarriageDetails({ ...marriageDetails, childrenStatus: value });
  };

  // handle divorce data change
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

  // widowed details data change handler function
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
    setPersonalInfo({ ...personalInfo, dateOfBirth: dateString });
  };

  // handle citizenship status
  const handleCitizenshipChange = (value) => {
    setPersonalInfo({ ...personalInfo, citizenShip: value });
  };
  // handle current city status
  const handleCurrentCity = (value) => {
    setPersonalInfo({ ...personalInfo, hometown: value });
  };
  //zodiac sign change handler
  const handleZodiacSign = (value) => {
    setPersonalInfo({ ...personalInfo, zodiacSign: value });
  };

  // --------- Others Information ------------

  const handleParentsStatus = (e) => {
    setParentStatus(e.target.value);
    setPersonalInfo({ ...personalInfo, parentStatus: e?.target.value });
  };

  // handle hobby
  const handleHobby = (value) => {
    if (value.length >= 1) {
      setPersonalInfo({ ...personalInfo, hobbies: value });
    } else if (value.length === 0) {
      const { hobbies, ...updatedPersonalInfo } = personalInfo;
      setPersonalInfo(updatedPersonalInfo);
    }
  };

  const navigate = useNavigate();

  const brotherDecreaseHandler = () => {
    setBrother((prevCount) => prevCount - 1);
  };

  const brotherIncreaseHandler = () => {
    setBrother((prevCount) => prevCount + 1);
  };

  //form submission
  const onSubmit = async (data) => {
    if (brother > 0) {
      data.numberOfBrother = brother;
    }
    if (sister > 0) {
      data.numberOfSister = sister;
    }
    if (lookingFor !== "") {
      data.whatAreYouLookingFor = lookingFor;
    }
    if (nidOrPassportPhoto.frontSide) {
      data.NidOrPassportPhoto = nidOrPassportPhoto;
    }
    if (data.firstName === "") {
      delete data.firstName;
    }
    if (data.lastName === "") {
      delete data.lastName;
    }
    if (data.NidOrPassportNumber === "") {
      delete data.NidOrPassportNumber;
    }
    if (data.aboutYou === "") {
      delete data.aboutYou;
    }
    if (data.LinkedInId === "") {
      delete data.LinkedInId;
    }
    if (data.faceBookId === "") {
      delete data.faceBookId;
    }
    if (data.instagramId === "") {
      delete data.instagramId;
    }
    if (data.phone === "") {
      delete data.phone;
    }
    if (data.numberOfPartner === "") {
      delete data.numberOfPartner;
    }
    if (data.reasonOfMarriage === "") {
      delete data.reasonOfMarriage;
    }
    data = {
      ...data,
      ...personalInfo,
      ...marriageDetails,
      ...divorceDetails,
      ...widowedDetails,
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
      navigate("/mobileuserprofile");
    }
  }, [updateResponse, isLoading, error, messageApi, navigate]);

  return (
    <div className="mx-6 mb-20">
      {/* Navigate previous page */}
      <div className="bg-[#FFFFFF] py-[10px] z-10 sticky top-0">
        <div className="bg-white w-full grid grid-cols-6 h-[48px]">
          <div className="pl-1 col-span-1">
            <Link onClick={() => navigate(-1)}>
              <i className="fa-solid text-sm text-[#1E2022] fa-chevron-left "></i>
            </Link>
          </div>
          <div className="col-span-4 ">
            <p className="text-center">Edit Personal Details</p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <div className="max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("firstName")}
                id="firstName"
                placeholder="First Name"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-36 "
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
                {...register("lastName")}
                id="lastName"
                placeholder="Last Name"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-36 "
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
                {...register("email")}
                id="email"
                placeholder="example@email.com"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="number"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                Phone Number
              </label>
              <input
                placeholder="17000000000"
                id="number"
                {...register("phone")}
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
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
                {...register("NidOrPassportNumber")}
                id="nid"
                placeholder="000000000/A025615"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
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
                className="text-sm block pb-2 text-slate-600 font-medium"
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
              Marital Status
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
            {personalInfo?.maritalStatus === "married" && (
              <div className="py-4">
                <div className="mb-2">
                  <input
                    type="number"
                    {...register("numberOfPartner")}
                    placeholder="Number of Partner"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    {...register("reasonOfMarriage")}
                    placeholder="Reason of Marriage"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full"
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
                        {...register("numberOfBoy")}
                        placeholder="Number of Boy"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 "
                      />
                      <input
                        type="number"
                        name="agesOfBoy"
                        {...register("agesOfBoy")}
                        placeholder="Age of Boy"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      />
                      <input
                        type="number"
                        {...register("numberOfGirl")}
                        placeholder="Number of Girl"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2"
                      />
                      <input
                        type="number"
                        name="agesOfGirl"
                        {...register("agesOfGirl")}
                        placeholder="Age of Girl"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                      />
                    </div>
                  )}

                  {}
                </div>
              </div>
            )}
            {/* divorced details  */}
            {personalInfo?.maritalStatus === "divorced" && (
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

            {personalInfo?.maritalStatus === "widowed" && (
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

          <div className="pb-4">
            <div>
              <label
                htmlFor="nid"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                About You
              </label>
              <textarea
                rows={3}
                placeholder="Text Here"
                {...register("aboutYou")}
                name="aboutYou"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
              />
            </div>
          </div>

          <div className="pb-4">
            <div>
              <label
                htmlFor="looking"
                className="text-sm block pb-2 text-slate-600 font-medium"
              >
                What are you looking for
              </label>
              <Select
                className="w-full mb-2"
                onChange={handleLookingForChange}
                placeholder="Select looking for"
                size="large"
                options={[
                  {
                    value: "man",
                    label: "Man",
                  },
                  {
                    value: "woman",
                    label: "Woman",
                  },
                ]}
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
              <label className="text-sm block pb-2 text-slate-600 font-medium">
                Siblings
              </label>
              <div>
                <h1 className="text-sm leading-6 text-slate-600 font-medium mb-2">
                  Brothers
                </h1>
                <div className="flex justify-center items-center mb-4">
                  <p
                    // onClick={() => setBrother((prevCount) => prevCount - 1)}
                    onClick={brotherDecreaseHandler}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg"
                  >
                    -
                  </p>
                  <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">
                    {brother}
                  </div>
                  <p
                    // onClick={() => setBrother((prevCount) => prevCount + 1)}
                    onClick={brotherIncreaseHandler}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg"
                  >
                    +
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-sm leading-6 text-slate-600 font-medium mb-2">
                  Sisters
                </h1>
                <div className="flex justify-center items-center mb-4">
                  <p
                    onClick={() => setSister((prevCount) => prevCount - 1)}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg"
                  >
                    -
                  </p>
                  <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">
                    {sister}
                  </div>
                  <p
                    onClick={() => setSister((prevCount) => prevCount + 1)}
                    className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg"
                  >
                    +
                  </p>
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
                htmlFor="linkedin"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Linkedin
              </label>
              <input
                type="text"
                name="LinkedInId"
                {...register("LinkedInId")}
                id="linkedin"
                placeholder="your linkedin profile link"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
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
                {...register("instagramId")}
                id="instagram"
                placeholder="your instagram profile link"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
              />
            </div>
          </div>
          <div className="pb-4">
            <div>
              <label
                htmlFor="faceBookId"
                className="text-sm block pb-2 text-slate-600	  font-medium"
              >
                Facebook
              </label>
              <input
                type="text"
                {...register("faceBookId")}
                id="faceBookId"
                placeholder="your facebook profile link"
                className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
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
                onChange={handleHobby}
                placeholder="select hobby"
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
        <div>{contextHolder}</div>
      </div>
      <BottomNav />
    </div>
  );
};

export default MobilePersonalInfoEdit;
