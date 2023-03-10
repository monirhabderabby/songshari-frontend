// configuration
import React from "react";

// Third party packages
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setShippingDetailes } from "../../../../Redux/features/checkout/checkoutDetailsSlice";

export const ShippingDetailes = () => {
    // hook variables
    const dispatch = useDispatch();

    const shippingInfo = useSelector(state => state.persistedReducer?.checkoutDetailes?.shippingDetailes);

    const { firstName, lastName, email, streetAddress1, streetAddress2, state, city, postalCode, phone } = shippingInfo || {};

    const handleFirstName = firstName => {
        dispatch(
            setShippingDetailes({
                ...shippingInfo,
                firstName: firstName,
            })
        );
    };

    const handleLastName = lastName => {
        dispatch(
            setShippingDetailes({
                ...shippingInfo,
                lastName: lastName,
            })
        );
    };

    const handleStreetAddress1 = streetAddress1 => {
        dispatch(
            setShippingDetailes({
                ...shippingInfo,
                streetAddress1: streetAddress1,
            })
        );
    };

    const handleStreetAddress2 = streetAddress2 => {
        dispatch(
            setShippingDetailes({
                ...shippingInfo,
                streetAddress2: streetAddress2,
            })
        );
    };

    const handleState = state => {
        dispatch(
            setShippingDetailes({
                ...shippingInfo,
                state: state,
            })
        );
    };

    const handleCity = city => {
        dispatch(
            setShippingDetailes({
                ...shippingInfo,
                city: city,
            })
        );
    };

    const handlePostalCode = postalCode => {
        dispatch(
            setShippingDetailes({
                ...shippingInfo,
                postalCode: postalCode,
            })
        );
    };

    const handlePhone = phone => {
        dispatch(
            setShippingDetailes({
                ...shippingInfo,
                phone: phone,
            })
        );
    };
    return (
        <div className="w-full h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h3 className="text-[#000000] font-bold font-sans text-[16px]">Shipping Address</h3>
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
                <TextField label="Email" name="email" variant="outlined" size="small" className="col-span-2" value={email} />
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
            </div>
        </div>
    );
};
