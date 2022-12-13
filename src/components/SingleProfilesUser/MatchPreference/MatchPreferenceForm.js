import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import BasicInfoForm from './BasicInfoForm'
import FamilyInfoForm from './FamilyInfoForm';
import OthersInfoForm from './OthersInfoForm';
import ProfessionalInfoForm from './ProfessionalInfoForm';

export default function MatchPreferenceForm() {
    const [familyInfo, setFamilyInfo] = useState({ fatherStatus: '', fatherProfession: '', fatherIncome: '', motherStaus: 'dead', motherProfession: '', mohterIncome: '', brother: 0, sister: 0 });
    const [basicInfo, setBasicInfo] = useState({ age: [], partnerQuantity: 0, boyQuantity: 0, boyAge: 0, girlQuantity: 0, girlAge: 0, martialStatus: '', awareOfPartner: '', childrenLiveStatus: '', haveChildren: '' });
    const [othersInfo, setOthersInfo] = useState({ weight: 20, height: 10 });
    const [professionalInfo, setProfessionalInfo] = useState({ professionalExperience: '', educationalQualification: '', professionalStatus: '', monthlyIncome: '' });

    const [homeTowns, setHomeTown] = useState([]);
    const [countries, setCountries] = useState([]);
    const [professions, setProfessions] = useState([]);

    useEffect(() => {
        fetch("json/district.json")
            .then(res => res.json())
            .then(data => setHomeTown(data));
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

    const handleSubmit = (e) => {
        const data = { familyInfo, basicInfo, othersInfo, professionalInfo }
        console.log(data)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex'>
                    <BasicInfoForm {...{ homeTowns, countries, basicInfo, setBasicInfo }} />
                    <FamilyInfoForm {...{ professions, familyInfo, setFamilyInfo }} />
                    <div className='w-full'>
                        <div className='mb-4'>
                            <h1>Professional & others information</h1>
                        </div>
                        <ProfessionalInfoForm {...{ professionalInfo, setProfessionalInfo }} />
                        <OthersInfoForm {...{ othersInfo, setOthersInfo }} />
                    </div>
                </div>
                <div className="flex justify-center items-center ] mt-[30px] ">
                    <input type="submit" value="Submit"
                        // onClick={handleSubmit}
                        style={{
                            background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        }}
                        className=" text-center px-6 py-2 text-[#fff]  text-xl font-medium rounded"
                    />


                </div>
            </form>

        </div>
    )
}
