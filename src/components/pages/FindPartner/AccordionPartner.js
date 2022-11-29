import React from 'react'
import moment from "moment";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from 'antd';
import { Select } from 'antd';

export const AccordionPartner = ({ data, isLoading }) => {
    const hightestEducationalQualification = data?.hightestEducationalQualification;
    const { Panel } = Collapse;

    if (hightestEducationalQualification) {
    }
    // const [expanded, setExpanded] = React.useState("panel1");

    // const handleChange = panel => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : true);
    // };
    if (isLoading) return false;
    const styledHeader = (headerTitle) => (
        <span className='text-[#333333] text-base font-semibold whitespace-nowrap'>
            {headerTitle}
        </span>
    );

    // ----------- Basic Information ----------
    const handleLookingForChange = (value) => {

    };
    const handleForChange = (value) => {

    };
    const handleAgeChange = (value) => {

    };
    const handleReligionChange = (value) => {

    };
    const handleHometownChange = (value) => {

    };
    const handleCurrentLocationChange = (value) => {

    };
    const handleCitizenshipChange = (value) => {

    };
    const handleMaritalStatusChange = (value) => {

    };

    // ------ Family Information -----------
    const handleFatherStatusChange = (value) => {

    };
    const handleFatherProfessionChange = (value) => {

    };
    const handleFatherIncomeChange = (value) => {

    };
    const handleMotherStatusChange = (value) => {

    };
    const handleMotherProfessionChange = (value) => {

    };
    const handleMotherIncomeChange = (value) => {

    };
    const handleNumberOfBrother = (value) => {

    };
    const handleNumberOfSister = (value) => {

    };

    // ------- Professional Info -------------
    const handleUserProfessionChange = (value) => {

    };
    const handleUserProfessionalExperienceChange = (value) => {

    };
    const handleUserEducationalQualificationChange = (value) => {

    };
    const handleUserIncomeChange = (value) => {

    };

    // --------- Others Information ------------
    const handleUserHeightChange = (value) => {

    };
    const handleUserWeightChange = (value) => {

    };
    const handleUserAncestryChange = (value) => {

    };
    const handleUserSkinToneChange = (value) => {

    };
    const handleUserHairColorChange = (value) => {

    };
    const handleUserHairTypeChange = (value) => {

    };
    const handleUserEyeColorChange = (value) => {

    };

    return (
        <div className='w-full'>
            {/* <Accordion className=' mb-2 mt-4'>
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

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='mb-2 mt-4'>
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
            <Accordion className='mb-2 mt-4'>
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
            </Accordion> */}
            <Collapse
                accordion
                ghost
                defaultActiveKey={'1'}
                expandIconPosition='end'
                className='mt-6'
            >
                {/* ------------ Basic Information ---------- */}
                <Panel header={styledHeader("Basic Information")} key="1">
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Looking For</h1>
                        <Select
                            defaultValue="bride"
                            className='w-full mb-2'
                            onChange={handleLookingForChange}
                            options={[
                                {
                                    value: 'bride',
                                    label: 'Bride',
                                },
                                {
                                    value: 'groom',
                                    label: 'Groom',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>For</h1>
                        <Select
                            defaultValue="myself"
                            className='w-full mb-2'
                            onChange={handleForChange}
                            options={[
                                {
                                    value: 'myself',
                                    label: 'Myself',
                                },
                                {
                                    value: 'brother',
                                    label: 'Brother',
                                },
                                {
                                    value: 'sister',
                                    label: 'Sister',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Age</h1>
                        <Select
                            defaultValue="20 - 25"
                            className='w-full mb-2'
                            onChange={handleAgeChange}
                            options={[
                                {
                                    value: '20 - 25',
                                    label: '20 - 25',
                                },
                                {
                                    value: '25 - 30',
                                    label: '25 - 30',
                                },
                                {
                                    value: '30 - 35',
                                    label: '30 - 35',
                                },
                                {
                                    value: '35 - 40',
                                    label: '35 - 40',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Religion</h1>
                        <Select
                            defaultValue="islam"
                            className='w-full mb-2'
                            onChange={handleReligionChange}
                            options={[
                                {
                                    value: 'islam',
                                    label: 'Islam',
                                },
                                {
                                    value: 'hindu',
                                    label: 'Hindu',
                                },
                                {
                                    value: 'christian',
                                    label: 'Christian',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Hometown</h1>
                        <Select
                            defaultValue="dhaka"
                            className='w-full mb-2'
                            onChange={handleHometownChange}
                            options={[
                                {
                                    value: 'dhaka',
                                    label: 'Dhaka',
                                },
                                {
                                    value: 'chittagong',
                                    label: 'Chittagong',
                                },
                                {
                                    value: 'rajshahi',
                                    label: 'Rajshahi',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Current Location</h1>
                        <Select
                            defaultValue="dhaka"
                            className='w-full mb-2'
                            onChange={handleCurrentLocationChange}
                            options={[
                                {
                                    value: 'dhaka',
                                    label: 'Dhaka',
                                },
                                {
                                    value: 'chittagong',
                                    label: 'Chittagong',
                                },
                                {
                                    value: 'rajshahi',
                                    label: 'Rajshahi',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Citizenship</h1>
                        <Select
                            defaultValue="bangladeshi"
                            className='w-full mb-2'
                            onChange={handleCitizenshipChange}
                            options={[
                                {
                                    value: 'bangladeshi',
                                    label: 'Bangladeshi',
                                },
                                {
                                    value: 'indian',
                                    label: 'Indian',
                                },
                                {
                                    value: 'arabic',
                                    label: 'Arabic',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Marital Status</h1>
                        <Select
                            defaultValue="unmarried"
                            className='w-full mb-2'
                            onChange={handleMaritalStatusChange}
                            options={[
                                {
                                    value: 'unmarried',
                                    label: 'Unmarried',
                                },
                                {
                                    value: 'married',
                                    label: 'Married',
                                },
                                {
                                    value: 'widowed',
                                    label: 'Widowed',
                                },
                            ]}
                        />
                    </div>
                </Panel>
                {/* ---------- Family Information ---------- */}
                <Panel header={styledHeader("Family Information")} key="2">
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Father Status</h1>
                        <Select
                            defaultValue="alive"
                            className='w-full mb-2'
                            onChange={handleFatherStatusChange}
                            options={[
                                {
                                    value: 'alive',
                                    label: 'Alive',
                                },
                                {
                                    value: 'dead',
                                    label: 'Dead',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Father Profession</h1>
                        <Select
                            defaultValue="retired"
                            className='w-full mb-2'
                            onChange={handleFatherProfessionChange}
                            options={[
                                {
                                    value: 'retired',
                                    label: 'Retired',
                                },
                                {
                                    value: 'police',
                                    label: 'Police',
                                },
                                {
                                    value: 'doctor',
                                    label: 'Doctor',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Father Income</h1>
                        <Select
                            defaultValue="30,000 - 40,000"
                            className='w-full mb-2'
                            onChange={handleFatherIncomeChange}
                            options={[
                                {
                                    value: '30,000 - 40,000',
                                    label: '30,000 - 40,000',
                                },
                                {
                                    value: '40,000 - 50,000',
                                    label: '40,000 - 50,000',
                                },
                                {
                                    value: '50,000 - 60,000',
                                    label: '50,000 - 60,000',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Mother Status</h1>
                        <Select
                            defaultValue="alive"
                            className='w-full mb-2'
                            onChange={handleMotherStatusChange}
                            options={[
                                {
                                    value: 'alive',
                                    label: 'Alive',
                                },
                                {
                                    value: 'dead',
                                    label: 'Dead',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Mother Profession</h1>
                        <Select
                            defaultValue="retired"
                            className='w-full mb-2'
                            onChange={handleMotherProfessionChange}
                            options={[
                                {
                                    value: 'retired',
                                    label: 'Retired',
                                },
                                {
                                    value: 'police',
                                    label: 'Police',
                                },
                                {
                                    value: 'doctor',
                                    label: 'Doctor',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Mother Income</h1>
                        <Select
                            defaultValue="30,000 - 40,000"
                            className='w-full mb-2'
                            onChange={handleMotherIncomeChange}
                            options={[
                                {
                                    value: '30,000 - 40,000',
                                    label: '30,000 - 40,000',
                                },
                                {
                                    value: '40,000 - 50,000',
                                    label: '40,000 - 50,000',
                                },
                                {
                                    value: '50,000 - 60,000',
                                    label: '50,000 - 60,000',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Number of Siblings</h1>
                        <Select
                            defaultValue="no brother"
                            className='w-full mb-1'
                            onChange={handleNumberOfBrother}
                            options={[
                                {
                                    value: 'no brother',
                                    label: 'No Brother',
                                },
                                {
                                    value: '1 brother',
                                    label: '1 Brother',
                                },
                                {
                                    value: '1 brother',
                                    label: '2 Brother',
                                },
                            ]}
                        />
                        <Select
                            defaultValue="no sister"
                            className='w-full mb-2'
                            onChange={handleNumberOfSister}
                            options={[
                                {
                                    value: 'no sister',
                                    label: 'No Sister',
                                },
                                {
                                    value: '1 sister',
                                    label: '1 Sister',
                                },
                                {
                                    value: '2 sister',
                                    label: '2 Sister',
                                },
                            ]}
                        />
                    </div>
                </Panel>
                {/* ---------- Professional Information ------------- */}
                <Panel header={styledHeader("Professional Information")} key="3">
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Profession</h1>
                        <Select
                            defaultValue="officer"
                            className='w-full mb-2'
                            onChange={handleUserProfessionChange}
                            options={[
                                {
                                    value: 'officer',
                                    label: 'Officer',
                                },
                                {
                                    value: 'police',
                                    label: 'Police',
                                },
                                {
                                    value: 'doctor',
                                    label: 'Doctor',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Professional Experience</h1>
                        <Select
                            defaultValue="1-2 years"
                            className='w-full mb-2'
                            onChange={handleUserProfessionalExperienceChange}
                            options={[
                                {
                                    value: '1-2 years',
                                    label: '1-2 years',
                                },
                                {
                                    value: '2-3 years',
                                    label: '2-3 years',
                                },
                                {
                                    value: '3-4 years',
                                    label: '3-4 years',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Educational Qualification</h1>
                        <Select
                            defaultValue="HSC"
                            className='w-full mb-2'
                            onChange={handleUserEducationalQualificationChange}
                            options={[
                                {
                                    value: 'HSC',
                                    label: 'HSC',
                                },
                                {
                                    value: 'Hons',
                                    label: 'Hons',
                                },
                                {
                                    value: 'Masters',
                                    label: 'Masters',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Monthly Income</h1>
                        <Select
                            defaultValue="30,000 - 40,000"
                            className='w-full mb-2'
                            onChange={handleUserIncomeChange}
                            options={[
                                {
                                    value: '30,000 - 40,000',
                                    label: '30,000 - 40,000',
                                },
                                {
                                    value: '40,000 - 50,000',
                                    label: '40,000 - 50,000',
                                },
                                {
                                    value: '50,000 - 60,000',
                                    label: '50,000 - 60,000',
                                },
                            ]}
                        />
                    </div>
                </Panel>
                {/*---------------- Others Information --------------*/}
                <Panel header={styledHeader("Others Information")} key="4">
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Height</h1>
                        <Select
                            defaultValue="5.2” - 5.5”"
                            className='w-full mb-2'
                            onChange={handleUserHeightChange}
                            options={[
                                {
                                    value: '5.2” - 5.5”',
                                    label: '5.2” - 5.5”',
                                },
                                {
                                    value: '5.5” - 5.8”',
                                    label: '5.5” - 5.8”',
                                },
                                {
                                    value: '5.8” - 6.2”',
                                    label: '5.8” - 6.2”',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Weight</h1>
                        <Select
                            defaultValue="option"
                            className='w-full mb-2'
                            onChange={handleUserWeightChange}
                            options={[
                                {
                                    value: 'option',
                                    label: 'option KG',
                                },
                                {
                                    value: '60-65',
                                    label: '60-65 KG',
                                },
                                {
                                    value: '65-70',
                                    label: '65-70 KG',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Ancestry</h1>
                        <Select
                            defaultValue="option"
                            className='w-full mb-2'
                            onChange={handleUserAncestryChange}
                            options={[
                                {
                                    value: 'option',
                                    label: 'option',
                                },
                                {
                                    value: 'option',
                                    label: 'option',
                                },
                                {
                                    value: 'option',
                                    label: 'option',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Skin Tone</h1>
                        <Select
                            defaultValue="white"
                            className='w-full mb-2'
                            onChange={handleUserSkinToneChange}
                            options={[
                                {
                                    value: 'white',
                                    label: 'White',
                                },
                                {
                                    value: 'black',
                                    label: 'Black',
                                },
                                {
                                    value: 'brown',
                                    label: 'Brown',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Hair Color</h1>
                        <Select
                            defaultValue="black"
                            className='w-full mb-2'
                            onChange={handleUserHairColorChange}
                            options={[
                                {
                                    value: 'black',
                                    label: 'Black',
                                },
                                {
                                    value: 'brown',
                                    label: 'Brown',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Hair Type</h1>
                        <Select
                            defaultValue="select"
                            className='w-full mb-2'
                            onChange={handleUserHairTypeChange}
                            options={[
                                {
                                    value: 'select',
                                    label: 'Select',
                                },
                                {
                                    value: 'select',
                                    label: 'Select',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Eye Color</h1>
                        <Select
                            defaultValue="black"
                            className='w-full mb-2'
                            onChange={handleUserEyeColorChange}
                            options={[
                                {
                                    value: 'black',
                                    label: 'Black',
                                },
                                {
                                    value: 'brown',
                                    label: 'Brown',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Number of Teeth</h1>
                        <Select
                            defaultValue="32"
                            className='w-full mb-2'
                            onChange={handleUserEyeColorChange}
                            options={[
                                {
                                    value: '32',
                                    label: '32',
                                },
                                {
                                    value: '30',
                                    label: '30',
                                },
                                {
                                    value: '28',
                                    label: '28',
                                },
                            ]}
                        />
                    </div>
                </Panel>
            </Collapse>
        </div>
    )
}
