import * as React from "react";
import Accordian from "../../SingleProfilesUser/profileSection/Accordion";

export const DynamicProfileInfo = ({ data, isLoading }) => {

    return (
        <div className="mb-[69px] max-w-[523px] mx-auto">
            <Accordian {...{ data, isLoading }} />
        </div>
    );
};
