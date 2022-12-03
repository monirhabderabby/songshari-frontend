import React, { useEffect, useState } from 'react';
import { InputNumber, Select, Upload, message, DatePicker, Slider, Radio, Space } from 'antd';
import { FileAddFilled } from '@ant-design/icons';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import TextArea from 'antd/es/input/TextArea';

const { Option } = Select;
const { Dragger } = Upload;
const { RangePicker } = DatePicker
const EditProfile = () => {
    const [countries, setCountries] = useState([]);
    const [city, setCity] = useState([])
    // current position state
    const [currentPosition, setCurrentPosition] = useState(null);
    // institue state 
    const [currentInstitute, setCurrentInstitute] = useState(null);

    //educational qualification state
    const [degreeName, setDegreeName] = useState(null);
    const [instituteName, setInstituteName] = useState(null);
    const [departmentName, setDepartmentName] = useState(null);
    const [fieldOfStudy, setFieldOfStudy] = useState(null);
    const [cgpa, setCgpa] = useState(null);
    //others physical information
    const [height, setHeight] = useState(10);
    const [weight, setWeight] = useState(10);
    const [brother, setBrother] = useState(0);
    const [sister, setSister] = useState(0);
    const [parentStatus, setParentStatus] = useState('');
    const [hoby, setHoby] = useState(null);

    useEffect(() => {
        fetch("/json/countries.json")
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    useEffect(() => {
        fetch("/json/district.json")
            .then(res => res.json())
            .then(data => setCity(data))
    }, []);
    // Mobile number country code selection option
    const CountryCode = (
        <Select
            defaultValue="BD"
            style={{
                width: 70,
            }}
        >
            <Option value="+88">BD</Option>
            <Option value="+966">KSA</Option>
        </Select>);


    //for file upload 
    const props = {
        name: 'file',
        multiple: true,
        action: '',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    //date of birth handle data function
    const handleDateOfBirth = (date, dateString) => {
        console.log(date, dateString);
    };
    //martial status change handler
    const handleMaritalStatusChange = (value) => {
        console.log(value)
    }
    // handle citizenship status 
    const handleCitizenshipChange = (value) => {
        console.log(value)
    };
    // handle current city status
    const handleCurrentCity = (value) => {
        console.log(value)
    }
    //zodaic sign change handler
    const handleZodiacSign = (value) => {
        console.log(value)
    }
    // current position state handler
    const handleCurrentPosition = (event, newValue) => {
        if (typeof newValue === 'string') {
            setCurrentPosition({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setCurrentPosition({
                title: newValue.inputValue,
            });

        } else {
            setCurrentPosition(newValue);

        }
    }
    // currnent institue hanler function
    const handleCurrentInstitute = (event, newValue) => {
        if (typeof newValue === 'string') {
            setCurrentInstitute({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setCurrentInstitute({
                title: newValue.inputValue,
            });

        } else {
            setCurrentInstitute(newValue);

        }
    }

    //educational qualifitaion data handler function
    const handleDegreeName = (event, newValue) => {
        if (typeof newValue === 'string') {
            setDegreeName({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setDegreeName({
                title: newValue.inputValue,
            });

        } else {
            setDegreeName(newValue);

        }
    }

    const handleInstituteName = (event, newValue) => {
        if (typeof newValue === 'string') {
            setInstituteName({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setInstituteName({
                title: newValue.inputValue,
            });

        } else {
            setInstituteName(newValue);

        }
    }

    const handleDepartmentName = (event, newValue) => {
        if (typeof newValue === 'string') {
            setDepartmentName({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setDepartmentName({
                title: newValue.inputValue,
            });

        } else {
            setDepartmentName(newValue);

        }
    }

    const handleStudyField = (event, newValue) => {
        if (typeof newValue === 'string') {
            setFieldOfStudy({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setFieldOfStudy({
                title: newValue.inputValue,
            });

        } else {
            setFieldOfStudy(newValue);

        }
    }

    const handleCgpa = (event, newValue) => {
        if (typeof newValue === 'string') {
            setCgpa({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setCgpa({
                title: newValue.inputValue,
            });

        } else {
            setCgpa(newValue);

        }
    }
    //passing year handler
    const handlePassingYear = (date, dateString) => {
        console.log(date, dateString);
    }

    // --------- Others Information ------------
    const onHeightChange = (value) => {
        setHeight(value);

    };
    const onAfterHeightChange = (value) => {

    };
    const onWeightChange = (value) => {
        setWeight(value);


    };
    const onAfterWeightChange = (value) => {
        console.log(value)
    };
    const handleUserAncestryChange = (value) => {
        console.log(value)

    };
    const handleUserSkinToneChange = (value) => {
        console.log(value)

    };
    const handleUserHairColorChange = (value) => {
        console.log(value)

    };
    const handleUserHairTypeChange = (value) => {

        console.log(value)

    };
    const handleUserEyeColorChange = (value) => {

        console.log(value)

    };
    const handleNumberOfTeeth = (value) => {
        console.log(value)

    }

    const handleParentsStatus = (e) => {
        setParentStatus(e.target.value)
    }

    // hanlde hoby 
    const handleHoby = (event, newValue) => {
        if (typeof newValue === 'string') {
            setHoby({
                title: newValue,
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setHoby({
                title: newValue.inputValue,
            });

        } else {
            setHoby(newValue);

        }
    }

    // educational qualifitaions options Autocomplete (MUI)
    const degreeOptions = [
        { title: 'SSC' },
        { title: 'HSC' },
        { title: 'HOns' },
        { title: 'Masters' },

    ]
    const instituteNameOptions = [
        { title: 'Model College' },
        { title: 'Brac University' },
    ]
    const departmentOptions = [
        { title: 'BBA' },
        { title: 'MBA' },
    ]
    const studyFieldOptions = [
        { title: 'CSE' },
        { title: 'Accounting' },
    ]
    const cgpaOptions = [
        { title: '1.0 out of 4' },
        { title: '2.0 out of 4' },
    ]


    // current position options (MUI Autocomplete)
    const currentPositionOptions = [
        { title: 'Deveoper' },
        { title: 'Hr' },
        { title: 'Accouantant' },
        { title: 'Office assitanat' },
    ]
    // current institue option (MUI Autocomplete)
    const currentInstituteOptions = [
        { title: 'Developer company' },
        { title: 'ItCO ' },
        { title: 'Microsoft' },
        { title: 'Google' },
    ]

    // hoby options (MUI Autocomplete)
    const hobyOptions = [
        { title: 'Play' },
        { title: 'Games' }
    ]
    // mui autocomplete filter
    const filter = createFilterOptions();
    //form submission
    const handleSubmit = (e) => {

        e.preventDefault()
    }
    return (
        <div className='max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-between pb-4'>
                        <div>
                            <label htmlFor="fristName" className='text-sm block pb-2 text-slate-600	  font-medium'>Frist Name</label>
                            <input type="text" name="fristName" id="fristName" placeholder='Frist Name' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-56 ' />
                        </div>
                        <div>
                            <label htmlFor="fristName" className='text-sm block pb-2 text-slate-600	  font-medium'>Frist Name</label>
                            <input type="text" name="fristName" id="fristName" placeholder='Frist Name' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-56 ' />
                        </div>

                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="email" className='text-sm block pb-2 text-slate-600	  font-medium'>Email</label>
                            <input type="text" name="email" id="email" placeholder='example@email.com' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="number" className='text-sm block pb-2 text-slate-600 font-medium'>Phone Nmber</label>
                            <InputNumber placeholder='17000000000' className='w-full p-1 ' id='number' name='number'
                                addonBefore={CountryCode}
                            />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600	  font-medium'>NID/Passport Number</label>
                            <input type="text" name="nid" id="nid" placeholder='000000000/A025615' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600	  font-medium'>NID/Passport Photo</label>

                            <Dragger {...props}>
                                <div className='flex justify-center items-center'>
                                    <p>File Upload</p>
                                    <p className="ant-upload-drag-icon pl-4">
                                        <FileAddFilled style={{ color: '#E41272' }} />
                                    </p>
                                </div>


                            </Dragger>
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600	  font-medium'>Date of Birth</label>
                            <DatePicker onChange={handleDateOfBirth} className="w-full" />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600	  font-medium'>Martial Status</label>
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

                    <div className='pb-4'>
                        <div>
                            <label className='text-sm block pb-2 text-slate-600 font-medium'>Citizenship</label>
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
                    </div>

                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600 font-medium'>Current City</label>
                        <Select
                            className='w-full mb-2'
                            onChange={handleCurrentCity}
                            placeholder="Select City"
                            showSearch
                            filterOption={(input, option) =>
                                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                        >
                            {
                                city.map(town => {
                                    return <Select.Option key={town.id} value={town.value} >{town.name}</Select.Option>
                                })
                            }
                        </Select>
                    </div>

                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600	  font-medium'>Zodaic Sign</label>
                        <Select
                            className='w-full mb-2 '
                            onChange={handleZodiacSign}
                            placeholder="Select Sign"
                            showSearch
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: 'Mesh',
                                    label: 'Mesh',
                                },
                                {
                                    value: 'Singha',
                                    label: 'singha',
                                },

                            ]}
                        />
                    </div>
                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600	  font-medium'>Current Position</label>
                        <div className='flex justify-between'>
                            <Autocomplete
                                className='mb-2 w-56'
                                value={currentPosition}
                                onChange={handleCurrentPosition}
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
                                options={currentPositionOptions}
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
                                    <TextField {...params} placeholder="Select Position" />
                                )}
                                sx={{
                                    '& input': {
                                        height: 6,
                                        padding: 0,

                                    },

                                }}
                            />

                            <Autocomplete
                                className='mb-2 w-56'
                                value={currentInstitute}
                                onChange={handleCurrentInstitute}
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
                                options={currentInstituteOptions}
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
                                    <TextField {...params} placeholder="Select Institute" />
                                )}
                                sx={{
                                    '& input': {
                                        height: 6,
                                        padding: 0,

                                    },

                                }}
                            />
                        </div>

                    </div>


                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600	  font-medium'>Working Period</label>
                            <RangePicker className="w-full" />
                        </div>
                    </div>


                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Special Achievements</label>
                            <TextArea rows={4} placeholder="Text Here" maxLength={6} />

                        </div>
                    </div>

                    {/* educational qualification */}
                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600	  font-medium'>Educational Qualification</label>
                        <div className='flex justify-between'>
                            <Autocomplete
                                className='mb-2 w-56'
                                value={degreeName}
                                onChange={handleDegreeName}
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
                                options={degreeOptions}
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
                                    <TextField {...params} placeholder="Select Degree" />
                                )}
                                sx={{
                                    '& input': {
                                        height: 6,
                                        padding: 0,

                                    },

                                }}
                            />

                            <Autocomplete
                                className='mb-2 w-56'
                                value={instituteName}
                                onChange={handleInstituteName}
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
                                options={instituteNameOptions}
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
                                    <TextField {...params} placeholder="Select Institute" />
                                )}
                                sx={{
                                    '& input': {
                                        height: 6,
                                        padding: 0,

                                    },

                                }}
                            />



                        </div>

                        <div className='flex justify-between'>
                            <Autocomplete
                                className='mb-2 w-36'
                                value={departmentName}
                                onChange={handleDepartmentName}
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
                                options={departmentOptions}
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
                                    <TextField {...params} placeholder="Select Department" />
                                )}
                                sx={{
                                    '& input': {
                                        height: 6,
                                        padding: 0,

                                    },

                                }}
                            />

                            <Autocomplete
                                className='mb-2 w-36'
                                value={fieldOfStudy}
                                onChange={handleStudyField}
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
                                options={studyFieldOptions}
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
                                    <TextField {...params} placeholder="Select Field of study" />
                                )}
                                sx={{
                                    '& input': {
                                        height: 6,
                                        padding: 0,

                                    },

                                }}
                            />


                            <Autocomplete
                                className='mb-2 w-36'
                                value={cgpa}
                                onChange={handleCgpa}
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
                                options={cgpaOptions}
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
                                    <TextField {...params} placeholder="Select CGPA" />
                                )}
                                sx={{
                                    '& input': {
                                        height: 6,
                                        padding: 0,

                                    },

                                }}
                            />

                        </div>

                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Year of passing</label>
                            <DatePicker onChange={handlePassingYear} className="w-full" />
                        </div>
                    </div>
                    {/* others physical information  */}
                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600 font-medium'>Height</label>
                        <p className='text-left text-base font-medium'> {height}" </p>
                        <Slider

                            defaultValue={5}

                            onChange={onHeightChange}
                            onAfterChange={onAfterHeightChange}
                        />
                    </div>

                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600 font-medium'>Weight</label>
                        <p className='text-left text-base font-medium'> {weight} Kg </p>
                        <Slider
                            defaultValue={50}
                            onChange={onWeightChange}
                            onAfterChange={onAfterWeightChange}
                            key={height}
                        />
                    </div>

                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600 font-medium'>Ancestry</label>
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

                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600 font-medium'>Skin Tone</label>
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
                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600 font-medium'>Hair Color</label>
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

                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600 font-medium'>Hair Type</label>
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

                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600 font-medium'>Eye Color</label>
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

                    <div className='pb-4'>
                        <label className='text-sm block pb-2 text-slate-600 font-medium'>Number of Teeth</label>
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

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>About You</label>
                            <TextArea rows={4} placeholder="Text Here" maxLength={6} />

                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>What are you looking for</label>
                            <TextArea rows={4} placeholder="Text Here" maxLength={6} />

                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Permanent Address</label>
                            <TextArea rows={4} placeholder="Text Here" maxLength={6} />

                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Present Address</label>
                            <TextArea rows={4} placeholder="Text Here" maxLength={6} />

                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Siblings</label>
                            <div>
                                <p>Brother</p>
                                <div className='flex justify-center items-center mb-2'>
                                    <button onClick={() => brother == 0 || brother > 0 && setBrother(brother - 1)} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg">
                                        -
                                    </button>
                                    <div className='text-lg text-center leading-6 font-medium w-24 py-2 bg-gray-200'>{brother}</div>
                                    <button onClick={() => setBrother(brother + 1)} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg">
                                        +
                                    </button>
                                </div>
                            </div>

                            <div>
                                <p>Sister</p>
                                <div className='flex justify-center items-center mb-2'>
                                    <button onClick={() => sister == 0 || sister > 0 && setSister(sister - 1)} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg">
                                        -
                                    </button>
                                    <div className='text-lg text-center leading-6 font-medium w-24 py-2 bg-gray-200'>{sister}</div>
                                    <button onClick={() => setSister(sister + 1)} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-r-lg">
                                        +
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Are your Parents Alive?</label>
                            <Radio.Group
                                onChange={handleParentsStatus}
                                value={parentStatus}>
                                <Space direction="vertical">
                                    <Radio value={'alive'}>Alive</Radio>
                                    <Radio value={'dead'}>Dead</Radio>
                                </Space>
                            </Radio.Group>

                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>

                            <label htmlFor="linkdin" className='text-sm block pb-2 text-slate-600	  font-medium'>Linkedin</label>
                            <input type="text" name="linkdin" id="linkdin" placeholder='your linkdin profile link' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' />


                        </div>
                    </div>
                    <div className='pb-4'>
                        <div>

                            <label htmlFor="istragram" className='text-sm block pb-2 text-slate-600	  font-medium'>Istragram</label>
                            <input type="text" name="istragram" id="istragram" placeholder='your istragram profile link' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' />


                        </div>
                    </div>
                    <div className='pb-4'>
                        <div>

                            <label htmlFor="facebook" className='text-sm block pb-2 text-slate-600	  font-medium'>Facebook</label>
                            <input type="text" name="facebook" id="facebook" placeholder='your facebook profile link' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>

                            <label className='text-sm block pb-2 text-slate-600	  font-medium'>Hobby</label>
                            <Autocomplete
                                className='mb-2 w-full'
                                value={hoby}
                                onChange={handleHoby}
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
                                options={hobyOptions}
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
                                    <TextField {...params} placeholder="Select Hobby" />
                                )}
                                sx={{
                                    '& input': {
                                        height: 6,
                                        padding: 0,

                                    },

                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <input
                            type='submit'
                            value="Save"
                            style={{
                                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                            }}
                            className="w-full text-center py-[8] py-[10px] text-[#fff]  text-lg font-medium rounded"
                        />

                    </div>



                </form>
            </div>
        </div>
    );
}

export default EditProfile;
