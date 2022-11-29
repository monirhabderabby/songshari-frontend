import React from 'react'
import moment from "moment";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const AccordionPartner = ({ data, isLoading }) => {
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
    <div className='w-full'>
        <Accordion className='ml-[-12px] mb-2 mt-4'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <h2 className="text-[#000000] text-[17px] font-bold mb-[16px]">
           Family Details
          </h2>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Name</span>
                                <p className="font-normal">{data ? `${data?.firstName}` : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Phone</span>
                                <p className="font-normal">{data ? data.phone : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Email</span>
                                <p className="font-normal">{data ? data?.email : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Nid Or Passport Number</span>
                                <p className="font-normal">{data ? data?.NidOrPassportNumber : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">CitizenShip</span>
                                <p className="font-normal">{data ? data?.citizenShip.toString() : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">ZodiacSign</span>
                                <p className="font-normal">{data ? data?.zodiacSign : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Bar Registration Number</span>
                                <p className="font-normal">{data ? data?.barRegistrationNumber : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Licence No</span>
                                <p className="font-normal">{data ? data?.licenceNo : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Year Of Bar Registration</span>
                                <p className="font-normal">{data ? data.yearOfBarRegistration : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Date Of Birth</span>
                                <p className="font-normal">{data ? moment(data?.dateOfBirth).format("ll") : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">About You</span>
                                <p className="font-normal">N/A</p>
                            </div>

                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium"> Degree Name</span>
                                <p className="font-normal">{data ? hightestEducationalQualification?.degreeName : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Institute</span>
                                <p className="font-normal">{data ? hightestEducationalQualification.institute : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Department</span>
                                <p className="font-normal">{data ? hightestEducationalQualification?.Department : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Field Of Study</span>
                                <p className="font-normal">{data ? hightestEducationalQualification?.fieldOfStudy : "N/A"}</p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Year Of Passing</span>
                                <p className="font-normal">
                                    {data ? moment(hightestEducationalQualification?.yearOfPassing).format("ll") : "N/A"}
                                </p>
                            </div>
                            <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                                <span className="font-medium">Special Achievement</span>
                                <p className="font-normal">{data ? hightestEducationalQualification?.specialAchievement : "N/A"}</p>
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
                                <p className="font-normal">N/A</p>
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
        <Accordion className='ml-[-12px] mb-2 mt-4'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <h2 className="text-[#000000] text-[17px] font-bold mb-[16px]">
          Professional Information
          </h2>
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
        <Accordion className='ml-[-12px] mb-2 mt-4'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <h2 className="text-[#000000] text-[17px] font-bold mb-[16px]">
           Other Details
          </h2>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Do smoke</span>
                            <p className="font-normal">N/A</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Do drink</span>
                            <p className="font-normal">N/A</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Have pet</span>
                            <p className="font-normal">N/A</p>
                        </div>

                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Have tattos</span>
                            <p className="font-normal">N/A</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Have voluntary Exp</span>
                            <p className="font-normal">N/A</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Travelled outside Bangladesh</span>
                            <p className="font-normal">N/A</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Join Family</span>
                            <p className="font-normal"></p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Like Join Family</span>
                            <p className="font-normal">N/A</p>
                        </div>
                        <div className="flex justify-between h-[37px] items-center border-dashed border-b-[1px] border-[rgba(0,0,0,0.1)] text-[16px] text-[#333333]">
                            <span className="font-medium">Believe in God</span>
                            <p className="font-normal">N/A</p>
                        </div>
                    </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  )
}
