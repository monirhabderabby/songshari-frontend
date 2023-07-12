import React from "react";
import useDocumentTitle from "../../../../assets/utilities/useDocumentTitle";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";

export const CourseLandingPage = () => {
  useDocumentTitle("Shongshari | Course");

  return (
    <div>
      <CustomHeader title={"Courses"} />
    </div>
  );
};
