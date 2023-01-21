import React from "react";

// Third party package
import TextField from "@mui/material/TextField";

const DiscountForm = () => {
  return (
    <div className="mt-6 pb-6 flex items-center justify-between">
      <TextField
        id="outlined-basic"
        label="Discount Code"
        variant="outlined"
        className="w-[241px]"
      />
      <button
        className="px-8 rounded text-white font-bold h-[54px]"
        style={{
          backgroundImage: "linear-gradient(90deg, #E22987 0%, #A82BC5 100%)",
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default DiscountForm;
