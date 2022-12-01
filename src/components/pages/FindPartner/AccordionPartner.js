import React, { useState } from 'react'
import moment from "moment";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from 'antd';
import { Select } from 'antd';
import { Input, Radio, Space, Slider } from 'antd';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

export const AccordionPartner = ({ data, isLoading }) => {
    const hightestEducationalQualification = data?.hightestEducationalQualification;
    const { Panel } = Collapse;
    const [religionValue, setReligionValue] = useState(1);

    //............professional information.........//

    //state for set monthly income field
    const [monthlyIncome, setMonthlyIncome] = useState(1);
    const [educationalInfo, setEducationalInfo] = useState(null)
    const educationalInfoOptions = [
        { title: 'Ssc' },
        { title: 'Hsc' },
        { title: 'Hons' },
        { title: 'Masters' },

    ]
    const [professionalInfo, setProfessionalInfo] = useState(null);
    const professionalInfoOptions = [
        { title: 'Teacher' },
        { title: 'Doctor' },
        { title: 'Student' },
        { title: 'Business' },

    ]



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
    // const handleAgeChange = (value) => {
    //     console.log(`selected ${value}`);
    // };
    const onAgeChange = (value) => {
        console.log('onChange: ', value);
    };
    const onAfterAgeChange = (value) => {
        console.log('onAfterChange: ', value);
    };
    const handleReligionChange = (e) => {
        console.log('radio checked', e.target.value);
        setReligionValue(e.target.value);
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
    const handleUserEducationalQualificationChange = (e) => {

    };
    const handleUserIncomeChange = (e) => {
        setMonthlyIncome(e.target.value);
        console.log(e.target)
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


    //filter options for type search select (Autocomplete MUI)
    const filter = createFilterOptions();


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
                                    label: 'My Brother',
                                },
                                {
                                    value: 'sister',
                                    label: 'My Sister',
                                },
                                {
                                    value: 'cousin',
                                    label: 'My Cousin',
                                },
                                {
                                    value: 'friend',
                                    label: 'My Friend',
                                },
                                {
                                    value: 'relative',
                                    label: 'My Relative',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Age</h1>
                        {/* <Select
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
                        /> */}
                        {/* <Slider
                            className="text-[#E41272]"
                            range={{ draggableTrack: true }}
                            defaultValue={[20, 50]}
                        /> */}
                        <Slider
                            range={{ draggableTrack: true }}
                            defaultValue={[20, 50]}
                            onChange={onAgeChange}
                            onAfterChange={onAfterAgeChange}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Religion</h1>
                        <Radio.Group onChange={handleReligionChange} value={religionValue}>
                            <Space direction="vertical">
                                <Radio value={1}>Islam</Radio>
                                <Radio value={2}>Hinduism</Radio>
                                <Radio value={3}>Christian</Radio>
                                <Radio value={4}>Buddhist</Radio>
                                <Radio value={5}>Atheist</Radio>
                                <Radio value={6}>
                                    Add New
                                    {religionValue === 6 ? (
                                        <Input
                                            style={{
                                                width: 100,
                                                marginLeft: 10,
                                            }}
                                        />
                                    ) : null}
                                </Radio>
                            </Space>
                        </Radio.Group>
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
                                    value: 'single',
                                    label: 'Never Married',
                                },
                                {
                                    value: 'married',
                                    label: 'Married',
                                },
                                {
                                    value: 'divorced',
                                    label: 'Divorced',
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
                        <Autocomplete
                            value={professionalInfo}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
                                    setProfessionalInfo({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setProfessionalInfo({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setProfessionalInfo(newValue);
                                }
                            }}
                            filterOptions={(options, params) => {
                                const filtered = filter(options, params);

                                const { inputValue } = params;
                                // Suggest the creation of a new value
                                const isExisting = options.some((option) => inputValue === option.title);
                                if (inputValue !== '' && !isExisting) {
                                    filtered.push({
                                        inputValue,
                                        title: `Add "${inputValue}"`,
                                    });
                                }

                                return filtered;
                            }}
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            id="free-solo-with-text-demo"
                            options={professionalInfoOptions}
                            getOptionLabel={(option) => {
                                // Value selected with enter, right from the input
                                if (typeof option === 'string') {
                                    return option;
                                }
                                // Add "xxx" option created dynamically
                                if (option.inputValue) {
                                    return option.inputValue;
                                }
                                // Regular option
                                return option.title;
                            }}
                            renderOption={(props, option) => <li {...props}>{option.title}</li>}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label="Select One" />
                            )}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Professional Experience</h1>
                        {/* <Select
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
                        /> */}
                        <Radio.Group onChange={handleUserProfessionalExperienceChange} value={monthlyIncome}>
                            <Space direction="vertical">
                                <Radio value={1}>Less Than 1 Year</Radio>
                                <Radio value={2}>1-2 Years</Radio>
                                <Radio value={3}>2-3 Years</Radio>
                                <Radio value={4}>3-5 Years</Radio>
                                <Radio value={5}>5-10 Years</Radio>
                                <Radio value={6}>10-15 Years </Radio>
                                <Radio value={7}>15 Years+</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Educational Qualification</h1>
                        {/* <Select
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
                        /> */}

                        <Autocomplete
                            value={educationalInfo}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
                                    setEducationalInfo({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setEducationalInfo({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setEducationalInfo(newValue);
                                }
                            }}
                            filterOptions={(options, params) => {
                                const filtered = filter(options, params);

                                const { inputValue } = params;
                                // Suggest the creation of a new value
                                const isExisting = options.some((option) => inputValue === option.title);
                                if (inputValue !== '' && !isExisting) {
                                    filtered.push({
                                        inputValue,
                                        title: `Add "${inputValue}"`,
                                    });
                                }

                                return filtered;
                            }}
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            id="free-solo-with-text-demo"
                            options={educationalInfoOptions}
                            getOptionLabel={(option) => {
                                // Value selected with enter, right from the input
                                if (typeof option === 'string') {
                                    return option;
                                }
                                // Add "xxx" option created dynamically
                                if (option.inputValue) {
                                    return option.inputValue;
                                }
                                // Regular option
                                return option.title;
                            }}
                            renderOption={(props, option) => <li {...props}>{option.title}</li>}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label="Select One" />
                            )}
                        />
                    </div>

                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Monthly Income</h1>
                        {/* <Select
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
                        /> */}

                        <Radio.Group onChange={handleUserIncomeChange} value={monthlyIncome}>
                            <Space direction="vertical">
                                <Radio value={1}>Below 15,000 BDT  </Radio>
                                <Radio value={2}>15000-20000 BDT</Radio>
                                <Radio value={3}>20000-25000 BDT</Radio>
                                <Radio value={4}>25000-30000 BDT</Radio>
                                <Radio value={5}>30000-35000 BDT</Radio>
                                <Radio value={6}>35000-40000 BDT </Radio>
                                <Radio value={7}>40000-45000 BDT</Radio>
                                <Radio value={8}>45000-50000 BDT</Radio>
                                <Radio value={9}>50000-60000 BDT</Radio>
                                <Radio value={10}>60000-70000 BDT</Radio>
                                <Radio value={11}>70000-80000 BDT </Radio>
                                <Radio value={12}>80000-90000 BDT </Radio>
                                <Radio value={13}>90000-100000 BDT </Radio>
                                <Radio value={14}>100000-150000 BDT</Radio>
                                <Radio value={15}>150000-200000 BDT</Radio>
                                <Radio value={16}>20000-25000 BDT</Radio>
                                <Radio value={17}>300000+ BDT</Radio>

                            </Space>
                        </Radio.Group>
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
