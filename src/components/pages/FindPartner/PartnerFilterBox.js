import React from "react";
import partnerCSS from "../../../assets/css/FindPartner.module.css";

const PartnerFilterBox = () => {
  return (
    <>
      <div
        id="join-now-box2"
        className="bg-[#fff] rounded-[10px] px-[30px] py-[40px]"
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
              <i class="fa-solid font-semibold fa-chevron-down"></i>
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
              <i class="fa-solid font-semibold fa-chevron-down"></i>
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
              <button className="w-[70px] h-[40px] py-[8px] px-[10px] ml-[28px] rounded-xl border border-[#BDCADB] text-sm text-[#6E84AB] font-medium">
                2 Start
              </button>
            </div>
            <div className="flex mt-[16px]">
              {" "}
              <button className="w-[70px] h-[40px] py-[8px] px-[10px]  rounded-xl border border-[#BDCADB] text-sm text-[#6E84AB] font-medium">
                3 Start
              </button>
              <button className="w-[70px] h-[40px] py-[8px] px-[10px] ml-[28px] rounded-xl border border-[#BDCADB] text-sm text-[#6E84AB] font-medium">
                4 Start
              </button>
            </div>
            <div className="flex mt-[16px]">
              {" "}
              <button className="w-[70px] h-[40px] py-[8px] px-[10px]  rounded-xl border border-[#BDCADB] text-sm text-[#6E84AB] font-medium">
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
            <div>
              <i class="fa-solid font-semibold fa-chevron-down"></i>
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
              <i class="fa-solid font-semibold fa-chevron-down"></i>
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
              <i class="fa-solid font-semibold fa-chevron-down"></i>
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

        {/* location input 
        <div className="flex flex-col border-b-[1px] border-b-[#0000001a] py-[10px] px-[15px]">
          <p className={`mb-2 ${partnerCSS.searchFind}`}>Location</p>
          <div className={`flex items-start flex-col ${partnerCSS.option}`}>
            <div>
              <input type="checkbox" name="gender2" id="Dhaka" />
              <label for="Dhaka">Dhaka</label>
            </div>
            <div>
              <input type="checkbox" name="gender2" id="Chittagong" />
              <label for="Chittagong">Chittagong</label>
            </div>
            <div>
              <input type="checkbox" name="gender2" id="Comilla" />
              <label for="Comilla">Comilla</label>
            </div>
            <div>
              <input type="checkbox" name="gender2" id="Rajshahi" />
              <label for="Rajshahi">Rajshahi</label>
            </div>
          </div>
        </div> */}
        {/* Remuneration box */}
        {/* <div className="flex flex-col border-b-[1px] border-b-[#0000001a] py-[10px] px-[15px]">
          <p className={`mb-2 ${partnerCSS.searchFind}`}>Remuneration</p>
          <div className={`flex items-center  ${partnerCSS.option}`}>
            <div className=" mr-2">
              <select className={`${partnerCSS.selectBar}`}>
                <option value="">30,000</option>
                <option value="">40,000</option>
                <option value="">50,000</option>
              </select>
            </div>
            <div className="separator">-</div>
            <div className=" ml-2">
              <select className={`${partnerCSS.selectBar}`}>
                <option value="">70,000</option>
                <option value="">75,000</option>
                <option value="">80,000</option>
              </select>
            </div>
          </div>
        </div> */}
        {/* rating box  */}
        {/* <div className="flex flex-col border-b-[1px] border-b-[#0000001a] py-[10px] px-[15px]">
          <p className={`mb-2 ${partnerCSS.searchFind}`}>Rating</p>
          <div className={`flex items-start flex-col ${partnerCSS.option}`}>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star5" />
              <label for="star5">5 Star</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star4" />
              <label for="star4">4 Star</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star3" />
              <label for="star3">3 Star</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star2" />
              <label for="star2">2 Star</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star1" />
              <label for="star1">1 Star</label>
            </div>
          </div>
        </div> */}
        {/* Qualifications box */}
        {/* <div className="flex flex-col border-b-[1px] border-b-[#0000001a] py-[10px] px-[15px]">
          <p className={`mb-2 ${partnerCSS.searchFind}`}>Qualifications</p>
          <div className={`flex items-start flex-col ${partnerCSS.option}`}>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Bankruptcy" />
              <label for="Bankruptcy">Bankruptcy Lawyer</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Business" />
              <label for="Business">Business Lawyer</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Constitutional" />
              <label for="Constitutional">Constitutional Lawyer</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Tax" />
              <label for="Tax">Tax Lawyer</label>
            </div>
          </div>
        </div> */}
        {/* <div className="px-[15px] py-[10px]">
          <p className={`mb-2 w-full ${partnerCSS.searchFind}`}>
            Total Case <span className="ml-1">(+25)</span>
          </p>
        </div>
        <div className="text-center">
          <button className={partnerCSS.partnerButton}>Submit</button>
        </div> */}
      </div>
    </>
  );
};

export default PartnerFilterBox;
