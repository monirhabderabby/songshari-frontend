// Configuration
import React from "react";

// Third party package
import { BsCheckLg } from "react-icons/bs";

const SelectColorCard = ({ color, selectedColor, setSelectedColor }) => {
  return (
    <div>
      <div
        className={`w-8 h-8 rounded cursor-pointer`}
        style={{ backgroundColor: color }}
        onClick={() => setSelectedColor(color)}
      >
        {selectedColor === color && (
          <BsCheckLg className="text-white text-xl mx-auto h-8" />
        )}
      </div>
    </div>
  );
};

export default SelectColorCard;
