// configuration
import React from "react";
import { useNavigate } from "react-router";

// Third party packages
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import moment from "moment";

// css files
import { Link } from "react-router-dom";
import "./Accordion.css";
import FamilyAccordion from "./ProfileAccordion/FamilyAccordion";
import SiblingsAccordion from "./ProfileAccordion/SiblingsAccordion";

const Accordion = styled(props => <MuiAccordion square {...props} />)(({ theme }) => ({
    paddingTop: "23px",
    paddingLeft: "53px",
    paddingBottom: "23px",
    paddingRight: "53px",
}));
const AccordionSummary = styled(props => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(
    ({ theme }) => ({
        backgroundColor: "#ffffff",
        flexDirection: "row-reverse",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: theme.spacing(1),
        },
        color: "#333333",
        fontSize: "24px",
        fontWeight: "bold",
    })
);
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

const Accordian = ({ data, isLoading, edit }) => {
    const hightestEducationalQualification = data?.hightestEducationalQualification;

    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const navigate = useNavigate();
    return (
        <div className="mb-[69px] max-w-[523px] mx-auto">
            <div className="hidden lg:block" id="fdhjf">
                <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                    <div className="flex justify-between items-center ">
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <div>
                                <Typography component={"span"} variant={"body2"} className="hidden md:block">
                                    <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Personal Information</h1>
                                </Typography>
                                <Link to="/tteesst">
                                    <Typography component={"span"} variant={"body2"} className="md:hidden">
                                        <h1 className="text-[18px] text-[#333333] leading-[34px] font-fira">Personal Details</h1>
                                    </Typography>
                                </Link>
                            </div>
                        </AccordionSummary>
                        <div
                            style={{
                                display: `${expanded === "panel1" && edit ? "block" : "none"}`,
                            }}
                        >
                            <button
                                onClick={() => navigate(`/userprofile/edit/personalinfo/${data?._id}`)}
                                style={{
                                    background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                                }}
                                className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                    <AccordionDetails>
                        <Typography component={"span"} variant={"body2"}>
                            {data?.firstName && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Name</span>
                                    <p className="font-normal">{data ? `${data?.firstName + "" + data?.lastName}` : "Not Provided"}</p>
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
                                    <p className="font-normal">{data ? data?.NidOrPassportNumber : "Not Provided"}</p>
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
                                            : "Not Provided"}
                                    </div>
                                </div>
                            )}

                            {data?.zodiacSign && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">ZodiacSign</span>
                                    <p className="font-normal">{data ? data?.zodiacSign : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.barRegistrationNumber && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Bar Registration Number</span>
                                    <p className="font-normal">{data ? data?.barRegistrationNumber : "Not Provided"}</p>
                                </div>
                            )}

                            {data?.licenceNo && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Licence No</span>
                                    <p className="font-normal">{data ? data?.licenceNo : "Not provided"}</p>
                                </div>
                            )}
                            {data?.yearOfBarRegistration && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Year Of Bar Registration</span>
                                    <p className="font-normal">{data ? data.yearOfBarRegistration : "Not Provided"}</p>
                                </div>
                            )}

                            {data?.dateOfBirth && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Date Of Birth</span>
                                    <p className="font-normal">{data ? moment(data?.dateOfBirth).format("ll") : "Not Provided"}</p>
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
                                    <p className="font-normal">{data ? hightestEducationalQualification?.institute : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.hightestEducationalQualification?.Department && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Department</span>
                                    <p className="font-normal">{data ? hightestEducationalQualification?.Department : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.hightestEducationalQualification?.fieldOfStudy && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Field Of Study</span>
                                    <p className="font-normal">{data ? hightestEducationalQualification?.fieldOfStudy : "Not Provided"}</p>
                                </div>
                            )}

                            {data?.hightestEducationalQualification?.yearOfPassing && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Year Of Passing</span>
                                    <p className="font-normal">
                                        {data ? moment(hightestEducationalQualification?.yearOfPassing).format("ll") : "Not Provided"}
                                    </p>
                                </div>
                            )}
                            {data?.hightestEducationalQualification?.specialAchievement && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Special Achievement</span>
                                    <p className="font-normal">{data ? hightestEducationalQualification?.specialAchievement : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.whatAreYouLookingFor && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">What are you looking for</span>
                                    <p className="font-normal">{data ? data.whatAreYouLookingFor : "Not Provided"}</p>
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
                                    <p className="font-normal">{data ? data.ancestry : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.SkinTone && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Skin Tone</span>
                                    <p className="font-normal">{data ? data.SkinTone : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.hairColour && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Hair Color</span>
                                    <p className="font-normal">{data ? data.hairColour : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.hairType?.length !== 0 && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Hair Type</span>
                                    <p className="font-normal">{data ? data.hairType : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.eyeColor && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Eye Color</span>
                                    <p className="font-normal">{data ? data.eyeColor : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.numberOfTeeth && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Number Of Teeth</span>
                                    <p className="font-normal">{data ? data.numberOfTeeth : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.monthlyIncome && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Monthly Income</span>
                                    <p className="font-normal">{data ? data.monthlyIncome : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.hometown && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Hometown</span>
                                    <p className="font-normal">{data ? data.hometown : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.permanentAdress && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Permanent Adress</span>
                                    <p className="font-normal">{data ? data.permanentAdress : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.currentAdress && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Current Adress</span>
                                    <p className="font-normal">{data ? data.currentAdress : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.maritalStatus && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Marital status</span>
                                    <p className="font-normal">{data ? data.maritalStatus : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.designation && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Designation</span>
                                    <p className="font-normal">{data ? data.designation : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.numberOfPartner && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Number Of Partner</span>
                                    <p className="font-normal">{data ? data.numberOfPartner : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.reasonOfMarriage && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Reason Of Marriage</span>
                                    <p className="font-normal">{data ? data.reasonOfMarriage : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.isPartnerAwarOfMarriage && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Is Partner Awar Of Marriage</span>
                                    <p className="font-normal">{data ? data.isPartnerAwarOfMarriage : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.marriageDate && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Marriage Date</span>
                                    <p className="font-normal">{data ? data.marriageDate : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.divorceDate && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Divorce Date</span>
                                    <p className="font-normal">{data ? data.divorceDate : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.reasonOfDivorce && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Reason Of Divorce</span>
                                    <p className="font-normal">{data ? data.reasonOfDivorce : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.numberOfBoy && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Number Of Boy</span>
                                    <p className="font-normal">{data ? data.numberOfBoy : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.agesOfBoy?.length !== 0 && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Ages Of Boy</span>
                                    <p className="font-normal">{data ? data.agesOfBoy : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.numberOfGirl && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Number Of Girl</span>
                                    <p className="font-normal">{data ? data.numberOfGirl : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.agesOfGirl?.length > 0 && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Ages Of Girl</span>
                                    <p className="font-normal">{data ? data.agesOfGirl : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.partnerDeathDay && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Partner Death Day</span>
                                    <p className="font-normal">{data ? data.partnerDeathDay : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.data?.currentProfession?.position && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Position</span>
                                    <p className="font-normal">{data?.currentProfession ? data?.currentProfession?.position : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.currentProfession?.institute && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Institute</span>
                                    <p className="font-normal">{data?.currentProfession ? data?.currentProfession?.institute : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.currentProfession?.workPeriod && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Work Period</span>
                                    <p className="font-normal">{data?.currentProfession ? data?.currentProfession?.workPeriod : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.currentProfession?.specialAchievement && (
                                <div className="flex justify-between py-3 border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium whitespace-nowrap">Special Achievement</span>
                                    <p className="font-normal text-right w-[50%]">
                                        {data?.currentProfession ? data?.currentProfession?.specialAchievement : "Not Provided"}
                                    </p>
                                </div>
                            )}
                            {data?.yearOfExperience?.length > 0 && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Year Of Experience</span>
                                    <p className="font-normal">{data ? data.yearOfExperience : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.officeLocation && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Office Location</span>
                                    <p className="font-normal">{data ? data.officeLocation : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.serviceCategory && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Service Category</span>
                                    <p className="font-normal">{data ? data.serviceCategory : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.serviceProvide && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Service Provide</span>
                                    <p className="font-normal">{data ? data.serviceProvide : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.parents && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Parents</span>
                                    <p className="font-normal">{data ? data.parents : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.haveStepMother && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Have Step Mother</span>
                                    <p className="font-normal">{data ? data.haveStepMother : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.haveStepFather && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Have Step Father</span>
                                    <p className="font-normal">{data ? data.haveStepFather : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.numberOfBrother && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Number Of Brother</span>
                                    <p className="font-normal">{data ? data.numberOfBrother : "Not Provided"}</p>
                                </div>
                            )}
                            {data?.numberOfSister && (
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Number Of Sister</span>
                                    <p className="font-normal">{data ? data.numberOfSister : "Not Provided"}</p>
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
          </AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            {data?.professionalDetail?.length !== 0 &&
              data?.professionalDetail.map((profession) => {
                return (
                  <div key={profession?._id} className="mb-6">
                    <div
                      className={`${edit ? "flex justify-end mt-2" : "none"}`}
                    >
                      <button
                        onClick={() =>
                          navigate(
                            `/userprofile/edit/profesionalinfo/${profession?._id}`
                          )
                        }
                        style={{
                          background:
                            "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        }}
                        className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
                      >
                        Edit
                      </button>
                    </div>
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
                    </AccordionSummary>
                </div>
                <AccordionDetails>
                    <Typography component={"span"} variant={"body2"}>
                        {data?.professionalDetail?.length !== 0 &&
                            data?.professionalDetail.map(profession => {
                                return (
                                    <div key={profession?._id} className="mb-6">
                                        <div className="flex justify-end mt-2">
                                            <button
                                                onClick={() => navigate(`/userprofile/edit/profesionalinfo/${profession?._id}`)}
                                                style={{
                                                    background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                                                }}
                                                className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
                                            >
                                                Edit
                                            </button>
                                        </div>
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
                                                    <p className="font-normal">{profession?.specialAchievement}</p>
                                                </div>
                                            )}
                                            {profession?.workPeriod?.length !== 0 && (
                                                <div className="flex justify-between py-[6px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                                    <span className="font-medium">Special Achievement</span>
                                                    <p className="font-normal">{profession?.workPeriod[0] + " to " + profession?.workPeriod[1]}</p>
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
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography component={"span"} variant={"body2"} className="hidden md:block">
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Educational Information</h1>
                            </Typography>
                            <Typography component={"span"} variant={"body2"} className="md:hidden">
                                <h1 className="text-[18px] text-[#333333] leading-[34px] font-fira">Educational Information</h1>
                            </Typography>
                        </div>
                    </AccordionSummary>
                </div>
                <AccordionDetails>
                    <Typography component={"span"} variant={"body2"}>
                        {data?.educationalDetail.length !== 0 ? (
                            data?.educationalDetail.map(edu => {
                                return (
                                    <div key={edu?._id} className="mb-6">
                                        <div className="flex justify-end mt-2">
                                            <button
                                                onClick={() => navigate(`/userprofile/edit/educationalinfo/${edu?._id}`)}
                                                style={{
                                                    background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                                                }}
                                                className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <div>
                                            {data?.educationalDetail.length !== 0 && (
                                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                                    <span className="font-medium">Degree</span>
                                                    <p className="font-normal">{data?.educationalDetail ? edu?.degree : "Not Provided"}</p>
                                                </div>
                                            )}
                                            {data?.educationalDetail.length !== 0 && (
                                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                                    <span className="font-medium">Institute</span>
                                                    <p className="font-normal">{data?.educationalDetail ? edu?.institute : "Not Provided"}</p>
                                                </div>
                                            )}
                                            {data?.educationalDetail.length !== 0 && (
                                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                                    <span className="font-medium">Department</span>
                                                    <p className="font-normal">{data?.educationalDetail ? edu?.department : "Not Provided"}</p>
                                                </div>
                                            )}
                                            {data?.educationalDetail.length !== 0 && (
                                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                                    <span className="font-medium">Field of Study</span>
                                                    <p className="font-normal">{data?.educationalDetail ? edu?.fieldOfStudy : "Not Provided"}</p>
                                                </div>
                                            )}
                                            {data?.educationalDetail.length !== 0 && (
                                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                                    <span className="font-medium">GPA / CGPA</span>
                                                    <p className="font-normal">{data?.educationalDetail ? edu?.gpaOrCgpa : "Not Provided"}</p>
                                                </div>
                                            )}
                                            {data?.educationalDetail.length !== 0 && (
                                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                                    <span className="font-medium">Year of Study</span>
                                                    <p className="font-normal">
                                                        {data?.educationalDetail ? moment(edu?.yearOfStudy).format("YYYY") : "Not Provided"}
                                                    </p>
                                                </div>
                                            )}
                                            {data?.educationalDetail.length !== 0 && (
                                                <div className="flex justify-between py-3 border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                                    <span className="font-medium whitespace-nowrap">Special Achievement</span>
                                                    <p className="font-normal text-right w-[50%]">
                                                        {data?.educationalDetail ? edu?.specialAchievement : "Not Provided"}
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
                                        <p className="font-normal">{data?.educationalDetail ? data?.educationalDetail?.degree : "Not Provided"}</p>
                                    </div>
                                )}
                                {data?.educationalDetail.length !== 0 && (
                                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                        <span className="font-medium">Institute</span>
                                        <p className="font-normal">{data?.educationalDetail ? data?.educationalDetail?.institute : "Not Provided"}</p>
                                    </div>
                                )}
                                {data?.educationalDetail.length !== 0 && (
                                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                        <span className="font-medium">Department</span>
                                        <p className="font-normal">
                                            {data?.educationalDetail ? data?.educationalDetail?.department : "Not Provided"}
                                        </p>
                                    </div>
                                )}
                                {data?.educationalDetail.length !== 0 && (
                                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                        <span className="font-medium">Field of Study</span>
                                        <p className="font-normal">
                                            {data?.educationalDetail ? data?.educationalDetail?.fieldOfStudy : "Not Provided"}
                                        </p>
                                    </div>
                                )}
                                {data?.educationalDetail.length !== 0 && (
                                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                        <span className="font-medium">GPA / CGPA</span>
                                        <p className="font-normal">{data?.educationalDetail ? data?.educationalDetail?.gpaCgpa : "Not Provided"}</p>
                                    </div>
                                )}
                                {data?.educationalDetail.length !== 0 && (
                                    <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                        <span className="font-medium">Year of Study</span>
                                        <p className="font-normal">
                                            {data?.educationalDetail ? data?.educationalDetail?.yearOfStudy : "Not Provided"}
                                        </p>
                                    </div>
                                )}
                                {data?.educationalDetail.length !== 0 && (
                                    <div className="flex justify-between py-3 items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                        <span className="font-medium whitespace-nowrap">Special Achievement</span>
                                        <p className="font-normal text-right w-[50%]">
                                            {data?.educationalDetail ? data?.educationalDetail?.specialAchievement : "Not Provided"}
                                        </p>
                                    </div>
                                )}
                            </>
                        )}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography component={"span"} variant={"body2"} className="hidden md:block">
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Physical Information</h1>
                            </Typography>
                            <Typography component={"span"} variant={"body2"} className="md:hidden">
                                <h1 className="text-[18px] text-[#333333] leading-[34px] font-fira">Physical Information</h1>
                            </Typography>
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
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
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
                      className={`${edit ? "flex justify-end mt-2" : "none"}`}
                    >
                      <button
                        onClick={() =>
                          navigate(
                            `/userprofile/edit/educationalinfo/${edu?._id}`
                          )
                        }
                        style={{
                            display: `${expanded === "panel4" && edit ? "block" : "none"}`,
                        }}
                    >
                        <button
                            onClick={() => navigate(`/userprofile/edit/physicalinfo/${data?._id}`)}
                            style={{
                                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                            }}
                            className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
                        >
                            Edit
                        </button>
                    </div>
                </div>
                <AccordionDetails>
                    <Typography component={"span"} variant={"body2"}>
                        {data?.physicalDetail?.height && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Height</span>
                                <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.height : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.physicalDetail?.weight && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Weight</span>
                                <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.weight : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.physicalDetail?.ancestry && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Ancestry</span>
                                <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.ancestry : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.physicalDetail?.skinTone && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Skin Tone</span>
                                <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.skinTone : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.physicalDetail?.hairColor && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Hair Color</span>
                                <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.hairColor : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.physicalDetail?.hairType && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Hair Type</span>
                                <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.hairType : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.physicalDetail?.eyeColor && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Eye Color</span>
                                <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.eyeColor : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.physicalDetail?.numberOfTeeth && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Number of Teeth</span>
                                <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.numberOfTeeth : "Not Provided"}</p>
                            </div>
                        )}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* ---------- Family Info ---------- */}
            <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography component={"span"} variant={"body2"} className="">
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Family Information</h1>
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <div
                        style={{
                            display: `${expanded === "panel5" && edit ? "block" : "none"}`,
                        }}
                    >
                        <button
                            onClick={() => navigate(`/userprofile/edit/familyInfo/${data?._id}`)}
                            style={{
                                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                            }}
                            className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
                        >
                            Edit
                        </button>
                    </div>
                </div>
                <AccordionDetails>
                    <Typography component={"span"} variant={"body2"}>
                        <FamilyAccordion {...{ data }} />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* ---------- Siblings Info ---------- */}
            <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography component={"span"} variant={"body2"}>
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Siblings Information</h1>
                            </Typography>
                        </div>
                    </AccordionSummary>
                </div>
                <AccordionDetails>
                    <Typography component={"span"} variant={"body2"}>
                        {data?.siblingDetail?.length > 0 &&
                            data?.siblingDetail?.map(sibling => (
                                <div key={sibling?._id} className="mb-6">
                                    <SiblingsAccordion {...{ sibling }} />
                                </div>
                            ))}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* ---------- Other Details ---------- */}
            <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography component={"span"} variant={"body2"} className="hidden md:block">
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Other Information</h1>
                            </Typography>
                            <Typography component={"span"} variant={"body2"} className="md:hidden">
                                <h1 className="text-[18px] text-[#333333] leading-[34px] font-fira">Other Information</h1>
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <div
                        style={{
                            display: `${expanded === "panel7" && edit ? "block" : "none"}`,
                        }}
                    >
                        <button
                            onClick={() => navigate(`/userprofile/edit/othersinfo/${data?._id}`)}
                            style={{
                                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                            }}
                            className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
                        >
                            Edit
                        </button>
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
                  <div className="flex justify-between py-3 items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                    <span className="font-medium whitespace-nowrap">
                      Special Achievement
                    </span>
                    <p className="font-normal text-right w-[50%]">
                      {data?.educationalDetail
                        ? data?.educationalDetail?.specialAchievement
                        : "Not Provided"}
                    </p>
                  </div>
                )}
              </>
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* ---------- Physical info ---------- */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <div className="flex justify-between items-center	">
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
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
              display: `${expanded === "panel4" && edit ? "block" : "none"}`,
            }}
          >
            <button
              onClick={() =>
                navigate(`/userprofile/edit/physicalinfo/${data?._id}`)
              }
              style={{
                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
              }}
              className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
            >
              Edit
            </button>
          </div>
        </div>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      {/* ---------- Family Info ---------- */}
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <div className="flex justify-between items-center	">
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div>
              <Typography component={"span"} variant={"body2"} className="">
                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">
                  Family Information
                </h1>
              </Typography>
            </div>
          </AccordionSummary>
          <div
            style={{
              display: `${expanded === "panel5" && edit ? "block" : "none"}`,
            }}
          >
            <button
              onClick={() =>
                navigate(`/userprofile/edit/familyInfo/${data?._id}`)
              }
              style={{
                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
              }}
              className="w-[64px] text-center py-[8] px-[10px] text-[#fff] h-[28px] text-lg font-medium rounded"
            >
              Edit
            </button>
          </div>
        </div>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <FamilyAccordion {...{ data }} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* ---------- Siblings Info ---------- */}
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <div className="flex justify-between items-center	">
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
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
                <AccordionDetails>
                    <Typography component={"span"} variant={"body2"}>
                        {data?.othersDetail?.doSmoke && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Do smoke</span>
                                <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.doSmoke : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.othersDetail?.doDrink && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Do drink</span>
                                <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.doDrink : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.othersDetail?.doDrink && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Have pet</span>
                                <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.doDrink : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.othersDetail?.haveTattos && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Have tattos</span>
                                <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.haveTattos : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.othersDetail?.haveVoluntaryExp && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Have voluntary Exp</span>
                                <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.haveVoluntaryExp : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.othersDetail?.travelledOutsideBangladesh && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Travelled outside Bangladesh</span>
                                <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.travelledOutsideBangladesh : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.othersDetail?.likeJoinFamily && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Like Join Family</span>
                                <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.likeJoinFamily : "Not Provided"}</p>
                            </div>
                        )}
                        {data?.othersDetail?.believeInGod && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Believe in God</span>
                                <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.believeInGod : "Not Provided"}</p>
                            </div>
                        )}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <AccordionDetails>
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
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Have voluntary Exp</span>
                <p className="font-normal">
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
