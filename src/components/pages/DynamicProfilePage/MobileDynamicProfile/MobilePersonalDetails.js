// configuration
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

// Third party packages
import Typography from "@mui/material/Typography";
import moment from "moment";

// components
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
import { Link } from "react-router-dom";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";

export const MobilePersonalDetails = () => {
  // hooks variable
  const { id } = useParams();
  const { data } = useGetProfileDetailsQuery(id);
  const navigate = useNavigate();

  const hightestEducationalQualification =
    data?.hightestEducationalQualification;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mx-4 mb-20">
      <div className="bg-[#FFFFFF] py-[10px] mb-[15px] sticky top-0 z-10">
        <div className="bg-white w-full grid grid-cols-6 h-[48px]">
          <div className="pl-1 col-span-1">
            <Link onClick={() => navigate(-1)}>
              <i className="fa-solid text-sm text-[#1E2022] fa-chevron-left "></i>
            </Link>
          </div>
          <div className="col-span-4 ">
            <p className="text-center">Personal Details</p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <Typography component={"span"} variant={"body2"}>
        <div className="flex justify-end mt-2">
          <button
            onClick={() => navigate(`/personalInfoEdit/${data?._id}`)}
            className="w-[64px] text-center py-[8] px-[10px] special_profile_button h-[28px] font-medium"
          >
            Edit
          </button>
        </div>
        {data?.firstName && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Name</span>
            <p className="font-normal">
              {data ? `${data?.firstName}` : "Not Provided"}
            </p>
          </div>
        )}

        {data?.phone && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Phone</span>
            <p className="font-normal">{data ? data?.phone : "Not Provided"}</p>
          </div>
        )}

        {data?.email && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Email</span>
            <p className="font-normal">{data ? data?.email : "Not Provided"}</p>
          </div>
        )}

        {data?.NidOrPassportNumber && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Nid Or Passport Number</span>
            <p className="font-normal">
              {data ? data?.NidOrPassportNumber : "Not Provided"}
            </p>
          </div>
        )}

        {data?.citizenShip?.length !== 0 && (
          <div className="flex justify-between border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333] py-3">
            <span className="font-medium">CitizenShip</span>
            <div className=" flex flex-wrap justify-end w-3/4 gap-1">
              {data
                ? data?.citizenShip.map((citizen, i) => (
                    <p
                      key={i}
                      className="font-normal  col-start-3 font-Inter text-right text-xs text-[#2B52DD] py-[6px] px-2 bg-[#E5E7EB] rounded"
                    >
                      {citizen}
                    </p>
                  ))
                : "Not Provided"}
            </div>
          </div>
        )}

        {data?.zodiacSign && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">ZodiacSign</span>
            <p className="font-normal">
              {data ? data?.zodiacSign : "Not Provided"}
            </p>
          </div>
        )}
        {data?.barRegistrationNumber && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Bar Registration Number</span>
            <p className="font-normal">
              {data ? data?.barRegistrationNumber : "Not Provided"}
            </p>
          </div>
        )}

        {data?.licenceNo && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Licence No</span>
            <p className="font-normal">
              {data ? data?.licenceNo : "Not provided"}
            </p>
          </div>
        )}
        {data?.yearOfBarRegistration && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Year Of Bar Registration</span>
            <p className="font-normal">
              {data ? data.yearOfBarRegistration : "Not Provided"}
            </p>
          </div>
        )}

        {data?.dateOfBirth && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Date Of Birth</span>
            <p className="font-normal">
              {data ? moment(data?.dateOfBirth).format("ll") : "Not Provided"}
            </p>
          </div>
        )}

        {data?.hightestEducationalQualification?.degreeName && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Degree Name</span>
            <p className="font-normal">
              {data?.hightestEducationalQualification?.degreeName
                ? hightestEducationalQualification?.degreeName
                : "Not Provided"}
            </p>
          </div>
        )}

        {data?.hightestEducationalQualification?.institute && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Institute</span>
            <p className="font-normal">
              {data
                ? hightestEducationalQualification?.institute
                : "Not Provided"}
            </p>
          </div>
        )}
        {data?.hightestEducationalQualification?.Department && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Department</span>
            <p className="font-normal">
              {data
                ? hightestEducationalQualification?.Department
                : "Not Provided"}
            </p>
          </div>
        )}
        {data?.hightestEducationalQualification?.fieldOfStudy && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Field Of Study</span>
            <p className="font-normal">
              {data
                ? hightestEducationalQualification?.fieldOfStudy
                : "Not Provided"}
            </p>
          </div>
        )}

        {data?.hightestEducationalQualification?.yearOfPassing && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Year Of Passing</span>
            <p className="font-normal">
              {data
                ? moment(
                    hightestEducationalQualification?.yearOfPassing
                  ).format("ll")
                : "Not Provided"}
            </p>
          </div>
        )}
        {data?.hightestEducationalQualification?.specialAchievement && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Special Achievement</span>
            <p className="font-normal">
              {data
                ? hightestEducationalQualification?.specialAchievement
                : "Not Provided"}
            </p>
          </div>
        )}
        {data?.whatAreYouLookingFor && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">What are you looking for</span>
            <p className="font-normal">
              {data ? data.whatAreYouLookingFor : "Not Provided"}
            </p>
          </div>
        )}
        {data?.height && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Height</span>
            <p className="font-normal">{data ? data.height : "Not Provided"}</p>
          </div>
        )}
        {data?.weight && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Weight</span>
            <p className="font-normal">{data ? data.weight : "Not Provided"}</p>
          </div>
        )}
        {data?.ancestry && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Ancestry</span>
            <p className="font-normal">
              {data ? data.ancestry : "Not Provided"}
            </p>
          </div>
        )}
        {data?.SkinTone && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Skin Tone</span>
            <p className="font-normal">
              {data ? data.SkinTone : "Not Provided"}
            </p>
          </div>
        )}
        {data?.hairColour && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Hair Color</span>
            <p className="font-normal">
              {data ? data.hairColour : "Not Provided"}
            </p>
          </div>
        )}
        {data?.hairType?.length !== 0 && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Hair Type</span>
            <p className="font-normal">
              {data ? data.hairType : "Not Provided"}
            </p>
          </div>
        )}
        {data?.eyeColor && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Eye Color</span>
            <p className="font-normal">
              {data ? data.eyeColor : "Not Provided"}
            </p>
          </div>
        )}
        {data?.numberOfTeeth && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Number Of Teeth</span>
            <p className="font-normal">
              {data ? data.numberOfTeeth : "Not Provided"}
            </p>
          </div>
        )}
        {data?.monthlyIncome && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Monthly Income</span>
            <p className="font-normal">
              {data ? data.monthlyIncome : "Not Provided"}
            </p>
          </div>
        )}
        {data?.hometown && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Hometown</span>
            <p className="font-normal">
              {data ? data.hometown : "Not Provided"}
            </p>
          </div>
        )}
        {data?.permanentAdress && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Permanent Adress</span>
            <p className="font-normal">
              {data ? data.permanentAdress : "Not Provided"}
            </p>
          </div>
        )}
        {data?.currentAdress && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Current Adress</span>
            <p className="font-normal">
              {data ? data.currentAdress : "Not Provided"}
            </p>
          </div>
        )}
        {data?.maritalStatus && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Marital status</span>
            <p className="font-normal">
              {data ? data.maritalStatus : "Not Provided"}
            </p>
          </div>
        )}
        {data?.designation && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Designation</span>
            <p className="font-normal">
              {data ? data.designation : "Not Provided"}
            </p>
          </div>
        )}
        {data?.numberOfPartner && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Number Of Partner</span>
            <p className="font-normal">
              {data ? data.numberOfPartner : "Not Provided"}
            </p>
          </div>
        )}
        {data?.reasonOfMarriage && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Reason Of Marriage</span>
            <p className="font-normal">
              {data ? data.reasonOfMarriage : "Not Provided"}
            </p>
          </div>
        )}
        {data?.isPartnerAwarOfMarriage && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Is Partner Awar Of Marriage</span>
            <p className="font-normal">
              {data ? data.isPartnerAwarOfMarriage : "Not Provided"}
            </p>
          </div>
        )}
        {data?.marriageDate && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Marriage Date</span>
            <p className="font-normal">
              {data ? data.marriageDate : "Not Provided"}
            </p>
          </div>
        )}
        {data?.divorceDate && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Divorce Date</span>
            <p className="font-normal">
              {data ? data.divorceDate : "Not Provided"}
            </p>
          </div>
        )}
        {data?.reasonOfDivorce && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Reason Of Divorce</span>
            <p className="font-normal">
              {data ? data.reasonOfDivorce : "Not Provided"}
            </p>
          </div>
        )}
        {data?.numberOfBoy && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Number Of Boy</span>
            <p className="font-normal">
              {data ? data.numberOfBoy : "Not Provided"}
            </p>
          </div>
        )}
        {data?.agesOfBoy?.length !== 0 && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Ages Of Boy</span>
            <p className="font-normal">
              {data ? data.agesOfBoy : "Not Provided"}
            </p>
          </div>
        )}
        {data?.numberOfGirl && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Number Of Girl</span>
            <p className="font-normal">
              {data ? data.numberOfGirl : "Not Provided"}
            </p>
          </div>
        )}
        {data?.agesOfGirl?.length !== 0 && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Ages Of Girl</span>
            <p className="font-normal">
              {data ? data.agesOfGirl : "Not Provided"}
            </p>
          </div>
        )}
        {data?.partnerDeathDay && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Partner Death Day</span>
            <p className="font-normal">
              {data ? data.partnerDeathDay : "Not Provided"}
            </p>
          </div>
        )}
        {data?.data?.currentProfession?.position && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Position</span>
            <p className="font-normal">
              {data?.currentProfession
                ? data?.currentProfession?.position
                : "Not Provided"}
            </p>
          </div>
        )}
        {data?.currentProfession?.institute && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Institute</span>
            <p className="font-normal">
              {data?.currentProfession
                ? data?.currentProfession?.institute
                : "Not Provided"}
            </p>
          </div>
        )}
        {data?.currentProfession?.workPeriod && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Work Period</span>
            <p className="font-normal">
              {data?.currentProfession
                ? data?.currentProfession?.workPeriod
                : "Not Provided"}
            </p>
          </div>
        )}
        {data?.currentProfession?.specialAchievement && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Special Achievement</span>
            <p className="font-normal">
              {data?.currentProfession
                ? data?.currentProfession?.specialAchievement
                : "Not Provided"}
            </p>
          </div>
        )}
        {data?.yearOfExperience?.length > 0 && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Year Of Experience</span>
            <p className="font-normal">
              {data ? data.yearOfExperience : "Not Provided"}
            </p>
          </div>
        )}
        {data?.officeLocation && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Office Location</span>
            <p className="font-normal">
              {data ? data.officeLocation : "Not Provided"}
            </p>
          </div>
        )}
        {data?.serviceCategory && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Service Category</span>
            <p className="font-normal">
              {data ? data.serviceCategory : "Not Provided"}
            </p>
          </div>
        )}
        {data?.serviceProvide && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Service Provide</span>
            <p className="font-normal">
              {data ? data.serviceProvide : "Not Provided"}
            </p>
          </div>
        )}
        {data?.parents && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Parents</span>
            <p className="font-normal">
              {data ? data.parents : "Not Provided"}
            </p>
          </div>
        )}
        {data?.haveStepMother && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Have Step Mother</span>
            <p className="font-normal">
              {data ? data.haveStepMother : "Not Provided"}
            </p>
          </div>
        )}
        {data?.haveStepFather && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Have Step Father</span>
            <p className="font-normal">
              {data ? data.haveStepFather : "Not Provided"}
            </p>
          </div>
        )}
        {data?.numberOfBrother && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Number Of Brother</span>
            <p className="font-normal">
              {data ? data.numberOfBrother : "Not Provided"}
            </p>
          </div>
        )}
        {data?.numberOfSister && (
          <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
            <span className="font-medium">Number Of Sister</span>
            <p className="font-normal">
              {data ? data.numberOfSister : "Not Provided"}
            </p>
          </div>
        )}
        {data?.hobbies?.length !== 0 && (
          <div className="flex justify-between border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333] py-3">
            <span className="font-medium">Hobbies</span>
            <div className="flex flex-wrap justify-end w-3/4 gap-1">
              {data?.hobbies &&
                data?.hobbies.map((hobby, i) => (
                  <p
                    className="font-normal font-Inter col-start-3 text-xs text-[#2B52DD] py-[6px] px-2 bg-[#E5E7EB] rounded"
                    key={i}
                  >
                    {hobby}
                  </p>
                ))}
            </div>
          </div>
        )}
      </Typography>
      <BottomNav />
    </div>
  );
};
