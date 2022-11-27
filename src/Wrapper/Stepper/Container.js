import React, { useState } from "react";
import logo from "../../assets/images/Logo/logoBlack.png";
import NavBar from "../../components/pages/Shared/NavBar";
import { EducationalDetails } from "./EducationalDetails";
import { OtherDetails } from "./OtherDetails";
import { PersonalDetails } from "./PersonalDetails";
import { PhysicalDetails } from "./PhysicalDetails";
import { ProfessionalDetails } from "./ProfessionalDetails";

export const Container = () => {
    const [page, setPage] = useState(4);
    return (
        <div className="min-h-screen">
            <NavBar />
            <section className="flex justify-center items-center w-full flex-1 text-center px-3 md:px-20 min-h-[calc(100vh-90px)]">
                <div className="bg-white rounded-2xl shadow-2xl md:flex w-[100%] md:w-3/4 lg:w-4/5 max-w-6xl relative">
                    <div className="w-full p-5 my-auto">
                        <div className="text-left font-bold">
                            <span className="gradient_text font-george">
                                <img className="w-[150px]" src={logo} alt="logo" />
                            </span>
                        </div>
                        <div className="my-[20px]">
                            {page === 1 && <PersonalDetails {...{ setPage }} />}
                            {page === 2 && <EducationalDetails {...{ setPage }} />}
                            {page === 3 && <ProfessionalDetails {...{ setPage }} />}
                            {page === 4 && <PhysicalDetails {...{ setPage }} />}
                            {page === 5 && <OtherDetails {...{ setPage }} />}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
