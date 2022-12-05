import React, { useEffect, useState } from 'react';
import { InputNumber, Select, Upload, message, DatePicker, Radio, Space } from 'antd';
import { FileAddFilled } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate, useParams } from 'react-router';
import { useUpdatePersonalDetailsMutation } from '../../../../Redux/features/userInfo/userApi';
// import { useNavigate } from "react-router-dom";


const { Option } = Select;
const { Dragger } = Upload;
const EditPersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState({});
    const [countries, setCountries] = useState([]);
    const [city, setCity] = useState([]);
    const [marriageDetails, setMarriageDetails] = useState({});
    const [divorceDetails, setDivorceDetails] = useState({});
    const [widowedDetails, setWidowedDetails] = useState({});
    //phone number mananging state
    const [countryCode, setCountryCode] = useState('+880')


    const [brother, setBrother] = useState(0);
    const [sister, setSister] = useState(0);
    const [parentStatus, setParentStatus] = useState('');

    const { id } = useParams();
    const [updatePersonalDetails, { isError, isLoading, isSuccess }] = useUpdatePersonalDetailsMutation()
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

    //handle mobile number 
    const handlePhoneNumber = (value) => {
        const phone = countryCode + value;
        setPersonalInfo({ ...personalInfo, phone: phone });
    }
    const handleCountryCode = (value) => {
        setCountryCode(value);
    }
    // Mobile number country code selection option
    const CountryCode = (
        <Select
            defaultValue="+880"
            style={{
                width: 70,
            }}
            onChange={handleCountryCode}
        >
            <Option value="+880">BD</Option>
            <Option value="+966">KSA</Option>
        </Select>);
    //for file upload 
    const props = {
        name: 'file',
        multiple: true,
        // action: '',
        onChange(info) {
            const { status } = info.file;
            console.log(info)
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

    // some data collection handler function like name,email etc
    const handleData = (e) => {
        const data = { ...personalInfo };
        data[e.target.name] = e.target.value;
        setPersonalInfo(data)
        console.log(data)
        e.preventDefault();
    }


    //handle marriage reason data 

    //martial status change handler
    const handleMaritalStatusChange = (value) => {
        setPersonalInfo({ ...personalInfo, martialStatus: value });
    }
    const handleMarriageReason = (e) => {
        const data = { ...marriageDetails };
        data[e?.target.name] = e?.target.value;
        setMarriageDetails(data);
    }
    const handleAwareOFMarriage = (value) => {
        setMarriageDetails({ ...marriageDetails, isPartnerAwarOfMarriage: value });
    }
    const handleMarriageDate = (date, dateString) => {
        setMarriageDetails({ ...marriageDetails, marriageDate: dateString });

    }
    const handleChildrenStatus = (value) => {
        setMarriageDetails({ ...marriageDetails, childrenStatus: value });
    }

    // handle devorce data change
    const handleDivorceReason = (e) => {
        const data = { ...divorceDetails }
        data[e.target.name] = e.target.name;
        setDivorceDetails(data);
    }
    const handleDivorceDate = (date, dateString) => {
        setDivorceDetails({ ...divorceDetails, divorceDate: dateString });
    }
    const handleDivorceChildrenStatus = (value) => {
        setDivorceDetails({ ...divorceDetails, childrenStatus: value });
    }

    // widwed details data change handler function
    const handleWidowed = (e) => {
        const data = { ...widowedDetails }
        data[e?.target?.name] = e?.target?.value;
        setWidowedDetails(data);
    }
    const handleWidowedChildrenStatus = (value) => {
        setWidowedDetails({ ...widowedDetails, childrenStatus: value })
    }
    const handleWidowedDate = (value) => {
        setWidowedDetails({ ...widowedDetails, partnerDeathDay: value });
    }
    //date of birth handle data function
    const handleDateOfBirth = (date, dateString) => {
        setPersonalInfo({ ...personalInfo, dateOfBirth: date });
    };

    // handle citizenship status 
    const handleCitizenshipChange = (value) => {
        setPersonalInfo({ ...personalInfo, citizenShip: value });
    };
    // handle current city status
    const handleCurrentCity = (value) => {
        setPersonalInfo({ ...personalInfo, hometown: value })
    }
    //zodaic sign change handler
    const handleZodiacSign = (value) => {
        setPersonalInfo({ ...personalInfo, zodaicSign: value })
    }
    // handle file upload change data
    const handleUpload = (event) => {
        setPersonalInfo({ ...personalInfo, nidOrPassportFile: event?.file })
    }



    // --------- Others Information ------------

    const handleParentsStatus = (e) => {
        setParentStatus(e.target.value);
        setPersonalInfo({ ...personalInfo, parentStatus: e?.target.value })
    }

    // hanlde hoby 
    const handleHoby = (value) => {
        setPersonalInfo({ ...personalInfo, hobbies: value })
    }

    const navigate = useNavigate();

    //form submission
    const handleSubmit = async (e) => {
        const data = { ...personalInfo, numberOfBrother: brother, numberOfSister: sister, ...marriageDetails, ...divorceDetails, ...widowedDetails };
        e.preventDefault()

        await updatePersonalDetails(data).then(() => {
            if (isSuccess) {
                navigate("/userprofile")

            }
        })


    }

    if (isSuccess) {
        navigate("/userprofile")
    }

    return (
        <div className='max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4 rounded'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-between pb-4'>
                        <div>
                            <label htmlFor="fristName" className='text-sm block pb-2 text-slate-600	  font-medium'>Frist Name</label>
                            <input type="text" name="fristName" id="fristName" placeholder='Frist Name' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-56 ' onChange={handleData} />
                        </div>
                        <div>
                            <label htmlFor="lastName" className='text-sm block pb-2 text-slate-600	  font-medium'>Last Name</label>
                            <input type="text" name="lastName" id="lastName" placeholder='Last Name' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-56 ' onChange={handleData} />
                        </div>

                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="email" className='text-sm block pb-2 text-slate-600	  font-medium'>Email</label>
                            <input type="text" name="email" id="email" placeholder='example@email.com' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' onChange={handleData} />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="number" className='text-sm block pb-2 text-slate-600 font-medium'>Phone Nmber</label>
                            <InputNumber placeholder='17000000000' className='w-full p-1 ' id='number' name='phone'
                                addonBefore={CountryCode}
                                onChange={handlePhoneNumber}
                            />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600	  font-medium'>NID/Passport Number</label>
                            <input type="text" name="NidOrPassportNumber" id="nid" placeholder='000000000/A025615' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' onChange={handleData} />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600	  font-medium'>NID/Passport Photo</label>

                            <Dragger {...props} onChange={handleUpload}>
                                <div className='flex justify-center items-center'>
                                    <p>File Upload</p>
                                    <p className="ant-upload-drag-icon pl-4">
                                        <FileAddFilled style={{ color: '#E41272' }} onChange={handleUpload} />
                                    </p>
                                </div>


                            </Dragger>
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600	  font-medium'>Date of Birth</label>
                            <DatePicker onChange={handleDateOfBirth} className="w-full" size='large' />
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
                            size="large"
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
                        {/* married details  */}
                        {personalInfo?.martialStatus === "married" &&
                            <div className='py-4'>
                                <div className='mb-2'>
                                    <input type="number" name="numberOfPartner" placeholder='Number of Partner' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' onChange={handleMarriageReason} />
                                </div>
                                <div className='mb-2'>
                                    <input type="text" name="reasonOfMarriage" placeholder='Reason of Marriage' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' onChange={handleMarriageReason} />
                                </div>

                                <Select
                                    className='w-full mb-2'
                                    onChange={handleAwareOFMarriage}
                                    placeholder="Is partner aware of marriage?"
                                    showSearch
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    size="large"
                                    options={[
                                        {
                                            value: 'yes',
                                            label: 'yes',
                                        },
                                        {
                                            value: 'no',
                                            label: 'no',
                                        },

                                    ]}
                                />
                                <div className="mb-2">
                                    <DatePicker onChange={handleMarriageDate} placeholder="Marriage Date" className="w-full" size='large' />
                                </div>

                                <div>
                                    <Select
                                        className='w-full mb-2'
                                        onChange={handleChildrenStatus}
                                        placeholder="Do you have children?"
                                        showSearch
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        size="large"
                                        options={[
                                            {
                                                value: 'yes',
                                                label: 'yes',
                                            },
                                            {
                                                value: 'no',
                                                label: 'no',
                                            },

                                        ]}
                                    />
                                    {
                                        marriageDetails.childrenStatus === "yes" &&
                                        <div>
                                            <input type="number" name="numberOfBoy" placeholder='Number of Boy' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 ' onChange={handleMarriageReason} />
                                            <input type="number" name="agesOfBoy" placeholder='Age of Boy' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 ' onChange={handleMarriageReason} />
                                            <input type="number" name="numberOfGirl" placeholder='Number of Girl' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2' onChange={handleMarriageReason} />
                                            <input type="number" name="agesOfGirl" placeholder='Age of Girl' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 ' onChange={handleMarriageReason} />
                                        </div>
                                    }

                                    { }


                                </div>

                            </div>
                        }
                        {/* divorced details  */}
                        {personalInfo?.martialStatus === "divorced" &&
                            <div>
                                <div className='mb-2'>
                                    <input type="number" name="reasonOfDivorce" placeholder='Divorce Reason' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' onChange={handleDivorceReason} />
                                </div>
                                <div className="mb-2">
                                    <DatePicker onChange={handleDivorceDate} placeholder="Divorce Date" className="w-full" size='large' />
                                </div>
                                <Select
                                    className='w-full mb-2'
                                    onChange={handleDivorceChildrenStatus}
                                    placeholder="Do you have children?"
                                    showSearch
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    size="large"
                                    options={[
                                        {
                                            value: 'yes',
                                            label: 'yes',
                                        },
                                        {
                                            value: 'no',
                                            label: 'no',
                                        },

                                    ]}
                                />
                                {
                                    divorceDetails?.childrenStatus === "yes" &&
                                    <div>
                                        <input type="number" name="numberOfBoy" placeholder='Number of Boy' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 ' onChange={handleDivorceReason} />
                                        <input type="number" name="agesOfBoy" placeholder='Age of Boy' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 ' onChange={handleDivorceReason} />
                                        <input type="number" name="numberOfGirl" placeholder='Number of Girl' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2' onChange={handleDivorceReason} />
                                        <input type="number" name="agesOfGirl" placeholder='Age of Girl' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 ' onChange={handleDivorceReason} />
                                    </div>
                                }

                            </div>
                        }

                        {personalInfo?.martialStatus === "widowed" &&
                            <div>
                                <div className="mb-2">
                                    <DatePicker onChange={handleWidowedDate} placeholder="Divorce Date" className="w-full" size='large' />
                                </div>
                                <Select
                                    className='w-full mb-2'
                                    onChange={handleWidowedChildrenStatus}
                                    placeholder="Do you have children?"
                                    showSearch
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    size="large"
                                    options={[
                                        {
                                            value: 'yes',
                                            label: 'yes',
                                        },
                                        {
                                            value: 'no',
                                            label: 'no',
                                        },

                                    ]}
                                />
                                {
                                    widowedDetails?.childrenStatus === "yes" &&
                                    <div>
                                        <input type="number" name="numberOfBoy" placeholder='Number of Boy' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 ' onChange={handleWidowed} />
                                        <input type="number" name="agesOfBoy" placeholder='Age of Boy' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 ' onChange={handleWidowed} />
                                        <input type="number" name="numberOfGirl" placeholder='Number of Girl' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 mr-10 mt-2' onChange={handleWidowed} />
                                        <input type="number" name="agesOfGirl" placeholder='Age of Girl' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-52 ' onChange={handleWidowed} />
                                    </div>
                                }

                            </div>


                        }
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
                                size="large"
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
                            size="large"
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
                            size="large"
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
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>About You</label>
                            <TextArea rows={4} placeholder="Text Here" name='aboutYou' onChange={handleData} />

                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>What are you looking for</label>
                            <TextArea rows={4} placeholder="Text Here" name="whatAreYouLookingFor" onChange={handleData} />

                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Permanent Address</label>
                            <TextArea rows={4} placeholder="Text Here" onChange={handleData} name="permanentAdress" />

                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Present Address</label>
                            <TextArea rows={4} placeholder="Text Here" onChange={handleData} name="present Address" />

                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>
                            <label htmlFor="nid" className='text-sm block pb-2 text-slate-600 font-medium'>Siblings</label>
                            <div>
                                <p>Brother</p>
                                <div className='flex justify-center items-center mb-2'>
                                    <button onClick={() => brother === 0 || brother > 0 ? setBrother(brother - 1) : setBrother(brother)} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg">
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
                                    <button onClick={() => sister === 0 || sister > 0 ? setSister(sister - 1) : setBrother(brother)} className="px-4 py-2 text-3xl bg-gray-300 leading-6 rounded-l-lg">
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
                            <input type="text" name="LinkedInId" id="linkdin" placeholder='your linkdin profile link' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' onChange={handleData} />


                        </div>
                    </div>
                    <div className='pb-4'>
                        <div>

                            <label htmlFor="istragram" className='text-sm block pb-2 text-slate-600	  font-medium'>Istragram</label>
                            <input type="text" name="instagramId" id="istragram" placeholder='your istragram profile link' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' onChange={handleData} />


                        </div>
                    </div>
                    <div className='pb-4'>
                        <div>

                            <label htmlFor="facebook" className='text-sm block pb-2 text-slate-600	  font-medium'>Facebook</label>
                            <input type="text" name="faceBookId" id="facebook" placeholder='your facebook profile link' className=' focus:outline-none p-2 border focus:border-blue-500 shadow rounded-lg hover:border-blue-500 w-full ' onChange={handleData} />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div>

                            <label className='text-sm block pb-2 text-slate-600	  font-medium'>Hobby</label>
                            <Select
                                size='large'
                                mode='multiple'
                                className="w-full"
                                onChange={handleHoby}
                                placeholder="select hoby"
                                showSearch


                                filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                                options={[
                                    {
                                        value: "play",
                                        label: "play",
                                    },
                                    {
                                        value: "reading",
                                        label: "reading",
                                    },
                                ]}
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
            </div >
        </div >
    );
}

export default EditPersonalInfo;
