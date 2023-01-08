// configuration
import React from "react";

const AllCertificateImgMobile = ({
  certificateFor,
  certificate,
  setCertificateId,
  certificateId,
  index,
}) => {
  // js variable declaration
  let name;
  let certificateImage;

  if (certificateFor === "education") {
    name = certificate?.degree;
    certificateImage = certificate?.certificatePhoto;
  }
  if (certificateFor === "professional") {
    name = certificate?.position;
    certificateImage = certificate?.specialAchievementMoment;
  }
  return (
    <div key={certificate._id} className="flex flex-col w-full text-[#000000]">
      <h1 className="mb-2 text-left font-sans text-[13px] font-medium">
        {name}
      </h1>
      <div className="relative">
        <img
          onClick={() => setCertificateId(index)}
          className={`h-[70px] w-[104px] rounded-[12px] ${
            index === certificateId
              ? "border-[2px] border-[#E41272] boxShadow: [3px 3px 12px rgba(0, 0, 0, 0.12)]"
              : ""
          }`}
          src={certificateImage}
          alt="certificate"
        />
        <p
          className={`absolute font-sans leading-7 w-[56px] font-medium text-center text-[12px] text-[#FFFFFF] left-[20%] bottom-5 bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px] ${
            index === certificateId ? "block" : "hidden"
          }`}
        >
          Selected
        </p>
      </div>
    </div>
  );
};

export default AllCertificateImgMobile;
