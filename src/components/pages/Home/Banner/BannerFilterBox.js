import React from "react";
import { Fragment } from "react";
import { Select, Slider } from "antd";

const handleChange = () => {
};

const BannerFilterBox = () => {
  return (
    <Fragment>
      <div
        style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }}
        className="max-w-[280px] rounded-[40px] h-[400px] bg-[#FFFFFF] p-3"
      >
        <div className="grid grid-cols-2">
          <div>
            <div>
              <h2 className=" text-[#000000] font-medium">Looking for</h2>
              <Select
                className="mt-[15px] text-xs text-[#72777A]"
                defaultValue="Bride"
                style={{
                  width: 101,
                  boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Bride",
                    label: "Bride",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },

                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                ]}
              />
            </div>
            <div className="mt-[10px]">
              <h2 className=" text-[#000000] font-medium">Age</h2>
              <div className="mt-[10px]">
                <span className="text-[14px] block text-center font-medium text-[#72777A]">
                  20 - 22
                </span>
                <Slider
                  className="text-[#E41272]"
                  range={{ draggableTrack: true }}
                  defaultValue={[20, 50]}
                />
              </div>
            </div>
            <div className="mt-[10px]">
              <h2 className=" text-[#000000] font-medium">Religion</h2>
              <Select
                className="mt-[15px] text-xs text-[#72777A]"
                defaultValue="Islam"
                style={{
                  width: 101,
                  boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Islam",
                    label: "Islam",
                  },
                  {
                    value: "Hindu",
                    label: "Hindu",
                  },

                  {
                    value: "Christian",
                    label: "Christian",
                  },
                ]}
              />
            </div>
            <div className="mt-[10px]">
              <h2 className=" text-[#000000] font-medium">Current Location</h2>
              <Select
                className="mt-[15px] text-xs text-[#72777A]"
                defaultValue="Dhaka"
                style={{
                  width: 101,
                  boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Dhaka",
                    label: "Dhaka",
                  },
                  {
                    value: "Borishal",
                    label: "Borishal",
                  },

                  {
                    value: "Chandpur",
                    label: "Chandpur",
                  },
                ]}
              />
            </div>
          </div>
          <div className="ml-[25px]">
            <div>
              <h2 className=" text-[#000000] font-medium">For</h2>
              <Select
                className="mt-[15px] text-xs text-[#72777A]"
                defaultValue="My Self"
                style={{
                  width: 101,
                  boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "My Self",
                    label: "My Self",
                  },
                  {
                    value: "My Brother",
                    label: "My Brother",
                  },

                  {
                    value: "My Son",
                    label: "My Son",
                  },
                ]}
              />
            </div>
            <div className="mt-[10px]">
              <h2 className=" text-[#000000] font-medium">Profession</h2>
              <Select
                className="mt-[23px] text-xs text-[#72777A]"
                defaultValue="Teacher"
                style={{
                  width: 101,
                  boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Teacher",
                    label: "Teacher",
                  },
                  {
                    value: "Doctor",
                    label: "Doctor",
                  },

                  {
                    value: "Army",
                    label: "Army",
                  },
                ]}
              />
            </div>
            <div className="mt-[10px]">
              <h2 className=" text-[#000000] font-medium">Hometown</h2>
              <Select
                className="mt-[15px] text-xs text-[#72777A]"
                defaultValue="Rangpur"
                style={{
                  width: 101,
                  boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Rangpur",
                    label: "Rangpur",
                  },
                  {
                    value: "Khulna",
                    label: "Khulna",
                  },

                  {
                    value: "Rajshahi",
                    label: "Rajshahi",
                  },
                ]}
              />
            </div>
            <div className="mt-[10px]">
              <h2 className=" text-[#000000] font-medium">Education</h2>
              <Select
                className="mt-[15px] text-xs text-[#72777A]"
                defaultValue="BBC"
                style={{
                  width: 101,
                  boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "BBC",
                    label: "BBC",
                  },
                  {
                    value: "MBA",
                    label: "MBA",
                  },

                  {
                    value: "BCS",
                    label: "BCS",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <button
          className="rounded-[48px] w-[121px] h-[31px] block mt-[15px] mx-auto text-[#fff] text-sm font-medium"
          style={{
            background: "linear-gradient(180deg, #D21878 0%, #4F42A3 100%)",
          }}
        >
          Find Match
        </button>
      </div>
    </Fragment>
  );
};

export default BannerFilterBox;
