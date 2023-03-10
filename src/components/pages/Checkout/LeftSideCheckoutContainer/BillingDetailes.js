// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { checkBillingAndShoppingareSame, clearShippingDetailes, setBillingDetailes } from "../../../../Redux/features/checkout/checkoutDetailsSlice";

// Componetns

export const BillingDetailes = () => {
    // hook variable declaration
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const billingInfo = useSelector(state => state.persistedReducer?.checkoutDetailes?.billingDetailes);

    const { firstName, lastName, email, streetAddress1, streetAddress2, state, city, postalCode, phone } = billingInfo || {};

    const handleFirstName = firstName => {
        dispatch(
            setBillingDetailes({
                ...billingInfo,
                firstName: firstName,
            })
        );
    };

    const handleLastName = lastName => {
        dispatch(
            setBillingDetailes({
                ...billingInfo,
                lastName: lastName,
            })
        );
    };

    const handleStreetAddress1 = streetAddress1 => {
        dispatch(
            setBillingDetailes({
                ...billingInfo,
                streetAddress1: streetAddress1,
            })
        );
    };

    const handleStreetAddress2 = streetAddress2 => {
        dispatch(
            setBillingDetailes({
                ...billingInfo,
                streetAddress2: streetAddress2,
            })
        );
    };

    const handleState = state => {
        dispatch(
            setBillingDetailes({
                ...billingInfo,
                state: state,
            })
        );
    };

    const handleCity = city => {
        dispatch(
            setBillingDetailes({
                ...billingInfo,
                city: city,
            })
        );
    };

    const handlePostalCode = postalCode => {
        dispatch(
            setBillingDetailes({
                ...billingInfo,
                postalCode: postalCode,
            })
        );
    };

    const handlePhone = phone => {
        dispatch(
            setBillingDetailes({
                ...billingInfo,
                phone: phone,
            })
        );
    };

    useEffect(() => {
        if (checked) {
            dispatch(checkBillingAndShoppingareSame());
        } else if (checked === false) {
            dispatch(clearShippingDetailes());
        }
    }, [checked, dispatch]);

    return (
        <div className="w-full h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h3 className="text-[#000000] font-bold font-sans text-[16px]">Billing Address</h3>
            <div className="w-full grid grid-cols-2 gap-x-[18px] gap-y-[16px] mt-[20px]">
                <TextField
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    size="small"
                    value={firstName}
                    onChange={e => handleFirstName(e.target.value)}
                    className="col-span-2 lg:col-span-1"
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    size="small"
                    value={lastName}
                    onChange={e => handleLastName(e.target.value)}
                    className="col-span-2 lg:col-span-1"
                />
                <TextField label="Email" name="email" variant="outlined" size="small" className="col-span-2" value={email} disabled />
                <TextField
                    label="Street Address"
                    name="streetAddress"
                    variant="outlined"
                    size="small"
                    className="col-span-2"
                    value={streetAddress1}
                    onChange={e => handleStreetAddress1(e.target.value)}
                />
                <TextField
                    name="streetAddress"
                    variant="outlined"
                    size="small"
                    className="col-span-2"
                    value={streetAddress2}
                    onChange={e => handleStreetAddress2(e.target.value)}
                />
                <TextField
                    label="State/Province"
                    name="state"
                    variant="outlined"
                    size="small"
                    value={state}
                    onChange={e => handleState(e.target.value)}
                />
                <TextField label="City" name="city" variant="outlined" size="small" value={city} onChange={e => handleCity(e.target.value)} />
                <TextField
                    label="Zip/Postal Code"
                    name="postCode"
                    variant="outlined"
                    size="small"
                    value={postalCode}
                    onChange={e => handlePostalCode(e.target.value)}
                />
                <TextField label="Phone" name="phone" variant="outlined" size="small" value={phone} onChange={e => handlePhone(e.target.value)} />
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={event => setChecked(event.target.checked)} />}
                    label="My billing and shipping address are the same"
                    className="col-span-2"
                />
            </div>
        </div>
    );
};
