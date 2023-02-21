import React from "react";

// Third party package
import CreatableSelect from "react-select/creatable";

export const CasePeriodFields = ({ setPeriod }) => {
  return (
    <div className="mt-[19px] mb-6">
      <label>Case Period</label>
      <CreatableSelect
        isClearable
        options={[
          {
            value: "1 month 5 day",
            label: "1 month 5 day",
          },
          {
            value: "2 month 10 day",
            label: "2 month 10 day",
          },
          {
            value: "3 month 15 day",
            label: "3 month 15 day",
          },
        ]}
        onChange={(selectedValue) => setPeriod(selectedValue?.value)}
      />
    </div>
  );
};
