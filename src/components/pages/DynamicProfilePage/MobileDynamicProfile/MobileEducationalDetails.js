// configuration
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Third Party Packages
import Typography from "@mui/material/Typography";
import moment from "moment";

// components
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";

export const MobileEducationalDetails = () => {
  // hooks variable
  const { id } = useParams();
  const { data } = useGetProfileDetailsQuery(id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <MobileBackButton name="Educational Details" />
      <div className="mx-4 mb-20">
        <Typography component={"span"} variant={"body2"}>
          {data?.educationalDetail?.length !== 0 ? (
            data?.educationalDetail?.map((edu) => {
              return (
                <div key={edu?._id}>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() =>
                        navigate(`/educationalInfoEdit/${edu?._id}`)
                      }
                      className="w-[64px] text-center py-[8] px-[10px] special_profile_button h-[28px] font-medium"
                    >
                      Edit
                    </button>
                  </div>
                  {data?.educationalDetail.length !== 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Degree</span>
                      <p className="font-normal">
                        {data?.educationalDetail ? edu?.degree : "Not Provided"}
                      </p>
                    </div>
                  )}
                  {data?.educationalDetail.length !== 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Institute</span>
                      <p className="font-normal">
                        {data?.educationalDetail
                          ? edu?.institute
                          : "Not Provided"}
                      </p>
                    </div>
                  )}
                  {data?.educationalDetail.length !== 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Department</span>
                      <p className="font-normal">
                        {data?.educationalDetail
                          ? edu?.department
                          : "Not Provided"}
                      </p>
                    </div>
                  )}
                  {data?.educationalDetail.length !== 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Field of Study</span>
                      <p className="font-normal">
                        {data?.educationalDetail
                          ? edu?.fieldOfStudy
                          : "Not Provided"}
                      </p>
                    </div>
                  )}
                  {data?.educationalDetail.length !== 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">GPA / CGPA</span>
                      <p className="font-normal">
                        {data?.educationalDetail
                          ? edu?.gpaOrCgpa
                          : "Not Provided"}
                      </p>
                    </div>
                  )}
                  {data?.educationalDetail.length !== 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Year of Study</span>
                      <p className="font-normal">
                        {data?.educationalDetail
                          ? moment(edu?.yearOfStudy).format("YYYY")
                          : "Not Provided"}
                      </p>
                    </div>
                  )}
                  {data?.educationalDetail.length !== 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Special Achievement</span>
                      <p className="font-normal">
                        {data?.educationalDetail
                          ? edu?.specialAchievement
                          : "Not Provided"}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <>
              {data?.educationalDetail.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Degree</span>
                  <p className="font-normal">
                    {data?.educationalDetail
                      ? data?.educationalDetail?.degree
                      : "Not Provided"}
                  </p>
                </div>
              )}
              {data?.educationalDetail.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Institute</span>
                  <p className="font-normal">
                    {data?.educationalDetail
                      ? data?.educationalDetail?.institute
                      : "Not Provided"}
                  </p>
                </div>
              )}
              {data?.educationalDetail.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Department</span>
                  <p className="font-normal">
                    {data?.educationalDetail
                      ? data?.educationalDetail?.department
                      : "Not Provided"}
                  </p>
                </div>
              )}
              {data?.educationalDetail.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Field of Study</span>
                  <p className="font-normal">
                    {data?.educationalDetail
                      ? data?.educationalDetail?.fieldOfStudy
                      : "Not Provided"}
                  </p>
                </div>
              )}
              {data?.educationalDetail.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">GPA / CGPA</span>
                  <p className="font-normal">
                    {data?.educationalDetail
                      ? data?.educationalDetail?.gpaCgpa
                      : "Not Provided"}
                  </p>
                </div>
              )}
              {data?.educationalDetail.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Year of Study</span>
                  <p className="font-normal">
                    {data?.educationalDetail
                      ? data?.educationalDetail?.yearOfStudy
                      : "Not Provided"}
                  </p>
                </div>
              )}
              {data?.educationalDetail.length !== 0 && (
                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                  <span className="font-medium">Special Achievement</span>
                  <p className="font-normal">
                    {data?.educationalDetail
                      ? data?.educationalDetail?.specialAchievement
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
