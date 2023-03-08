import React from "react";

const OtherDetailsDescription = ({ description }) => {
    return (
        <div className="mt-6">
            <div className="text-[#272727]" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
    );
};

export default OtherDetailsDescription;
