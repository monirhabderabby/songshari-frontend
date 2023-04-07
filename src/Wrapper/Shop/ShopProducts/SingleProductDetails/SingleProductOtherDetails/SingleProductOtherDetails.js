// Configuration
import React, { useState } from "react";

// Components
import OtherDetailsCompare from "./OtherDetailsCompare/OtherDetailsCompare";
import OtherDetailsDescription from "./OtherDetailsDescription/OtherDetailsDescription";
import OtherDetailsReviews from "./OtherDetailsReviews/OtherDetailsReviews";
import SingleProductOtherDetailsNav from "./SingleProductOtherDetailsNav";

const SingleProductOtherDetails = ({ product, description, similarProducts }) => {
    const [page, setPage] = useState(1);
    return (
        <div>
            <SingleProductOtherDetailsNav {...{ page, setPage }} />
            <div>
                {page === 1 && <OtherDetailsDescription {...{ product, description }} />}
                {page === 2 && <OtherDetailsReviews {...{ product }} />}
                {page === 3 && <OtherDetailsCompare {...{ product, similarProducts }} />}
            </div>
        </div>
    );
};

export default SingleProductOtherDetails;
