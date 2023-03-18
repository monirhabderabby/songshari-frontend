import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billingDetailes: {
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zipCode: "",
    phone: "",
  },
  shippingDetailes: {
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zipCode: "",
    phone: "",
  },
  billingSummary: {
    subTotal: 0,
    discount: 0,
    shipping: 0,
    tax: 0,
  },
  paymentMethod: "amarPay",
};

const checkoutDetailsSlice = createSlice({
  name: "checkoutDetailesV2",
  initialState,
  reducers: {
    setBillingDetailesInitialState: (state = initialState, action) => {
      state.billingDetailes.firstName = action.payload.firstName;
      state.billingDetailes.lastName = action.payload.lastName;
      state.billingDetailes.email = action.payload.email;
    },
    setBillingFirstName: (state = initialState, action) => {
      state.billingDetailes.firstName = action.payload;
    },
    setBillingDetailes: (state = initialState, action) => {
      state.billingDetailes = action.payload;
    },
    setShippingDetailes: (state = initialState, action) => {
      state.shippingDetailes = action.payload;
    },
    checkBillingAndShoppingareSame: (state = initialState, action) => {
      state.shippingDetailes.firstName = state.billingDetailes.firstName;
      state.shippingDetailes.lastName = state.billingDetailes.lastName;
      state.shippingDetailes.email = state.billingDetailes.email;
      state.shippingDetailes.address1 = state.billingDetailes.address1;
      state.shippingDetailes.address2 = state.billingDetailes.address2;
      state.shippingDetailes.state = state.billingDetailes.state;
      state.shippingDetailes.city = state.billingDetailes.city;
      state.shippingDetailes.zipCode = state.billingDetailes.zipCode;
      state.shippingDetailes.phone = state.billingDetailes.phone;
    },
    clearShippingDetailes: (state = initialState) => {
      state.shippingDetailes.firstName = "";
      state.shippingDetailes.lastName = "";
      state.shippingDetailes.email = "";
      state.shippingDetailes.address1 = "";
      state.shippingDetailes.address2 = "";
      state.shippingDetailes.state = "";
      state.shippingDetailes.city = "";
      state.shippingDetailes.zipCode = "";
      state.shippingDetailes.phone = "";
    },
    addSubTotal: (state = initialState, action) => {
      state.billingSummary.subTotal += action.payload;
    },
    setStorePaymentMethod: (state = initialState, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export default checkoutDetailsSlice.reducer;
export const {
  setBillingDetailesInitialState,
  setBillingFirstName,
  setBillingDetailes,
  setShippingDetailes,
  checkBillingAndShoppingareSame,
  clearShippingDetailes,
  addSubTotal,
  setStorePaymentMethod,
} = checkoutDetailsSlice.actions;
