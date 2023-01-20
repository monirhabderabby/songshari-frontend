// Configuration
import React from "react";
import { useState } from "react";
import OtherDetailsCompare from "./OtherDetailsCompare/OtherDetailsCompare";
import OtherDetailsDescription from "./OtherDetailsDescription/OtherDetailsDescription";
import OtherDetailsReviews from "./OtherDetailsReviews/OtherDetailsReviews";

// Components
import SingleProductOtherDetailsNav from "./SingleProductOtherDetailsNav";

const SingleProductOtherDetails = ({ data }) => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <SingleProductOtherDetailsNav {...{ page, setPage }} />
      <div>
        {page === 1 && <OtherDetailsDescription {...{ data }} />}
        {page === 2 && <OtherDetailsReviews {...{ data }} />}
        {page === 3 && <OtherDetailsCompare {...{ data }} />}
      </div>
    </div>
  );
};

export default SingleProductOtherDetails;
