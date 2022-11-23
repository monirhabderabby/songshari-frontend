import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IoIosArrowDown } from "react-icons/io";
import "./Accordion.css";
const Accordian = () => {
    const body = [
        "Name",
        "Birthday",
        "I am a",
        "Marital status",
        "Country",
        "City",
        "Phone number",
        "NID/Passport Number",
        "Year Of Experience",
        "BAR Registration Number",
        "Licence Number",
        "Year Of BAR Registration",
        "Chamber Location",
        "Lawyer Category",
        "Citizenship",
        "Zodiac Sign",
        "Not provide",
        "Highest Educational Qualification",
        "Height",
        "Weight",
        "Ancestry",
        "Skin Tone",
        "Monthly Income",
        "Siblings",
        "Linkedin",
        "Instagram",
        "Facebook",
        "Hobby",
        "Highest Educational Qualification"
    ]
    const bodyValue = [
        "Albert Don",
        "1988-01-19",
        "Man",
        "Married",
        "France",
        "Paris",
        "+880 177.004-5304",
        "0000 0000 0000 0000",
        "5 Month 5 Years",
        "0000 0000 0000 0000",
        "0000 0000 0000 0000",
        "1999",
        "Dhaka, Bangladesh",
        "Genarel",
        "Not provide",
        "Not provide",
        "Not provide",
        "BCS",
        "Not provide",
        "Not provide",
        "Not provide",
        "Not provide",
        "2 Brother and 0 Sister",
        "Not provide",
        "Not provide",
        "Not provide",
        "Not provide",
        "ualification",
        "BCS"
    ]
    return (
        <div className='w-[523px] h-[1294px] app__accordian px-5'>
            <div className='flex justify-between app__accordian-head py-5'>
                <p className='font-[600] text-[24px]'>Personal Information</p>
                <button className='inline-block w-[64px] h-[24px] font-[600] text-[18px] app__edit-button text-white rounded-md'>Edit</button>
            </div>
            <span className='w-full inline-block app__border-main'></span>
            <div className='flex justify-between'>
                <div className='flex flex-col items-start'>
                    {
                        body.map((item) => <>
                            <p key={uuidv4()} className="">{item}</p>
                            <span className='w-[125%] inline-block app__border' key={uuidv4()}></span>
                        </>)
                    }
                </div>
                <div className='flex flex-col items-end'>
                    {
                        bodyValue.map((item) => <>
                            <p key={uuidv4()}>{item}</p>
                            <span className='w-[124%] inline-block app__border' key={uuidv4()}></span>
                        </>)
                    }
                </div>
            </div>
            <div className='flex justify-between my-5'>
                <p className='font-[600] text-[24px] app__accordian-name'>Personal information</p>
                <IoIosArrowDown />
            </div>
            <div className='flex justify-between my-5'>
                <p className='font-[600] text-[24px] app__accordian-name'>Education and Others</p>
                <IoIosArrowDown />
            </div>
        </div>
    );
};

export default Accordian;