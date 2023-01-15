// configuration
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Third Party Packages
import Typography from "@mui/material/Typography";
import { useGetProfileDetailsQuery } from "../../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";

// components

export const MobileDynamicProfessionalDetails = () => {
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
        <div className="bg-[#FFFFFF] py-[10px] mb-[15px] sticky top-0 z-10">
          <div className="bg-white w-full grid grid-cols-6 h-[48px]">
            <div className="pl-1 col-span-1">
              <Link onClick={() => navigate(-1)}>
                <i className="fa-solid text-sm text-[#1E2022] fa-chevron-left "></i>
              </Link>
            </div>
            <div className="col-span-4 ">
              <p className="text-center">Professional Details</p>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
        <Typography component={"span"} variant={"body2"}>
          {data?.professionalDetail?.length !== 0 ? (
            data?.professionalDetail.map((profession) => {
              return (
                <div key={profession?._id} className="mb-6">
                  <div>
                    {profession?.position && (
                      <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Position</span>
                        <p className="font-normal">{profession?.position}</p>
                      </div>
                    )}
                    {profession?.duty && (
                      <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Duty</span>
                        <p className="font-normal">{profession?.duty}</p>
                      </div>
                    )}
                    {profession?.institute && (
                      <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Institute</span>
                        <p className="font-normal">{profession?.institute}</p>
                      </div>
                    )}
                    {profession?.specialAchievement && (
                      <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Special Achievement</span>
                        <p className="font-normal">
                          {profession?.specialAchievement}
                        </p>
                      </div>
                    )}
                    {profession?.workPeriod?.length !== 0 && (
                      <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Work Period</span>
                        <p className="font-normal">
                          {profession?.workPeriod[0] +
                            " to " +
                            profession?.workPeriod[1]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <>
              {data?.professionalDetail?.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Position</span>
                  <p className="font-normal">
                    {data?.professionalDetail
                      ? data?.professionalDetail?.position
                      : "Not Provided"}
                  </p>
                </div>
              )}
              {data?.professionalDetail?.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Duty</span>
                  <p className="font-normal">
                    {data?.professionalDetail
                      ? data?.professionalDetail?.duty
                      : "Not Provided"}
                  </p>
                </div>
              )}
              {data?.professionalDetail?.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Institute</span>
                  <p className="font-normal">
                    {data?.professionalDetail
                      ? data?.professionalDetail?.institute
                      : "Not Provided"}
                  </p>
                </div>
              )}
              {data?.professionalDetail?.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Special Achievement</span>
                  <p className="font-normal">
                    {data?.professionalDetail
                      ? data?.professionalDetail?.specialAchievement
                      : "Not Provided"}
                  </p>
                </div>
              )}
            </>
          )}
        </Typography>
        <BottomNav />
      </div>
    </div>
  );
};
