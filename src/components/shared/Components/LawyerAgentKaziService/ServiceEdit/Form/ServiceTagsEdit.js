// Configuration
import React, { useState } from "react";

// Third party packages
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { lawyerTags } from "../../../../AutoSuggestion/Lawyer/lawyerTags";

// components

export const ServiceTagsEdit = ({ setTags }) => {
    const [value, setValue] = useState([]);
    const animatedComponents = makeAnimated();

    const handleTags = selectedValue => {
        setValue(selectedValue);
        let arrayOfTags = [];

        selectedValue.map(item => {
            arrayOfTags.unshift(item.value);
            return false;
        });

        setTags(arrayOfTags);
    };
    return (
        <>
            <div className="mb-8">
                <label htmlFor="tags" className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase">
                    Add Tags (Max 5)
                </label>
                <Select value={value} closeMenuOnSelect={false} components={animatedComponents} isMulti options={lawyerTags} onChange={handleTags} />
                <label htmlFor="tags" className="text-xs leading-[18px] text-[#98999C] ml-1 mt-1 block">
                    Can't find a skill? Contact Us to add it.
                </label>
            </div>
        </>
    );
};
