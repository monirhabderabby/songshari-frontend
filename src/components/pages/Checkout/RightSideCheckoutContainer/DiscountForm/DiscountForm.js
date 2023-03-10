import React from "react";

// Third party package
import TextField from "@mui/material/TextField";

const DiscountForm = () => {
    return (
        <div className="mt-6 pb-6 flex items-center justify-between gap-x-[10px]">
            <TextField id="outlined-basic" label="Discount Code" variant="outlined" size="small" className="w-full lg:w-[241px]" />
            <button
                className=" px-4 lg:px-8 rounded text-white text-[12px] lg:text-[16px] font-bold h-[40px]"
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
