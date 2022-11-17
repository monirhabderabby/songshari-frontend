import React from "react";
import partnerCSS from "../../../assets/css/FindPartner.module.css";

const FindAlawyerBox = () => {
  return (
    <>
      <div
        id="join-now-box2"
        className="bg-[#fff] rounded-[10px] pb-[15px]"
        style={{
          visibility: "visible",
          boxShadow: "0 3px 10px 0 rgb(0 0 0 / 10%)",
        }}
      >
        <div
          className="flex justify-center items-center py-[10px] px-[15px] border-b-[1px] border-b-[#0000001a] "
          style={{
            background: "linear-gradient(145deg,#511be7,#e41272)",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          <div className="flex items-center p-[4px]">
            <div className="flex items-center">
              <input
                className="bg-white border-[1px] py-1 border-[#0000001a] rounded-[50px] "
                type="text"
                name="location"
              />
            </div>
            <p className={` text-white ml-2  ${partnerCSS.searchFind}`}>
              Search
            </p>
          </div>
        </div>
        {/* Category input  */}
        <div className="flex flex-col border-b-[1px] border-b-[#0000001a] py-[10px] px-[15px]">
          <p className={`mb-2 ${partnerCSS.searchFind}`}>Category</p>
          <div
            id="option2"
            className={`flex items-start flex-col ${partnerCSS.option}`}
          >
            <div id="s-input2">
              <input type="checkbox" name="gender2" id="Personal" />
              <label for="Personal">Personal Injury Lawyer</label>
            </div>
            <div id="s-input2">
              <input type="checkbox" name="gender2" id="Family" />
              <label for="Family">Family Lawyer</label>
            </div>
            <div id="s-input2">
              <input type="checkbox" name="gender2" id="Estate" />
              <label for="Estate">Estate Planning Lawyer</label>
            </div>
            <div id="s-input2">
              <input type="checkbox" name="gender2" id="Contract" />
              <label for="Contract">Contract Lawyer</label>
            </div>
          </div>
        </div>
        {/* location input  */}
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
        </div>
        {/* Remuneration box */}
        <div className="flex flex-col border-b-[1px] border-b-[#0000001a] py-[10px] px-[15px]">
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
        </div>
        {/* rating box  */}
        <div className="flex flex-col border-b-[1px] border-b-[#0000001a] py-[10px] px-[15px]">
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
        </div>
        {/* Qualifications box */}
        <div className="flex flex-col border-b-[1px] border-b-[#0000001a] py-[10px] px-[15px]">
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
        </div>
        <div className="px-[15px] py-[10px]">
          <p className={`mb-2 w-full ${partnerCSS.searchFind}`}>
            Total Case <span className="ml-1">(+25)</span>
          </p>
        </div>
        <div className="text-center">
          <button className={partnerCSS.partnerButton}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default FindAlawyerBox;
