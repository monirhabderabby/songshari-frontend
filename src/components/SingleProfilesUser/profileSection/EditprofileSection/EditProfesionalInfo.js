import React, { useState } from 'react';
import { DatePicker } from 'antd';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import TextArea from 'antd/es/input/TextArea';
import { useUpdateProfessionalDetailsMutation } from '../../../../Redux/features/userInfo/userApi';
import { useNavigate, useParams } from 'react-router';

const { RangePicker } = DatePicker;


const EditProfesionalInfo = () => {
    // current position state
    const [currentPosition, setCurrentPosition] = useState(null);
    // institue state 
    const [currentInstitute, setCurrentInstitute] = useState(null);
    const [professionalInfo, setProfessionalInfo] = useState({});
    const [updateProfessionalDetails, { isSuccess }] = useUpdateProfessionalDetailsMutation()
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
    // working period data handler
    const handleWorkingPeriod = (date, dateString) => {
        setProfessionalInfo({ ...professionalInfo, workingPeriod: dateString })
    }
    // handle achivements data chane
    const handleAchivements = (e) => {
        setProfessionalInfo({ ...professionalInfo, specialAchievement: e?.target.value });
    }
    // handle duty data change
    const handleDuty = (e) => {
        setProfessionalInfo({ ...professionalInfo, duty: e.target.value });
    }
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
    const { id } = useParams()
    const navigate = useNavigate()
    //data submission
    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = { ...professionalInfo, institute: currentInstitute?.title, position: currentPosition?.title }
        await updateProfessionalDetails({ data, id })


    }

    if (isSuccess) {
        navigate("/userprofile")
    }

    const filter = createFilterOptions();
    return (
        <div className='max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4 rounded'>
            <form onSubmit={handleSubmit}>
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
                        <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>duty</label>
                        <TextArea rows={4} placeholder="Text Here" onChange={handleDuty} />

                    </div>
                </div>

                <div className='pb-4'>
                    <div>
                        <label htmlFor="nid" className='text-sm block pb-2 text-slate-600	  font-medium'>Working Period</label>
                        <RangePicker className="w-full" onChange={handleWorkingPeriod} />
                    </div>
                </div>


                <div className='pb-4'>
                    <div>
                        <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Special Achievements</label>
                        <TextArea rows={4} placeholder="Text Here" name='achivements' onChange={handleAchivements} />

                    </div>
                </div>


                <div>
                    <input
                        type='submit'
                        value="Save"
                        style={{
                            background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        }}
                        className="w-full text-center py-[10px] text-[#fff]  text-lg font-medium rounded"
                    />
                    {/* {isLoading &&
                        <div className='mt-2'>
                            <LinearProgress color="secondary" />
                        </div>

                    } */}
                </div>
            </form>

        </div>
    );
}

export default EditProfesionalInfo;
