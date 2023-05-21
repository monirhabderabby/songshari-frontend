// Configuration
import React, { useState, useEffect } from "react";

/* Third party package */
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { useCreateCaseStudyMutation } from "../../../Redux/features/Service/ServiceApi";

/* components */
import { CaseDetailsFields } from "./InputFields/CaseDetailsFields";
import { CasePeriodFields } from "./InputFields/CasePeriodFields";
import { CaseServiceFields } from "./InputFields/CaseServiceFields";
import { CourtFields } from "./InputFields/CourtFields";
import { ProfessionProofFields } from "./InputFields/ProfessionProofFields";
import { ResultFields } from "./InputFields/ResultFields";
import { RoleFields } from "./InputFields/RoleFields";
import { SpecialAchievementsFields } from "./InputFields/SpecialAchievementsFields";

const ModifyCaseForm = ({ role }) => {
  const [period, setPeriod] = useState("");
  const [court, setCourt] = useState("");
  const [certificate, setCertificate] = useState("");
  /* React hook form function */
  const { register, handleSubmit, reset } = useForm();

  const userRole = role || "";

  // Redux api
  const [createCaseStudy, { data: response, isLoading, error }] =
    useCreateCaseStudyMutation();

  const onCaseSubmit = async (data) => {
    if (data.details === "") {
      delete data.details;
    }
    if (data.result === "") {
      delete data.result;
    }
    if (data.achievement === "") {
      delete data.achievement;
    }
    if (certificate) {
      data.certificate = certificate;
    }
    if (court) {
      data.court = court;
    }
    if (period) {
      data.period = period;
    }
    data = { ...data };

    await createCaseStudy(data);
  };

  useEffect(() => {
    if (response) {
      toast.success("Case Added Successfully");
      reset();
    }
    if (!response && error) {
      toast.error("Something went wrong. Please try again");
    }
  }, [response, reset, error]);

  return (
    <div className="p-4">
      <h1 className="font-poppins font-normal text-left text-[29px] text-[#32353B]">
        {role === "lawyer" && "Add Case Study"}
        {role === "agent" && "Add Deal Status"}
        {role === "kazi" && "Add Deal Status"}
      </h1>
      <div className="mt-2 mb-4 w-full border border-[#E9ECF2]"></div>

      {/* Modify case form */}
      <div className="text-left font-sans font-bold text-xs text-[#707276]">
        <form onSubmit={handleSubmit(onCaseSubmit)}>
          <CaseServiceFields {...{ register, name: "name" }} />
          <RoleFields {...{ userRole }} />
          <CaseDetailsFields {...{ register, name: "details" }} />
          <CasePeriodFields {...{ setPeriod }} />
          <CourtFields {...{ setCourt }} />
          <ResultFields {...{ register, name: "result" }} />
          <SpecialAchievementsFields {...{ register, name: "achievement" }} />
          <ProfessionProofFields {...{ setCertificate, certificate }} />
          <input
            className="px-[35px] py-[15px] text-white bg-[#E41272] border border-[#3D66D7] rounded-[3px] cursor-pointer"
            type="submit"
            value={isLoading ? "Loading..." : "Submit"}
          />
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default ModifyCaseForm;
