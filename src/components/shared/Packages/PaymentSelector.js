import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const PaymentSelector = ({ isChecked, setIsChecked }) => {
  //   const paymentMethod = useSelector(
  //     (state) => state.persistedReducer.paymentMethod?.paymentMethod
  //   );
  //   const dispatch = useDispatch();

  const amarPay = (
    <div className="w-full flex items-center">
      <img
        className="w-[147px]"
        src="https://www.aamarpay.com/images/logo/aamarpay_logo.png"
        alt="logo"
        loading="lazy"
      />
    </div>
  );

  const point = (
    <div className="w-full flex items-center">
      <img
        className="w-[147px] h-[71px]"
        src="https://media.istockphoto.com/id/1055129084/vector/point-logo-design.jpg?s=1024x1024&w=is&k=20&c=EILVwIDBZ786ljRhUrx81wj32wYtxPB9omkdBhrIbiQ="
        alt="logo"
        loading="lazy"
      />
    </div>
  );

  return (
    <div className="w-full h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white mt-[30px]">
      <h3 className="text-[20px] font-fira font-semibold text-black mb-[20px]">
        Payment Method
      </h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="amarPay"
          name="radio-buttons-group"
          onChange={() => setIsChecked(!isChecked)}
        >
          <FormControlLabel
            checked={!isChecked}
            control={<Radio />}
            label={amarPay}
          />
        </RadioGroup>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="point"
          name="radio-buttons-group"
          onChange={() => setIsChecked(!isChecked)}
        >
          <FormControlLabel
            checked={isChecked}
            control={<Radio />}
            label={point}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default PaymentSelector;
