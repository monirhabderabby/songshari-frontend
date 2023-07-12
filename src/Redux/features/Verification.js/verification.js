import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const verificationApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        changePassword: builder.mutation({
            query: data => ({
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

        // update password after login
        updatePassWord: builder.mutation({
            query: data => ({
                url: "/verify/password/update",
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        updateEmail: builder.mutation({
            query: data => ({
                url: "/verify/email/update",
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        verifyNewEmailAndPassword: builder.mutation({
            query: data => ({
                url: "/verify/newEmail/check",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        sendOtpByToken: builder.mutation({
            query: () => ({
                url: "/verify/sendOtpByToken",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
    }),
});

export const {
    useChangePasswordMutation,
    useSendOtpByEmailMutation,
    useUpdatePassWordMutation,
    useUpdateEmailMutation,
    useVerifyNewEmailAndPasswordMutation,
    useSendOtpByTokenMutation,
} = verificationApi;
