// configuration
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Third Party Packages
import Typography from "@mui/material/Typography";

// components
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";

export const MobileOthersDetails = () => {
  // hooks variable
  const { id } = useParams();
  const { data } = useGetProfileDetailsQuery(id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="mx-4 mb-20">
        <div className="bg-[#FFFFFF] py-[10px] mb-[15px]">
          <div className="bg-white w-full grid grid-cols-6 h-[48px]">
            <div className="pl-1 col-span-1">
              <Link onClick={() => navigate(-1)}>
                <i className="fa-solid text-sm text-[#1E2022] fa-chevron-left "></i>
              </Link>
            </div>
            <div className="col-span-4 ">
              <p className="text-center">Other Details</p>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
        <Typography component={"span"} variant={"body2"}>
          <div className="flex justify-end mt-2">
            <button
              onClick={() => navigate(`/othersInfoEdit/${data?._id}`)}
              style={{
                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
              }}
              className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
            >
              Edit
            </button>
          </div>
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
