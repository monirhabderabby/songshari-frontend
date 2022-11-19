import React from "react";
import FindAlawyerPage from "../../components/pages/FindAlawyer/FindAlawyerPage";
import LawyerService from "../../components/pages/Lawyer/LawyerService";

const FindAlawyer = () => {
  return (
    <div>
      <FindAlawyerPage />
      <div className="my-16">
        <LawyerService />
      </div>
    </div>
  );
};
export default FindAlawyer;
