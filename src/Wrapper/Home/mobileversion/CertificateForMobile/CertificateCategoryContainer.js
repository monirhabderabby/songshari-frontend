import React from 'react';

const CertificateCategoryContainer = ({ item,selected, setSelected }) => {
    const { position, degree } = item;
    const certificates = item.certificates || [];
    return (
      <div>
        <div
          key={item?._id}
          className="flex flex-col w-full items-start"
        >
          <p className="text-[14px] ml-[3px] font-semibold ">{degree || position}</p>
          <div className="relative w-full">
            <img
              className={`w-auto text-[#000000] font-medium font-fira h-[100px] rounded-[12px] ${
                item?._id === selected?._id &&
                "border-[2px] border-[#E41272] shadow-[3px_3px_12px_rgba(0,0,0,0.12)]"
              }`}
              src={certificates[0]?.photo}
              alt="item"
              onClick={() => {
                setSelected(item);
              }}
            />
            {/* {item?._id === selected?._id && (
              <button className="text-white text-[10px] font-fira font-medium bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] flex justify-center items-center px-[8px] py-[6px] rounded-[10px] relative top-[-50%] left-[20%]">
                Selected
              </button>
            )} */}
          </div>
        </div>
      </div>
    );
}

export default CertificateCategoryContainer;
