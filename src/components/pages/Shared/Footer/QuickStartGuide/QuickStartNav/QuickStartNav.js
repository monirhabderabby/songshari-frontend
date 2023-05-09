import React from "react";

const QuickStartNav = ({ page, setPage }) => {
  return (
    <div>
      <div className="flex justify-start items-center text-base font-medium font-fira">
        <p
          onClick={() => setPage(1)}
          className={`duration-700 pb-2 pr-3 md:pr-10 cursor-pointer border-b-2 border-white ${
            page === 1 && "border-opacity-100 border-secondary"
          }`}
        >
          Matrimony
        </p>
        <p
          onClick={() => setPage(2)}
          className={`duration-700 pb-2 pr-3 md:pr-10 cursor-pointer border-b-2 border-white ${
            page === 2 && "border-opacity-100 border-secondary"
          }`}
        >
          Lawyer
        </p>
        <p
          onClick={() => setPage(3)}
          className={`duration-700 pb-2 pr-3 md:pr-10 cursor-pointer border-b-2 border-white ${
            page === 3 && "border-opacity-100 border-secondary"
          }`}
        >
          Agent
        </p>
        <p
          onClick={() => setPage(4)}
          className={`duration-700 pb-2 pr-3 md:pr-10 cursor-pointer border-b-2 border-white ${
            page === 4 && "border-opacity-100 border-secondary"
          }`}
        >
          Kazi
        </p>
        <p
          onClick={() => setPage(5)}
          className={`duration-700 pb-2 pr-3 md:pr-10 cursor-pointer border-b-2 border-white ${
            page === 5 && "border-opacity-100 border-secondary"
          }`}
        >
          Shop
        </p>
        <p
          onClick={() => setPage(6)}
          className={`duration-700 pb-2 pr-3 md:pr-10 cursor-pointer border-b-2 border-white ${
            page === 6 && "border-opacity-100 border-secondary"
          }`}
        >
          Courses
        </p>
      </div>
    </div>
  );
};

export default QuickStartNav;
