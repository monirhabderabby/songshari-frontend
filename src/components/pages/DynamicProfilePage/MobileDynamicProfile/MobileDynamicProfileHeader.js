import React from "react";

const MobileDynamicProfileHeader = ({ data }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full mx-7">
          {data?.coverPhoto ? (
            <div>
              <img
                className="max-h-28 md:max-h-52 w-full border border-gray-100 rounded-t-[4px]"
                src={data?.coverPhoto}
                alt=""
              />
            </div>
          ) : (
            <div className="bg-[#D9D9D9] rounded-t-[4px] flex justify-center items-center flex-col  mx-auto h-[92px]"></div>
          )}
          <div
            style={{ boxShadow: " 0px 10px 40px rgba(0, 0, 0, 0.03)" }}
            className="px-[23px] w-full rounded-sm mx-auto bg-[#ffffff]"
          >
            <div>
              <div className="flex justify-start items-center">
                <img
                  src={
                    data?.profilePhoto
                      ? data?.profilePhoto
                      : "https://cdn-icons-png.flaticon.com/512/194/194938.png"
                  }
                  className="mt-[-20px] w-16 h-16 rounded-full"
                  alt="Not Available"
                />
                <h2 className="pl-[7px] text-sm font-semibold text-[#000000]">
                  {data?.firstName + " " + data?.lastName}
                </h2>
              </div>
              <div>
                <h3 className="text-[#737373] w-[165px] mt-[16px] pb-[10px] border-[#737373] text-xs font-normal border-b-[1px]">
                  {data?.email ? data?.email : "Not Provided"}
                </h3>
                <h3 className="text-[#737373] w-[165px] mt-[16px] pb-[10px] border-[#737373] text-xs font-normal border-b-[1px]">
                  {data?.phone ? data?.phone : "Not Provided"}
                </h3>
                <h3 className="text-[#737373] w-[165px] mt-[16px]  text-xs font-normal pb-[20px] capitalize">
                  {data?.maritalStatus ? data?.maritalStatus : "Not Provided"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDynamicProfileHeader;
