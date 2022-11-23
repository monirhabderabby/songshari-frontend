import React from "react";
import logo from "../../assets/images/Logo/logoBlack.png";
import { PersonalDetails } from "./PersonalDetails";
import { ProfessionalDetails } from "./ProfessionalDetails";
import { EducationalDetails } from "./EducationalDetails";
import { PhysicalDetails } from "./PhysicalDetails";
import { OtherDetails } from "./OtherDetails";

export const Container = () => {
    return (
        <div className="min-h-screen">
            <section className="flex justify-center items-center w-full flex-1 text-center px-3 md:px-20  min-h-screen">
                <div className="bg-white rounded-2xl shadow-2xl md:flex w-[100%] md:w-3/4 lg:w-4/5 max-w-6xl relative">
                    <div className="w-full p-5 my-auto">
                        <div className="text-left font-bold">
                            <span className="gradient_text font-george">
                                <img className="w-[150px]" src={logo} alt="logo" />
                            </span>
                        </div>
                        <div className="my-[20px]">
                            <PersonalDetails />
                            {/* <ProfessionalDetails />
                            <EducationalDetails />
                            <PhysicalDetails />
                            <OtherDetails /> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
