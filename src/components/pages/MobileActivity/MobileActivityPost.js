import React from "react";
import profile from "../../../assets/images/activity/profile-user-sm.png.png";
import banner from "../../../assets/images/activity/postBanner.png";

const MobileActivityPost = () => {
  return (
    <section className=" bg-[#F8F8FF] py-[5px]">
      <div className="max-w-[390px] mx-auto">
        <div
          className="bg-[#FFFFFF] rounded-md pb-[5px] mb-[10px] px-6"
          style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.12)" }}
        >
          <div className="max-w-[338px]   pt-[30px] pb-[10px]  mx-auto flex  items-center">
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
            <i className="fa-regular fa-heart"></i>
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
          <div className="max-w-[338px]   pt-[30px] pb-[10px]  mx-auto flex  items-center">
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
            <i className="fa-regular fa-heart"></i>
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
              <i className="fa-regular fa-heart"></i>
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
      <div className="flex justify-around items-center">
        <button className="text-[10px] text-[#333333] font-medium">
          Previous Page
        </button>
        <button className="text-[10px] text-[#333333] font-medium">
          Activity Page
        </button>
        <button className="text-[10px] text-[#333333] font-medium">
          Next Page
        </button>
      </div>
    </section>
  );
};

export default MobileActivityPost;
