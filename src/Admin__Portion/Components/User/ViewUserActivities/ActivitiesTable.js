// configuration
import React from "react";

// Third party packages, ex: redux
import Pagination from "@mui/material/Pagination";

const ActivitiesTable = ({ data }) => {
  return (
    <div>
      <div className="bg-[#D9D9D9] px-3">
        <h2 className="py-9 text-2xl leading-6 font-semibold">Activity</h2>
        <div className="grid grid-cols-12 text-[#6E7C87]">
          <div className="flex justify-start items-center gap-7 col-span-9 border-b py-2">
            <p>ID</p>
            <p>Action</p>
          </div>
          <div className="col-span-1"></div>
          <p className="col-span-2 text-right border-b">Date</p>
        </div>
        {data.map((act) => (
          <div key={act.id} className="grid grid-cols-12">
            <div className="flex justify-start items-center gap-8 col-span-9 border-b py-2">
              <p>{act.id}</p>
              <p>{act.info}</p>
            </div>
            <div className="col-span-1"></div>
            <p className="col-span-2 text-right border-b">{act.date}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-around items-center my-12">
        <p className="leading-6 font-medium">Showing 8 from 160 data</p>
        <Pagination
          className="bg-[#E3E4EB] px-[1px] py-[3px] rounded-md text-white"
          count={20}
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default ActivitiesTable;
