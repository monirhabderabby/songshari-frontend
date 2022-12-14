import React from 'react';
import { FiSearch } from "react-icons/fi";
import { AiFillFileAdd } from "react-icons/ai";

const AddUser = () => {

    const formData = e => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const passport = e.target.passport.value;
        const passportPhoto = e.target.passportPhoto.value;
        const barRegistration = e.target.barRegistration.value;
        const licence = e.target.licence.value;
        const licencePhoto = e.target.licencePhoto.value;
        const chamberLocation = e.target.chamberLocation.value;
        const specialAchievement = e.target.specialAchievement.value;
        const permanentAddress = e.target.permanentAddress.value;
        const presentAddress = e.target.presentAddress.value;
        const linkedln = e.target.linkedln.value;
        const instragram = e.target.instragram.value;
        const facebook = e.target.facebook.value;
        const countryCode = e.target.countryCode.value;
        const phoneNumber = e.target.phoneNumber.value;
        const lawyerCategory = e.target.lawyerCategory.value;
        const maritalStatus = e.target.maritalStatus.value;
        const citizenship = e.target.citizenship.value;
        const zodiacSign = e.target.zodiacSign.value;
        const currentPosition = e.target.currentPosition.value;
        const selectInstitute = e.target.selectInstitute.value;
        const degreeName = e.target.degreeName.value;
        const instituteName = e.target.instituteName.value;
        const department = e.target.department.value;
        const studyField = e.target.studyField.value;
        const cgpa = e.target.cgpa.value;
        const height = e.target.height.value;
        const weight = e.target.weight.value;
        const ancestry = e.target.ancestry.value;
        const skinTone = e.target.skinTone.value;
        const monthlyIncome = e.target.monthlyIncome.value;
        const homeTown = e.target.homeTown.value;
        const currentCity = e.target.currentCity.value;
        const brother = e.target.brother.value;
        const sister = e.target.sister.value;
        const hobby = e.target.hobby.value;

        const data = { firstName, lastName, email, passport, passportPhoto, barRegistration, licence, licencePhoto, chamberLocation, specialAchievement, permanentAddress, presentAddress, linkedln, instragram, facebook, countryCode, phoneNumber, lawyerCategory, maritalStatus, citizenship, zodiacSign, currentPosition, selectInstitute, degreeName, instituteName, department, studyField, cgpa, height, weight, ancestry, skinTone, monthlyIncome, homeTown, currentCity, brother, sister, hobby }
        console.log(data);
    }

    return (
        <div className='font-Inter text-sm'>

            {/* User Search */}
            <div className='flex mx-auto items-center w-[492px] h-[52px] bg-[#FFFFFF] border border-[#FFE8F3] py-[14px] px-[21px] text-base rounded-lg gap-6'>
                <FiSearch className='text-[#353751] p-6' />
                <input className='font-poppins font-normal text-[#AAAAAA] focus: outline-none h-full w-full' type="search" name="searchUser" id="" placeholder='Search user name' />
            </div>

            {/* Add User Form */}
            <div className='w-[523px] mx-auto mt-10 px-[21px] py-[31px] rounded-[10px] shadow bg-[#FFFFFF]'>
                <form onSubmit={formData}>
                    <div className='grid grid-cols-2 items-center gap-8 font-medium text-[#344054]'>
                        <div className='flex flex-col'>
                            <label htmlFor="firstName">First Name</label>
                            <input className='border border-[#D0D5DD] shadow rounded-lg focus: outline-none py-3 px-4 mt-1 font-normal text-base text-[#667085]' type="text" name='firstName' id='firstName' placeholder='First name' />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="lastName">Last Name</label>
                            <input className='border border-[#D0D5DD] shadow rounded-lg focus: outline-none py-3 px-4 mt-1 font-normal text-base text-[#667085]' type="text" name='lastName' id='lastName' placeholder='Last name' />
                        </div>
                    </div>

                    <div className='flex flex-col mt-6 font-medium text-[#344054]'>
                        <label htmlFor="email">Email</label>
                        <input className='border border-[#D0D5DD] shadow rounded-lg focus: outline-none py-3 px-4 mt-1 font-normal text-base text-[#667085]' type="email" name='email' id='email' placeholder='you@company.com' />
                    </div>

                    <div className='mt-6'>
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-[#344054] ">Phone number</label>
                        <div className=' flex h-12 items-center border border-[#D0D5DD] rounded-lg mt-1'>
                            <div className='w-[15%] pl-4'>
                                <select name='countryCode' id="countryCode" className=" text-[#101828] text-base focus:outline-none block w-full h-full">
                                    <option value="BD">BD</option>
                                    <option value="CA">CA</option>
                                    <option value="US">US</option>
                                </select>
                            </div>

                            <div className="w-[85%]">
                                <input type="text" name='phoneNumber' id="phoneNumber" className="text-[#667085] text-base block w-full h-full focus:outline-none " placeholder="+880 177 004-5304" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mt-6 font-medium text-[#344054]'>
                        <label htmlFor="passport">NID/Passport Number</label>
                        <input className='border border-[#D0D5DD] shadow rounded-lg focus: outline-none py-3 px-4 mt-1 text-base font-normal text-[#667085]' type="number" name='passport' id='passport' placeholder='0000 0000 0000 0000' />
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="passportPhoto">NID/Passport Photo</label>
                        <div className="flex items-center justify-center w-full mt-1 shadow-lg rounded-[10px] h-[99px] cursor-pointer">
                            <label className='cursor-pointer'>
                                <div className="flex items-center justify-center pt-5 pb-6">
                                    <p className="mr-[15px] font-medium text-xs text-[#000000]">Upload File</p>
                                    <AiFillFileAdd className='text-[#E41272] text-2xl' />
                                </div>
                                <input id="passportPhoto" name='passportPhoto' type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    {/* Date of Birth field should be changed here before Integrating API */}
                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="dob">Date of Birth</label>
                        <div className='flex gap-2 mt-[6px]'>
                            <div>
                                <select id="month" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                    <option selected>09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                </select>
                            </div>

                            <div>
                                <select id="date" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                    <option selected>26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                </select>
                            </div>

                            <div>
                                <select id="year" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                    <option selected>1986</option>
                                    <option value="1987">1987</option>
                                    <option value="1988">1988</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Year Of Experience field should be changed here before Integrating API */}
                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="experience">Year Of Experience</label>
                        <div className='flex gap-2 mt-[6px]'>
                            <div>
                                <select id="expMonth" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                    <option selected>5 Month</option>
                                    <option value="6month">6 Month</option>
                                    <option value="7month">7 Month</option>
                                </select>
                            </div>

                            <div>
                                <select id="expYear" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                    <option selected>5 Year</option>
                                    <option value="6year">6 Year</option>
                                    <option value="7year">7 Year</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mt-6 font-medium text-[#344054]'>
                        <label htmlFor="registration">BAR Registration Number</label>
                        <input className='border border-[#D0D5DD] shadow rounded-lg focus: outline-none py-3 px-4 mt-1 text-base text-[#667085]' type="number" name='barRegistration' id='registration' placeholder='0000 0000 0000 0000' />
                    </div>

                    <div className='flex flex-col mt-6 font-medium text-[#344054]'>
                        <label htmlFor="licence">Licence Number</label>
                        <input className='border border-[#D0D5DD] shadow rounded-lg focus: outline-none py-3 px-4 mt-1 text-base text-[#667085]' type="number" name='licence' id='licence' placeholder='0000 0000 0000 0000' />
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="licencePhoto">Licence Photo</label>
                        <div className="flex items-center justify-center w-full mt-1 shadow-lg rounded-[10px] h-[99px] cursor-pointer">
                            <label className='cursor-pointer'>
                                <div className="flex items-center justify-center pt-5 pb-6">
                                    <p className="mr-[15px] font-medium text-xs text-[#000000]">Upload File</p>
                                    <AiFillFileAdd className='text-[#E41272] text-2xl' />
                                </div>
                                <input id="licencePhoto" name='licencePhoto' type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    {/* Year of Bar Registration field should be changed here before Integrating API */}
                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="yearOfBar">Year Of BAR Registration</label>
                        <div className='flex gap-2  mt-[15px]'>
                            <div>
                                <select id="barMonth" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                    <option selected>July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                </select>
                            </div>

                            <div>
                                <select id="barYear" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                    <option selected>1999</option>
                                    <option value="2000">2000</option>
                                    <option value="2001">2001</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mt-8 font-medium text-[#344054]'>
                        <label htmlFor="location">Chamber Location</label>
                        <textarea cols="30" rows="10" className='border border-[#000000] shadow rounded-lg focus: outline-none py-3 px-4 mt-1 h-[99px] text-xs text-[#757575]' type="text" name='chamberLocation' id='location' placeholder='Dhaka, Bangladesh'></textarea>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="lawyerCategory">Lawyer Category</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select name='lawyerCategory' id="lawyerCategory" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                    <option selected>General</option>
                                    <option value="general1">General1</option>
                                    <option value="general2">General2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="maritalStatus" className="block mb-2 text-sm font-medium text-gray-900 ">Marital Status</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select name='maritalStatus' id="maritalStatus" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                    <option selected>Select</option>
                                    <option value="married">Married</option>
                                    <option value="unmarried">Unmarried</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="citizenship" className="block mb-2 text-sm font-medium text-gray-900 ">Citizenship</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="citizenship" name='citizenship' className="font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>Select</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="CA">Canada</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="zodiacSign" className="block mb-2 text-sm font-medium text-gray-900 ">Zodiac Sign</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="zodiacSign" name='zodiacSign' className="font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>Select</option>
                                    <option value="zodiac1">Zodiac1</option>
                                    <option value="zodiac2">Zodiac2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="currentPosition">Current Position</label>
                        <div className='flex gap-2 mt-[15px]'>
                            <div>
                                <select id="currentPosition" name='currentPosition' className="font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select position</option>
                                    <option value="bsc">B.Sc</option>
                                    <option value="msc">M.Sc</option>
                                </select>
                            </div>

                            <div>
                                <select id="selectInstitute" name='selectInstitute' className="font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select institute</option>
                                    <option value="college">College</option>
                                    <option value="university">University</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Work period field should be changed here before Integrating API */}
                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="workPeriod">Work Period</label>
                        <div className='flex gap-4 mt-3'>
                            <div className='flex gap-4'>
                                <div>
                                    <select id="month" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                        <option selected>09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                </div>

                                <div>
                                    <select id="date" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                        <option selected>26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                    </select>
                                </div>

                                <div>
                                    <select id="year" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                        <option selected>1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div>
                                    <select id="month" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                        <option selected>09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                </div>

                                <div>
                                    <select id="date" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                        <option selected>26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                    </select>
                                </div>

                                <div>
                                    <select id="year" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                        <option selected>1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="qualification">Highest Educational Qualification</label>
                        <div className='grid grid-cols-3 gap-x-2 gap-y-2 mt-[29px]'>
                            <div>
                                <select id="degreeName" name='degreeName' className="font-medium text-[10px] text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select degree name</option>
                                    <option value="hons">Hons</option>
                                    <option value="masters">Masters</option>
                                </select>
                            </div>

                            <div>
                                <select id="instituteName" name='instituteName' className="font-medium text-[10px] text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select institute name</option>
                                    <option value="DU">DU</option>
                                    <option value="RU">RU</option>
                                </select>
                            </div>

                            <div>
                                <select id="department" name='department' className="font-medium text-[10px] text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select department name</option>
                                    <option value="cse">CSE</option>
                                    <option value="eee">EEE</option>
                                </select>
                            </div>

                            <div>
                                <select id="studyField" name='studyField' className="font-medium text-[10px] text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select field of study</option>
                                    <option value="software">Software</option>
                                    <option value="hardware">Hardware</option>
                                </select>
                            </div>

                            <div>
                                <select id="cgpa" name='cgpa' className="font-medium text-[10px] text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select CGPA/GPA</option>
                                    <option value="4">4.00</option>
                                    <option value="3.5">3.50</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* Your of passing field should be changed here before Integrating API */}
                    <div className='grid grid-cols-2 items-center gap-2 mt-[23px] font-medium text-xs text-[#344054]'>
                        <div>
                            <label htmlFor="passingYear">Year of passing</label>
                            <div className='flex gap-2 mt-[6px]'>
                                <div>
                                    <select id="month" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                        <option selected>09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                </div>

                                <div>
                                    <select id="date" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                        <option selected>26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                    </select>
                                </div>

                                <div>
                                    <select id="year" className="font-medium text-base text-[#222222] focus:outline-none block w-full h-full">
                                        <option selected>1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col font-medium'>
                                <label htmlFor="specialAchievement">Special Achievements</label>
                                <input className='border border-[#000000] shadow rounded-lg focus: outline-none  py-3 px-4 mt-1 h-[46px] text-xs text-[#757575]' type="text" name='specialAchievement' id='specialAchievement' placeholder='text here' />
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="height">Height</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="height" name='height' className=" font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="weight">Weight</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="weight" name='weight' className=" font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select</option>
                                    <option value="70">70</option>
                                    <option value="60">60</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="ancestry">Ancestry</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="ancestry" name='ancestry' className=" font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select</option>
                                    <option value="ancestry1">Ancestry1</option>
                                    <option value="ancestry2">Ancestry2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="skinTone">Skin Tone</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="skinTone" name='skinTone' className=" font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select</option>
                                    <option value="white">White</option>
                                    <option value="gray">Gray</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="monthlyIncome">Monthly Income</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="monthlyIncome" name='monthlyIncome' className="font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select</option>
                                    <option value="50000">50,000</option>
                                    <option value="60000">60,000</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="homeTown">Home Town</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="homeTown" name='homeTown' className=" font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="barishal">Barishal</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="currentCity">Current City</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="currentCity" name='currentCity' className="font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>select</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="khulna">Khulna</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mt-8 font-medium text-[#344054]'>
                        <label htmlFor="permanentAddress">Permanent Address</label>
                        <textarea cols="30" rows="10" className='border border-[#000000] shadow rounded-lg focus: outline-none py-3 px-4 mt-1 h-[99px]' type="text" name='permanentAddress' id='permanentAddress'></textarea>
                    </div>

                    <div className='flex flex-col mt-6 font-medium text-[#344054]'>
                        <label htmlFor="presentAddress">Present Address</label>
                        <textarea cols="30" rows="10" className='border border-[#000000] shadow rounded-lg focus: outline-none py-3 px-4 mt-1 h-[99px]' type="text" name='presentAddress' id='presentAddress'></textarea>
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="siblings">Siblings</label>
                        <div className='flex justify-center gap-16'>
                            <div>
                                <select id="brother" name='brother' className="font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>Brother</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>

                            <div>
                                <select id="sister" name='sister' className="font-medium text-base text-[#757575] focus:outline-none block w-full h-full">
                                    <option selected>Sister</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mt-[51px] font-medium text-[#344054]'>
                        <label htmlFor="linkedln">Linkedln</label>
                        <input className='border border-[#000000] shadow rounded-lg focus: outline-none py-3 px-4 mt-1' type="text" name='linkedln' id='linkedln' />
                    </div>

                    <div className='flex flex-col mt-8 font-medium text-[#344054]'>
                        <label htmlFor="instragram">Instragram</label>
                        <input className='border border-[#000000] shadow rounded-lg focus: outline-none py-3 px-4 mt-1' type="text" name='instragram' id='instragram' />
                    </div>

                    <div className='flex flex-col mt-8 font-medium text-[#344054]'>
                        <label htmlFor="facebook">Facebook</label>
                        <input className='border border-[#000000] shadow rounded-lg focus: outline-none py-3 px-4 mt-1' type="text" name='facebook' id='facebook' />
                    </div>

                    <div className='mt-8 font-medium text-[#344054]'>
                        <label htmlFor="hobby">Hobby</label>
                        <div className=' flex h-12 items-center mt-[15px]'>
                            <div>
                                <select id="hobby" name='hobby' className="focus:outline-none block w-full h-full font-medium text-base text-[#757575]">
                                    <option selected>select</option>
                                    <option value="gardening">Gardening</option>
                                    <option value="cricket">Cricket</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center w-full mt-8 mb-[30px] font-medium text-base'>
                        <button className='bg-gradient-to-t from-[#942DD9] to-[#F22876] text-white py-3 px-56 rounded-[8px]' type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;