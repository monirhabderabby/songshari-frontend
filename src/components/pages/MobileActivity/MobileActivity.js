import React from "react";
import profile from "../../../assets/images/activity/profile-user-sm.png.png";
import coolicon from "../../../assets/images/activity/coolicon.png";
import love from "../../../assets/images/activity/love.png";
import { Select } from "antd";
import banner from "../../../assets/images/activity/postBanner.png";
import { Link } from "react-router-dom";

const handleChange = () => { };
const MobileActivity = () => {
  return (
    <section className=" bg-[#F8F8FF] py-[5px]">
      <div className="max-w-[390px] mx-auto">
        <div
          className="bg-[#FFFFFF] rounded-md pb-[5px] my-[10px]"
          style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.12)" }}
        >
          <div className="max-w-[338px] border-[rgba(0, 0, 0, 0.2)] pt-[30px] pb-[50px] border-b-[1px] mx-auto flex px-6">
            <div className="relative">
              <img
                className="w-[40px] h-[40px] rounded-[50px]"
                src={profile}
                alt=""
              />
            </div>
            <div className="ml-[25px]">
              <textarea className="text-xs w-full text-[#757575] font-normal">
                Write somethiings here......
              </textarea>
            </div>
          </div>
          <div className="flex max-w-[338px] mt-[20px] mx-auto justify-between items-center px-6">
            <div className="flex justify-between items-center">
              <button className="bg-[#F7E9F8] flex justify-center items-center w-[51px] h-[31px] rounded-[20px]">
                <img src={coolicon} alt="" />
              </button>
              <div className="ml-[20px]">
                <Select
                  defaultValue="Public"
                  style={{ width: 105, borderRadius: "50px" }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Public",
                      label: "Public",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "disabled",
                      disabled: true,
                      label: "Disabled",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                  ]}
                />
              </div>
            </div>
            <button
              style={{
                background: "linear-gradient(166deg, #F22876 0%, #942DD9 100%)",
                boxShadow: " 0.872px 9.962px 20px rgba(12, 78, 165, 0.3)",
              }}
              className="w-[65px] rounded-[50px] text-xs font-bold text-[#fff] h-[30px]"
            >
              Post
            </button>
          </div>
        </div>

        <div
          className="bg-[#FFFFFF] rounded-md pb-[5px] mb-[10px] px-6"
          style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.12)" }}
        >
          <div className="max-w-[338px] pt-[30px] pb-[10px]  mx-auto flex  items-center">
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  className="w-[40px] h-[40px] rounded-[50px]"
                  src={profile}
                  alt=""
                />
                <div className="bg-[#1CE36F] absolute left-[23px] top-[28px]  w-[15px] h-[15px] border-[3px] rounded-[7px] border-[#FFFFFF]"></div>
              </div>

              <h2 className="ml-[10px] text-[14px] font-semibold text-[#333333]">
                Albert Don
              </h2>
            </div>
            <div className="ml-[40px]">
              <p className="text-xs font-normal text-[#333333]">
                @albertdon . 19h
              </p>
            </div>
          </div>
          <p className="ml-[76px] text-xs font-normal text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nam
            vel porta felis.
          </p>
          <div className="flex  items-center my-[10px] max-w-[338px]  mx-auto">
            <i class="fa-regular fa-heart"></i>
            <button
              className="rounded-[50px] ml-[25px] text-xs text-[#333333] w-[89px] h-[30px]"
              style={{ border: " 1px solid rgba(0, 0, 0, 0.2)" }}
            >
              Comment
            </button>
          </div>
        </div>

        <div
          className="bg-[#FFFFFF] rounded-md pb-[5px] mb-[10px] px-6"
          style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.12)" }}
        >
          <div>
            <div className="max-w-[338px]   pt-[30px] pb-[10px]  mx-auto flex  items-center">
              <div className="flex relative justify-center items-center">
                <div className="relative">
                  <img
                    className="w-[40px] h-[40px] rounded-[50px]"
                    src={profile}
                    alt=""
                  />
                  <div className="bg-[#1CE36F] absolute left-[23px] top-[28px]  w-[15px] h-[15px] border-[3px] rounded-[7px] border-[#FFFFFF]"></div>
                </div>
                <h2 className="ml-[10px] text-[14px] font-semibold text-[#333333]">
                  Albert Don
                </h2>
              </div>
              <div className="ml-[40px]">
                <p className="text-xs font-normal text-[#333333]">
                  @albertdon . 19h
                </p>
              </div>
            </div>
            <p className="ml-[76px] text-xs font-normal text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Nam vel porta felis.
            </p>
            <div className="ml-[76px] py-[10px]">
              <img src={banner} alt="" />
            </div>
            <div className="flex items-center my-[10px] max-w-[338px]  mx-auto">
              <i class="fa-regular fa-heart"></i>
              <button
                className="rounded-[50px] ml-[25px] text-xs text-[#333333] w-[89px] h-[30px]"
                style={{ border: " 1px solid rgba(0, 0, 0, 0.2)" }}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to={'/mobileActivityNextPage'} className="text-[10px] text-[#333333] font-medium">
          Next Page
        </Link>
      </div>
    </section>
  );
};

export default MobileActivity;
