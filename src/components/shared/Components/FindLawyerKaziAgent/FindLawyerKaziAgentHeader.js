// Configuration
import React, { useEffect, useState } from "react";

// third party package
import { useDispatch } from "react-redux";

// Components
import {
  setAgentSearchTerm,
  setKaziSearchTerm,
  setLawyerSearchTerm,
} from "../../../../Redux/features/FindLawyerKaziAgentFilter/findLawyerKaziAgentFilterSlice";
import filterIcon from "../../../../assets/images/findPartner/filter.svg";
import { Modal } from "antd";
import FindLawyerAgentKaziFilterBox from "./FindLawyerAgentKaziFilterBox";

export const FindLawyerKaziAgentHeader = ({ page }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [filterModalVisible, setFilterModalVisible] = useState(false);

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

  const dispatch = useDispatch();

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

  const showFilterModal = () => {
    setFilterModalVisible(true);
  };

  const handleFilterModalCancel = () => {
    setFilterModalVisible(false);
  };
  //   const options = [
  //     {
  //       value: "Recent",
  //       label: "Recent",
  //     },
  //     {
  //       value: "Top Seller",
  //       label: "Top seller",
  //     },
  //     {
  //       value: "Best Seller",
  //       label: "Best Seller",
  //     },
  //   ];

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (page === "lawyer") {
      dispatch(setLawyerSearchTerm(debouncedSearchTerm));
    } else if (page === "kazi") {
      dispatch(setKaziSearchTerm(debouncedSearchTerm));
    } else if (page === "agent") {
      dispatch(setAgentSearchTerm(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, page, dispatch]);

  return (
    <div className="w-full flex justify-between px-0 md:px-[20px]">
      <div
        style={{
          border: "2px solid #FFE8F3",
        }}
        className="relative flex items-center w-[210px] md:w-[386px] h-[45px] shadow-sm rounded-lg bg-white overflow-hidden"
      >
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search user name.."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* <div>
        <Select
          styles={{
            control: (base, state) => ({
              ...base,
              border: state.isFocused
                ? "2px solid #A32CCB"
                : "2px solid #FFE8F3",
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#ff317b" : "#FFE8F3",
              color: state.isFocused ? "white" : "#ff317b",
            }),
          }}
          defaultValue={options[0]}
          options={options}
          onChange={(selected) => console.log(selected)}
        />
      </div> */}

      <div className="lg:hidden">
        <button
          className="w-24 h-10 flex justify-center items-center gap-x-[9px] special_profile_button ml-[13px]"
          onClick={showFilterModal}
        >
          <img src={filterIcon} alt="filter" />
          <span>Filter</span>
        </button>
      </div>

      {/* Modal for responsive device */}
      <Modal
        title={null}
        closable={false}
        open={filterModalVisible}
        onCancel={handleFilterModalCancel}
        footer={null}
        width={370}
      >
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
      </Modal>
    </div>
  );
};
