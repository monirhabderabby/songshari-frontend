import React from "react";

const SingleProductOtherDetailsNav = ({ page, setPage }) => {
  return (
    <div>
      <div className="flex justify-start items-center gap-12">
        <button
          onClick={() => setPage(1)}
          className={
            page === 1
              ? `text-[#71717A] text-sm text-left leading-[22px] w-24 pb-4 font-bold border-b-2 border-black duration-500`
              : "text-[#71717A] text-sm text-left leading-[22px] w-24 pb-4 font-bold duration-500"
          }
        >
          Description
        </button>
        <button
          onClick={() => setPage(2)}
          className={
            page === 2
              ? `text-[#71717A] text-sm text-left leading-[22px] w-24 pb-4 font-bold border-b-2 border-black duration-500`
              : "text-[#71717A] text-sm text-left leading-[22px] w-24 pb-4 font-bold duration-500"
          }
        >
          Reviews
        </button>
        <button
          onClick={() => setPage(3)}
          className={
            page === 3
              ? `text-[#71717A] text-sm text-left leading-[22px] w-24 pb-4 font-bold border-b-2 border-black duration-500`
              : "text-[#71717A] text-sm text-left leading-[22px] w-24 pb-4 font-bold duration-500"
          }
        >
          Compare
        </button>
      </div>
      <hr className="border border-[#E4E4E7]" />
    </div>
  );
};

export default SingleProductOtherDetailsNav;
