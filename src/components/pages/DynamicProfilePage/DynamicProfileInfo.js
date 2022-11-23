import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

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

export const DynamicProfileInfo = ({ user }) => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : true);
    };
    return (
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
                            <p className="font-normal">not provided</p>
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
