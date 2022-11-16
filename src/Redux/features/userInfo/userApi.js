import apiSlice from "../../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        regAsMember: builder.mutation({
            query: data => ({
                url: "/member/register/personalDetail",
                method: "POST",
                body: data,
            }),
        }),
        loginAsMember: builder.mutation({
            query: data => ({
                url: "/member/login",
                method: "POST",
                body: data,
            }),
        }),
        regAsProfessional: builder.mutation({
            query: data => ({
                url: "/member/register/personalDetail",
                method: "POST",
                body: data,
            }),
        }),
        loginAsProfessional: builder.mutation({
            query: data => ({
                url: "/member/login",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useRegAsMemberMutation, useLoginAsMemberMutation, useLoginAsProfessionalMutation, useRegAsProfessionalMutation } = userApi;
