import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import moment from "moment";
import React from "react";
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

const Accordian = ({ data, isLoading }) => {
    // const { phone, email, NidOrPassportNumber, citizenShip, zodiacSign, barRegistrationNumber, licenceNo, yearOfBarRegistration, dateOfBirth } = data;
    const hightestEducationalQualification = data?.hightestEducationalQualification;

    if (hightestEducationalQualification) {
        console.log(data);
    }
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : true);
    };
    if (isLoading) return false;

    return (
        <div className="mb-[69px] max-w-[523px] mx-auto">
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>
                        <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Personal Information</h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {data && (
                        <Typography>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Name</span>
                                <p className="font-normal">{data ? `${data?.firstName}` : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Phone</span>
                                <p className="font-normal">{data ? data.phone : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Email</span>
                                <p className="font-normal">{data ? data?.email : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Nid Or Passport Number</span>
                                <p className="font-normal">{data ? data?.NidOrPassportNumber : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">CitizenShip</span>
                                <p className="font-normal">{data ? data?.citizenShip.toString() : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">ZodiacSign</span>
                                <p className="font-normal">{data ? data?.zodiacSign : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Bar Registration Number</span>
                                <p className="font-normal">{data ? data?.barRegistrationNumber : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Licence No</span>
                                <p className="font-normal">{data ? data?.licenceNo : "Not provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Year Of Bar Registration</span>
                                <p className="font-normal">{data ? data.yearOfBarRegistration : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Date Of Birth</span>
                                <p className="font-normal">{data ? moment(data?.dateOfBirth).format("ll") : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">About You</span>
                                <p className="font-normal">Not Provided</p>
                            </div>

                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium"> Degree Name</span>
                                <p className="font-normal">{data ? hightestEducationalQualification?.degreeName : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Institute</span>
                                <p className="font-normal">{data ? hightestEducationalQualification.institute : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Department</span>
                                <p className="font-normal">{data ? hightestEducationalQualification?.Department : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Field Of Study</span>
                                <p className="font-normal">{data ? hightestEducationalQualification?.fieldOfStudy : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Year Of Passing</span>
                                <p className="font-normal">
                                    {data ? moment(hightestEducationalQualification?.yearOfPassing).format("ll") : "Not Provided"}
                                </p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Special Achievement</span>
                                <p className="font-normal">{data ? hightestEducationalQualification?.specialAchievement : "Not Provided"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">What are you looking for</span>
                                <p className="font-normal"></p>
                            </div>

                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Height</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Weight</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Ancestry</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Skin Tone</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Hair Color</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium"> Hair Type</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Eye Color</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Number Of Teeth</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Monthly Income</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Hometown</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Permanent Adress</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Current Adress</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Merital status</span>
                                <p className="font-normal">Not Provided</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Designation</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Number Of Partner</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Reason Of Marriage</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Is Partner Awar Of Marriage</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Marriage Date</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Divorce Date</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Reason Of Divorce</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Number Of Boy</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Ages Of Boy</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Number Of Girl</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium"> Ages Of Girl</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Partner Death Day</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Position</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Institute</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Work Period</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Special Achievement</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Year Of Experience</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Office Location</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Service Category</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Service Provide</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Parents</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Have Step Mother</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Have Step Father</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">number Of Brother</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">number Of Sister</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Linkedin Id</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Facebook Id</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Instagram Id</span>
                                <p className="font-normal"></p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Hobbies</span>
                                <p className="font-normal"></p>
                            </div>
                        </Typography>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>
                        <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Profesional Information</h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
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
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>
                        <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Educational Information</h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
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
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>
                        <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Physical Information</h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Height</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Weight</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Ancestry</span>
                            <p className="font-normal">Not Provided</p>
                        </div>

                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Skin Tone</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Hair Color</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Hair Type</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Eye Color</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Number of Teeth</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>
                        <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Others Information</h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Do smoke</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Do drink</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Have pet</span>
                            <p className="font-normal">Not Provided</p>
                        </div>

                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Have tattos</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Have voluntary Exp</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Travelled outside Bangladesh</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Join Family</span>
                            <p className="font-normal"></p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Like Join Family</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Believe in God</span>
                            <p className="font-normal">Not Provided</p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Accordian;
