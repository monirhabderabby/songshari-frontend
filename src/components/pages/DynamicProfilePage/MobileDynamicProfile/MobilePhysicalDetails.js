// configuration
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Third Party Packages
import Typography from "@mui/material/Typography";

// components
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";

export const MobilePhysicalDetails = () => {
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
              <p className="text-center">Physical Details</p>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
        <Typography component={"span"} variant={"body2"}>
          {data?.physicalDetail?.height && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Height</span>
              <p className="font-normal">
                {data?.physicalDetail
                  ? data?.physicalDetail?.height
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.physicalDetail?.weight && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Weight</span>
              <p className="font-normal">
                {data?.physicalDetail
                  ? data?.physicalDetail?.weight
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.physicalDetail?.ancestry && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Ancestry</span>
              <p className="font-normal">
                {data?.physicalDetail
                  ? data?.physicalDetail?.ancestry
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.physicalDetail?.skinTone && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Skin Tone</span>
              <p className="font-normal">
                {data?.physicalDetail
                  ? data?.physicalDetail?.skinTone
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.physicalDetail?.hairColor && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Hair Color</span>
              <p className="font-normal">
                {data?.physicalDetail
                  ? data?.physicalDetail?.hairColor
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.physicalDetail?.hairType && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Hair Type</span>
              <p className="font-normal">
                {data?.physicalDetail
                  ? data?.physicalDetail?.hairType
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.physicalDetail?.eyeColor && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Eye Color</span>
              <p className="font-normal">
                {data?.physicalDetail
                  ? data?.physicalDetail?.eyeColor
                  : "Not Provided"}
              </p>
            </div>
          )}
          {data?.physicalDetail?.numberOfTeeth && (
            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
              <span className="font-medium">Number of Teeth</span>
              <p className="font-normal">
                {data?.physicalDetail
                  ? data?.physicalDetail?.numberOfTeeth
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
