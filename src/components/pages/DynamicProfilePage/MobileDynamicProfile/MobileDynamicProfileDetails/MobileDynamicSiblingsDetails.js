// Configuration
import React from "react";
import { useParams } from "react-router-dom";

// Third party packages
import { Typography } from "@mui/material";
import { useGetProfileDetailsQuery } from "../../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";

// Components

const MobileDynamicSiblingsDetails = () => {
  const { id } = useParams();
  const { data } = useGetProfileDetailsQuery(id);
  return (
    <div>
      <MobileBackButton name="Sibling Details" />
      <div className="mx-4 mb-20">
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
      </div>
      <BottomNav />
    </div>
  );
};

export default MobileDynamicSiblingsDetails;
