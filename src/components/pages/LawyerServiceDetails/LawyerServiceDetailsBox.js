import React from "react";

const LawyerServiceDetailsBox = () => {
  return (
    <div>
      <div
        className="p-[10px] rounded-xl"
        style={{
          background: "linear-gradient(180deg, #E42986 0%, #A32CCB 100%)",
        }}
      >
        <div className="text-center border-b-[1px] pb-[10px] border-[#D1D1D1] pt-[20px]">
          <h2 className="text-[28px] pb-[21px] text-[#FFFFFF] font-bold">
            $100
          </h2>
          <h6 className="text-[#FFFFFF]  text-[13px] font-normal">
            Delivery in
          </h6>
          <h6 className="text-[#FFFFFF]  text-[13px] font-normal">10 days</h6>
        </div>
        <div className="text-left border-b-[1px] pb-[10px] border-[#D1D1D1] pt-[20px]">
          <h6 className="text-[#FFFFFF]  text-[14px] font-semibold uppercase">
            Review : 100
          </h6>
          <h6 className="text-[#FFFFFF]  text-[15px] pt-[15px] font-normal">
            Control Panel
          </h6>
        </div>
        <div className="text-left  pb-[10px]  pt-[20px]">
          <h6 className="text-[#FFFFFF] flex justify-between items-center text-[14px] font-semibold ">
            <span>Earnings</span>
            <span className="font-bold">$0</span>
          </h6>
          <h6 className="text-[#FFFFFF] flex justify-between items-center text-[14px] font-semibold ">
            <span>Items Sold</span>
            <span className="font-bold">110</span>
          </h6>
          <h6 className="text-[#FFFFFF] flex justify-between items-center text-[14px] font-semibold ">
            <span>Unread Messages</span>
            <span className="font-bold">0</span>
          </h6>
        </div>
        <div className="pt-[30px] pb-[31px] flex justify-around items-center">
          <button className="w-[92px] font-bold h-[32px] text-center bg-[#ffffffee] rounded-[50px]">
            Pause
          </button>
          <button className="w-[92px] font-bold h-[32px] text-center bg-[#ffffffee] rounded-[50px]">
            Edit
          </button>
          <button className="w-[92px] font-bold h-[32px] text-center bg-[#ffffffee] rounded-[50px]">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerServiceDetailsBox;
