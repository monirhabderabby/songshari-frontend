import React from "react";

const PartnerFilterBox = () => {
  return (
    <>
      <div
        id="join-now-box2"
        className="bg-[#fff] w-[400px] lg:w-full mx-auto rounded-[10px] px-[30px] py-[40px]"
        style={{
          visibility: "visible",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* Category input  */}
        <div className="flex ] flex-col border-b-[2px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
            Category
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">
              Personal Injury Lawyer
            </h4>
            <div>
              <i className="fa-solid font-semibold fa-chevron-down"></i>
            </div>
          </div>
        </div>
        {/* location input  */}
        <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
            location
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">Dhaka</h4>
            <div>
              <i className="fa-solid font-semibold fa-chevron-down"></i>
            </div>
          </div>
        </div>
        {/* Rating input  */}
        <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">Rating</h2>
          <div className=" pb-[10px] ">
            <div className="flex">
              {" "}
              <button
                className="w-[70px] h-[40px] py-[8px] px-[10px] rounded-xl border border-[#BDCADB] text-sm text-[#FFFFFF] font-medium"
                style={{
                  background:
                    " linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                }}
              >
                1 Start
              </button>
              <button className="w-[70px] bg-[#FAFCFF] h-[40px] py-[8px] px-[10px] ml-[28px] rounded-xl border border-[#BDCADB] text-sm text-[#6E84AB] font-medium">
                2 Start
              </button>
            </div>
            <div className="flex mt-[16px]">
              {" "}
              <button className="w-[70px] bg-[#FAFCFF] h-[40px] py-[8px] px-[10px]  rounded-xl border border-[#BDCADB] text-sm text-[#6E84AB] font-medium">
                3 Start
              </button>
              <button className="w-[70px] bg-[#FAFCFF] h-[40px] py-[8px] px-[10px] ml-[28px] rounded-xl border border-[#BDCADB] text-sm text-[#6E84AB] font-medium">
                4 Start
              </button>
            </div>
            <div className="flex mt-[16px]">
              {" "}
              <button className="w-[70px] bg-[#FAFCFF] h-[40px] py-[8px] px-[10px]  rounded-xl border border-[#BDCADB] text-sm text-[#6E84AB] font-medium">
                5 Start
              </button>
            </div>
          </div>
        </div>

        {/*  Remuneration box  */}
        <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
            Remuneration
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">
              30,000 - 40,000
            </h4>
            <div className=" relative">
              <button>
                {" "}
                <i className="fa-solid font-semibold fa-chevron-down"></i>
              </button>
              <div className=" absolute hidden top-[46px] right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <a
                      href="!#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      30,000
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      40,000
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      50,000
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  Total Case */}
        <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
            Total Case
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">25+</h4>
            <div>
              <i className="fa-solid font-semibold fa-chevron-down"></i>
            </div>
          </div>
        </div>
        {/*  Qualifications*/}
        <div className="flex ] mt-[20px] flex-col border-b-[1px] border-b-[#BDCADB] py-[10px]">
          <h2 className="text-[#000000] text-lg font-bold mb-[16px]">
            Qualifications
          </h2>
          <div className="flex pb-[10px] justify-between items-center">
            <h4 className="text-[#000000] font-medium text-base">
              Bankruptcy Lawyer
            </h4>
            <div>
              <i className="fa-solid font-semibold fa-chevron-down"></i>
            </div>
          </div>
        </div>

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
