// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { DatePicker } from "antd";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineCloudUpload, AiOutlineIdcard } from "react-icons/ai";
import { decodeToken } from "react-jwt";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import dayjs from "dayjs";

// components
import getCookie from "../../Helper/cookies/getCookie";
import { usePhotosUploadOnServerMutation } from "../../Redux/features/fileUpload/fileUploadApi";
import {
  useGetProfileDetailsWIthAuthQuery,
  useSetPersonalDetailsMutation,
} from "../../Redux/features/userInfo/userApi";
import { OvalLoader } from "../../components/shared/Cards/Loader/OvalLoader/OvalLoader";

export const PersonalDetails = ({ setPage, setHasSibling }) => {
  const [setPersonalDetails, { data: personalDetailsResponse, isLoading }] =
    useSetPersonalDetailsMutation();
  const [uploadProfilePhoto, { data: uploadedProfilePhoto }] =
    usePhotosUploadOnServerMutation();
  const [uploadCoverPhoto, { data: uploadedCoverPhoto }] =
    usePhotosUploadOnServerMutation();
  const [uploadNIDFront, { data: uploadedNIDFront }] =
    usePhotosUploadOnServerMutation();
  const [uploadNIDBack, { data: uploadedNIDBack }] =
    usePhotosUploadOnServerMutation();
  const token = getCookie("token");
  const tokenInfo = decodeToken(token);

  const { role } = tokenInfo || {};

  const [profilePhoto, setProfilePhoto] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [NidFrontSide, setNidFrontSide] = useState("");
  const [NidBackSide, setNidBackSide] = useState("");
  // const [licencePhoto, setLicencePhoto] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [citizenShip, setCitizenShip] = useState([]);
  const [dateOfBirth, setDateOfBirth] = useState();
  const [marriageDate, setMarriageDate] = useState();
  const [divorceDate, setDivorceDate] = useState();
  const [partnerDeathDate, setPartnerDeathDate] = useState();
  const [hobbies, setHobbies] = useState([]);
  const [profilePhotoName, setProfilePhotoName] = useState();
  const [coverPhotoName, setCoverPhotoName] = useState();

  const { data: profileData, isLoading: profileDataLoading } =
    useGetProfileDetailsWIthAuthQuery();

  const {
    firstName,
    lastName,
    designation,
    NidOrPassportNumber,
    dateOfBirth: defaultDateOfBirth,
  } = profileData || {};

  //setting profile photo
  useEffect(() => {
    if (uploadedProfilePhoto)
      setProfilePhoto(uploadedProfilePhoto?.data[0]?.path);
  }, [uploadedProfilePhoto]);

  // setting cover Photo
  useEffect(() => {
    if (uploadedCoverPhoto) setCoverPhoto(uploadedCoverPhoto?.data[0]?.path);
  }, [uploadedCoverPhoto]);
  useEffect(() => {
    if (uploadedNIDFront) setNidFrontSide(uploadedNIDFront?.data[0]?.path);
  }, [uploadedNIDFront]);
  useEffect(() => {
    if (uploadedNIDBack) setNidBackSide(uploadedNIDBack?.data[0]?.path);
  }, [uploadedNIDBack]);

  // setting NID photo

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  function disabledDate(current) {
    // Can not select days after today
    return current && current > moment().endOf("day");
  }

  // hobbies
  const [hobbiesData, setHobbiesData] = useState([]);
  useEffect(() => {
    fetch("/json/hobby.json")
      .then((res) => res.json())
      .then((data) => setHobbiesData(data));
  }, []);

  // Zodiac Sign
  const [zodiacSign, setZodiacSign] = useState([]);
  const [zodiacSignValue, setZodiacSignValue] = useState("");
  const [zodiacSignSuggestion, setZodiacSignSuggestion] = useState("");
  useEffect(() => {
    fetch("/json/zodiacSign.json")
      .then((res) => res.json())
      .then((data) => setZodiacSign(data));
  }, []);
  const [childrenStatus, setChildrenStatus] = useState("");

  // Countries
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("/json/countries.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const animatedComponents = makeAnimated();
  const [homeTownSuggestion, setHomeTownSuggestion] = useState([]);
  const [homeTownValue, setHomeTownValue] = useState("");
  const [homeTowns, setHomeTown] = useState([]);
  const [townPermanentSuggestion, setTownPermanentSuggestion] = useState([]);
  const [townPermanentValue, setTownPermanentValue] = useState("");
  const [townCurrentSuggestion, setTownCurrentSuggestion] = useState([]);
  const [townCurrentValue, setTownCurrentValue] = useState("");
  const [countriesSuggestionForParmanent, setCountriesSuggestionForParmanent] =
    useState([]);
  const [countriesSuggestionForCurrent, setCountriesSuggestionForCurrent] =
    useState([]);
  const [parmanentCountryValue, setPermanentCountryValue] = useState("");
  const [currentCountryValue, setCurrentCountryValue] = useState("");

  useEffect(() => {
    fetch("/json/district.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) setHomeTown(data);
      });
  }, [setHomeTown]);

  const handleCountriesSuggestion = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = countries.filter((country) => {
        const regex = new RegExp(`${text}`, "gi");
        return country.value.match(regex);
      });
    }
    setCountriesSuggestionForParmanent(matches);
    setPermanentCountryValue(text);
  };

  const handleCurrentCountriesSuggestion = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = countries.filter((country) => {
        const regex = new RegExp(`${text}`, "gi");
        return country.value.match(regex);
      });
    }
    setCountriesSuggestionForCurrent(matches);
    setCurrentCountryValue(text);
  };

  const handleHomeTownSuggestion = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = homeTowns.filter((town) => {
        const regex = new RegExp(`${text}`, "gi");
        return town.name.match(regex);
      });
    }
    setHomeTownSuggestion(matches);
    setHomeTownValue(text);
  };

  const handleTownPermanentSuggestion = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = homeTowns.filter((town) => {
        const regex = new RegExp(`${text}`, "gi");
        return town.name.match(regex);
      });
    }
    setTownPermanentSuggestion(matches);
    setTownPermanentValue(text);
  };

  const handleTownCurrentSuggestion = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = homeTowns.filter((town) => {
        const regex = new RegExp(`${text}`, "gi");
        return town.name.match(regex);
      });
    }
    setTownCurrentSuggestion(matches);
    setTownCurrentValue(text);
  };

  const zodiacSignHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = zodiacSign.filter((sign) => {
        const regex = new RegExp(`${text}`, "gi");
        return sign.name.match(regex);
      });
    }
    setZodiacSignSuggestion(matches);
    setZodiacSignValue(text);
  };

  const onSubmit = async (data) => {
    if (data.numberOfBrother > 0) {
      setHasSibling(true);
    }
    if (data.numberOfSister > 0) {
      setHasSibling(true);
    }

    delete data.citizenShip;

    //photo links upload
    data.profilePhoto = profilePhoto;
    data.coverPhoto = coverPhoto;
    // data.licencePhoto = licencePhoto;
    // data.professionalAchievementMoment = professionalAchievementMoment;

    delete data.frontSide;
    delete data.backSide;

    data.firstName = data.firstName || firstName;
    data.lastName = data.lastName || lastName;
    data.designation = data.designation || designation;
    data.NidOrPassportNumber = data.NidOrPassportNumber || NidOrPassportNumber;
    data.dateOfBirth = dateOfBirth || defaultDateOfBirth;

    data = {
      ...data,
      NidFrontSide,
      NidBackSide,
      hobbies,
      marriageDate,
      divorceDate,
      partnerDeathDate,
      citizenShip,
    };
    await setPersonalDetails(data);
  };

  useEffect(() => {
    if (personalDetailsResponse) {
      setPage(2);
    }
  }, [personalDetailsResponse, setPage]);

  const profilePhotoHandler = async (e) => {
    if (e.target.files[0]) {
      setProfilePhotoName(e.target.files[0]?.name);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadProfilePhoto(formData);
    }
  };

  const coverPhotoHandler = async (e) => {
    if (e.target.files[0]) {
      setCoverPhotoName(e.target.files[0]?.name);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadCoverPhoto(formData);
    }
  };

  const frontSideNIDHandler = async (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadNIDFront(formData);
    }
  };
  const backSideNIDHandler = async (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadNIDBack(formData);
    }
  };

  const onDateOfBirthChange = (date, dateString) => {
    setDateOfBirth(dateString);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const dateFormat = "YYYY/MM/DD";

  return (
    <div className="w-full h-auto">
      {/* ---------- Header ---------- */}
      <section className="lg:mt-20 col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-8">
        <p>Personal Information Form</p>
        <hr className="w-1/2 mt-2 mx-auto" />
      </section>
      {profileDataLoading ? (
        <OvalLoader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
            {/* ---------- First Name ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("firstName")}
                  defaultValue={firstName}
                  type="text"
                  placeholder="First name"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="firstName"
                />
              </div>
            </section>
            {/* ---------- Last Name ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("lastName")}
                  defaultValue={lastName}
                  type="text"
                  placeholder="Last name"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="lastName"
                />
              </div>
            </section>
            {/* ---------- Designation ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("designation")}
                  defaultValue={designation}
                  type="text"
                  placeholder="Designation"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="designation"
                />
              </div>
            </section>
            {/* ---------- Religion ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <select
                  {...register("religion", {
                    required: {
                      value: true,
                      message: "Religion is required",
                    },
                  })}
                  type="text"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="religion"
                >
                  <option value="">Select Religion</option>
                  <option value="Islam">Islam</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Christian">Christian</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Atheist">Atheist</option>
                </select>
              </div>
              <h1 className="text-left ml-2">
                {errors.religion?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.religion.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Date of Birth ---------- */}
            <section>
              <div className="flex items-center bg-gray-100  w-full rounded-lg mt-3 lg:mt-0">
                <DatePicker
                  {...register("dateOfBirth")}
                  placeholder="Date of Birth"
                  className="flex-1 px-2 py-[9px] outline-none h-full bg-transparent text-sm text-gray-400"
                  id="dateOfBirth"
                  bordered={false}
                  defaultValue={dayjs(defaultDateOfBirth, dateFormat)}
                  onChange={onDateOfBirthChange}
                  disabledDate={disabledDate}
                />
              </div>
            </section>
            {/* ---------- Hometown ---------- */}
            <section className="relative">
              <div
                className={`flex z-50 items-center p-3 w-full rounded-lg mt-3 lg:mt-0 ${
                  homeTownSuggestion.length > 0
                    ? "rounded-br-none rounded-bl-none shadow-lg bg-white"
                    : "bg-gray-100"
                }`}
              >
                <input
                  {...register("hometown", {
                    required: {
                      value: true,
                      message: "Hometown is required",
                    },
                  })}
                  type="text"
                  placeholder="Hometown"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  onChange={(e) => handleHomeTownSuggestion(e.target.value)}
                  value={homeTownValue}
                  id="hometown"
                />
              </div>
              <div
                className={`bg-white shadow-lg absolute top-[40px] right-0 w-full rounded-br-lg rounded-bl-lg overflow-y-scroll z-40 ${
                  homeTownSuggestion.length > 0 ? "max-h-[346px]" : "h-0"
                }`}
              >
                {homeTownSuggestion.length > 0 &&
                  homeTownSuggestion.map((suggetion) => {
                    return (
                      <div
                        key={suggetion?.id}
                        className="h-[40px] flex justify-start items-center text-[14px] hover:bg-gray-100 px-3 cursor-pointer text-gray-500 rounded-br-lg rounded-bl-lg"
                        onClick={() => {
                          setHomeTownValue(suggetion?.name);
                          setHomeTownSuggestion([]);
                        }}
                      >
                        {suggetion?.name}
                      </div>
                    );
                  })}
              </div>
              <h1 className="text-left ml-2">
                {!homeTownValue && errors.hometown?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.hometown.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Profile Photo ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                <label
                  htmlFor="profilePhoto"
                  className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                >
                  {profilePhoto ? (
                    <div>
                      <span className="text-green-400">
                        {profilePhotoName
                          ? profilePhotoName
                          : "Profile Photo added"}
                      </span>
                    </div>
                  ) : (
                    "Upload Profile Photo"
                  )}
                </label>
                <input
                  {...register("profilePhoto", {
                    required: {
                      value: true,
                      message: "Profile Photo is Required",
                    },
                  })}
                  type="file"
                  id="profilePhoto"
                  className="hidden"
                  onChange={profilePhotoHandler}
                />
              </div>
              <h1 className="text-left ml-2">
                {!profilePhoto && errors.profilePhoto?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.profilePhoto.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Cover Photo ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                <label
                  htmlFor="coverPhoto"
                  className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                >
                  {coverPhoto ? (
                    <>
                      <span className="text-green-400">
                        {coverPhotoName ? coverPhotoName : "Cover Photo added"}
                      </span>
                    </>
                  ) : (
                    "Upload Cover Photo"
                  )}
                </label>
                <input
                  {...register("coverPhoto")}
                  type="file"
                  id="coverPhoto"
                  className="hidden"
                  onChange={coverPhotoHandler}
                />
              </div>
            </section>
            {/* ---------- Nid or Passport Number ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("NidOrPassportNumber", {
                    minLength: {
                      value: 10,
                      message: "Nid or Passport number must be 10 or 17 digit",
                    },
                    maxLength: {
                      value: 17,
                      message: "Nid or Passport number must be 10 or 17 digit",
                    },
                  })}
                  defaultValue={NidOrPassportNumber}
                  type="text"
                  placeholder="Nid Or Passport Number"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="NidOrPassportNumber"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.NidOrPassportNumber?.type === "minLength" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.NidOrPassportNumber.message}
                  </span>
                )}
                {errors.NidOrPassportNumber?.type === "maxLength" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.NidOrPassportNumber.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Nid front side photo ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <AiOutlineIdcard className=" mr-2 text-gray-400" />
                <label
                  htmlFor="frontSide"
                  className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                >
                  {NidFrontSide ? (
                    <>
                      <span className="text-green-400">
                        Front side NID / PAssport added
                      </span>
                    </>
                  ) : (
                    "Nid Or Passport Front side Photo"
                  )}
                </label>
                <input
                  {...register("frontSide", {
                    required: {
                      value: true,
                      message: "Nid Or Passport Front side Photo is Required",
                    },
                  })}
                  type="file"
                  id="frontSide"
                  className="hidden"
                  onChange={frontSideNIDHandler}
                />
              </div>
              <h1 className="text-left ml-2">
                {!NidFrontSide && errors.frontSide?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.frontSide.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Nid Or Passport Back side Photo ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <AiOutlineIdcard className="mr-2 text-gray-400" />
                <label
                  htmlFor="backSide"
                  className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                >
                  {NidBackSide ? (
                    <>
                      <span className="text-green-400">Photo added</span>
                    </>
                  ) : (
                    "Nid Or Passport Back side Photo"
                  )}
                </label>
                <input
                  {...register("backSide", {
                    required: {
                      value: true,
                      message: "Nid Or Passport Back side Photo is Required",
                    },
                  })}
                  type="file"
                  id="backSide"
                  className="hidden"
                  onChange={backSideNIDHandler}
                />
              </div>
              <h1 className="text-left ml-2">
                {!NidBackSide && errors.backSide?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.backSide.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Citizenship ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-[3px] w-full rounded-lg mt-3 lg:mt-0">
                <Controller
                  {...register("citizenShip")}
                  control={control}
                  name="citizenShip"
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      inputRef={ref}
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      onChange={(val) =>
                        onChange(
                          val.map((c) =>
                            setCitizenShip([...citizenShip, c.value])
                          )
                        )
                      }
                      options={countries}
                      isMulti
                      placeholder="Select Citizenship"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          backgroundColor: "transparent",
                          border: "none",
                          textAlign: "left",
                          fontSize: "14px",
                          color: "#9CA3AF",
                        }),
                      }}
                    />
                  )}
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.citizenShip?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.citizenShip.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Zodiac Sign ---------- */}
            <section className="relative">
              <div
                className={`flex items-center p-3 w-full rounded-lg mt-3 lg:mt-0 ${
                  zodiacSignSuggestion.length > 0
                    ? "rounded-br-none rounded-bl-none shadow-lg bg-white overflow-auto"
                    : "bg-gray-100"
                }`}
              >
                <input
                  {...register("zodiacSign")}
                  type="text"
                  placeholder="Zodiac Sign"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="zodiacSign"
                  onChange={(e) => zodiacSignHandler(e.target.value)}
                  value={zodiacSignValue}
                />
              </div>
              <div
                className={`bg-white shadow-lg absolute top-[40px] right-0 w-full rounded-br-lg rounded-bl-lg overflow-y-scroll z-50 ${
                  zodiacSignSuggestion.length > 0 ? "max-h-[346px]" : "h-0"
                }`}
              >
                {zodiacSignSuggestion.length > 0 &&
                  zodiacSignSuggestion.map((suggetion) => {
                    return (
                      <div
                        key={suggetion?.id}
                        className="h-[40px] flex justify-start items-center text-[14px] hover:bg-gray-100 px-3 cursor-pointer text-gray-500 "
                        onClick={() => {
                          setZodiacSignValue(suggetion?.name);
                          setZodiacSignSuggestion([]);
                        }}
                      >
                        {suggetion?.name}
                      </div>
                    );
                  })}
              </div>
            </section>

            {/* -------------------- Permanent Address Start -------------------- */}
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
              Permanent Address
            </section>

            {/* ---------- House Address ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("housePermanent", {
                    required: {
                      value: true,
                      message: "House Name is required",
                    },
                  })}
                  type="text"
                  placeholder="House"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="housePermanent"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.housePermanent?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.housePermanent.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Street Address ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("streetPermanent", {
                    required: {
                      value: true,
                      message: "Street No. is required",
                    },
                  })}
                  type="text"
                  placeholder="Street No."
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="streetPermanent"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.streetPermanent?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.streetPermanent.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Zip Code ----------*/}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("zipPermanent", {
                    required: {
                      value: true,
                      message: "Zip Code is required",
                    },
                  })}
                  type="text"
                  placeholder="Zip Code"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="zipPermanent"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.zipPermanent?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.zipPermanent.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Town permanent ---------- */}
            <section className="relative">
              <div
                className={`flex items-center -z-10  p-3 w-full rounded-lg mt-3 lg:mt-0 ${
                  townPermanentSuggestion.length > 0
                    ? "rounded-br-none rounded-bl-none shadow-lg bg-white"
                    : "bg-gray-100"
                }`}
              >
                <input
                  {...register("townPermanent", {
                    required: {
                      value: true,
                      message: "Town name is required",
                    },
                  })}
                  type="text"
                  placeholder="Town or City"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  onChange={(e) =>
                    handleTownPermanentSuggestion(e.target.value)
                  }
                  value={townPermanentValue}
                  id="townPermanent"
                />
              </div>
              <div
                className={`bg-white shadow-lg absolute top-[40px] right-0 w-full rounded-br-lg rounded-bl-lg overflow-y-scroll ${
                  townPermanentSuggestion.length > 0 ? "max-h-[346px]" : "h-0"
                }`}
              >
                {townPermanentSuggestion.length > 0 &&
                  townPermanentSuggestion.map((suggetion) => {
                    return (
                      <div
                        key={suggetion?.id}
                        className="h-[40px] flex justify-start items-center text-[14px] hover:bg-gray-100 px-3 cursor-pointer text-gray-500 rounded-br-lg rounded-bl-lg"
                        onClick={() => {
                          setTownPermanentValue(suggetion?.name);
                          setTownPermanentSuggestion([]);
                        }}
                      >
                        {suggetion?.name}
                      </div>
                    );
                  })}
              </div>
              <h1 className="text-left ml-2">
                {!townPermanentValue &&
                  errors.townPermanent?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.townPermanent.message}
                    </span>
                  )}
              </h1>
            </section>
            {/* ---------- Division Permanent ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <select
                  {...register("divisionPermanent", {
                    required: {
                      value: true,
                      message: "Division is required",
                    },
                  })}
                  type="text"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="divisionPermanent"
                >
                  <option value="">Select Division</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="mymensingh">Mymensingh</option>
                  <option value="khulna">Khulna</option>
                  <option value="barisal">Barisal</option>
                </select>
              </div>
              <h1 className="text-left ml-2">
                {errors.divisionPermanent?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.divisionPermanent.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Country Permanent ---------- */}
            <section className="relative">
              <div
                className={`flex items-center  p-3 w-full rounded-lg mt-3 lg:mt-0 ${
                  countriesSuggestionForParmanent.length > 0
                    ? "rounded-br-none rounded-bl-none shadow-lg bg-white"
                    : "bg-gray-100"
                }`}
              >
                <input
                  {...register("countryPermanent", {
                    required: {
                      value: true,
                      message: "Country Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Select Country"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  onChange={(e) => handleCountriesSuggestion(e.target.value)}
                  value={parmanentCountryValue}
                  id="countryPermanent"
                />
              </div>
              <div
                className={`bg-white z-50 shadow-lg absolute top-[40px] right-0 w-full rounded-br-lg rounded-bl-lg overflow-y-scroll ${
                  countriesSuggestionForParmanent.length > 0
                    ? "max-h-[346px]"
                    : "h-0"
                }`}
              >
                {countriesSuggestionForParmanent.length > 0 &&
                  countriesSuggestionForParmanent.map((suggetion) => {
                    return (
                      <div
                        key={suggetion?.id}
                        className="h-[40px] flex justify-start items-center text-[14px] hover:bg-gray-100 px-3 cursor-pointer text-gray-500 rounded-br-lg rounded-bl-lg"
                        onClick={() => {
                          setPermanentCountryValue(suggetion?.value);
                          setCountriesSuggestionForParmanent([]);
                        }}
                      >
                        {suggetion?.value}
                      </div>
                    );
                  })}
              </div>
              <h1 className="text-left ml-2">
                {!parmanentCountryValue &&
                  errors.countryPermanent?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.countryPermanent.message}
                    </span>
                  )}
              </h1>
            </section>

            {/* --------------------------- Permanent Address End ------------------------- */}

            {/* --------------------------- Current Address Start ------------------------- */}
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
              Current Address
            </section>

            {/* ---------- House Address Current ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("houseCurrent", {
                    required: {
                      value: true,
                      message: "House Name is required",
                    },
                  })}
                  type="text"
                  placeholder="House"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="houseCurrent"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.houseCurrent?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.houseCurrent.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Street Address Current ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("streetCurrent", {
                    required: {
                      value: true,
                      message: "Street No. is required",
                    },
                  })}
                  type="text"
                  placeholder="Street No."
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="streetCurrent"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.streetCurrent?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.streetCurrent.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Zip Code Current ----------*/}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("zipCurrent", {
                    required: {
                      value: true,
                      message: "Zip Code is required",
                    },
                  })}
                  type="text"
                  placeholder="Zip Code"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="zipCurrent"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.zipCurrent?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.zipCurrent.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Town Current ---------- */}
            <section className="relative">
              <div
                className={`flex items-center -z-50  p-3 w-full rounded-lg mt-3 lg:mt-0 ${
                  townCurrentSuggestion.length > 0
                    ? "rounded-br-none rounded-bl-none shadow-lg bg-white"
                    : "bg-gray-100"
                }`}
              >
                <input
                  {...register("townCurrent", {
                    required: {
                      value: true,
                      message: "Town name is required",
                    },
                  })}
                  type="text"
                  placeholder="Town or City"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  onChange={(e) => handleTownCurrentSuggestion(e.target.value)}
                  value={townCurrentValue}
                  id="townCurrent"
                />
              </div>
              <div
                className={`bg-white shadow-lg absolute top-[40px] right-0 w-full rounded-br-lg rounded-bl-lg overflow-y-scroll ${
                  townCurrentSuggestion.length > 0 ? "max-h-[346px]" : "h-0"
                }`}
              >
                {townCurrentSuggestion.length > 0 &&
                  townCurrentSuggestion.map((suggetion) => {
                    return (
                      <div
                        key={suggetion?.id}
                        className="h-[40px] flex justify-start items-center text-[14px] hover:bg-gray-100 px-3 cursor-pointer text-gray-500 rounded-br-lg rounded-bl-lg"
                        onClick={() => {
                          setTownCurrentValue(suggetion?.name);
                          setTownCurrentSuggestion([]);
                        }}
                      >
                        {suggetion?.name}
                      </div>
                    );
                  })}
              </div>
              <h1 className="text-left ml-2">
                {!townCurrentValue &&
                  errors.townCurrent?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.townCurrent.message}
                    </span>
                  )}
              </h1>
            </section>
            {/* ---------- Division Current ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <select
                  {...register("divisionCurrent", {
                    required: {
                      value: true,
                      message: "Division is required",
                    },
                  })}
                  type="text"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="divisionCurrent"
                >
                  <option value="">Select Division</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="mymensingh">Mymensingh</option>
                  <option value="khulna">Khulna</option>
                  <option value="barisal">Barisal</option>
                </select>
              </div>
              <h1 className="text-left ml-2">
                {errors.divisionCurrent?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.divisionCurrent.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Country Current ---------- */}
            <section className="relative">
              <div
                className={`flex items-center  p-3 w-full rounded-lg mt-3 lg:mt-0 ${
                  countriesSuggestionForParmanent.length > 0
                    ? "rounded-br-none rounded-bl-none shadow-lg bg-white"
                    : "bg-gray-100"
                }`}
              >
                <input
                  {...register("countryCurrent", {
                    required: {
                      value: true,
                      message: "Country Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Select Country"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  onChange={(e) =>
                    handleCurrentCountriesSuggestion(e.target.value)
                  }
                  value={currentCountryValue}
                  id="countryCurrent"
                />
              </div>
              <div
                className={`bg-white z-50 shadow-lg absolute top-[40px] right-0 w-full rounded-br-lg rounded-bl-lg overflow-y-scroll ${
                  countriesSuggestionForCurrent.length > 0
                    ? "max-h-[346px]"
                    : "h-0"
                }`}
              >
                {countriesSuggestionForCurrent.length > 0 &&
                  countriesSuggestionForCurrent.map((suggetion) => {
                    return (
                      <div
                        key={suggetion?.id}
                        className="h-[40px] flex justify-start items-center text-[14px] hover:bg-gray-100 px-3 cursor-pointer text-gray-500 rounded-br-lg rounded-bl-lg"
                        onClick={() => {
                          setCurrentCountryValue(suggetion?.value);
                          setCountriesSuggestionForCurrent([]);
                        }}
                      >
                        {suggetion?.value}
                      </div>
                    );
                  })}
              </div>
              <h1 className="text-left ml-2">
                {!currentCountryValue &&
                  errors.countryCurrent?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.countryCurrent.message}
                    </span>
                  )}
              </h1>
            </section>

            {/* --------------------------- Current Address End ------------------------- */}

            {/* ---------- Marital info ---------- */}
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
              Marital Info
            </section>
            {/* ---------- Marital Status ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <select
                  {...register("maritalStatus", {
                    required: {
                      value: true,
                      message: "Marital Status is required",
                    },
                  })}
                  type="text"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="maritalStatus"
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Unmarried</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
              <h1 className="text-left ml-2">
                {!maritalStatus &&
                  errors.maritalStatus?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.maritalStatus.message}
                    </span>
                  )}
              </h1>
            </section>
            {/* ---------- Number Of Partner ---------- */}
            {maritalStatus === "married" && maritalStatus !== "single" && (
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <input
                    {...register("numberOfPartner", {
                      required: {
                        value: true,
                        message: "Number of partner is required",
                      },
                    })}
                    type="number"
                    placeholder="Number of Partner"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="numberOfPartner"
                  />
                </div>
                <h1 className="text-left ml-2">
                  {errors.numberOfPartner?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.numberOfPartner.message}
                    </span>
                  )}
                </h1>
              </section>
            )}
            {/* ---------- Reason of Marriage ---------- */}
            {maritalStatus === "married" && maritalStatus !== "single" && (
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <input
                    {...register("reasonOfMarriage", {
                      required: {
                        value: true,
                        message: "Reason of Marriage is required",
                      },
                    })}
                    type="text"
                    placeholder="Reason of Marriage"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="reasonOfMarriage"
                  />
                </div>
                <h1 className="text-left ml-2">
                  {errors.reasonOfMarriage?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.reasonOfMarriage.message}
                    </span>
                  )}
                </h1>
              </section>
            )}
            {/* ---------- Is partner aware of marriage ---------- */}
            {maritalStatus === "married" && maritalStatus !== "single" && (
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <select
                    {...register("isPartnerAwarOfMarriage", {
                      required: {
                        value: true,
                        message: "Answer is required",
                      },
                    })}
                    type="text"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="isPartnerAwarOfMarriage"
                  >
                    <option value="">Is partner aware of marriage?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <h1 className="text-left ml-2">
                  {errors.isPartnerAwarOfMarriage?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.isPartnerAwarOfMarriage.message}
                    </span>
                  )}
                </h1>
              </section>
            )}
            {/* ---------- Date of Marriage ---------- */}
            {maritalStatus === "married" && maritalStatus !== "single" && (
              <section>
                <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                  <DatePicker
                    {...register("marriageDate")}
                    onChange={(date, dateString) => setMarriageDate(dateString)}
                    placeholder="Marriage Date"
                    className="flex-1 px-2 py-[10px] outline-none h-full bg-transparent text-sm text-gray-400"
                    id="marriageDate"
                  />
                </div>
              </section>
            )}
            {/* ---------- Reason of Divorce ---------- */}
            {maritalStatus === "divorced" && maritalStatus !== "single" && (
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <input
                    {...register("reasonOfDivorce", {
                      required: {
                        value: true,
                        message: "Reason of Divorce is required",
                      },
                    })}
                    type="text"
                    placeholder="Reason of Divorce"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="reasonOfDivorce"
                  />
                </div>
                <h1 className="text-left ml-2">
                  {errors.reasonOfDivorce?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.reasonOfDivorce.message}
                    </span>
                  )}
                </h1>
              </section>
            )}
            {/* ---------- Date of Divorce ---------- */}
            {maritalStatus === "divorced" && maritalStatus !== "single" && (
              <section>
                <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                  <DatePicker
                    onChange={(date, dateString) => setDivorceDate(dateString)}
                    placeholder="Divorce Date"
                    className="flex-1 px-2 py-[10px] outline-none h-full bg-transparent text-sm text-gray-400"
                    id="divorceDate"
                  />
                </div>
              </section>
            )}
            {/* ---------- Do you have children --------- */}
            {maritalStatus === "married" &&
              maritalStatus !== "" &&
              maritalStatus !== "single" && (
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <select
                      {...register("haveChildren", {
                        required: {
                          value: true,
                          message: "Answer is required",
                        },
                      })}
                      type="text"
                      onChange={(e) => setChildrenStatus(e.target.value)}
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="haveChildren"
                    >
                      <option value="">Do you have children?</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.haveChildren?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.haveChildren.message}
                      </span>
                    )}
                  </h1>
                </section>
              )}
            {maritalStatus === "divorced" &&
              maritalStatus !== "" &&
              maritalStatus !== "single" && (
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <select
                      {...register("haveChildren", {
                        required: {
                          value: true,
                          message: "Answer is required",
                        },
                      })}
                      type="text"
                      onChange={(e) => setChildrenStatus(e.target.value)}
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="haveChildren"
                    >
                      <option value="">Do you have children?</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.haveChildren?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.haveChildren.message}
                      </span>
                    )}
                  </h1>
                </section>
              )}
            {maritalStatus === "widowed" &&
              maritalStatus !== "" &&
              maritalStatus !== "single" && (
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <select
                      {...register("haveChildren", {
                        required: {
                          value: true,
                          message: "Answer is required",
                        },
                      })}
                      type="text"
                      onChange={(e) => setChildrenStatus(e.target.value)}
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="haveChildren"
                    >
                      <option value="">Do you have children?</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.haveChildren?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.haveChildren.message}
                      </span>
                    )}
                  </h1>
                </section>
              )}
            {/* ---------- Number Of Boy ---------- */}
            {childrenStatus === "yes" &&
              maritalStatus !== "single" &&
              maritalStatus !== "" && (
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register("numberOfBoy", {
                        required: {
                          value: true,
                          message: "Number of Boy is required",
                        },
                      })}
                      type="number"
                      placeholder="Number of Boy"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="numberOfBoy"
                    />
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.numberOfBoy?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.numberOfBoy.message}
                      </span>
                    )}
                  </h1>
                </section>
              )}
            {/* ---------- Ages Of Boy ---------- */}
            {childrenStatus === "yes" &&
              maritalStatus !== "single" &&
              maritalStatus !== "" && (
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register("agesOfBoy", {
                        required: {
                          value: true,
                          message: "Ages of boy is required",
                        },
                      })}
                      type="number"
                      placeholder="Ages of Boy"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="agesOfBoy"
                    />
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.agesOfBoy?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.agesOfBoy.message}
                      </span>
                    )}
                  </h1>
                </section>
              )}
            {/* ---------- Number Of Girl ---------- */}
            {childrenStatus === "yes" &&
              maritalStatus !== "single" &&
              maritalStatus !== "" && (
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register("numberOfGirl", {
                        required: {
                          value: true,
                          message: "Number of Girl is required",
                        },
                      })}
                      type="number"
                      placeholder="Number of Girl"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="numberOfGirl"
                    />
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.numberOfGirl?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.numberOfGirl.message}
                      </span>
                    )}
                  </h1>
                </section>
              )}
            {/* ---------- Ages Of Girl ---------- */}
            {childrenStatus === "yes" &&
              maritalStatus !== "single" &&
              maritalStatus !== "" && (
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register("agesOfGirl", {
                        required: {
                          value: true,
                          message: "Ages of Girl is required",
                        },
                      })}
                      type="number"
                      placeholder="Ages of Girl"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="agesOfGirl"
                    />
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.agesOfGirl?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.agesOfGirl.message}
                      </span>
                    )}
                  </h1>
                </section>
              )}
            {/* ---------- Partner death date ---------- */}
            {maritalStatus === "widowed" && maritalStatus !== "" && (
              <section>
                <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                  <DatePicker
                    onChange={(date, dateString) =>
                      setPartnerDeathDate(dateString)
                    }
                    placeholder="Partner Death Date"
                    className="flex-1 px-2 py-[10px] outline-none h-full bg-transparent text-sm text-gray-400"
                    id="partnerDeathDay"
                  />
                </div>
              </section>
            )}

            {/* ---------- Parents Status Info Start ---------- */}
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
              Family Member Info
            </section>
            {/* ---------- Status ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <select
                  {...register("isParentsAlive", {
                    required: {
                      value: true,
                      message: "Answer is required",
                    },
                  })}
                  type="text"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="isParentsAlive"
                >
                  <option value="">Parents status?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="mother is alive">Mother is alive</option>
                  <option value="father is alive">Father is alive</option>
                </select>
              </div>
              <h1 className="text-left ml-2">
                {errors.isParentsAlive?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.isParentsAlive.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Have Step Mother ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <select
                  {...register("haveStepMother", {
                    required: {
                      value: true,
                      message: "Answer is required",
                    },
                  })}
                  type="text"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="haveStepMother"
                >
                  <option value="">Have Step Mother?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <h1 className="text-left ml-2">
                {errors.haveStepMother?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.haveStepMother.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Have Step Father ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <select
                  {...register("haveStepFather", {
                    required: {
                      value: true,
                      message: "Answer is required",
                    },
                  })}
                  type="text"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="haveStepFather"
                >
                  <option value="">Have Step Father?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <h1 className="text-left ml-2">
                {errors.haveStepFather?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.haveStepFather.message}
                  </span>
                )}
              </h1>
            </section>

            {/* ---------- Parents Status Info End ---------- */}

            {/* ---------- Number of Brother ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("numberOfBrother")}
                  type="number"
                  placeholder="Number of Brother"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="numberOfBrother"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.numberOfBrother?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.numberOfBrother.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Number of Sister ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("numberOfSister")}
                  type="number"
                  placeholder="Number of Sister"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="numberOfSister"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.numberOfSister?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.numberOfSister.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Social media info ---------- */}
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
              Social Media Link
            </section>
            {/* ---------- LinkedIn Id ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("LinkedInId")}
                  type="text"
                  placeholder="LinkedIn Id"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="LinkedInId"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.LinkedInId?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.LinkedInId.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- FaceBook Id ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("faceBookId")}
                  type="text"
                  placeholder="FaceBook Id"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="faceBookId"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.faceBookId?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.faceBookId.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Instagram Id ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("instagramId")}
                  type="text"
                  placeholder="Instagram Id"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="instagramId"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.instagramId?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.instagramId.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- Optional ---------- */}
            {/* <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">Optional</section> */}
            {/* ---------- Bar registration number ---------- */}
            {/* <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("barRegistrationNumber")}
                                type="text"
                                placeholder="Bar Registration Number"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="barRegistrationNumber"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.barRegistrationNumber?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.barRegistrationNumber.message}</span>
                            )}
                        </h1>
                    </section> */}
            {/* ---------- License No ---------- */}
            {/* <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("licenceNo")}
                                type="text"
                                placeholder="License No"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="licenceNo"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.licenceNo?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.licenceNo.message}</span>
                            )}
                        </h1>
                    </section> */}
            {/* ---------- License Photo ---------- */}
            {/* <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <AiOutlineIdcard className="mr-2 text-gray-400" />
                            <label htmlFor="licencePhoto" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                                {licencePhoto ? (
                                    <>
                                        <span className="text-green-400">Photo added</span>
                                    </>
                                ) : (
                                    "License Photo"
                                )}
                            </label>
                            <input {...register("licencePhoto")} type="file" id="licencePhoto" className="hidden" onChange={licenseHandler} />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.licencePhoto?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.licencePhoto.message}</span>
                            )}
                        </h1>
                    </section> */}
            {/* ---------- Year of bar registration ---------- */}
            {/* <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("yearOfBarRegistration")}
                                type="number"
                                placeholder="Year of Bar Registration"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="yearOfBarRegistration"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.yearOfBarRegistration?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.yearOfBarRegistration.message}</span>
                            )}
                        </h1>
                    </section> */}
            {/* ---------- Extra ---------- */}
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
              Extra Info
            </section>
            {/* ---------- Your Hobbies ---------- */}
            <section>
              <div className="flex items-center bg-gray-100  w-full rounded-lg mt-3 lg:mt-0">
                <Controller
                  {...register("hobbies")}
                  control={control}
                  name="hobbies"
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      onChange={(val) =>
                        onChange(
                          val.map((hobby) =>
                            setHobbies([...hobbies, hobby.value])
                          )
                        )
                      }
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={hobbiesData}
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      placeholder="Select Hobbies"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          backgroundColor: "transparent",
                          border: "none",
                          textAlign: "left",
                          fontSize: "14px",
                          color: "#9CA3AF",
                        }),
                      }}
                    />
                  )}
                ></Controller>
              </div>
            </section>
            {/* ---------- About You ---------- */}
            <section>
              <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                <input
                  {...register("aboutYou")}
                  type="text"
                  placeholder="Your Intro"
                  className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                  id="aboutYou"
                />
              </div>
              <h1 className="text-left ml-2">
                {errors.aboutYou?.type === "required" && (
                  <span className="w-full text-left text-red-400 text-sm">
                    {errors?.aboutYou.message}
                  </span>
                )}
              </h1>
            </section>
            {/* ---------- What are you looking for ---------- */}
            {role === "member" && (
              <section>
                <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                  <select
                    {...register("whatAreYouLookingFor", {
                      required: {
                        value: true,
                        message: "Answer is required",
                      },
                    })}
                    type="text"
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id="whatAreYouLookingFor"
                  >
                    <option value="">What Are You Looking For?</option>
                    <option value="man">Men</option>
                    <option value="woman">Women</option>
                  </select>
                </div>
                <h1 className="text-left ml-2">
                  {errors.whatAreYouLookingFor?.type === "required" && (
                    <span className="w-full text-left text-red-400 text-sm">
                      {errors?.whatAreYouLookingFor.message}
                    </span>
                  )}
                </h1>
              </section>
            )}
          </section>
          <div className="flex items-center w-full justify-center gap-x-[20px] mt-[20px]">
            <input
              type="submit"
              value={isLoading ? "Saving..." : "Next"}
              className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
            />
          </div>
        </form>
      )}
    </div>
  );
};
