import apiSlice from "../../api/apiSlice";

export const verificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: ({ data }) => ({
        url: "/verify/changePassword",
        method: "POST",
        body: data,
      }),
    }),
    sendOtpByEmail: builder.mutation({
      query: ({ data }) => ({
        url: "/verify/sendOtp",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useSendOtpByEmailMutation
} = verificationApi;
