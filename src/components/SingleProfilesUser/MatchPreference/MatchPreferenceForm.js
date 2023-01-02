import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useAddMatrimonyUserMatchPreferenceMutation } from "../../../Redux/features/MatchesPreferences/matchesPreferenceApi";
import BasicInfoForm from "./BasicInfoForm";
import FamilyInfoForm from "./FamilyInfoForm";
import OthersInfoForm from "./OthersInfoForm";
import ProfessionalInfoForm from "./ProfessionalInfoForm";

export default function MatchPreferenceForm({ setMatchesModalOpen }) {
    // hook variable declaration
    const [familyInfo, setFamilyInfo] = useState({
        fatherStatus: "",
        fatherProfession: "",
        fatherIncome: "",
        motherStaus: "dead",
        motherProfession: "",
        mohterIncome: "",
        brother: 0,
        sister: 0,
    });
    const [basicInfo, setBasicInfo] = useState({
        age: [20, 30],
        partnerQuantity: 0,
        boyQuantity: 0,
        boyAge: 0,
        girlQuantity: 0,
        girlAge: 0,
        martialStatus: "",
        awareOfPartner: "",
        childrenLiveStatus: "",
        haveChildren: "",
    });
    const [othersInfo, setOthersInfo] = useState({ weight: [50, 70], height: [5, 6] });
    const [professionalInfo, setProfessionalInfo] = useState({
        professionalExperience: "",
        educationalQualification: "",
        professionalStatus: "",
        monthlyIncome: "",
    });

    const [homeTowns, setHomeTown] = useState([]);
    const [countries, setCountries] = useState([]);
    const [professions, setProfessions] = useState([]);

    // api
    const [addMatrimonyUserMatchPreference, { data, isLoading }] = useAddMatrimonyUserMatchPreferenceMutation();

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

    useEffect(() => {
        if (data?.success) {
            setMatchesModalOpen(false);
        }
    }, [data, setMatchesModalOpen]);

    // function declaration
    const handleSubmit = e => {
        const data = { familyInfo, basicInfo, othersInfo, professionalInfo };
        e.preventDefault();
        addMatrimonyUserMatchPreference(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <BasicInfoForm {...{ homeTowns, countries, basicInfo, setBasicInfo }} />
                    <FamilyInfoForm {...{ professions, familyInfo, setFamilyInfo }} />
                    <div className="w-full">
                        <div className="mb-4">
                            <h1>Professional & others information</h1>
                        </div>
                        <ProfessionalInfoForm {...{ professionalInfo, setProfessionalInfo }} />
                        <OthersInfoForm {...{ othersInfo, setOthersInfo }} />
                    </div>
                </div>
                <div className="flex justify-center items-center ] mt-[30px] ">
                    <div className="bg-[linear-gradient(180deg,_#E41272_0%,_#942DD9_100%)] text-center px-6 py-2 text-[#fff]  text-xl font-medium rounded">
                        {isLoading && (
                            <ThreeDots
                                height="30"
                                width="70"
                                radius="9"
                                color="#FFFFFF"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        )}
                        {!isLoading && <input type="submit" value="Submit" />}
                    </div>
                </div>
            </form>
        </div>
    );
}
