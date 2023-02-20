import React from "react";

// Third party package
import CreatableSelect from "react-select/creatable";

export const CourtFields = ({ setCourt }) => {
  return (
    <div className="mt-[19px] mb-6">
      <label htmlFor="court">Court</label>
      <CreatableSelect
        isClearable
        options={[
          {
            value: "Royal Court",
            label: "Royal Court",
          },
          {
            value: "Bengal Court",
            label: "Bengal Court",
          },
        ]}
        onChange={(selectedValue) => setCourt(selectedValue?.value)}
      />
    </div>
  );
};
