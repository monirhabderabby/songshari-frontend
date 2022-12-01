import React, { useEffect, useState } from 'react'
import { AutoComplete, Collapse } from 'antd';
import { Select } from 'antd';
import { Input, Radio, Space, Slider } from 'antd';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

export const AccordionPartner = ({ data, isLoading }) => {
    const hightestEducationalQualification = data?.hightestEducationalQualification;
    const { Panel } = Collapse;
    const [religionValue, setReligionValue] = useState(1);
    const [homeTowns, setHomeTown] = useState([]);
    const [countries, setCountries] = useState([]);
    const [professions, setProfessions] = useState([]);
    const [fatherStatusValue, setFatherStatusValue] = useState('');
    const [motherStatusValue, setMotherStatusValue] = useState('');
    const [fatherIncomeValue, setFatherIncomeValue] = useState('');
    const [motherIncomeValue, setMotherIncomeValue] = useState('');
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(10);
    const [weight, setWeight] = useState(10);
    const [brother, setBrother] = useState(0);
    const [sister, setSister] = useState(0)

    useEffect(() => {
        fetch("json/district.json")
            .then(res => res.json())
            .then(data => setHomeTown(data))
    }, [setHomeTown]);

    useEffect(() => {
        fetch("json/countries.json")
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    useEffect(() => {
        fetch("json/professions.json")
            .then(res => res.json())
            .then(data => setProfessions(data));
    }, []);

    //............professional information data state.........//
    const [professionalInfo, setProfessionalInfo] = useState({});
    //state for set monthly income field
    const [monthlyIncome, setMonthlyIncome] = useState('');
    // Educational Qualification
    const [educationalInfo, setEducationalInfo] = useState(null)
    //Professional Experience state
    const [professionalStatus, setProfessionalStatus] = useState(null);


    //.............Basic information data state.............//
    const [basicInfo, setBasicInfo] = useState({});

    //...........Familly Information data state ................//
    const [familyInfo, setFamilyInfo] = useState({});

    //.............. Others information data state................//
    const [othersInfo, setOthersInfo] = useState({});

    //Educational Qualifications Options
    const educationalInfoOptions = [
        { title: 'Ssc' },
        { title: 'Hsc' },
        { title: 'Hons' },
        { title: 'Masters' },

    ]
    //Professional experience options
    const professionalStatusOptions = [
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
        setBasicInfo({ ...basicInfo, looking: value })
    };
    const handleForChange = (value) => {
        setBasicInfo({ ...basicInfo, forWhom: value })

    };
    // const handleAgeChange = (value) => {
    //     console.log(`selected ${value}`);
    // };
    const onAgeChange = (value) => {
        setAge(value);
        setBasicInfo({ ...basicInfo, age: value });

    };
    const onAfterAgeChange = (value) => {
        console.log('onAfterChange: ', value);
    };
    const handleReligionChange = (e) => {
        setReligionValue(e.target.value);
        setBasicInfo({ ...basicInfo, relition: e?.target?.value })
    };
    const handleHometownChange = (value) => {
        setBasicInfo({ ...basicInfo, homeTown: value })
    };
    const handleCurrentLocationChange = (value) => {
        setBasicInfo({ ...basicInfo, currentLocation: value })
    };
    const handleCitizenshipChange = (value) => {
        setBasicInfo({ ...basicInfo, citizenship: value })
    };
    const handleMaritalStatusChange = (value) => {
        setBasicInfo({ ...basicInfo, martialStatus: value })
    };

    // ------ Family Information -----------
    const handleFatherStatusChange = (e) => {
        setFatherStatusValue(e.target.value);
    };
    const handleFatherProfessionChange = (value) => {
        setFamilyInfo({ ...familyInfo, fatherStatus: value });
    };
    const handleFatherIncomeChange = (e) => {
        setFatherIncomeValue(e.target.value);
        setFamilyInfo({ ...familyInfo, fatherIncome: e.target.value });

    };
    const handleMotherStatusChange = (e) => {
        setMotherStatusValue(e.target.value);
        setFamilyInfo({ ...familyInfo, motherStatus: e?.target?.value });
    };
    const handleMotherProfessionChange = (value) => {
        setFamilyInfo({ ...familyInfo, motherProfession: value });

    };
    const handleMotherIncomeChange = (e) => {

        setMotherIncomeValue(e.target.value);
        setFamilyInfo({ ...familyInfo, motherIncome: e.target.value });

    };

    // ------- Professional Info -------------
    const handleUserProfessionChange = (event, newValue) => {
        console.log(newValue)
        if (typeof newValue === 'string') {
            setProfessionalStatus({
                title: newValue,
            });
            setProfessionalInfo({ ...professionalInfo, professionalStatus: newValue.title })
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setProfessionalStatus({
                title: newValue.inputValue,
            });
            setProfessionalInfo({ ...professionalInfo, professionalStatus: newValue.inputValue })
        } else {
            setProfessionalStatus(newValue);
            setProfessionalInfo({ ...professionalInfo, professionalStatus: newValue.title })
        }


    }

    const handleUserProfessionalExperienceChange = (e) => {
        setProfessionalInfo({ ...professionalInfo, professionalExperience: e.target.value });
    };
    const handleUserEducationalQualificationChange = (event, newValue) => {
        if (typeof newValue === 'string') {
            setEducationalInfo({
                title: newValue,
            });
            setProfessionalInfo({ ...professionalInfo, educationalQualification: newValue?.title })
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setEducationalInfo({
                title: newValue.inputValue,
            });
            setProfessionalInfo({ ...professionalInfo, educationalQualification: newValue.inputValue })

        } else {
            setEducationalInfo(newValue);
            setProfessionalInfo({ ...professionalInfo, educationalQualification: newValue.title })


        }


    }
    const handleUserIncomeChange = (e) => {
        setProfessionalInfo({ ...professionalInfo, monthlyIncome: e.target.value })
        setMonthlyIncome(e.target.value)
    };


    // --------- Others Information ------------
    const onHeightChange = (value) => {
        setHeight(value);
        setOthersInfo({ ...othersInfo, height: value });
    };
    const onAfterHeightChange = (value) => {


    };
    const onWeightChange = (value) => {
        setWeight(value);
        setOthersInfo({ ...othersInfo, weight: value });

    };
    const onAfterWeightChange = (value) => {

    };
    const handleUserAncestryChange = (value) => {
        setOthersInfo({ ...othersInfo, ancestry: value });

    };
    const handleUserSkinToneChange = (value) => {
        setOthersInfo({ ...othersInfo, skinTune: value });

    };
    const handleUserHairColorChange = (value) => {
        setOthersInfo({ ...othersInfo, hairColor: value });

    };
    const handleUserHairTypeChange = (value) => {
        setOthersInfo({ ...othersInfo, HairType: value });

    };
    const handleUserEyeColorChange = (value) => {
        setOthersInfo({ ...othersInfo, EyeColor: value });

    };

    //handle data submission
    const handleSubmit = () => {
        familyInfo.siblings = { brother: brother, sister: sister }
        const data = {
            basicInfo,
            familyInfo,
            professionalInfo,
            othersInfo
        }
        console.log(data)
    }

    //filter options for type search select (Autocomplete MUI)
    const filter = createFilterOptions();


    return (
        <div className='w-full'>
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
                            showSearch
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
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
                            showSearch
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }

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
                        <h1 className='text-lg leading-6 font-semibold mb-2'>Age</h1>
                        <p className='text-left text-base font-medium'> {age[0]} to {age[1]} </p>
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
                                <Radio value='Islam'>Islam</Radio>
                                <Radio value="Hinduism">Hinduism</Radio>
                                <Radio value="Christian">Christian</Radio>
                                <Radio value="Buddhist">Buddhist</Radio>
                                <Radio value="Atheist">Atheist</Radio>
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
                        <h1 className='text-lg leading-6 font-semibold mt-2 mb-4'>Hometown</h1>
                        <Select
                            className='w-full mb-2'
                            onChange={handleHometownChange}
                            placeholder="Select Hometown"
                            showSearch
                            filterOption={(input, option) =>
                                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                        >
                            {
                                homeTowns.map(town => {
                                    return <Select.Option key={town.id} value={town.value} >{town.name}</Select.Option>
                                })
                            }
                        </Select>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Current Location</h1>
                        <Select
                            className='w-full mb-2'
                            onChange={handleCurrentLocationChange}
                            placeholder="Select current location"
                            showSearch
                            filterOption={(input, option) =>
                                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                        >
                            {
                                homeTowns.map(town => {
                                    return <Select.Option key={town.id} value={town.value} >{town.name}</Select.Option>
                                })
                            }
                        </Select>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Citizenship</h1>
                        <Select
                            className='w-full mb-2'
                            onChange={handleCitizenshipChange}
                            placeholder="Select Citizenship"
                            mode='multiple'
                            maxTagCount={2}
                            allowClear
                            showSearch
                            filterOption={(input, option) =>
                                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                        >
                            {
                                countries.map(country => <Select.Option
                                    key={country.id}
                                    value={country.value}>
                                    {country.label}
                                </Select.Option>)
                            }
                        </Select>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Marital Status</h1>
                        <Select
                            className='w-full mb-2'
                            onChange={handleMaritalStatusChange}
                            placeholder="Select Status"
                            showSearch
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
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
                        <Radio.Group
                            onChange={handleFatherStatusChange}
                            value={fatherStatusValue}>
                            <Space direction="vertical">
                                <Radio value={'alive'}>Alive</Radio>
                                <Radio value={'dead'}>Dead</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Father Profession</h1>
                        <AutoComplete
                            placeholder="Input profession"
                            className='w-full'
                            onChange={handleFatherProfessionChange}
                            filterOption={true}
                        >
                            {
                                professions.map((prof, index) => {
                                    return <AutoComplete.Option key={index} value={prof}>
                                        {prof}
                                    </AutoComplete.Option>
                                })
                            }
                        </AutoComplete>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mt-2 mb-4'>Father Income</h1>
                        <Radio.Group
                            onChange={handleFatherIncomeChange}
                            value={fatherIncomeValue}>
                            <Space direction="vertical">
                                <Radio value={'Below 15,000 BDT'}>Below 15,000 BDT</Radio>
                                <Radio value={'15000-20000 BDT'}>15000-20000 BDT</Radio>
                                <Radio value={'20000-25000 BDT'}>20000-25000 BDT</Radio>
                                <Radio value={'25000-30000 BDT'}>25000-30000 BDT</Radio>
                                <Radio value={'30000-35000 BDT'}>30000-35000 BDT</Radio>
                                <Radio value={'35000-40000 BDT'}>35000-40000 BDT</Radio>
                                <Radio value={'45000-50000 BDT'}>45000-50000 BDT</Radio>
                                <Radio value={'50000-60000 BDT'}>50000-60000 BDT</Radio>
                                <Radio value={'60000-70000 BDT'}>60000-70000 BDT</Radio>
                                <Radio value={'70000-80000 BDT'}>70000-80000 BDT</Radio>
                                <Radio value={'80000-90000 BDT'}>80000-90000 BDT</Radio>
                                <Radio value={'90000-100000 BDT'}>90000-100000 BDT</Radio>
                                <Radio value={'100000-150000 BDT'}>100000-150000 BDT</Radio>
                                <Radio value={'150000-200000 BDT'}>150000-200000 BDT</Radio>
                                <Radio value={'200000-250000 BDT'}>200000-250000 BDT</Radio>
                                <Radio value={'300000+ BDT'}>300000+ BDT</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mt-2 mb-4'>Mother Status</h1>
                        <Radio.Group
                            onChange={handleMotherStatusChange}
                            value={motherStatusValue}>
                            <Space direction="vertical">
                                <Radio value={'alive'}>Alive</Radio>
                                <Radio value={'dead'}>Dead</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mt-2 mb-4'>Mother Profession</h1>
                        <AutoComplete
                            placeholder="Input profession"
                            className='w-full'
                            onChange={handleMotherProfessionChange}
                            filterOption={true}
                        >
                            {
                                professions.map((prof, index) => {
                                    return <AutoComplete.Option key={index} value={prof}>
                                        {prof}
                                    </AutoComplete.Option>
                                })
                            }
                        </AutoComplete>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mt-2 mb-4'>Mother Income</h1>
                        <Radio.Group
                            onChange={handleMotherIncomeChange}
                            value={motherIncomeValue}>
                            <Space direction="vertical">
                                <Radio value={'Below 15,000 BDT'}>Below 15,000 BDT</Radio>
                                <Radio value={'15000-20000 BDT'}>15000-20000 BDT</Radio>
                                <Radio value={'20000-25000 BDT'}>20000-25000 BDT</Radio>
                                <Radio value={'25000-30000 BDT'}>25000-30000 BDT</Radio>
                                <Radio value={'30000-35000 BDT'}>30000-35000 BDT</Radio>
                                <Radio value={'35000-40000 BDT'}>35000-40000 BDT</Radio>
                                <Radio value={'45000-50000 BDT'}>45000-50000 BDT</Radio>
                                <Radio value={'50000-60000 BDT'}>50000-60000 BDT</Radio>
                                <Radio value={'60000-70000 BDT'}>60000-70000 BDT</Radio>
                                <Radio value={'70000-80000 BDT'}>70000-80000 BDT</Radio>
                                <Radio value={'80000-90000 BDT'}>80000-90000 BDT</Radio>
                                <Radio value={'90000-100000 BDT'}>90000-100000 BDT</Radio>
                                <Radio value={'100000-150000 BDT'}>100000-150000 BDT</Radio>
                                <Radio value={'150000-200000 BDT'}>150000-200000 BDT</Radio>
                                <Radio value={'200000-250000 BDT'}>200000-250000 BDT</Radio>
                                <Radio value={'300000+ BDT'}>300000+ BDT</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Number of Siblings</h1>
                        <div>
                            <button onClick={() => setBrother(brother + 1)} >+ </button> {brother} Brother <button onClick={() => brother == 0 || brother > 0 && setBrother(brother - 1)}>-</button>
                        </div>
                        <div>
                            <button onClick={() => setSister(sister + 1)} >+ </button> {sister} Sister <button onClick={() => sister == 0 || sister > 0 && setSister(sister - 1)}>-</button>
                        </div>

                    </div>
                </Panel>
                {/* ---------- Professional Information ------------- */}
                <Panel header={styledHeader("Professional Information")} key="3">
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Profession</h1>
                        <Autocomplete
                            className='mb-2'
                            value={professionalStatus}
                            onChange={handleUserProfessionChange}
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
                            options={professionalStatusOptions}
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
                                <TextField {...params} placeholder="Professional Experience" />
                            )}
                            sx={{
                                '& input': {
                                    height: 6,
                                    padding: 0,

                                },

                            }}
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
                        <Radio.Group onChange={handleUserProfessionalExperienceChange} value={professionalInfo?.professionalExperience}>
                            <Space direction="vertical">
                                <Radio value="Less Than 1 Year">Less Than 1 Year</Radio>
                                <Radio value="1-2 Years">1-2 Years</Radio>
                                <Radio value="2-3 Years">2-3 Years</Radio>
                                <Radio value="3-5 Years">3-5 Years</Radio>
                                <Radio value="5-10 Years">5-10 Years</Radio>
                                <Radio value="10-15 Years">10-15 Years </Radio>
                                <Radio value="15 Years+">15 Years+</Radio>
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
                            className='w-full mb-2'

                            onChange={handleUserEducationalQualificationChange}

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
                                <TextField {...params} placeholder="Educational Qualification" />
                            )}
                            sx={{
                                '& input': {
                                    height: 6,
                                    padding: 0,

                                },

                            }}
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
                                <Radio value={'Below 15,000 BDT'}>Below 15,000 BDT</Radio>
                                <Radio value={'15000-20000 BDT'}>15000-20000 BDT</Radio>
                                <Radio value={'20000-25000 BDT'}>20000-25000 BDT</Radio>
                                <Radio value={'25000-30000 BDT'}>25000-30000 BDT</Radio>
                                <Radio value={'30000-35000 BDT'}>30000-35000 BDT</Radio>
                                <Radio value={'35000-40000 BDT'}>35000-40000 BDT</Radio>
                                <Radio value={'45000-50000 BDT'}>45000-50000 BDT</Radio>
                                <Radio value={'50000-60000 BDT'}>50000-60000 BDT</Radio>
                                <Radio value={'60000-70000 BDT'}>60000-70000 BDT</Radio>
                                <Radio value={'70000-80000 BDT'}>70000-80000 BDT</Radio>
                                <Radio value={'80000-90000 BDT'}>80000-90000 BDT</Radio>
                                <Radio value={'90000-100000 BDT'}>90000-100000 BDT</Radio>
                                <Radio value={'100000-150000 BDT'}>100000-150000 BDT</Radio>
                                <Radio value={'150000-200000 BDT'}>150000-200000 BDT</Radio>
                                <Radio value={'200000-250000 BDT'}>200000-250000 BDT</Radio>
                                <Radio value={'300000+ BDT'}>300000+ BDT</Radio>

                            </Space>
                        </Radio.Group>
                    </div>
                </Panel>
                {/*---------------- Others Information --------------*/}
                <Panel header={styledHeader("Other Info")} key="4">
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-2'>Height</h1>
                        <p className='text-left text-base font-medium'> {height ? height[0] : "0"}" - {height ? height[1] : "0"}" </p>
                        <Slider
                            range={{ draggableTrack: true }}
                            defaultValue={[5, 6]}
                            step={0.01}
                            min={0}
                            max={10}
                            onChange={onHeightChange}
                            onAfterChange={onAfterHeightChange}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Weight</h1>
                        <p className='text-left text-base font-medium'> {weight[0]} Kg - {weight[1]} Kg </p>
                        <Slider
                            range={{ draggableTrack: true }}
                            defaultValue={[50, 70]}
                            step={1}
                            min={0}
                            max={150}
                            onChange={onWeightChange}
                            onAfterChange={onAfterWeightChange}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Ancestry</h1>
                        <Select
                            className='w-full mb-2'
                            onChange={handleUserAncestryChange}
                            placeholder="Select Ancestry"
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
                            className='w-full mb-2'
                            onChange={handleUserSkinToneChange}
                            placeholder="Select skin tone"
                            mode='multiple'
                            allowClear
                            options={[
                                {
                                    value: 'light',
                                    label: 'Light',
                                },
                                {
                                    value: 'fair',
                                    label: 'Fair',
                                },
                                {
                                    value: 'medium',
                                    label: 'Medium',
                                },
                                {
                                    value: 'deep',
                                    label: 'Deep (Dark)',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Hair Color</h1>
                        <Select
                            className='w-full mb-2'
                            onChange={handleUserHairColorChange}
                            placeholder="Select hair color"
                            mode='multiple'
                            allowClear
                            options={[
                                {
                                    value: 'black',
                                    label: 'Black',
                                },
                                {
                                    value: 'brown',
                                    label: 'Brown',
                                },
                                {
                                    value: 'blond',
                                    label: 'Blond',
                                },
                                {
                                    value: 'white',
                                    label: 'White',
                                },
                                {
                                    value: 'gray',
                                    label: 'Gray',
                                },
                                {
                                    value: 'rarely red',
                                    label: 'Rarely Red',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Hair Type</h1>
                        <Select
                            className='w-full mb-2'
                            onChange={handleUserHairTypeChange}
                            placeholder="Select hair type"
                            mode='multiple'
                            allowClear
                            options={[
                                {
                                    value: 'fine',
                                    label: 'Fine',
                                },
                                {
                                    value: 'thick',
                                    label: 'Thick',
                                },
                                {
                                    value: 'long',
                                    label: 'Long',
                                },
                                {
                                    value: 'short',
                                    label: 'Short',
                                },
                                {
                                    value: 'matte',
                                    label: 'Matte',
                                },
                                {
                                    value: 'glossy',
                                    label: 'Glossy',
                                },
                                {
                                    value: 'curly',
                                    label: 'Curly',
                                },
                                {
                                    value: 'coily',
                                    label: 'Coily',
                                },
                                {
                                    value: 'straight',
                                    label: 'Straight',
                                },
                                {
                                    value: 'wavy',
                                    label: 'Wavy',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Eye Color</h1>
                        <Select
                            className='w-full mb-2'
                            onChange={handleUserEyeColorChange}
                            placeholder="Select hair type"
                            mode='multiple'
                            allowClear
                            options={[
                                {
                                    value: 'brown',
                                    label: 'Brown',
                                },
                                {
                                    value: 'hazel',
                                    label: 'Hazel',
                                },
                                {
                                    value: 'blue',
                                    label: 'Blue',
                                },
                                {
                                    value: 'green',
                                    label: 'Green',
                                },
                                {
                                    value: 'gray',
                                    label: 'Gray',
                                },
                                {
                                    value: 'amber',
                                    label: 'Amber',
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <h1 className='text-lg leading-6 font-semibold mb-4'>Number of Teeth</h1>
                        <Select
                            className='w-full mb-2'
                            onChange={handleUserEyeColorChange}
                            placeholder="Select teeth number"
                            mode='multiple'
                            allowClear
                            options={[
                                {
                                    value: '20',
                                    label: '20',
                                },
                                {
                                    value: '21',
                                    label: '21',
                                },
                                {
                                    value: '22',
                                    label: '22',
                                },
                                {
                                    value: '23',
                                    label: '23',
                                },
                                {
                                    value: '24',
                                    label: '24',
                                },
                                {
                                    value: '25',
                                    label: '25',
                                },
                                {
                                    value: '26',
                                    label: '26',
                                },
                                {
                                    value: '27',
                                    label: '27',
                                },
                                {
                                    value: '28',
                                    label: '28',
                                },
                                {
                                    value: '29',
                                    label: '29',
                                },
                                {
                                    value: '30',
                                    label: '30',
                                },
                                {
                                    value: '31',
                                    label: '31',
                                },
                                {
                                    value: '32',
                                    label: '32',
                                },
                            ]}
                        />
                    </div>
                </Panel>
            </Collapse>
            <div className="flex justify-center items-center ] mt-[30px] ">
                <button
                    onClick={handleSubmit}
                    style={{
                        background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                    }}
                    className="w-[179px] text-center py-[8] px-[10px] text-[#fff] h-[54px] text-2xl font-medium rounded-xl"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
