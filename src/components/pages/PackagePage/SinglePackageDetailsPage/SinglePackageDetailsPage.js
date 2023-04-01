// Configuration
import React, { useEffect } from "react";
import { useParams } from "react-router";

// Components
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";

const SinglePackageDetailsPage = () => {
  const { id } = useParams();

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <CustomHeader title={"Package"} />
      <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <h1>This is package single page id - {id}</h1>
      </div>
    </div>
  );
};

export default SinglePackageDetailsPage;
