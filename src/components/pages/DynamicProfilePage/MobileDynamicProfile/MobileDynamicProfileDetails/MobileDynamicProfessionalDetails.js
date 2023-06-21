// configuration
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Third Party Packages
import Typography from "@mui/material/Typography";
import { useGetProfileDetailsQuery } from "../../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";

// components

export const MobileDynamicProfessionalDetails = () => {
  // hooks variable
  const { id } = useParams();
  const { data } = useGetProfileDetailsQuery(id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <MobileBackButton name="Professional Details" />
      <div className="mx-4 mb-20">
        
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
