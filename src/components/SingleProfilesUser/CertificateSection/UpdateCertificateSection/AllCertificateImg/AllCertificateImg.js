// configuration
import React from "react";

const AllCertificateImg = ({ education, selected, setSelected }) => {
  return (
    <div
      key={education?._id}
      className="flex flex-col w-full font-sans font-medium text-2xl text-[#000000]"
    >
      <h1 className="mb-6 text-left lg:text-2xl md:text-xl text-lg">
        {education?.degree}
      </h1>
      <div className="h-[243px] lg:w-[349px] w-full relative mb-10">
        <img
          onClick={() => setSelected(education)}
          className={`h-full w-full rounded-[12px] ${
            education?._id === selected?._id
              ? "border-[2px] border-[#E41272] boxShadow: [3px 3px 12px rgba(0, 0, 0, 0.12)]"
              : ""
          }`}
          src={education?.certificates[0]?.photo}
          alt="certificate"
        />
        <p
          className={`absolute font-sans font-sm text-base left-[35%] bottom-5  px-5 special_profile_button ${
            education?._id === selected?._id ? "block" : "hidden"
          }`}
        >
          Selected
        </p>
      </div>
    </div>
  );
};

export default AllCertificateImg;
