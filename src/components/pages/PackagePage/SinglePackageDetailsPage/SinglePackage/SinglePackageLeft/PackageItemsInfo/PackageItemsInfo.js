import React from "react";

const PackageItemsInfo = () => {
  return (
    <div className="ring-1 ring-blue-100 rounded mb-3 p-2 flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-20 h-20 rounded mr-4"
          src="https://bohubrihi.com/wp-content/uploads/2022/11/Office-and-Google-Package-Bohubrihi-Online-Course.png"
          alt="packageItem"
        />
        <p className="text-lg text-gray-500 font-fira">Name Of Item</p>
      </div>
      <button className="mr-4 px-4 py-1 font-medium font-fira text-lg text-slate-500 border border-cyan-500 rounded shadow-sm">
        INFO
      </button>
    </div>
  );
};

export default PackageItemsInfo;
