import React from 'react';

const SingleShowcasePhoto = ({
  selectedPhoto,
  setSelectedPhoto,
  photo
}) => {
  return (
    <div key={photo?._id} className="flex flex-col gap-y-[10px] items-start">
      <div className="relative">
        <img
          className={`w-[104px] text-[#000000] font-medium font-fira h-[70px] rounded-[12px] ${
            selectedPhoto?._id === photo?._id &&
            "border-[2px] border-[#E41272] shadow-[3px_3px_12px_rgba(0,0,0,0.12)]"
          }`}
          src={photo?.photo}
          alt="certificate"
          onClick={() => {
            setSelectedPhoto(photo);
          }}
        />
        {selectedPhoto?._id === photo?._id && (
          <button className="text-white text-[10px] font-fira font-medium bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] flex justify-center items-center px-[8px] py-[6px] rounded-[10px] absolute top-6 right-6">
            Selected
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleShowcasePhoto;
