import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourseCheckoutData, setInitialCourseCheckoutData } from "../../../../../Redux/features/Course/courseCheckoutSlice";

export const BillingInfoBoxForCourse = () => {
    const personalInfo = useSelector(state => state.persistedReducer?.userInfo?.userInfo?.user);
    const checkoutDetailes = useSelector(state => state.persistedReducer?.courseCheckout);
    console.log(checkoutDetailes);
    const dispatch = useDispatch();
    const { firstName, lastName, email, phone } = checkoutDetailes || {};

    useEffect(() => {
        const { firstName, lastName, email, phone } = personalInfo || {};
        dispatch(
            setInitialCourseCheckoutData({
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
            })
        );
    }, [personalInfo, dispatch]);

    return (
        <div className="mt-[30px] w-full shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h1 className="text-[20px] font-fira font-semibold text-black">Billing Info</h1>
            <div className="grid grid-cols-2 gap-[10px] mt-[15px]">
                <TextField
                    id="outlined-basic"
                    value={firstName}
                    onChange={e => {
                        dispatch(setCourseCheckoutData({ firstName: e.target.value }));
                    }}
                    label="First  Name"
                    className="col-span-2 lg:col-span-1"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    value={lastName}
                    onChange={e => {
                        dispatch(setCourseCheckoutData({ lastName: e.target.value }));
                    }}
                    label="Last  Name"
                    className="col-span-2 lg:col-span-1"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    value={phone}
                    onChange={e => {
                        dispatch(setCourseCheckoutData({ phone: e.target.value }));
                    }}
                    label="Phone"
                    variant="outlined"
                    className="col-span-2 lg:col-span-1"
                />
                <TextField id="outlined-basic" label="Email" value={email} disabled variant="outlined" className="col-span-2 lg:col-span-1" />
            </div>
        </div>
    );
};
