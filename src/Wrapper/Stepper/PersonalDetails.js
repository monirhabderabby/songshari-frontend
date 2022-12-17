// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { DatePicker } from "antd";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import { v4 as uuidv4 } from "uuid";

// components
import { firebaseStorage } from "../../firebase.init";
import { AiOutlineCloudUpload, AiOutlineIdcard } from "react-icons/ai";
import { useSetPersonalDetailsMutation } from "../../Redux/features/userInfo/userApi";

export const PersonalDetails = ({ setPage }) => {
  const [
    setPersonalDetails,
    { data: personalDetailsResponse, isLoading, isError },
  ] = useSetPersonalDetailsMutation();

  const [profilePhoto, setProfilePhoto] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [frontSide, setFrontSide] = useState("");
  const [backSide, setBackSide] = useState("");
  const [professionalAchievementMoment, setProfessionalAchievementMoment] =
    useState("");
  const [addedAchievementMoment, setAddedAchievementMoment] = useState([]);
  const [educationalAchievementMoment, setEducationalAchievementMoment] =
    useState("");
  // const [licencePhoto, setLicencePhoto] = useState("");
  const [meritalStatus, setMeritalStatus] = useState("");
  const [citizenShip, setCitizenShip] = useState([]);
  const [dateOfBirth, setDateOfBirth] = useState();
  const [marriageDate, setMarriageDate] = useState();
  const [dicorceDate, setdicorceDate] = useState();
  const [partnerDeathDate, setPartnerDeathDate] = useState();
  const [theCurrentWorkPeriod, setTheCurrentWorkPeriod] = useState();
  const [addedWorkPeriod, setAddedWorkPeriod] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  // Education
  const [degreeName, setDegreeName] = useState("");
  const [eduDepartment, setEduDepartment] = useState("");
  const [eduInstitute, setEduInstitute] = useState("");
  const [eduFieldOfStudy, setEduFieldOfStudy] = useState("");
  const [eduYearOfPassing, setEduYearOfPassing] = useState("");

  // Physical
  const [ancestry, setAncestry] = useState("");
  const [SkinTone, setSkinTone] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [hairColour, setHairColour] = useState("");
  const [hairType, setHairType] = useState("");
  const [numberOfTeeth, setNumberOfTeeth] = useState("");

  const { RangePicker } = DatePicker;

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "professions",
    control,
  });

  // hobbies
  const [hobbiesData, setHobbiesData] = useState([]);
  useEffect(() => {
    fetch("json/hobby.json")
      .then((res) => res.json())
      .then((data) => setHobbiesData(data));
  }, []);

  // Ancestry
  const [ancestryData, setAncestryData] = useState([]);
  useEffect(() => {
    fetch("json/ancestry.json")
      .then((res) => res.json())
      .then((data) => setAncestryData(data));
  }, []);

  // Zodiac Sign
  const [zodiacSign, setZodiacSign] = useState([]);
  const [zodiacSignValue, setZodiacSignValue] = useState("");
  const [zodiacSignSuggestion, setZodiacSignSuggestion] = useState("");
  useEffect(() => {
    fetch("json/zodiacSign.json")
      .then((res) => res.json())
      .then((data) => setZodiacSign(data));
  }, []);
  const [childrenStatus, setChildrenStatus] = useState("");

  // Countries
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("json/countries.json")
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

  if (isError) {
    console.log(isError);
  }
  useEffect(() => {
    fetch("json/district.json")
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
    const hightestEducationalQualification = {};
    const currentProfession = {};

    Object.keys(data).forEach(function (key) {
      if (
        key === "CurrentProfessionposition" ||
        key === "CurrentProfessionInstitute" ||
        key === "specialAchievement"
      ) {
        currentProfession[key] = data[key];
      }
    });

    Object.keys(data).forEach(function (key) {
      if (key === "degreeName") {
        hightestEducationalQualification[key] = data[key];
      }
    });

    delete data.degreeName;
    delete data.eduInstitute;
    delete data.eduDepartment;
    delete data.eduFieldOfStudy;
    delete data.eduYearOfPassing;
    delete data.educationalAchievementMoment;

    hightestEducationalQualification.degreeName = degreeName;
    hightestEducationalQualification.institute = eduInstitute;
    hightestEducationalQualification.Department = eduDepartment;
    hightestEducationalQualification.fieldOfStudy = eduFieldOfStudy;
    hightestEducationalQualification.yearOfPassing = eduYearOfPassing;
    hightestEducationalQualification.specialAchievement =
      data.specialEducationalAchievement;
    hightestEducationalQualification.eduAchievementMoment =
      educationalAchievementMoment;

    delete data.specialEducationalAchievement;

    //current profession object delete from main object
    delete data.CurrentProfessionposition;
    delete data.CurrentProfessionInstitute;
    delete data.currentWorkPeriod;
    delete data.specialAchievement;
    delete data.professionalAchievementMoment;

    currentProfession.position = currentProfession.CurrentProfessionposition;
    currentProfession.institute = currentProfession.CurrentProfessionInstitute;

    delete currentProfession.CurrentProfessionposition;
    delete currentProfession.CurrentProfessionInstitute;
    delete data.citizenShip;

    currentProfession.workPeriod = theCurrentWorkPeriod;
    currentProfession.achievementMoment = professionalAchievementMoment;

    //photo links upload
    data.profilePhoto = profilePhoto;
    data.coverPhoto = coverPhoto;
    // data.licencePhoto = licencePhoto;
    // data.professionalAchievementMoment = professionalAchievementMoment;

    delete data.frontSide;
    delete data.backSide;
    // Nid or passport object
    const NidOrPassportPhoto = Object.create(data);
    NidOrPassportPhoto.frontSide = frontSide;
    NidOrPassportPhoto.backSide = backSide;

    data.professions.map((p) => delete p.addedProfessionWorkPeriod);
    data.professions.map(
      (p, index) => (p.addedProfessionWorkPeriod = addedWorkPeriod[index])
    );

    data.professions.map((p) => delete p.addedProfessionAchievementMoment);
    data.professions.map(
      (p, index) =>
        (p.addedProfessionAchievementMoment = addedAchievementMoment[index])
    );
    data = {
      ...data,
      NidOrPassportPhoto,
      hightestEducationalQualification,
      currentProfession,
      dateOfBirth,
      ancestry,
      eyeColor,
      hairColour,
      hairType,
      numberOfTeeth,
      SkinTone,
      hobbies,
      marriageDate,
      dicorceDate,
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
    const photo = e.target.files[0];
    const storageRef = ref(
      firebaseStorage,
      `profile/${photo?.name + uuidv4()}`
    );
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setProfilePhoto(url.toString());
      });
    });
  };

  const coverPhotoHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `cover/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setCoverPhoto(url.toString());
      });
    });
  };

  const professionalAchievementMomentHandler = async (e) => {
    const photo = e.target.files[0];
    console.log(photo);
    const storageRef = ref(firebaseStorage, `cover/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setProfessionalAchievementMoment(url.toString());
      });
    });
  };

  const addedProfessionAchievementMomentHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `moment/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setAddedAchievementMoment([...addedAchievementMoment, url.toString()]);
      });
    });
  };

  const educationalAchievementMomentHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `cover/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setEducationalAchievementMoment(url.toString());
      });
    });
  };

  const frontSideNIDHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `nid/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setFrontSide(url.toString());
      });
    });
  };
  const backSideNIDHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `nid/${photo?.name + uuidv4()}`);
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setBackSide(url.toString());
      });
    });
  };
  // const licenseHandler = async e => {
  //     const photo = e.target.files[0];
  //     const storageRef = ref(firebaseStorage, `license/${photo.name + uuidv4()}`);
  //     uploadBytes(storageRef, photo).then(async snapshot => {
  //         await getDownloadURL(snapshot.ref).then(url => {
  //             setLicencePhoto(url.toString());
  //         });
  //     });
  // };

  const onDateOfBirthChange = (date, dateString) => {
    setDateOfBirth(dateString);
  };
  const onCurrentWorkPeriodChange = (value, dateString) => {
    setTheCurrentWorkPeriod(dateString);
  };
  const onAddedWorkPeriodChange = (value, dateString) => {
    setAddedWorkPeriod([...addedWorkPeriod, dateString]);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full h-auto">
      {/* ---------- Header ---------- */}
      <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-8">
        <p>Personal Information Form</p>
        <hr className="w-1/2 mt-2 mx-auto" />
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
          {/* ---------- First Name ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                })}
                type="text"
                placeholder="First name"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="firstName"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.firstName?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.firstName.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Last Name ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                })}
                type="text"
                placeholder="Last name"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="lastName"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.lastName?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.lastName.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Designation ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("designation")}
                type="text"
                placeholder="Designation"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="designation"
              />
            </div>
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
                onChange={onDateOfBirthChange}
              />
            </div>
          </section>
          {/* ---------- Hometown ---------- */}
          <section className="relative">
            <div
              className={`flex items-center  p-3 w-full rounded-lg mt-3 lg:mt-0 ${
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
              className={`bg-white shadow-lg absolute top-[40px] right-0 w-full rounded-br-lg rounded-bl-lg overflow-y-scroll ${
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
              {errors.hometown?.type === "required" && (
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
                  <>
                    <span className="text-green-400">Profile Photo added</span>
                  </>
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
              {errors.profilePhoto?.type === "required" && (
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
                    <span className="text-green-400">Cover Photo added</span>
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
                  required: {
                    value: true,
                    message: "Nid Or Passport Number is required",
                  },
                  minLength: {
                    value: 10,
                    message: "Nid or Passport number must be 10 or 17 digit",
                  },
                  maxLength: {
                    value: 17,
                    message: "Nid or Passport number must be 10 or 17 digit",
                  },
                })}
                type="text"
                placeholder="Nid Or Passport Number"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="NidOrPassportNumber"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.NidOrPassportNumber?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.NidOrPassportNumber.message}
                </span>
              )}
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
                {frontSide ? (
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
              {errors.frontSide?.type === "required" && (
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
                {backSide ? (
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
              {errors.backSide?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.backSide.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Citizenship ---------- */}
          <section>
            <div className="flex items-center bg-gray-100  w-full rounded-lg mt-3 lg:mt-0">
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
              className={`flex items-center  p-3 w-full rounded-lg mt-3 lg:mt-0 ${
                zodiacSignSuggestion.length > 0
                  ? "rounded-br-none rounded-bl-none shadow-lg bg-white"
                  : "bg-gray-100"
              }`}
            >
              <input
                {...register("zodiacSign", {
                  required: {
                    value: true,
                    message: "Zodiac Sign is required",
                  },
                })}
                type="text"
                placeholder="Zodiac Sign"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="zodiacSign"
                onChange={(e) => zodiacSignHandler(e.target.value)}
                value={zodiacSignValue}
              />
            </div>
            <div
              className={`bg-white shadow-lg absolute top-[40px] right-0 w-full rounded-br-lg rounded-bl-lg overflow-y-scroll ${
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
            <h1 className="text-left ml-2">
              {errors.zodiacSign?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.zodiacSign.message}
                </span>
              )}
            </h1>
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
              className={`flex items-center  p-3 w-full rounded-lg mt-3 lg:mt-0 ${
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
                onChange={(e) => handleTownPermanentSuggestion(e.target.value)}
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
              {errors.townPermanent?.type === "required" && (
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
                        setPermanentCountryValue(suggetion?.name);
                        setCountriesSuggestionForParmanent([]);
                      }}
                    >
                      {suggetion?.value}
                    </div>
                  );
                })}
            </div>
            <h1 className="text-left ml-2">
              {errors.hometown?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.hometown.message}
                </span>
              )}
            </h1>
          </section>

          {/* --------------------------- Permanent Adress End ------------------------- */}

          {/* --------------------------- Current Adress Start ------------------------- */}
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
              className={`flex items-center  p-3 w-full rounded-lg mt-3 lg:mt-0 ${
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
              {errors.townCurrent?.type === "required" && (
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
                        setCurrentCountryValue(suggetion?.name);
                        setCountriesSuggestionForCurrent([]);
                      }}
                    >
                      {suggetion?.value}
                    </div>
                  );
                })}
            </div>
            <h1 className="text-left ml-2">
              {errors.countryCurrent?.type === "required" && (
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
                onChange={(e) => setMeritalStatus(e.target.value)}
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="maritalStatus"
              >
                <option value="">Select Marital Status</option>
                <option value="single">Never Married</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <h1 className="text-left ml-2">
              {errors.maritalStatus?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.maritalStatus.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Number Of Partner ---------- */}
          {meritalStatus === "married" && meritalStatus !== "single" && (
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
          {meritalStatus === "married" && meritalStatus !== "single" && (
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
          {meritalStatus === "married" && meritalStatus !== "single" && (
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
          {meritalStatus === "married" && meritalStatus !== "single" && (
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
          {meritalStatus === "divorced" && meritalStatus !== "single" && (
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
          {meritalStatus === "divorced" && meritalStatus !== "single" && (
            <section>
              <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                <DatePicker
                  {...register("dicorceDate")}
                  onChange={(date, dateString) => setdicorceDate(dateString)}
                  placeholder="Divorce Date"
                  className="flex-1 px-2 py-[10px] outline-none h-full bg-transparent text-sm text-gray-400"
                  id="dicorceDate"
                />
              </div>
            </section>
          )}
          {/* ---------- Do you have children --------- */}
          {/* {meritalStatus !== "" || meritalStatus !== "single" || ( */}
          {meritalStatus === "married" &&
            meritalStatus !== "" &&
            meritalStatus !== "single" && (
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
          {meritalStatus === "divorced" &&
            meritalStatus !== "" &&
            meritalStatus !== "single" && (
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
          {meritalStatus === "widowed" &&
            meritalStatus !== "" &&
            meritalStatus !== "single" && (
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
            meritalStatus !== "single" &&
            meritalStatus !== "" && (
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
            meritalStatus !== "single" &&
            meritalStatus !== "" && (
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
            meritalStatus !== "single" &&
            meritalStatus !== "" && (
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
            meritalStatus !== "single" &&
            meritalStatus !== "" && (
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
          {meritalStatus === "widowed" && meritalStatus !== "" && (
            <section>
              <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                <DatePicker
                  {...register("partnerDeathDay")}
                  onChange={(date, dateString) =>
                    setPartnerDeathDate(dateString)
                  }
                  placeholder="Partner Death Date"
                  className="flex-1 px-2 py-[10px] outline-none h-full bg-transparent text-sm text-gray-400"
                  id="partnerDeathDay"
                />
              </div>
              {/* <h1 className="text-left ml-2">
                                {errors.partnerDeathDay?.type === "required" && (
                                    <span className="w-full text-left text-red-400 text-sm">{errors?.partnerDeathDay.message}</span>
                                )}
                            </h1> */}
            </section>
          )}
          {/* ------------------------ Current profession field start ------------------------ */}

          {/* ---------- Current Profession info ---------- */}
          <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
            Current Profession Info
          </section>
          {/* ---------- Position ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("CurrentProfessionposition", {
                  required: {
                    value: true,
                    message: "Position is required",
                  },
                })}
                type="text"
                placeholder="Position"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="position"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.position?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.position.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Institution ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("CurrentProfessionInstitute", {
                  required: {
                    value: true,
                    message: "Institution is required",
                  },
                })}
                type="text"
                placeholder="Institution"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="institute"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.CurrentProfessionInstitute?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.CurrentProfessionInstitute.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Work Period ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <RangePicker
                {...register("currentWorkPeriod")}
                placeholder={["Start Date", "End Date"]}
                className="flex-1 px-2 py-[10px] outline-none h-full bg-transparent text-sm text-gray-400"
                id="workPeriod"
                bordered={false}
                onChange={onCurrentWorkPeriodChange}
              />
            </div>
            {/* <h1 className="text-left ml-2">
                            {errors.workPeriod?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.workPeriod.message}</span>
                            )}
                        </h1> */}
          </section>
          {/* ---------- Special Professional Achievement ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("specialAchievement", {
                  required: {
                    value: true,
                    message: "Special Professional Achievement is required",
                  },
                })}
                type="text"
                placeholder="Special Achievement"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="specialAchievement"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.specialAchievement?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.specialAchievement.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Professional Achievement moment ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
              <label
                htmlFor="professionalAchievementMoment"
                className="outline-none h-full text-sm text-gray-400 bg-gray-100"
              >
                {professionalAchievementMoment ? (
                  <>
                    <span className="text-green-400">Moments added</span>
                  </>
                ) : (
                  "Upload Achievement Moments"
                )}
              </label>
              <input
                {...register("professionalAchievementMoment")}
                type="file"
                id="professionalAchievementMoment"
                className="hidden"
                onChange={professionalAchievementMomentHandler}
              />
            </div>
          </section>

          {/* <section className="col-span-1 md:col-span-2 lg:col-span-3 text-left text-lg font-bold">
                        Add more professional experience
                    </section> */}
          <br />
          {fields.map((field, index) => {
            return (
              <section
                className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-3 gap-3"
                key={field.id}
              >
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register(
                        `professions.${index}.addedProfessionPosition`,
                        {
                          required: {
                            value: true,
                            message: "Position is required",
                          },
                        }
                      )}
                      type="text"
                      placeholder="Position"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="position"
                    />
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.addedProfessionPosition?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.addedProfessionPosition.message}
                      </span>
                    )}
                  </h1>
                </section>
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register(
                        `professions.${index}.addedProfessionInstitute`,
                        {
                          required: {
                            value: true,
                            message: "Institution is required",
                          },
                        }
                      )}
                      type="text"
                      placeholder="Institution"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="institute"
                    />
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.addedProfessionInstitute?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.addedProfessionInstitute.message}
                      </span>
                    )}
                  </h1>
                </section>
                <section>
                  <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
                    <RangePicker
                      {...register(
                        `professions.${index}.addedProfessionWorkPeriod`
                      )}
                      placeholder={["Start Date", "End Date"]}
                      className="flex-1 px-2 py-[10px] outline-none h-full bg-transparent text-sm text-gray-400"
                      id="workPeriod"
                      bordered={false}
                      onChange={onAddedWorkPeriodChange}
                    />
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.addedProfessionWorkPeriod?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.addedProfessionWorkPeriod.message}
                      </span>
                    )}
                  </h1>
                </section>
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <input
                      {...register(
                        `professions.${index}.addedProfessionAchievement`,
                        {
                          required: {
                            value: true,
                            message:
                              "Special Professional Achievement is required",
                          },
                        }
                      )}
                      type="text"
                      placeholder="Special Achievement"
                      className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                      id="specialAchievement"
                    />
                  </div>
                  <h1 className="text-left ml-2">
                    {errors.addedProfessionAchievement?.type === "required" && (
                      <span className="w-full text-left text-red-400 text-sm">
                        {errors?.addedProfessionAchievement.message}
                      </span>
                    )}
                  </h1>
                </section>
                <section>
                  <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                    <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                    <label
                      htmlFor="addedProfessionAchievementMoment"
                      className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                    >
                      {addedAchievementMoment.length > 0 ? (
                        <>
                          <span className="text-green-400">
                            Moments new added
                          </span>
                        </>
                      ) : (
                        "Upload new Achievement Moments"
                      )}
                    </label>
                    <input
                      {...register(
                        `professions.${index}.addedProfessionAchievementMoment`
                      )}
                      type="file"
                      id="addedProfessionAchievementMoment"
                      className="hidden"
                      onChange={addedProfessionAchievementMomentHandler}
                    />
                  </div>
                </section>
                <button
                  className="p-3 text-sm text-center font-medium bg-red-100 text-red-500 rounded-lg"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Remove
                </button>
              </section>
            );
          })}
          <button
            type="button"
            className="p-3 text-sm text-center font-medium text-gray-400 bg-gray-100 rounded-lg"
            onClick={() => {
              append({
                addedProfessionPosition: "",
                addedProfessionInstitute: "",
                addedProfessionWorkPeriod: "",
                addedProfessionAchievement: "",
                addedProfessionAchievementMoment: "",
              });
            }}
          >
            + Add More Professional Experience
          </button>

          {/* ------------------------ Current profession field end ------------------------ */}

          {/* ---------------------- Highest education qualification start --------------------- */}

          {/* ---------- Education info ---------- */}
          <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
            Highest Educational Info
          </section>
          {/* ---------- Degree Name ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("degreeName")}
                onChange={(val) => setDegreeName(val.value)}
                type="text"
                placeholder="Degree Name"
                // options={options}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="degreeName"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.degreeName?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.degreeName.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Institution ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("eduInstitute")}
                onChange={(val) => setEduInstitute(val.value)}
                type="text"
                placeholder="Institution"
                // options={options}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="eduInstitute"
              />
            </div>
          </section>
          {/* ---------- Department Name ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("eduDepartment")}
                onChange={(val) => setEduDepartment(val.value)}
                type="text"
                placeholder="Department Name"
                // options={options}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="Department"
              />
            </div>
            {/* <h1 className="text-left ml-2">
                            {errors.Department?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.Department.message}</span>
                            )}
                        </h1> */}
          </section>
          {/* ---------- Field of Study ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("eduFieldOfStudy")}
                onChange={(val) => setEduFieldOfStudy(val.value)}
                type="text"
                placeholder="Field of Study"
                // options={options}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="fieldOfStudy"
              />
            </div>
            {/* <h1 className="text-left ml-2">
                            {errors.fieldOfStudy?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.fieldOfStudy.message}</span>
                            )}
                        </h1> */}
          </section>
          {/* ---------- Year of Passing ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <DatePicker
                {...register("eduYearOfPassing")}
                onChange={(date, dateString) => setEduYearOfPassing(dateString)}
                placeholder="Year of Passing"
                className="flex-1 px-2 py-2 outline-none h-full bg-transparent text-sm text-gray-400"
                id="yearOfPassing"
                bordered={false}
              />
            </div>
            {/* <h1 className="text-left ml-2">
                            {errors.yearOfPassing?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.yearOfPassing.message}</span>
                            )}
                        </h1> */}
          </section>
          {/* ---------- Special Educational Achievement ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("specialEducationalAchievement", {
                  required: {
                    value: true,
                    message: "Special Educational Achievement is required",
                  },
                })}
                type="text"
                placeholder="Special Achievement"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="specialEducationalAchievement"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.specialEducationalAchievement?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.specialEducationalAchievement.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Educational Achievement Moment ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
              <label
                htmlFor="educationalAchievementMoment"
                className="outline-none h-full text-sm text-gray-400 bg-gray-100"
              >
                {educationalAchievementMoment ? (
                  <>
                    <span className="text-green-400">Moments added</span>
                  </>
                ) : (
                  "Upload Achievement Moments"
                )}
              </label>
              <input
                {...register("educationalAchievementMoment")}
                type="file"
                id="educationalAchievementMoment"
                className="hidden"
                onChange={educationalAchievementMomentHandler}
              />
            </div>
          </section>

          {/* --------------------- Highest education qualification end ---------------------- */}

          {/* ---------- Physical info ---------- */}
          <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
            Physical Info
          </section>
          {/* ---------- Height ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("height", {
                  required: {
                    value: true,
                    message: "Height is required",
                  },
                })}
                type="text"
                placeholder="Height"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="height"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.height?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.height.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Weight ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("weight", {
                  required: {
                    value: true,
                    message: "Weight is required",
                  },
                })}
                type="text"
                placeholder="Weight"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="weight"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.weight?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.weight.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Ancestry ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("ancestry")}
                onChange={(val) => setAncestry(val.value)}
                type="text"
                placeholder="Ancestry"
                options={ancestryData}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="ancestry"
              />
            </div>
          </section>
          {/* ---------- Skin Tone ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("SkinTone")}
                onChange={(val) => setSkinTone(val.value)}
                type="text"
                placeholder="Skin Tone"
                options={[
                  {
                    value: "Dark",
                    label: "Dark",
                  },
                  {
                    value: "Brown",
                    label: "Brown",
                  },
                  {
                    value: "White",
                    label: "White",
                  },
                ]}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="SkinTone"
              />
            </div>
          </section>
          {/* ---------- Hair Color ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("hairColour")}
                onChange={(val) => setHairColour(val.value)}
                type="text"
                placeholder="Hair Color"
                // options={options}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="hairColour"
              />
            </div>
          </section>
          {/* ---------- Hair Type ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("hairType")}
                onChange={(val) => setHairType(val.value)}
                type="text"
                placeholder="Hair Type"
                // options={options}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="hairType"
              />
            </div>
          </section>
          {/* ---------- Eye Color ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("eyeColor")}
                onChange={(val) => setEyeColor(val.value)}
                type="text"
                placeholder="Eye Color"
                // options={options}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="eyeColor"
              />
            </div>
          </section>
          {/* ---------- Number of Teeth ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 w-full rounded-lg mt-3 lg:mt-0">
              <CreatableSelect
                {...register("numberOfTeeth")}
                onChange={(val) => setNumberOfTeeth(val.value)}
                type="number"
                placeholder="Number of Teeth"
                // options={options}
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
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="numberOfTeeth"
              />
            </div>
          </section>
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
                <option value="men">Men</option>
                <option value="women">Women</option>
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

          {/* -------------------- Professional Details field -------------------- */}

          {/* ---------- Extra ---------- */}
          <section className="col-span-1 md:col-span-2 lg:col-span-3 text-[#2F3659] font-medium text-left ml-1">
            Professional Info
          </section>
          {/* ---------- Year of Experience ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("yearOfExperience")}
                type="number"
                placeholder="Year of Experience"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="yearOfExperience"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.yearOfExperience?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.yearOfExperience.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Office Location ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("officeLocation")}
                type="text"
                placeholder="Office Location"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="officeLocation"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.officeLocation?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.officeLocation.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Service Category ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("serviceCategory")}
                type="text"
                placeholder="Service Category"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="serviceCategory"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.serviceCategory?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.serviceCategory.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Your Provided Service ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("serviceProvide")}
                type="text"
                placeholder="Your Provided Service"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="serviceProvide"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.serviceProvide?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.serviceProvide.message}
                </span>
              )}
            </h1>
          </section>
          {/* ---------- Monthly Income ---------- */}
          <section>
            <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
              <input
                {...register("monthlyIncome")}
                type="text"
                placeholder="Monthly Income"
                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                id="monthlyIncome"
              />
            </div>
            <h1 className="text-left ml-2">
              {errors.monthlyIncome?.type === "required" && (
                <span className="w-full text-left text-red-400 text-sm">
                  {errors?.monthlyIncome.message}
                </span>
              )}
            </h1>
          </section>
        </section>
        <div className="flex items-center w-full justify-center gap-x-[20px] mt-[20px]">
          <button
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
            onClick={() => setPage(1)}
          >
            Previous
          </button>
          <input
            type="submit"
            value={isLoading ? "Saving..." : "Next"}
            className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
          />
        </div>
      </form>
    </div>
  );
};
