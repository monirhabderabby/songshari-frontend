import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router";
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import "./Accordion.css";
const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
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

const Accordian = () => {
    const { data, isLoading } = useGetProfileDetailsWIthAuthQuery();
    // const { phone, email, NidOrPassportNumber, citizenShip, zodiacSign, barRegistrationNumber, licenceNo, yearOfBarRegistration, dateOfBirth } = data;
    const hightestEducationalQualification = data?.hightestEducationalQualification;

    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    console.log(data, isLoading)
    const navigate = useNavigate();
    // if (isLoading) return false;




    return (
        <div className="mb-[69px] max-w-[523px] mx-auto">
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography>
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Personal Information</h1>
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <div style={{
                        display: `${expanded === 'panel1' ? "block" : "none"}`
                    }}>
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

                    <Typography>
                        {data?.firstName && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Name</span>
                                <p className="font-normal">{data ? `${data?.firstName}` : "Not Provided"}</p>
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

                        {data?.citizenShip && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">CitizenShip</span>
                                <p className="font-normal">{data ? data?.citizenShip.toString() : "Not Provided"}</p>
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
                                <span className="font-medium"> Degree Name</span>
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
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Special Achievement</span>
                            <p className="font-normal">{data ? hightestEducationalQualification?.specialAchievement : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">What are you looking for</span>
                            <p className="font-normal">{data ? data.whatAreYouLookingFor : "Not Provided"}</p>
                        </div>

                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Height</span>
                            <p className="font-normal">{data ? data.height : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Weight</span>
                            <p className="font-normal">{data ? data.weight : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Ancestry</span>
                            <p className="font-normal">{data ? data.ancestry : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Skin Tone</span>
                            <p className="font-normal">{data ? data.SkinTone : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Hair Color</span>
                            <p className="font-normal">{data ? data.hairColour : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium"> Hair Type</span>
                            <p className="font-normal">{data ? data.hairType : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Eye Color</span>
                            <p className="font-normal">{data ? data.eyeColor : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Number Of Teeth</span>
                            <p className="font-normal">{data ? data.numberOfTeeth : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Monthly Income</span>
                            <p className="font-normal">{data ? data.monthlyIncome : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Hometown</span>
                            <p className="font-normal">{data ? data.hometown : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Permanent Adress</span>
                            <p className="font-normal">{data ? data.permanentAdress : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Current Adress</span>
                            <p className="font-normal">{data ? data.currentAdress : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Merital status</span>
                            <p className="font-normal">{data ? data.maritalStatus : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Designation</span>
                            <p className="font-normal">{data ? data.designation : "Not Provided"}</p>
                        </div>
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
                        {data?.agesOfBoy && (
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
                        {data?.agesOfGirl && (
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium"> Ages Of Girl</span>
                                <p className="font-normal">{data ? data.agesOfGirl : "Not Provided"}</p>
                            </div>
                        )}
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Partner Death Day</span>
                            <p className="font-normal">{data ? data.partnerDeathDay : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Position</span>
                            <p className="font-normal">{data?.currentProfession ? data?.currentProfession?.position : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Institute</span>
                            <p className="font-normal">{data?.currentProfession ? data?.currentProfession?.institute : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Work Period</span>
                            <p className="font-normal">{data?.currentProfession ? data?.currentProfession?.workPeriod : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Special Achievement</span>
                            <p className="font-normal">
                                {data?.currentProfession ? data?.currentProfession?.specialAchievement : "Not Provided"}
                            </p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Year Of Experience</span>
                            <p className="font-normal">{data ? data.yearOfExperience : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Office Location</span>
                            <p className="font-normal">{data ? data.officeLocation : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Service Category</span>
                            <p className="font-normal">{data ? data.serviceCategory : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Service Provide</span>
                            <p className="font-normal">{data ? data.serviceProvide : "Not Provided"}</p>
                        </div>
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
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">number Of Brother</span>
                            <p className="font-normal">{data ? data.numberOfBrother : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">number Of Sister</span>
                            <p className="font-normal">{data ? data.numberOfSister : "Not Provided"}</p>
                        </div>
                        {/* <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Linkedin Id</span>
                                <p className="font-normal">{data ? data.LinkedInId : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Facebook Id</span>
                                <p className="font-normal">{data ? data.faceBookId : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Instagram Id</span>
                                <p className="font-normal">{data ? data.instagramId : "Not Provided"}</p>
                            </div> */}
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Hobbies</span>
                            <p className="font-normal">{data ? data.hobbies : "Not Provided"}</p>
                        </div>
                    </Typography>

                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography>
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Profesional Information</h1>
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <div style={{
                        display: `${expanded === 'panel2' ? "block" : "none"}`
                    }}>
                        <button
                            onClick={() => navigate(`/userprofile/edit/profesionalinfo/${data?._id}`)}
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
                    <Typography>
                        {data?.professionalDetail.length !== 0 ? (
                            data?.professionalDetail.map((d, index) => {
                                return (
                                    <>
                                        <div
                                            key={index}
                                            className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]"
                                        >
                                            <span className="font-medium">Position</span>
                                            <p className="font-normal">{data?.professionalDetail ? d?.position : "Not Provided"}</p>
                                        </div>
                                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                            <span className="font-medium">Duty</span>
                                            <p className="font-normal">{data?.professionalDetail ? d?.duty : "Not Provided"}</p>
                                        </div>
                                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                            <span className="font-medium">Institute</span>
                                            <p className="font-normal">{data?.professionalDetail ? d?.institute : "Not Provided"}</p>
                                        </div>
                                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                            <span className="font-medium">Special Achievement</span>
                                            <p className="font-normal">{data?.professionalDetail ? d?.specialAchievement : "Not Provided"}</p>
                                        </div>
                                    </>
                                );
                            })
                        ) : (
                            <>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Position</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Duty</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Institute</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Special Achievement</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                            </>
                        )}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography>
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Educational Information</h1>
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <div style={{
                        display: `${expanded === 'panel3' ? "block" : "none"}`
                    }}>
                        <button
                            onClick={() => navigate("/userprofile/edit/educationalinfo")}
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
                    <Typography>
                        {data?.educationalDetail.length !== 0 ? (
                            data?.educationalDetail.map((edu, index) => {
                                return (
                                    <>
                                        <div
                                            key={index}
                                            className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]"
                                        >
                                            <span className="font-medium">Degree</span>
                                            <p className="font-normal">{data?.educationalDetail ? edu?.degree : "Not Provided"}</p>
                                        </div>
                                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                            <span className="font-medium">Institute</span>
                                            <p className="font-normal">{data?.educationalDetail ? edu?.institute : "Not Provided"}</p>
                                        </div>
                                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                            <span className="font-medium">Department</span>
                                            <p className="font-normal">{data?.educationalDetail ? edu?.department : "Not Provided"}</p>
                                        </div>

                                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                            <span className="font-medium">Field of Study</span>
                                            <p className="font-normal">{data?.educationalDetail ? edu?.feildOfStudy : "Not Provided"}</p>
                                        </div>
                                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                            <span className="font-medium">GPA / CGPA</span>
                                            <p className="font-normal">{data?.educationalDetail ? edu?.gpaOrCgpa : "Not Provided"}</p>
                                        </div>
                                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                            <span className="font-medium">Year of Study</span>
                                            <p className="font-normal">
                                                {data?.educationalDetail ? moment(edu?.yearOfStudy).format("YYYY") : "Not Provided"}
                                            </p>
                                        </div>
                                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                            <span className="font-medium">Special Achievement</span>
                                            <p className="font-normal">{data?.educationalDetail ? edu?.specialAchievement : "Not Provided"}</p>
                                        </div>
                                    </>
                                );
                            })
                        ) : (
                            <>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Degree</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Institute</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Department</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>

                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Field of Study</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">GPA / CGPA</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Year of Study</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                                <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                    <span className="font-medium">Special Achievement</span>
                                    <p className="font-normal">Not Provided</p>
                                </div>
                            </>
                        )}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography>
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Physical Information</h1>
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <div style={{
                        display: `${expanded === 'panel4' ? "block" : "none"}`
                    }}>
                        <button
                            onClick={() => navigate("/userprofile/edit/physicalinfo")}
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
                    <Typography>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Height</span>
                            <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.height : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Weight</span>
                            <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.weight : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Ancestry</span>
                            <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.ancestry : "Not Provided"}</p>
                        </div>
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
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Hair Type</span>
                            <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.hairType : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Eye Color</span>
                            <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.eyeColor : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Number of Teeth</span>
                            <p className="font-normal">{data?.physicalDetail ? data?.physicalDetail?.numberOfTeeth : "Not Provided"}</p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
                <div className="flex justify-between items-center	">
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div>
                            <Typography>
                                <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Others Information</h1>
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <div style={{
                        display: `${expanded === 'panel5' ? "block" : "none"}`
                    }}>
                        <button
                            onClick={() => navigate("/userprofile/edit/othersinfo")}
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
                    <Typography>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Do smoke</span>
                            <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.doSmoke : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Do drink</span>
                            <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.doDrink : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Have pet</span>
                            <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.doDrink : "Not Provided"}</p>
                        </div>

                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Have tattos</span>
                            <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.haveTattos : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Have voluntary Exp</span>
                            <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.haveVoluntaryExp : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Travelled outside Bangladesh</span>
                            <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.travelledOutsideBangladesh : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Like Join Family</span>
                            <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.likeJoinFamily : "Not Provided"}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Believe in God</span>
                            <p className="font-normal">{data?.othersDetail ? data?.othersDetail?.believeInGod : "Not Provided"}</p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Accordian;
