// configuration
import * as React from "react";
import {  useParams } from "react-router-dom";

// Third Party Packages 
import Typography from "@mui/material/Typography";

// components 
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";

export const MobileProfessionalDetails = () => {
    // hooks variable
const {id} = useParams();
const { data } = useGetProfileDetailsQuery(id);
console.log(data);

    return (
       <div>
        <div className='mx-4'>
        <Typography component={"span"} variant={"body2"}>
            {data?.professionalDetail?.length !== 0 ? (
              data?.professionalDetail.map((d, index) => {
                return (
                  <div key={index}>
                    
                    {data?.professionalDetail?.length !== 0 && (
                      <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Position</span>
                        <p className="font-normal">
                          {data?.professionalDetail
                            ? d?.position
                            : "Not Provided"}
                        </p>
                      </div>
                    )}
                    {data?.professionalDetail?.length !== 0 && (
                      <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Duty</span>
                        <p className="font-normal">
                          {data?.professionalDetail ? d?.duty : "Not Provided"}
                        </p>
                      </div>
                    )}
                    {data?.professionalDetail?.length !== 0 && (
                      <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Institute</span>
                        <p className="font-normal">
                          {data?.professionalDetail
                            ? d?.institute
                            : "Not Provided"}
                        </p>
                      </div>
                    )}
                    {data?.professionalDetail?.length !== 0 && (
                      <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Special Achievement</span>
                        <p className="font-normal">
                          {data?.professionalDetail
                            ? d?.specialAchievement
                            : "Not Provided"}
                        </p>
                      </div>
                    )}
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
        </div>
       
       </div>
    )
}
