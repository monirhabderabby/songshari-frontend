// Configuration
import React from "react";

/* Third party package */
import { useForm } from "react-hook-form";

/* components */
import { CaseDetailsFields } from "./InputFields/CaseDetailsFields";
import { CasePeriodFields } from "./InputFields/CasePeriodFields";
import { CaseServiceFields } from "./InputFields/CaseServiceFields";
import { CourtFields } from "./InputFields/CourtFields";
import { ProfessionProofFields } from "./InputFields/ProfessionProofFields";
import { ResultFields } from "./InputFields/ResultFields";
import { RoleFields } from "./InputFields/RoleFields";
import { SpecialAchievementsFields } from "./InputFields/SpecialAchievementsFields";

const ModifyCaseForm = () => {
  /* React hook form function */
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-4">
      <h1 className="font-poppins font-normal text-left text-[29px] text-[#32353B]">
        Add Case Study
      </h1>
      <div className="mt-2 mb-4 w-full border border-[#E9ECF2]"></div>

      {/* Modify case form */}
      <div className="text-left font-sans font-bold text-xs text-[#707276]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CaseServiceFields {...{ register, name: "caseService" }} />
          <RoleFields {...{ register, name: "role" }} />
          <CaseDetailsFields {...{ register, name: "caseDetails" }} />
          <CasePeriodFields {...{ register, name: "casePeriod" }} />
          <CourtFields {...{ register, name: "court" }} />
          <ResultFields {...{ register, name: "result" }} />
          <SpecialAchievementsFields
            {...{ register, name: "specialAchievement" }}
          />
          <ProfessionProofFields {...{ register, name: "professionProof" }} />
          <input
            className="px-[35px] py-[15px] text-white bg-[#E41272] border border-[#3D66D7] rounded-[3px]"
            type="submit"
            placeholder="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ModifyCaseForm;
