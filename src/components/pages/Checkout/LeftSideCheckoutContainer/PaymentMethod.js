import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const styles = {
    root: {
        color: "red",
        "&$checked": {
            color: "green",
        },
    },
    checked: {},
};

const StyledRadio = withStyles(styles)(Radio);

export const PaymentMethod = () => {
    const [selectedValue, setSelectedValue] = useState("bkash");
    const bkash = (
        <div className="w-full">
            Bkash : <p>You will redirect to the bkash website</p>
        </div>
    );
    return (
        <div className="w-full h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h3 className="text-[#000000] font-bold font-sans text-[16px]">Payment Method</h3>
            <FormControl>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                    <FormControlLabel value="bkash" control={<Radio />} label={bkash} />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};
