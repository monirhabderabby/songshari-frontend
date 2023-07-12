import React from "react";

const FamilyAccordion = ({ data }) => {
  return (
    <div>
      {data?.familyDetail?.isFatherAlive && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Is Father Alive</span>
          <p className="font-normal">{data?.familyDetail?.isFatherAlive}</p>
        </div>
      )}
      {data?.familyDetail?.fatherName && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Father Name</span>
          <p className="font-normal">{data?.familyDetail?.fatherName}</p>
        </div>
      )}
      {data?.familyDetail?.fatherDateOfBirth && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Father Date Of Birth</span>
          <p className="font-normal">{data?.familyDetail?.fatherDateOfBirth}</p>
        </div>
      )}
      {data?.familyDetail?.fatherEducationalQualification && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Father Educational Qualification</span>
          <p className="font-normal">
            {data?.familyDetail?.fatherEducationalQualification}
          </p>
        </div>
      )}
      {data?.familyDetail?.fatherProfession && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Father Profession</span>
          <p className="font-normal">{data?.familyDetail?.fatherProfession}</p>
        </div>
      )}
      {data?.familyDetail?.fatherIncome && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Father Income</span>
          <p className="font-normal">{data?.familyDetail?.fatherIncome}</p>
        </div>
      )}
      {data?.familyDetail?.fatherDeathDate && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Father Death Date</span>
          <p className="font-normal">{data?.familyDetail?.fatherDeathDate}</p>
        </div>
      )}

      {/* ----- Mother ----- */}
      {data?.familyDetail?.isMotherAlive && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Is mother Alive</span>
          <p className="font-normal">{data?.familyDetail?.isMotherAlive}</p>
        </div>
      )}
      {data?.familyDetail?.motherName && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Mother Name</span>
          <p className="font-normal">{data?.familyDetail?.motherName}</p>
        </div>
      )}
      {data?.familyDetail?.motherDateOfBirth && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Mother Date Of Birth</span>
          <p className="font-normal">{data?.familyDetail?.motherDateOfBirth}</p>
        </div>
      )}
      {data?.familyDetail?.motherEducationalQualification && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Mother Educational Qualification</span>
          <p className="font-normal">
            {data?.familyDetail?.motherEducationalQualification}
          </p>
        </div>
      )}
      {data?.familyDetail?.motherProfession && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Mother Profession</span>
          <p className="font-normal">{data?.familyDetail?.motherProfession}</p>
        </div>
      )}
      {data?.familyDetail?.motherIncome && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Mother Income</span>
          <p className="font-normal">{data?.familyDetail?.motherIncome}</p>
        </div>
      )}
      {data?.familyDetail?.motherDeathDate && (
        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
          <span className="font-medium">Mother Death Date</span>
          <p className="font-normal">{data?.familyDetail?.motherDeathDate}</p>
        </div>
      )}
    </div>
  );
};

export default FamilyAccordion;
