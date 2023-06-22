// configuration
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Third Party Packages
import Typography from "@mui/material/Typography";

// components
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";

export const MobilePhysicalDetails = () => {
  // hooks variable
  const { id } = useParams();
  const { data,isLoading } = useGetProfileDetailsQuery(id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <MobileBackButton name="Physical Details" />
      <div className="mx-4 mb-20">
        {data && <Typography component={"span"} variant={"body2"}>
          <div className="flex justify-end mt-2">
            <button
              onClick={() => navigate(`/physicalInfoEdit/${data?._id}`)}
              className="w-[64px] text-center py-[8] px-[10px] special_profile_button h-[28px] font-medium"
            >
              Edit
            </button>
          </div>
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
        </Typography>}
        {isLoading && <LineWaveLoader />}
      </div>
      <BottomNav />
    </div>
  );
};
