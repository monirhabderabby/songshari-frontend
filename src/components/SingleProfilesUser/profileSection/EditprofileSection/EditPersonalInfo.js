// configuration
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// Third party packages
import { DatePicker, Select, message } from "antd";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";

import {
  useGetProfileDetailsQuery,
  useUpdatePersonalDetailsMutation,
} from "../../../../Redux/features/userInfo/userApi";
import DropFileInput from "../../../shared/SingleProfileConponents/DropFileInput";
import { OvalLoader } from "../../../shared/Cards/Loader/OvalLoader/OvalLoader";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";
import moment from "moment";

const EditPersonalInfo = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [personalInfo, setPersonalInfo] = useState({});

  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState([]);
  const [marriageDetails, setMarriageDetails] = useState({});
  const [divorceDetails, setDivorceDetails] = useState({});
  const [widowedDetails, setWidowedDetails] = useState({});

  const [brother, setBrother] = useState(0);
  const [sister, setSister] = useState(0);
  const [lookingFor, setLookingFor] = useState("");
  //uploaded image url data state
  const [nidOrPassportPhoto, setNidOrPassportPhoto] = useState({});
  const [zodiacSignSuggestion, setZodiacSignSuggestion] = useState([]);
  const [hobbiesData, setHobbiesData] = useState([]);

  // API from redux
  const [updatePersonalDetails, { data: updateResponse, isLoading, error }] =
    useUpdatePersonalDetailsMutation();

  const { register, handleSubmit } = useForm();

  const { id } = useParams();
  const { data: profileData, isLoading: profileDataLoading } =
    useGetProfileDetailsQuery(id);

  const {
    firstName,
    lastName,
    phone,
    NidOrPassportNumber,
    NidFrontSide,
    LinkedInId,
    instagramId,
    faceBookId,
    whatAreYouLookingFor,
    aboutYou,
    zodiacSign,
    citizenShip,
    hometown,
    maritalStatus,
    hobbies,
    numberOfSister,
    numberOfBrother,
    dateOfBirth,
    reasonOfMarriage,
    numberOfPartner,
    numberOfGirl,
    numberOfBoy,
    marriageDate,
    isPartnerAwareOfMarriage,
    agesOfGirl,
    agesOfBoy,
    divorceDate,
    reasonOfDivorce,
    partnerDeathDay,
    countryPermanent,
    divisionPermanent,
    townPermanent,
    zipPermanent,
    streetPermanent,
    housePermanent,
    houseCurrent,
    streetCurrent,
    zipCurrent,
    townCurrent,
    divisionCurrent,
    countryCurrent,
  } = profileData || {};

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

  useEffect(() => {
    fetch("json/zodiacSign.json")
      .then((res) => res.json())
      .then((data) => setZodiacSignSuggestion(data));
  }, []);

  // hobbies
  useEffect(() => {
    fetch("json/hobby.json")
      .then((res) => res.json())
      .then((data) => setHobbiesData(data));
  }, []);

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
  const handleTownPermanent = (value) => {
    setPersonalInfo({ ...personalInfo, townPermanent: value });
  };
  const handleDivisionPermanent = (value) => {
    setPersonalInfo({ ...personalInfo, divisionPermanent: value });
  };
  const handleCountryPermanent = (value) => {
    setPersonalInfo({ ...personalInfo, countryPermanent: value });
  };
  const handleTownCurrent = (value) => {
    setPersonalInfo({ ...personalInfo, townCurrent: value });
  };
  const handleDivisionCurrent = (value) => {
    setPersonalInfo({ ...personalInfo, divisionCurrent: value });
  };
  const handleCountryCurrent = (value) => {
    setPersonalInfo({ ...personalInfo, countryCurrent: value });
  };
  //zodiac sign change handler
  const handleZodiacSign = (value) => {
    setPersonalInfo({ ...personalInfo, zodiacSign: value });
  };

  // --------- Others Information ------------

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
    if (brother > 0) {
      setBrother((prevCount) => prevCount - 1);
    }
  };

  const brotherIncreaseHandler = () => {
    setBrother((prevCount) => prevCount + 1);
  };
  const sisterDecreaseHandler = () => {
    if (sister > 0) {
      setSister((prevCount) => prevCount - 1);
    }
  };

  const sisterIncreaseHandler = () => {
    setSister((prevCount) => prevCount + 1);
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
      navigate(-1);
    }
  }, [updateResponse, isLoading, error, messageApi, navigate]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="lg:hidden">
        <MobileBackButton name={"Edit Personal Details"} />
      </div>
      <div className="max-w-[523px] mx-auto bg-white lg:drop-shadow-lg px-4 lg:pt-3 pb-6 mb-4 rounded">
        <div className="hidden lg:flex justify-end mb-3">
          <MdCancel
            onClick={() => navigate(-1)}
            className="cursor-pointer text-3xl text-slate-600"
          />
        </div>
        {profileDataLoading ? (
          <OvalLoader />
        ) : (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row justify-between pt-4 lg:pt-0 pb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm block pb-2 text-slate-600 font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("firstName")}
                    defaultValue={firstName}
                    id="firstName"
                    placeholder="First Name"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full lg:w-56 mb-4 md:mb-0"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-sm block pb-2 text-slate-600 font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastName")}
                    defaultValue={lastName}
                    id="lastName"
                    placeholder="Last Name"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full lg:w-56 "
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
                    defaultValue={phone}
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
                    defaultValue={NidOrPassportNumber}
                    id="nid"
                    placeholder="000000000/A025615"
                    className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                  />
                </div>
              </div>

              <DropFileInput
                {...{ nidOrPassportPhoto, setNidOrPassportPhoto, NidFrontSide }}
              />

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
                    defaultValue={moment(dateOfBirth)}
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
                  defaultValue={maritalStatus}
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
                        defaultValue={numberOfPartner}
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        {...register("reasonOfMarriage")}
                        defaultValue={reasonOfMarriage}
                        placeholder="Reason of Marriage"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full"
                      />
                    </div>

                    <Select
                      className="w-full mb-2"
                      onChange={handleAwareOFMarriage}
                      placeholder="Is partner aware of marriage?"
                      defaultValue={isPartnerAwareOfMarriage}
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
                        defaultValue={moment(marriageDate)}
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
                            defaultValue={numberOfBoy}
                            placeholder="Number of Boy"
                            className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 "
                          />
                          <input
                            type="number"
                            name="agesOfBoy"
                            {...register("agesOfBoy")}
                            defaultValue={agesOfBoy && agesOfBoy[0]}
                            placeholder="Age of Boy"
                            className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 "
                          />
                          <input
                            type="number"
                            {...register("numberOfGirl")}
                            defaultValue={numberOfGirl}
                            placeholder="Number of Girl"
                            className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2"
                          />
                          <input
                            type="number"
                            name="agesOfGirl"
                            {...register("agesOfGirl")}
                            defaultValue={agesOfGirl && agesOfGirl[0]}
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
                        defaultValue={reasonOfDivorce}
                        placeholder="Divorce Reason"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full "
                        onChange={handleDivorceReason}
                      />
                    </div>
                    <div className="mb-2">
                      <DatePicker
                        onChange={handleDivorceDate}
                        defaultValue={moment(divorceDate)}
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
                        defaultValue={moment(partnerDeathDay)}
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
                    defaultValue={citizenShip}
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
                  defaultValue={hometown}
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
                  Zodiac Sign
                </label>
                <Select
                  className="w-full mb-2 "
                  onChange={handleZodiacSign}
                  defaultValue={zodiacSign}
                  placeholder="Select Sign"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  size="large"
                >
                  {zodiacSignSuggestion.map((sign) => (
                    <Select.Option key={sign.id} value={sign.value}>
                      {sign.label}
                    </Select.Option>
                  ))}
                </Select>
              </div>

              <div className="pb-4">
                <div>
                  <label
                    htmlFor=""
                    className="text-sm block pb-2 text-slate-600 font-medium"
                  >
                    About You
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Text Here"
                    defaultValue={aboutYou}
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
                    defaultValue={whatAreYouLookingFor}
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
                    htmlFor=""
                    className="text-sm block pb-2 text-slate-600 font-medium"
                  >
                    Permanent Address
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 pt-4 lg:pt-0 pb-4">
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        House Permanent
                      </label>
                      <input
                        type="text"
                        {...register("housePermanent")}
                        defaultValue={housePermanent}
                        placeholder="House permanent"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full lg:w-56 mb-4 md:mb-0"
                      />
                    </div>
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Street Permanent
                      </label>
                      <input
                        type="text"
                        {...register("streetPermanent")}
                        defaultValue={streetPermanent}
                        placeholder="Street Permanent"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full lg:w-56 "
                      />
                    </div>
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Zip Permanent
                      </label>
                      <input
                        type="number"
                        {...register("zipPermanent")}
                        defaultValue={zipPermanent}
                        placeholder="Zip Permanent"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full lg:w-56 "
                      />
                    </div>
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Town Permanent
                      </label>
                      <Select
                        className="w-full lg:w-56 mb-2"
                        onChange={handleTownPermanent}
                        defaultValue={townPermanent}
                        placeholder="Select Town"
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
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Division Permanent
                      </label>
                      <Select
                        className="w-full lg:w-56 mb-2"
                        onChange={handleDivisionPermanent}
                        defaultValue={divisionPermanent}
                        placeholder="Select Division"
                        showSearch
                        filterOption={(input, option) =>
                          (option?.children ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        size="large"
                        options={[
                          {
                            value: "Dhaka",
                            label: "Dhaka",
                          },
                          {
                            value: "Chittagong",
                            label: "Chittagong",
                          },
                          {
                            value: "Sylhet",
                            label: "Sylhet",
                          },
                          {
                            value: "Rajshahi",
                            label: "Rajshahi",
                          },
                          {
                            value: "Rangpur",
                            label: "Rangpur",
                          },
                          {
                            value: "Mymensingh",
                            label: "Mymensingh",
                          },
                          {
                            value: "Khulna",
                            label: "Khulna",
                          },
                          {
                            value: "Barisal",
                            label: "Barisal",
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Country Permanent
                      </label>
                      <Select
                        className="w-full lg:w-56 mb-2"
                        onChange={handleCountryPermanent}
                        defaultValue={countryPermanent}
                        placeholder="Select Country"
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
                </div>
              </div>

              <div className="pb-4">
                <div>
                  <label
                    htmlFor=""
                    className="text-sm block pb-2 text-slate-600 font-medium"
                  >
                    Current Address
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 pt-4 lg:pt-0 pb-4">
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        House Current
                      </label>
                      <input
                        type="text"
                        {...register("houseCurrent")}
                        defaultValue={houseCurrent}
                        placeholder="House permanent"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full lg:w-56 mb-4 md:mb-0"
                      />
                    </div>
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Street Current
                      </label>
                      <input
                        type="text"
                        {...register("streetCurrent")}
                        defaultValue={streetCurrent}
                        placeholder="Street Permanent"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full lg:w-56 "
                      />
                    </div>
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Zip Current
                      </label>
                      <input
                        type="number"
                        {...register("zipCurrent")}
                        defaultValue={zipCurrent}
                        placeholder="Zip Permanent"
                        className=" focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full lg:w-56 "
                      />
                    </div>
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Town Current
                      </label>
                      <Select
                        className="w-full lg:w-56 mb-2"
                        onChange={handleTownCurrent}
                        defaultValue={townCurrent}
                        placeholder="Select Town"
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
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Division Current
                      </label>
                      <Select
                        className="w-full lg:w-56 mb-2"
                        onChange={handleDivisionCurrent}
                        defaultValue={divisionCurrent}
                        placeholder="Select Division"
                        showSearch
                        filterOption={(input, option) =>
                          (option?.children ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        size="large"
                        options={[
                          {
                            value: "Dhaka",
                            label: "Dhaka",
                          },
                          {
                            value: "Chittagong",
                            label: "Chittagong",
                          },
                          {
                            value: "Sylhet",
                            label: "Sylhet",
                          },
                          {
                            value: "Rajshahi",
                            label: "Rajshahi",
                          },
                          {
                            value: "Rangpur",
                            label: "Rangpur",
                          },
                          {
                            value: "Mymensingh",
                            label: "Mymensingh",
                          },
                          {
                            value: "Khulna",
                            label: "Khulna",
                          },
                          {
                            value: "Barisal",
                            label: "Barisal",
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <label className="text-sm block pb-2 text-slate-600 font-medium">
                        Country Current
                      </label>
                      <Select
                        className="w-full lg:w-56 mb-2"
                        onChange={handleCountryCurrent}
                        defaultValue={countryCurrent}
                        placeholder="Select Country"
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
                        onClick={brotherDecreaseHandler}
                        className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg cursor-pointer"
                      >
                        -
                      </p>
                      <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">
                        {brother === 0 && numberOfBrother
                          ? numberOfBrother
                          : brother}
                      </div>
                      <p
                        onClick={brotherIncreaseHandler}
                        className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg cursor-pointer"
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
                        onClick={sisterDecreaseHandler}
                        className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg cursor-pointer"
                      >
                        -
                      </p>
                      <div className="text-base text-center leading-6 font-medium w-24 py-2 bg-gray-200">
                        {sister === 0 && numberOfSister
                          ? numberOfSister
                          : sister}
                      </div>
                      <p
                        onClick={sisterIncreaseHandler}
                        className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg cursor-pointer"
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
                    htmlFor="linkedin"
                    className="text-sm block pb-2 text-slate-600	  font-medium"
                  >
                    Linkedin
                  </label>
                  <input
                    type="text"
                    name="LinkedInId"
                    defaultValue={LinkedInId}
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
                    defaultValue={instagramId}
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
                    defaultValue={faceBookId}
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
                    defaultValue={hobbies}
                    placeholder="Select hobby"
                    showSearch
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                  >
                    {hobbiesData.map((hobby) => (
                      <Select.Option key={hobby.id} value={hobby.value}>
                        {hobby.label}
                      </Select.Option>
                    ))}
                  </Select>
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
          </div>
        )}
        <div>{contextHolder}</div>
      </div>

      <div className="lg:hidden">
        <div className="h-12"></div>
        <BottomNav />
      </div>
    </>
  );
};

export default EditPersonalInfo;
