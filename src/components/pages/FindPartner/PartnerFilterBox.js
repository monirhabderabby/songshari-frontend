import React, { useState } from "react";
import Accordian from '../../../components/SingleProfilesUser/profileSection/Accordion';
import FindPartner from "../../../assets/css/FindPartner.module.css";
import { Input, Select } from 'antd';
import { AccordionPartner } from "./AccordionPartner";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const PartnerFilterBox = () => {
  const [remuneration, setRemuneration] = useState(true);
  const [location, setLocation] = useState(true);
  const [hometown, setHomeTown] = useState(true);
  const [current, setCurrent] = useState(true);
  const [marrital, setMarritul] = useState(true);
  const [religion, setRelion] = useState(true);
  const [category, setCategory] = useState(true);
  const [qualifications, setQualifications] = useState(true);
  const [categoryItem, setCategoryItem] = useState("Bride");
  const [locationItem, setLocationItem] = useState("Myself");
  const [religionItem, setReligionItem] = useState("Islam");
  const [hometownItem, setHomeTownItem] = useState("Dhaka");
  const [currentItem, setCurrentItem] = useState("Dhaka");
  const [remunerationItem, setRemunerationItem] = useState("  30,000 - 40,000");
  const [qualificationsItem, setQualificationsItem] =
    useState(" Dhaka");
  const [maritalItem, setMaritalItem] =
    useState(" Single");

  return (
    <>
      <div
        id="join-now-box2"
        className={`bg-[#fff]  ${FindPartner.partnerFilterBox} w-[400px] lg:w-full mx-auto rounded-[10px] px-[30px] py-[40px]`}
        style={{
          visibility: "visible",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.12)",
        }}
      >
<h2 className="text-[#000000] text-[15px] font-bold mb-[16px]">
            Basic Information <i class="fa-solid fa-chevron-right ml-28"></i>
          </h2>

        {/* Category input  */}
        <div className="flex ] flex-col border-b-[2px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
            Looking For
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">
              {categoryItem}
            </h4>
            <div className=" relative">
              <button onClick={() => setCategory(!category)}>
                {" "}
                <i className="fa-solid font-semibold fa-chevron-down"></i>
              </button>

              <div
                className={`absolute top-[44px] border ${
                  category ? "hidden" : "block"
                } right-0 z-10 w-[260px] bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-1 text-[#000000] font-medium text-base text-center dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <p
                      onClick={(event) =>
                        setCategoryItem(event.target.innerText)
                      }
                      className="block cursor-pointer font-semibold py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Bride
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={(event) =>
                        setCategoryItem(event.target.innerText)
                      }
                      className="block cursor-pointer font-semibold py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Groom
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* location input  */}
        <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
           For
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">
              {" "}
              {locationItem}
            </h4>
            <div className=" relative">
              <button onClick={() => setLocation(!location)}>
                {" "}
                <i className="fa-solid font-semibold fa-chevron-down"></i>
              </button>

              <div
                className={`absolute top-[44px] border ${
                  location ? "hidden" : "block"
                } right-0 z-10 w-[260px] bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-1 text-[#000000] font-medium text-base text-center dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <p
                      onClick={(event) =>
                        setLocationItem(event.target.innerText)
                      }
                      className="block font-semibold py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Myself
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Rating input  */}
        <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">Rating</h2>
          <div className=" pb-[10px] ">
            <div className="flex mt-[16px]">
              {" "}
              <button className="w-[70px] bg-[#FAFCFF] h-[40px] py-[8px]  rounded-xl border border-[#BDCADB] text-sm text-[#6E84AB] font-medium">
                3 Star
              </button>
            </div>

          </div>
        </div>
{/* Religion  */}
<div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
           Religion
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">
              {" "}
              {religionItem}
            </h4>
            <div className=" relative">
              <button onClick={() => setRelion(!religion)}>
                {" "}
                <i className="fa-solid font-semibold fa-chevron-down"></i>
              </button>

              <div
                className={`absolute top-[44px] border ${
                  religion ? "hidden" : "block"
                } right-0 z-10 w-[260px] bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-1 text-[#000000] font-medium text-base text-center dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <p
                      onClick={(event) =>
                        setReligionItem(event.target.innerText)
                      }
                      className="block font-semibold py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Islam
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
{/* Home town  */}
<div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
           Home Town
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">
              {" "}
              {hometownItem}
            </h4>
            <div className=" relative">
              <button onClick={() => setHomeTown(!hometown)}>
                {" "}
                <i className="fa-solid font-semibold fa-chevron-down"></i>
              </button>

              <div
                className={`absolute top-[44px] border ${
                  hometown ? "hidden" : "block"
                } right-0 z-10 w-[260px] bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-1 text-[#000000] font-medium text-base text-center dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <p
                      onClick={(event) =>
                        setHomeTownItem(event.target.innerText)
                      }
                      className="block font-semibold py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Dhaka
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  Current Location  */}
       {/*  Qualifications*/}
       <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
           Current Location
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">
              {qualificationsItem}
            </h4>
            <div className=" relative">
              <button onClick={() => setQualifications(!qualifications)}>
                {" "}
                <i className="fa-solid font-semibold fa-chevron-down"></i>
              </button>

              <div
                className={`absolute top-[44px] border ${
                  qualifications ? "hidden" : "block"
                } right-0 z-10 w-[260px] bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-1 text-[#000000] font-medium text-base text-center dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <p
                      onClick={(event) =>
                        setQualificationsItem(event.target.innerText)
                      }
                      className="block font-semibold py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                    Dhaka
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*  Total Case */}
        <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
            Citizenship
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base"></h4>
            <div>
              <i className="fa-solid font-semibold fa-chevron-down"></i>
            </div>
          </div>
        </div>
        {/*  Qualifications*/}
        <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
            Marital Status
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">
              {maritalItem}
            </h4>
            <div className=" relative">
              <button onClick={() => setMarritul(!marrital)}>
                {" "}
                <i className="fa-solid font-semibold fa-chevron-down"></i>
              </button>

              <div
                className={`absolute top-[44px] border ${
                  marrital ? "hidden" : "block"
                } right-0 z-10 w-[260px] bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-1 text-[#000000] font-medium text-base text-center dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <p
                      onClick={(event) =>
                        setMarritul(event.target.innerText)
                      }
                      className="block font-semibold py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Single
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
<AccordionPartner></AccordionPartner>
        {/* submit button  */}
        <div className="flex justify-center items-center ] mt-[30px] ">
          <button
            style={{
              background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
            }}
            className="w-[179px] text-center py-[8] px-[10px] text-[#fff] h-[54px] text-2xl font-medium rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};


export default PartnerFilterBox;
