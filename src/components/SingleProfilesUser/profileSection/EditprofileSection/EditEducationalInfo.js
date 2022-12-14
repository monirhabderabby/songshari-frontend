import React, { useState, useEffect } from 'react';
import { DatePicker, message } from 'antd';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import TextArea from 'antd/es/input/TextArea';
import { useUpdateEducationalDetailsMutation } from '../../../../Redux/features/userInfo/userApi';
import { useNavigate, useParams } from 'react-router';

const EditEducationalInfo = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [educationalInfo, setEducationalInfo] = useState({});
    //educational qualification state
    const [degreeName, setDegreeName] = useState(null);
    const [instituteName, setInstituteName] = useState(null);
    const [departmentName, setDepartmentName] = useState(null);
    const [fieldOfStudy, setFieldOfStudy] = useState(null);
    const [cgpa, setCgpa] = useState(null);
    const [updateEducationalDetails, { isSuccess, isLoading, isError }] = useUpdateEducationalDetailsMutation();
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
        setEducationalInfo({ ...educationalInfo, yearOfStudy: date });
    }
    const handleAchiveMents = (e) => {
        setEducationalInfo({ ...educationalInfo, specialAchievement: e?.target?.value });
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
        { title: '1.0 ' },
        { title: '2.0 ' },
    ]



    // mui autocomplete filter
    const filter = createFilterOptions();
    const { id } = useParams();
    const navigate = useNavigate()
    //data submission handler

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { ...educationalInfo, degree: degreeName?.title, institute: instituteName?.title, department: departmentName?.title, feildOfStudy: fieldOfStudy?.title, gpaOrCgpa: Number(cgpa?.title) }
        await updateEducationalDetails({ data, id });

    }
    // error success and loading handler
    useEffect(() => {
        const key = 'updated'
        if (isLoading) {
            messageApi.open({
                key,
                type: 'loading',
                content: 'Loading...',
            });
        }

        if (isSuccess) {
            messageApi.open({
                key,
                type: 'success',
                content: 'Data updated succesfully',
                duration: 2,
            });
        }

        if (isError) {
            messageApi.open({
                key,
                type: 'error',
                content: 'Server error! try again!!'
            })
        }
        if (!isLoading && !isError && isSuccess) {
            setTimeout(() => {
                navigate('/userprofile')

            }, 2000)
        }
    }, [isSuccess, isLoading, isError]);
    return (
        <div>
            <div className='max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4 rounded'>
                <form onSubmit={handleSubmit}>
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


                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Special Achievements</label>
                            <TextArea rows={4} placeholder="Text Here" maxLength={6} onChange={handleAchiveMents} />

                        </div>
                    </div>

                    <div>
                        <input
                            type='submit'
                            value="Save"
                            style={{
                                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                            }}
                            className="w-full text-center py-[8] py-[8px] text-[#fff]  text-lg font-medium rounded"
                        />

                    </div>
                </form>
            </div>
            <div>
                {contextHolder}
            </div>
        </div>


    );
}

export default EditEducationalInfo;
