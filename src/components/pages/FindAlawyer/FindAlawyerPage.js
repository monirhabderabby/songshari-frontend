// Configuration
import React, { useState } from "react";
import { Outlet } from "react-router";

// Components
import { FindLawyerKaziAgentHeader } from "../../shared/Components/FindLawyerKaziAgent/FindLawyerKaziAgentHeader";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import FindLawyerAgentKaziFilterBox from "../../shared/Components/FindLawyerKaziAgent/FindLawyerAgentKaziFilterBox";
const FindAlawyerPage = () => {
  const [designation, setDesignation] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceProvide, setServiceProvide] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");
  const [court, setCourt] = useState("");
  const [hometown, setHomeTown] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [professionalExperience, setProfessionalExperience] = useState("");
  const [educationQualification, setEducationQualification] = useState("");
  const [rating, setRating] = useState("");
  const [caseCompleted, setCaseCompleted] = useState("");
  const [successRatio, setSuccessRatio] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const filterData = {};

  const handleSubmit = () => {
    filterData.designation = designation;
    filterData.serviceCategory = serviceCategory;
    filterData.serviceProvide = serviceProvide;
    filterData.officeLocation = officeLocation;
    filterData.court = court;
    filterData.hometown = hometown;
    filterData.currentLocation = currentLocation;
    filterData.professionalExperience = professionalExperience;
    filterData.educationQualification = educationQualification;
    filterData.rating = rating;
    filterData.caseCompleted = caseCompleted;
    filterData.successRatio = successRatio;
    filterData.citizenship = citizenship;
    filterData.gender = gender;
    filterData.age = age;
  };

  return (
    <>
      <CustomHeader title="Find Lawyer" />
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 mt-5 min-h-screen">
        <div className="col-span-1">
          <FindLawyerAgentKaziFilterBox
            {...{
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
            }}
          />
        </div>
        <div className="flex flex-col col-span-3">
          <FindLawyerKaziAgentHeader page="lawyer" />
          <div className="h-full w-full mt-[20px] px-[20px]">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <Footer />
      </div>
    </>
  );
};

export default FindAlawyerPage;
