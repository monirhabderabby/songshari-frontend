// configuration
import React from "react";
import { Link } from "react-router-dom";

// Third party packages
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import moment from "moment";

// css files
import "./Accordion.css";
import FamilyAccordion from "./ProfileAccordion/FamilyAccordion";
import SiblingsAccordion from "./ProfileAccordion/SiblingsAccordion";
import hideEmail from "../../../assets/utilities/hideEmail/hideEmail";
import { LineWaveLoader } from "../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";

const Accordion = styled((props) => <MuiAccordion square {...props} />)(
  ({ theme }) => ({
    paddingTop: "23px",
    paddingLeft: "53px",
    paddingBottom: "23px",
    paddingRight: "53px",
  })
);
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#ffffff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    marginLeft: theme.spacing(1),
  },
  color: "#333333",
  fontSize: "24px",
  fontWeight: "bold",
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

const Accordian = ({ data, isLoading, edit }) => {
  const hightestEducationalQualification =
    data?.hightestEducationalQualification;

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {data && (
        <div className="mb-[69px] max-w-[523px] mx-auto">
          <div className="hidden lg:block" id="fdhjf">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <div className="flex justify-between items-center ">
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <div>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      className="hidden md:block"
                    >
                      <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">
                        Personal Information
                      </h1>
                    </Typography>
                    <Link to="/tteesst">
                      <Typography
                        component={"span"}
                        variant={"body2"}
                        className="md:hidden"
                      >
                        <h1 className="text-[18px] text-[#333333] leading-[34px] font-fira">
                          Personal Details
                        </h1>
                      </Typography>
                    </Link>
                  </div>
                </AccordionSummary>
                <div
                  style={{
                    display: `${
                      expanded === "panel1" && edit ? "block" : "none"
                    }`,
                  }}
                >
                  <Link
                    to={`edit/personalinfo/${data?._id}`}
                    className="w-[64px] special_profile_button"
                  >
                    Edit
                  </Link>
                </div>
              </div>
              <AccordionDetails>
                <Typography component={"span"} variant={"body2"}>
                  {data?.firstName && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Name</span>
                      <p className="font-normal">
                        {data
                          ? `${data?.firstName + " " + data?.lastName}`
                          : ""}
                      </p>
                    </div>
                  )}

                  {edit && data?.phone && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Phone</span>
                      <p className="font-normal">{data ? data?.phone : ""}</p>
                    </div>
                  )}

                  {data?.email && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Email</span>
                      <p className="font-normal">
                        {edit ? data?.email : hideEmail(data?.email)}
                      </p>
                    </div>
                  )}

                  {edit && data?.NidOrPassportNumber && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">
                        Nid Or Passport Number
                      </span>
                      <p className="font-normal">
                        {data ? data?.NidOrPassportNumber : ""}
                      </p>
                    </div>
                  )}

                  {data?.citizenShip?.length !== 0 && (
                    <div className="flex justify-between border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333] py-3">
                      <span className="font-medium">CitizenShip</span>
                      <div className="flex justify-end gap-1 flex-wrap w-[70%]">
                        {data
                          ? data?.citizenShip.map((citizen, index) => (
                              <p
                                key={index}
                                className="font-normal font-Inter text-right text-xs text-[#2B52DD] py-[6px] px-2 bg-[#E5E7EB] rounded"
                              >
                                {citizen}
                              </p>
                            ))
                          : ""}
                      </div>
                    </div>
                  )}

                  {data?.zodiacSign && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">ZodiacSign</span>
                      <p className="font-normal">
                        {data ? data?.zodiacSign : ""}
                      </p>
                    </div>
                  )}
                  {data?.barRegistrationNumber && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">
                        Bar Registration Number
                      </span>
                      <p className="font-normal">
                        {data ? data?.barRegistrationNumber : ""}
                      </p>
                    </div>
                  )}

                  {data?.licenceNo && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Licence No</span>
                      <p className="font-normal">
                        {data ? data?.licenceNo : ""}
                      </p>
                    </div>
                  )}
                  {data?.yearOfBarRegistration && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">
                        Year Of Bar Registration
                      </span>
                      <p className="font-normal">
                        {data ? data.yearOfBarRegistration : ""}
                      </p>
                    </div>
                  )}

                  {data?.dateOfBirth && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Date Of Birth</span>
                      <p className="font-normal">
                        {data ? moment(data?.dateOfBirth).format("ll") : ""}
                      </p>
                    </div>
                  )}

                  {data?.hightestEducationalQualification?.degreeName && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Degree Name</span>
                      <p className="font-normal">
                        {data?.hightestEducationalQualification?.degreeName
                          ? hightestEducationalQualification?.degreeName
                          : ""}
                      </p>
                    </div>
                  )}

                  {data?.hightestEducationalQualification?.institute && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Institute</span>
                      <p className="font-normal">
                        {data
                          ? hightestEducationalQualification?.institute
                          : ""}
                      </p>
                    </div>
                  )}
                  {data?.hightestEducationalQualification?.Department && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Department</span>
                      <p className="font-normal">
                        {data
                          ? hightestEducationalQualification?.Department
                          : ""}
                      </p>
                    </div>
                  )}
                  {data?.hightestEducationalQualification?.fieldOfStudy && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Field Of Study</span>
                      <p className="font-normal">
                        {data
                          ? hightestEducationalQualification?.fieldOfStudy
                          : ""}
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
                          : ""}
                      </p>
                    </div>
                  )}
                  {data?.hightestEducationalQualification
                    ?.specialAchievement && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Special Achievement</span>
                      <p className="font-normal">
                        {data
                          ? hightestEducationalQualification?.specialAchievement
                          : ""}
                      </p>
                    </div>
                  )}
                  {data?.whatAreYouLookingFor && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Looking for</span>
                      <p className="font-normal">
                        {data ? data.whatAreYouLookingFor : ""}
                      </p>
                    </div>
                  )}
                  {data?.height && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Height</span>
                      <p className="font-normal">{data ? data.height : ""}</p>
                    </div>
                  )}
                  {data?.weight && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Weight</span>
                      <p className="font-normal">{data ? data.weight : ""}</p>
                    </div>
                  )}
                  {data?.ancestry && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Ancestry</span>
                      <p className="font-normal">{data ? data.ancestry : ""}</p>
                    </div>
                  )}
                  {data?.SkinTone && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Skin Tone</span>
                      <p className="font-normal">{data ? data.SkinTone : ""}</p>
                    </div>
                  )}
                  {data?.hairColour && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Hair Color</span>
                      <p className="font-normal">
                        {data ? data.hairColour : ""}
                      </p>
                    </div>
                  )}
                  {data?.hairType?.length !== 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Hair Type</span>
                      <p className="font-normal">{data ? data.hairType : ""}</p>
                    </div>
                  )}
                  {data?.eyeColor && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Eye Color</span>
                      <p className="font-normal">{data ? data.eyeColor : ""}</p>
                    </div>
                  )}
                  {data?.numberOfTeeth && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Number Of Teeth</span>
                      <p className="font-normal">
                        {data ? data.numberOfTeeth : ""}
                      </p>
                    </div>
                  )}
                  {data?.monthlyIncome && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Monthly Income</span>
                      <p className="font-normal">
                        {data ? data.monthlyIncome : ""}
                      </p>
                    </div>
                  )}
                  {data?.hometown && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Hometown</span>
                      <p className="font-normal">{data ? data.hometown : ""}</p>
                    </div>
                  )}
                  {data?.permanentAdress && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Permanent Adress</span>
                      <p className="font-normal">
                        {data ? data.permanentAdress : ""}
                      </p>
                    </div>
                  )}
                  {data?.currentAdress && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Current Adress</span>
                      <p className="font-normal">
                        {data ? data.currentAdress : ""}
                      </p>
                    </div>
                  )}
                  {data?.maritalStatus && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Marital status</span>
                      <p className="font-normal">
                        {data ? data.maritalStatus : ""}
                      </p>
                    </div>
                  )}
                  {data?.designation && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Designation</span>
                      <p className="font-normal">
                        {data ? data.designation : ""}
                      </p>
                    </div>
                  )}
                  {data?.numberOfPartner && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Number Of Partner</span>
                      <p className="font-normal">
                        {data ? data.numberOfPartner : ""}
                      </p>
                    </div>
                  )}
                  {data?.reasonOfMarriage && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Reason Of Marriage</span>
                      <p className="font-normal">
                        {data ? data.reasonOfMarriage : ""}
                      </p>
                    </div>
                  )}
                  {data?.isPartnerAwarOfMarriage && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">
                        Is Partner Awar Of Marriage
                      </span>
                      <p className="font-normal">
                        {data ? data.isPartnerAwarOfMarriage : ""}
                      </p>
                    </div>
                  )}
                  {data?.marriageDate && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Marriage Date</span>
                      <p className="font-normal">
                        {data ? data.marriageDate : ""}
                      </p>
                    </div>
                  )}
                  {data?.divorceDate && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Divorce Date</span>
                      <p className="font-normal">
                        {data ? data.divorceDate : ""}
                      </p>
                    </div>
                  )}
                  {data?.reasonOfDivorce && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Reason Of Divorce</span>
                      <p className="font-normal">
                        {data ? data.reasonOfDivorce : ""}
                      </p>
                    </div>
                  )}
                  {data?.numberOfBoy && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Number Of Boy</span>
                      <p className="font-normal">
                        {data ? data.numberOfBoy : ""}
                      </p>
                    </div>
                  )}
                  {data?.agesOfBoy?.length !== 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Ages Of Boy</span>
                      <p className="font-normal">
                        {data ? data.agesOfBoy : ""}
                      </p>
                    </div>
                  )}
                  {data?.numberOfGirl && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Number Of Girl</span>
                      <p className="font-normal">
                        {data ? data.numberOfGirl : ""}
                      </p>
                    </div>
                  )}
                  {data?.agesOfGirl?.length > 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Ages Of Girl</span>
                      <p className="font-normal">
                        {data ? data.agesOfGirl : ""}
                      </p>
                    </div>
                  )}
                  {data?.partnerDeathDay && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Partner Death Day</span>
                      <p className="font-normal">
                        {data ? data.partnerDeathDay : ""}
                      </p>
                    </div>
                  )}
                  {data?.data?.currentProfession?.position && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Position</span>
                      <p className="font-normal">
                        {data?.currentProfession
                          ? data?.currentProfession?.position
                          : ""}
                      </p>
                    </div>
                  )}
                  {data?.currentProfession?.institute && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Institute</span>
                      <p className="font-normal">
                        {data?.currentProfession
                          ? data?.currentProfession?.institute
                          : ""}
                      </p>
                    </div>
                  )}
                  {data?.currentProfession?.workPeriod && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Work Period</span>
                      <p className="font-normal">
                        {data?.currentProfession
                          ? data?.currentProfession?.workPeriod
                          : ""}
                      </p>
                    </div>
                  )}
                  {data?.currentProfession?.specialAchievement && (
                    <div className="flex justify-between py-3 border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium whitespace-nowrap">
                        Special Achievement
                      </span>
                      <p className="font-normal text-right w-[50%]">
                        {data?.currentProfession
                          ? data?.currentProfession?.specialAchievement
                          : ""}
                      </p>
                    </div>
                  )}
                  {data?.yearOfExperience?.length > 0 && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Year Of Experience</span>
                      <p className="font-normal">
                        {data ? data.yearOfExperience : ""}
                      </p>
                    </div>
                  )}
                  {data?.officeLocation && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Office Location</span>
                      <p className="font-normal">
                        {data ? data.officeLocation : ""}
                      </p>
                    </div>
                  )}
                  {data?.serviceCategory && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Service Category</span>
                      <p className="font-normal">
                        {data ? data.serviceCategory : ""}
                      </p>
                    </div>
                  )}
                  {data?.serviceProvide && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Service Provide</span>
                      <p className="font-normal">
                        {data ? data.serviceProvide : ""}
                      </p>
                    </div>
                  )}
                  {data?.parents && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Parents</span>
                      <p className="font-normal">{data ? data.parents : ""}</p>
                    </div>
                  )}
                  {data?.haveStepMother && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Have Step Mother</span>
                      <p className="font-normal">
                        {data ? data.haveStepMother : ""}
                      </p>
                    </div>
                  )}
                  {data?.haveStepFather && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Have Step Father</span>
                      <p className="font-normal">
                        {data ? data.haveStepFather : ""}
                      </p>
                    </div>
                  )}
                  {data?.numberOfBrother && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Number Of Brother</span>
                      <p className="font-normal">
                        {data ? data.numberOfBrother : ""}
                      </p>
                    </div>
                  )}
                  {data?.numberOfSister && (
                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                      <span className="font-medium">Number Of Sister</span>
                      <p className="font-normal">
                        {data ? data.numberOfSister : ""}
                      </p>
                    </div>
                  )}
                  {data?.hobbies?.length > 0 && (
                    <div className="flex justify-between border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333] py-3">
                      <span className="font-medium">Hobbies</span>
                      <div className="flex justify-end gap-1 flex-wrap w-[70%]">
                        {data?.hobbies.map((hobby, index) => (
                          <p
                            className="font-normal font-Inter text-xs text-[#2B52DD] py-[6px] px-2 bg-[#E5E7EB] rounded"
                            key={index}
                          >
                            {hobby}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* ---------- Professional info ---------- */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <div className="flex justify-between items-center	">
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <div>
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    className="hidden md:block"
                  >
                    <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">
                      Professional Information
                    </h1>
                  </Typography>
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    className="md:hidden"
                  >
                    <h1 className="text-[18px] text-[#333333] leading-[34px] font-fira">
                      Professional Information
                    </h1>
                  </Typography>
                </div>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                {data?.professionalDetail?.length !== 0 &&
                  data?.professionalDetail.map((profession) => {
                    return (
                      <div key={profession?._id} className="mb-6">
                        <div
                          className="flex justify-end mt-2"
                          style={{
                            display: `${
                              expanded === "panel4" && edit ? "block" : "none"
                            }`,
                          }}
                        >
                          <Link
                            to={`edit/profesionalinfo/${profession?._id}`}
                            className="w-[64px] text-center special_profile_button"
                          >
                            Edit
                          </Link>
                        </div>
                        <div>
                          {profession?.position && (
                            <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                              <span className="font-medium">Position</span>
                              <p className="font-normal">
                                {profession?.position}
                              </p>
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
                              <p className="font-normal">
                                {profession?.institute}
                              </p>
                            </div>
                          )}
                          {profession?.specialAchievement && (
                            <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                              <span className="font-medium">
                                Special Achievement
                              </span>
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
                  })}
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ---------- Educational Info ---------- */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <div className="flex justify-between items-center	">
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <div>
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    className="hidden md:block"
                  >
                    <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">
                      Educational Information
                    </h1>
                  </Typography>
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    className="md:hidden"
                  >
                    <h1 className="text-[18px] text-[#333333] leading-[34px] font-fira">
                      Educational Information
                    </h1>
                  </Typography>
                </div>
              </AccordionSummary>
            </div>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                {data?.educationalDetail.length !== 0 ? (
                  data?.educationalDetail.map((edu) => {
                    return (
                      <div key={edu?._id} className="mb-6">
                        <div
                          className="flex justify-end mt-2"
                          style={{
                            display: `${
                              expanded === "panel4" && edit ? "block" : "none"
                            }`,
                          }}
                        >
                          <Link
                            to={`edit/educationalinfo/${edu?._id}`}
                            className="w-[64px] text-center special_profile_button"
                          >
                            Edit
                          </Link>
                        </div>
                        <div>
                          {data?.educationalDetail.length !== 0 && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                              <span className="font-medium">Degree</span>
                              <p className="font-normal">
                                {data?.educationalDetail ? edu?.degree : ""}
                              </p>
                            </div>
                          )}
                          {data?.educationalDetail.length !== 0 && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                              <span className="font-medium">Institute</span>
                              <p className="font-normal">
                                {data?.educationalDetail ? edu?.institute : ""}
                              </p>
                            </div>
                          )}
                          {data?.educationalDetail.length !== 0 && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                              <span className="font-medium">Department</span>
                              <p className="font-normal">
                                {data?.educationalDetail ? edu?.department : ""}
                              </p>
                            </div>
                          )}
                          {data?.educationalDetail.length !== 0 && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                              <span className="font-medium">
                                Field of Study
                              </span>
                              <p className="font-normal">
                                {data?.educationalDetail
                                  ? edu?.fieldOfStudy
                                  : ""}
                              </p>
                            </div>
                          )}
                          {data?.educationalDetail.length !== 0 && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                              <span className="font-medium">GPA / CGPA</span>
                              <p className="font-normal">
                                {data?.educationalDetail ? edu?.gpaOrCgpa : ""}
                              </p>
                            </div>
                          )}
                          {data?.educationalDetail.length !== 0 && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                              <span className="font-medium">Year of Study</span>
                              <p className="font-normal">
                                {data?.educationalDetail
                                  ? moment(edu?.yearOfStudy).format("YYYY")
                                  : ""}
                              </p>
                            </div>
                          )}
                          {data?.educationalDetail.length !== 0 && (
                            <div className="flex justify-between py-3 border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                              <span className="font-medium whitespace-nowrap">
                                Special Achievement
                              </span>
                              <p className="font-normal text-right w-[50%]">
                                {data?.educationalDetail
                                  ? edu?.specialAchievement
                                  : ""}
                              </p>
                            </div>
                          )}
                        </div>
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
                            : ""}
                        </p>
                      </div>
                    )}
                    {data?.educationalDetail.length !== 0 && (
                      <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Institute</span>
                        <p className="font-normal">
                          {data?.educationalDetail
                            ? data?.educationalDetail?.institute
                            : ""}
                        </p>
                      </div>
                    )}
                    {data?.educationalDetail.length !== 0 && (
                      <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Department</span>
                        <p className="font-normal">
                          {data?.educationalDetail
                            ? data?.educationalDetail?.department
                            : ""}
                        </p>
                      </div>
                    )}
                    {data?.educationalDetail.length !== 0 && (
                      <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Field of Study</span>
                        <p className="font-normal">
                          {data?.educationalDetail
                            ? data?.educationalDetail?.fieldOfStudy
                            : ""}
                        </p>
                      </div>
                    )}
                    {data?.educationalDetail.length !== 0 && (
                      <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">GPA / CGPA</span>
                        <p className="font-normal">
                          {data?.educationalDetail
                            ? data?.educationalDetail?.gpaCgpa
                            : ""}
                        </p>
                      </div>
                    )}
                    {data?.educationalDetail.length !== 0 && (
                      <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium">Year of Study</span>
                        <p className="font-normal">
                          {data?.educationalDetail
                            ? data?.educationalDetail?.yearOfStudy
                            : ""}
                        </p>
                      </div>
                    )}
                    {data?.educationalDetail.length !== 0 && (
                      <div className="flex justify-between py-3 items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                        <span className="font-medium whitespace-nowrap">
                          Special Achievement
                        </span>
                        <p className="font-normal text-right w-[50%]">
                          {data?.educationalDetail
                            ? data?.educationalDetail?.specialAchievement
                            : ""}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ---------- Physical Info ------------ */}
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <div className="flex justify-between items-center	">
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <div>
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    className="hidden md:block"
                  >
                    <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">
                      Physical Information
                    </h1>
                  </Typography>
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    className="md:hidden"
                  >
                    <h1 className="text-[18px] text-[#333333] leading-[34px] font-fira">
                      Physical Information
                    </h1>
                  </Typography>
                </div>
              </AccordionSummary>
              <div
                style={{
                  display: `${
                    expanded === "panel4" && edit ? "block" : "none"
                  }`,
                }}
              >
                <Link
                  to={`edit/physicalinfo/${data?._id}`}
                  className="w-[64px] text-center special_profile_button"
                >
                  Edit
                </Link>
              </div>
            </div>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                {data?.physicalDetail?.height && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Height</span>
                    <p className="font-normal">
                      {data?.physicalDetail ? data?.physicalDetail?.height : ""}
                    </p>
                  </div>
                )}
                {data?.physicalDetail?.weight && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Weight</span>
                    <p className="font-normal">
                      {data?.physicalDetail ? data?.physicalDetail?.weight : ""}
                    </p>
                  </div>
                )}
                {data?.physicalDetail?.ancestry && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Ancestry</span>
                    <p className="font-normal">
                      {data?.physicalDetail
                        ? data?.physicalDetail?.ancestry
                        : ""}
                    </p>
                  </div>
                )}
                {data?.physicalDetail?.skinTone && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Skin Tone</span>
                    <p className="font-normal">
                      {data?.physicalDetail
                        ? data?.physicalDetail?.skinTone
                        : ""}
                    </p>
                  </div>
                )}
                {data?.physicalDetail?.hairColor && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Hair Color</span>
                    <p className="font-normal">
                      {data?.physicalDetail
                        ? data?.physicalDetail?.hairColor
                        : ""}
                    </p>
                  </div>
                )}
                {data?.physicalDetail?.hairType && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Hair Type</span>
                    <p className="font-normal">
                      {data?.physicalDetail
                        ? data?.physicalDetail?.hairType
                        : ""}
                    </p>
                  </div>
                )}
                {data?.physicalDetail?.eyeColor && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Eye Color</span>
                    <p className="font-normal">
                      {data?.physicalDetail
                        ? data?.physicalDetail?.eyeColor
                        : ""}
                    </p>
                  </div>
                )}
                {data?.physicalDetail?.numberOfTeeth && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Number of Teeth</span>
                    <p className="font-normal">
                      {data?.physicalDetail
                        ? data?.physicalDetail?.numberOfTeeth
                        : ""}
                    </p>
                  </div>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ---------- Family Info ---------- */}
          {data?.role === "member" && (
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <div className="flex justify-between items-center	">
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <div>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      className=""
                    >
                      <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">
                        Family Information
                      </h1>
                    </Typography>
                  </div>
                </AccordionSummary>
                <div
                  style={{
                    display: `${
                      expanded === "panel5" && edit ? "block" : "none"
                    }`,
                  }}
                >
                  <Link
                    to={`edit/familyInfo/${data?._id}`}
                    className="w-[64px] text-center special_profile_button"
                  >
                    Edit
                  </Link>
                </div>
              </div>
              <AccordionDetails>
                <Typography component={"span"} variant={"body2"}>
                  <FamilyAccordion {...{ data }} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}
          {/* ---------- Siblings Info ---------- */}
          {data?.role === "member" && (
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <div className="flex justify-between items-center	">
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <div>
                    <Typography component={"span"} variant={"body2"}>
                      <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">
                        Siblings Information
                      </h1>
                    </Typography>
                  </div>
                </AccordionSummary>
              </div>
              <AccordionDetails>
                <Typography component={"span"} variant={"body2"}>
                  {data?.siblingDetail?.length > 0 &&
                    data?.siblingDetail?.map((sibling) => (
                      <div key={sibling?._id} className="mb-6">
                        <SiblingsAccordion {...{ sibling, edit }} />
                      </div>
                    ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}
          {/* ---------- Other Details ---------- */}
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <div className="flex justify-between items-center	">
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <div>
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    className="hidden md:block"
                  >
                    <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">
                      Other Information
                    </h1>
                  </Typography>
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    className="md:hidden"
                  >
                    <h1 className="text-[18px] text-[#333333] leading-[34px] font-fira">
                      Other Information
                    </h1>
                  </Typography>
                </div>
              </AccordionSummary>
              <div
                style={{
                  display: `${
                    expanded === "panel7" && edit ? "block" : "none"
                  }`,
                }}
              >
                <Link
                  to={`edit/othersinfo/${data?._id}`}
                  className="w-[64px] text-center special_profile_button"
                >
                  Edit
                </Link>
              </div>
            </div>
            <AccordionDetails>
              <Typography component={"span"} variant={"body2"}>
                {data?.othersDetail?.doSmoke && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Smoking</span>
                    <p className="font-normal">
                      {data?.othersDetail ? data?.othersDetail?.doSmoke : ""}
                    </p>
                  </div>
                )}
                {data?.othersDetail?.doDrink && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Drinking</span>
                    <p className="font-normal">
                      {data?.othersDetail ? data?.othersDetail?.doDrink : ""}
                    </p>
                  </div>
                )}
                {data?.othersDetail?.havePet && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Pets</span>
                    <p className="font-normal">
                      {data?.othersDetail ? data?.othersDetail?.havePet : ""}
                    </p>
                  </div>
                )}
                {data?.othersDetail?.haveTattos && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Tattos</span>
                    <p className="font-normal">
                      {data?.othersDetail ? data?.othersDetail?.haveTattos : ""}
                    </p>
                  </div>
                )}
                {data?.othersDetail?.haveVoluntaryExp && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Voluntary Experience</span>
                    <p className="font-normal">
                      {data?.othersDetail
                        ? data?.othersDetail?.haveVoluntaryExp
                        : ""}
                    </p>
                  </div>
                )}
                {data?.othersDetail?.travelledOutsideBangladesh && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">
                      Traveled outside Bangladesh
                    </span>
                    <p className="font-normal">
                      {data?.othersDetail
                        ? data?.othersDetail?.travelledOutsideBangladesh
                        : ""}
                    </p>
                  </div>
                )}
                {data?.othersDetail?.likeJoinFamily && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Like Join Family</span>
                    <p className="font-normal">
                      {data?.othersDetail
                        ? data?.othersDetail?.likeJoinFamily
                        : ""}
                    </p>
                  </div>
                )}
                {data?.othersDetail?.believeInGod && (
                  <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium">Believe in God</span>
                    <p className="font-normal">
                      {data?.othersDetail
                        ? data?.othersDetail?.believeInGod
                        : ""}
                    </p>
                  </div>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
      {isLoading && (
        <div>
          <LineWaveLoader />
        </div>
      )}
    </>
  );
};

export default Accordian;
