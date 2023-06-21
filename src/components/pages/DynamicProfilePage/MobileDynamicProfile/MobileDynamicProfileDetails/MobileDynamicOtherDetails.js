// configuration
import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";

// Third Party Packages
import Typography from "@mui/material/Typography";
import { useGetProfileDetailsQuery } from "../../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";

// components

export const MobileDynamicOtherDetails = () => {
  // hooks variable
  const { id } = useParams();
  const { data } = useGetProfileDetailsQuery(id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <MobileBackButton name="Others Details" />
      <div className="mx-4 mb-20">
        
        <Typography component={"span"} variant={"body2"}>
          {data?.othersDetail?.doSmoke && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Do smoke</span>
              <p className="font-normal">
                {data?.othersDetail
                  ? data?.othersDetail?.doSmoke
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.othersDetail?.doDrink && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Do drink</span>
              <p className="font-normal">
                {data?.othersDetail
                  ? data?.othersDetail?.doDrink
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.othersDetail?.doDrink && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Have pet</span>
              <p className="font-normal">
                {data?.othersDetail
                  ? data?.othersDetail?.doDrink
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.othersDetail?.haveTattos && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Have tattos</span>
              <p className="font-normal">
                {data?.othersDetail
                  ? data?.othersDetail?.haveTattos
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.othersDetail?.haveVoluntaryExp && (
            <div className="flex justify-between items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium whitespace-nowrap">
                Have voluntary Exp
              </span>
              <p className="font-normal text-right py-1">
                {data?.othersDetail
                  ? data?.othersDetail?.haveVoluntaryExp
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.othersDetail?.traveledOutsideBangladesh && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Traveled outside Bangladesh</span>
              <p className="font-normal">
                {data?.othersDetail
                  ? data?.othersDetail?.traveledOutsideBangladesh
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.othersDetail?.likeJoinFamily && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Like Join Family</span>
              <p className="font-normal">
                {data?.othersDetail
                  ? data?.othersDetail?.likeJoinFamily
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.othersDetail?.likeChildren && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Like Children</span>
              <p className="font-normal">
                {data?.othersDetail
                  ? data?.othersDetail?.likeChildren
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.othersDetail?.believeInGod && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Believe in God</span>
              <p className="font-normal">
                {data?.othersDetail
                  ? data?.othersDetail?.believeInGod
                  : "Not Provided"}
              </p>
            </div>
          )}
        </Typography>
      </div>
      <BottomNav />
    </div>
  );
};
