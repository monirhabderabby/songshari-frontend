import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IoIosArrowDown } from "react-icons/io";
import "./Accordion.css";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    //     border: `1px solid ${theme.palette.divider}`,
    //     "&:not(:last-child)": {
    //         borderBottom: 0,
    //     },
    //     "&:before": {
    //         display: "none",
    //     },
    //     boxShadow: "0px 5px 30px rgba(35,57, 184, 0.2)",
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    //     padding: theme.spacing(2),
    //     borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Accordian = () => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : true);
    };

    // const body = [
    //     "Name",
    //     "Birthday",
    //     "I am a",
    //     "Marital status",
    //     "Country",
    //     "City",
    //     "Phone number",
    //     "NID/Passport Number",
    //     "Year Of Experience",
    //     "BAR Registration Number",
    //     "Licence Number",
    //     "Year Of BAR Registration",
    //     "Chamber Location",
    //     "Lawyer Category",
    //     "Citizenship",
    //     "Zodiac Sign",
    //     "Not provide",
    //     "Highest Educational Qualification",
    //     "Height",
    //     "Weight",
    //     "Ancestry",
    //     "Skin Tone",
    //     "Monthly Income",
    //     "Siblings",
    //     "Linkedin",
    //     "Instagram",
    //     "Facebook",
    //     "Hobby",
    //     "Highest Educational Qualification"
    // ]
    // const bodyValue = [
    //     "Albert Don",
    //     "1988-01-19",
    //     "Man",
    //     "Married",
    //     "France",
    //     "Paris",
    //     "+880 177.004-5304",
    //     "0000 0000 0000 0000",
    //     "5 Month 5 Years",
    //     "0000 0000 0000 0000",
    //     "0000 0000 0000 0000",
    //     "1999",
    //     "Dhaka, Bangladesh",
    //     "Genarel",
    //     "Not provide",
    //     "Not provide",
    //     "Not provide",
    //     "BCS",
    //     "Not provide",
    //     "Not provide",
    //     "Not provide",
    //     "Not provide",
    //     "2 Brother and 0 Sister",
    //     "Not provide",
    //     "Not provide",
    //     "Not provide",
    //     "Not provide",
    //     "ualification",
    //     "BCS"
    // ]

    const user = { firstName: "User", lastName: "Name" };

    return (
        // <div className='w-[523px] h-[1294px] app__accordian px-5'>
        //     <div className='flex justify-between app__accordian-head py-5'>
        //         <p className='font-[600] text-[24px]'>Personal Information</p>
        //         <button className='inline-block w-[64px] h-[24px] font-[600] text-[18px] app__edit-button text-white rounded-md'>Edit</button>
        //     </div>
        //     <span className='w-full inline-block app__border-main'></span>
        //     <div className='flex justify-between'>
        //         <div className='flex flex-col items-start'>
        //             {
        //                 body.map((item) => <>
        //                     <p key={uuidv4()} className="">{item}</p>
        //                     <span className='w-[125%] inline-block app__border' key={uuidv4()}></span>
        //                 </>)
        //             }
        //         </div>
        //         <div className='flex flex-col items-end'>
        //             {
        //                 bodyValue.map((item) => <>
        //                     <p key={uuidv4()}>{item}</p>
        //                     <span className='w-[124%] inline-block app__border' key={uuidv4()}></span>
        //                 </>)
        //             }
        //         </div>
        //     </div>
        //     <div className='flex justify-between my-5'>
        //         <p className='font-[600] text-[24px] app__accordian-name'>Personal information</p>
        //         <IoIosArrowDown />
        //     </div>
        //     <div className='flex justify-between my-5'>
        //         <p className='font-[600] text-[24px] app__accordian-name'>Education and Others</p>
        //         <IoIosArrowDown />
        //     </div>
        // </div>
        <div className="mb-[69px] max-w-[523px] mx-auto">
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>
                        <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Personal Information</h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Name</span>
                            <p className="font-normal">{user?.firstName + " " + user?.lastName}</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Birthday</span>
                            <p className="font-normal">1988-01-19</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">I am</span>
                            <p className="font-normal">Man</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Merital status</span>
                            <p className="font-normal">Married</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Country</span>
                            <p className="font-normal">Franch</p>
                        </div>
                    </Typography>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>
                        <h1 className="text-[24px] text-[#333333] leading-[34px] font-fira font-semibold">Education and Others</h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Accordian;