import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowDown } from "react-icons/io";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.03)",
  paddingTop: "6px",
  paddingBottom: "6px",
  border: "0",
  borderRadius: "4px",
  marginTop: "15px",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#ffffff",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  color: "#67868F",
  fontSize: "12px",
  fontWeight: "bold",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //     padding: theme.spacing(2),
  //     borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const MobileAccordion = () => {
  const { data, isLoading } = useGetProfileDetailsWIthAuthQuery();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };
  return (
    <>
      <div className="mb-[69px] max-w-[337px] mx-auto">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <h1 className=" text-[#000000] text-base font-fira font-normal">
                Personal Information
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Name</span>
                <p className="font-normal">{data?.firstName}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Phone</span>
                <p className="font-normal">{data?.phone}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Email</span>
                <p className="font-normal">{data?.email}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Nid Or Passport Number</span>
                <p className="font-normal">{data?.NidOrPassportNumber}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">CitizenShip</span>
                <p className="font-normal">{data?.citizenShip}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">ZodiacSign</span>
                <p className="font-normal">{data?.zodiacSign}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Bar Registration Number</span>
                <p className="font-normal">{data?.barRegistrationNumber}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Licence No</span>
                <p className="font-normal">{data?.licenceNo}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Licence Photo</span>
                <p className="font-normal">Not Provided</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Year Of Bar Registration</span>
                <p className="font-normal">{data?.yearOfBarRegistration}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Date Of Birth</span>
                <p className="font-normal">{data?.dateOfBirth}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">About You</span>
                <p className="font-normal"></p>
              </div>

              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium"> Degree Name</span>
                <p className="font-normal">{data?.hightestEducationalQualification?.degreeName}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Institute</span>
                <p className="font-normal">{data?.hightestEducationalQualification?.institute}</p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Department</span>
                <p className="font-normal"></p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Field Of Study</span>
                <p className="font-normal"></p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Year Of Passing</span>
                <p className="font-normal"></p>
              </div>
              <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                <span className="font-medium">Special Achievement</span>
                <p className="font-normal"></p>
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
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
              <h1 className=" text-[#000000] text-base font-fira font-normal">
                Profesional Information
              </h1>
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
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <h1 className=" text-[#000000] text-base font-fira font-normal">
                Educational Information
              </h1>
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
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>
              <h1 className=" text-[#000000] text-base font-fira font-normal">
                Physical Information
              </h1>
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
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>
              <h1 className=" text-[#000000] text-base font-fira font-normal">
                Others Information
              </h1>
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
                <span className="font-medium">
                  Travelled outside Bangladesh
                </span>
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
    </>
  );
};

export default MobileAccordion;
