// configuration
import React, { useState } from "react";

// components
import NavBar from "../../components/pages/Shared/NavBar";
import { EducationalDetails } from "./EducationalDetails";
import FamilyDetails from "./FamilyDetails";
import { OtherDetails } from "./OtherDetails";
import { PersonalDetails } from "./PersonalDetails";
import { PhysicalDetails } from "./PhysicalDetails";
import { ProfessionalDetails } from "./ProfessionalDetails";
import SiblingDetails from "./SiblingDetails";

export const Container = ({ responsive }) => {
  const [page, setPage] = useState(1);
  const [hasSibling, setHasSibling] = useState(false);

  return (
    <div className="min-h-screen">
      {!responsive && <NavBar />}
      <section className="flex justify-center items-center w-full flex-1 text-center px-3 md:px-20 min-h-[calc(100vh-90px)]">
        <div className="bg-white shadow-2xl rounded-2xl md:flex w-[100%] md:w-3/4 lg:w-4/5 max-w-6xl relative">
          <div className="w-full p-5 my-auto">
            <div className="my-[20px]">
              {page === 1 && (
                <PersonalDetails {...{ setPage, setHasSibling }} />
              )}
              {page === 2 && <EducationalDetails {...{ setPage }} />}
              {page === 3 && <ProfessionalDetails {...{ setPage }} />}
              {page === 4 && <PhysicalDetails {...{ setPage }} />}
              {page === 5 && <FamilyDetails {...{ setPage, hasSibling }} />}
              {page === 6 && hasSibling && <SiblingDetails {...{ setPage }} />}
              {page === 7 && <OtherDetails {...{ setPage }} />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
