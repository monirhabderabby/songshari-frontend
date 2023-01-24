// Configuration
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Third party packages
import { Typography } from "@mui/material";
import { useGetProfileDetailsQuery } from "../../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";

// Components

const MobileDynamicSiblingsDetails = () => {
  const { id } = useParams();
  const { data } = useGetProfileDetailsQuery(id);
  const navigate = useNavigate();
  return (
    <div className="mx-4 mb-20">
      {/* Navigate previous page */}
      <div className="bg-[#FFFFFF] py-[10px] mb-[15px] sticky top-0">
        <div className="bg-white w-full grid grid-cols-6 h-[48px]">
          <div className="pl-1 col-span-1">
            <Link onClick={() => navigate(-1)}>
              <i className="fa-solid text-sm text-[#1E2022] fa-chevron-left "></i>
            </Link>
          </div>
          <div className="col-span-4 ">
            <p className="text-center">Siblings Details</p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <Typography component={"span"} variant={"body2"}>
        {data?.siblingDetail?.length > 0 &&
          data?.siblingDetail?.map((sibling) => (
            <div key={sibling?._id} className="mb-6">
              {/* Show data */}
              {sibling?.isSiblingAlive && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Is Sibling Alive</span>
                  <p className="font-normal">{sibling?.isSiblingAlive}</p>
                </div>
              )}
              {sibling?.siblingName && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Sibling Name</span>
                  <p className="font-normal">{sibling?.siblingName}</p>
                </div>
              )}
              {sibling?.elderOrYounger && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Elder Or Younger</span>
                  <p className="font-normal">{sibling?.elderOrYounger}</p>
                </div>
              )}
              {sibling?.ageGap && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Age Gap</span>
                  <p className="font-normal">{sibling?.ageGap} Year</p>
                </div>
              )}
              {sibling?.maritalStatus && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Marital Status</span>
                  <p className="font-normal">{sibling?.maritalStatus}</p>
                </div>
              )}
              {sibling?.siblingEducationalQualification && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium whitespace-nowrap">
                    Sibling Educational Qualification
                  </span>
                  <p className="font-normal">
                    {sibling?.siblingEducationalQualification}
                  </p>
                </div>
              )}
              {sibling?.siblingProfession && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Sibling Profession</span>
                  <p className="font-normal">{sibling?.siblingProfession}</p>
                </div>
              )}
              {sibling?.siblingIncome && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Sibling Income</span>
                  <p className="font-normal">{sibling?.siblingIncome}</p>
                </div>
              )}
              {sibling?.siblingFamilyInfo && (
                <div className="flex justify-between items-start py-2 border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium whitespace-nowrap mr-6">
                    Sibling Family Info
                  </span>
                  <p className="font-normal text-right">
                    {sibling?.siblingFamilyInfo}
                  </p>
                </div>
              )}
              {sibling?.siblingDeathDate && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Sibling Death Date</span>
                  <p className="font-normal">{sibling?.siblingDeathDate}</p>
                </div>
              )}
              {sibling?.siblingDeathReason && (
                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Sibling Death Reason</span>
                  <p className="font-normal">{sibling?.siblingDeathReason}</p>
                </div>
              )}
            </div>
          ))}
      </Typography>
      <BottomNav />
    </div>
  );
};

export default MobileDynamicSiblingsDetails;
