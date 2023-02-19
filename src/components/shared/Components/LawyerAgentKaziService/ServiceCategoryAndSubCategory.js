// Configuration
import React from "react";

// Third party packages
import CreatableSelect from "react-select/creatable";
import { lawyerCategory } from "../../AutoSuggestion/Lawyer/lawyerCategory";
import { lawyerSubCategory } from "../../AutoSuggestion/Lawyer/lawyerSubCategory";

export const ServiceCategoryAndSubCategory = ({
  setCategory,
  setSubCategory,
}) => {
  return (
    <>
      <div className="mb-12 grid grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="category"
            className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase mb-[3px]"
          >
            Category
          </label>
          <CreatableSelect
            isClearable
            options={lawyerCategory}
            onChange={(selectedValue) => setCategory(selectedValue.value)}
          />
        </div>
        <div>
          <label
            htmlFor="subCategory"
            className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase mt-[3px]"
          >
            Subcategory
          </label>
          <CreatableSelect
            isClearable
            options={lawyerSubCategory}
            onChange={(selectedValue) => setSubCategory(selectedValue?.value)}
          />
        </div>
      </div>
    </>
  );
};
