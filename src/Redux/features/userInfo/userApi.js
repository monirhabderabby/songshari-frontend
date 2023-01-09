import getCookie from "../../../Helper/cookies/getCookie";
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
        setPersonalDetails: builder.mutation({
            query: data => ({
                url: "/member/personalDetail",
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        setProfessionalDetails: builder.mutation({
            query: data => ({
                url: "/member/register/professionalDetail",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        setEducationalDetails: builder.mutation({
            query: data => ({
                url: "/member/register/educationalDetail",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        setPhysicalDetails: builder.mutation({
            query: data => ({
                url: "/member/register/physicalDetail",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        setOthersDetails: builder.mutation({
            query: data => ({
                url: "/member/register/othersDetail",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        updatePersonalDetails: builder.mutation({
            query: data => ({
                url: `/member/personalDetail`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        updateProfessionalDetails: builder.mutation({
            query: ({ data, id }) => ({
                url: `/member/professionalDetail/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        updateEducationalDetails: builder.mutation({
            query: ({ data, id }) => ({
                url: `/member/educationalDetail/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        updatePhysicalDetails: builder.mutation({
            query: data => ({
                url: `/member/physicalDetail`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        updateOthersDetails: builder.mutation({
            query: data => ({
                url: `/member/othersDetail`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        getProfileDetails: builder.query({
            query: id => `/member/personalDetail/${id}`,
            keepUnusedDataFor: 30,
        }),
        getProfileDetailsWIthAuth: builder.query({
            query: () => ({
                url: "/member/personalDetail",
                method: "GET",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
        findFilteredUser: builder.mutation({
            query: data => ({
                url: "/member/connections/search",
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
        }),
        updateProfilePhoto: builder.mutation({
            query: data => ({
                url: "/member/personalDetail",
                method: "PUT",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: data,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const updateResult = dispatch(
                    apiSlice.util.updateQueryData("getProfileDetailsWIthAuth", undefined, draft => {
                        return {
                            ...draft,
                            profilePhoto: arg.profilePhoto,
                        };
                    })
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    updateResult.undo();
                }
            },
        }),
        verifyEmail: builder.mutation({
            query: otp => ({
                url: `/verify/verifyEmail/id`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
                body: otp,
            }),
        }),
        reSendOtp: builder.mutation({
            query: () => ({
                url: `/verify/sendOtpByToken`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
    }),
});

export const {
    useRegAsMemberMutation,
    useLoginAsMemberMutation,
    useLoginAsProfessionalMutation,
    useRegAsProfessionalMutation,
    useSetPersonalDetailsMutation,
    useSetProfessionalDetailsMutation,
    useSetEducationalDetailsMutation,
    useSetPhysicalDetailsMutation,
    useSetOthersDetailsMutation,
    useGetProfileDetailsQuery,
    useUpdatePersonalDetailsMutation,
    useUpdateEducationalDetailsMutation,
    useUpdatePhysicalDetailsMutation,
    useUpdateOthersDetailsMutation,
    useUpdateProfessionalDetailsMutation,
    useGetProfileDetailsWIthAuthQuery,
    useFindFilteredUserMutation,
    useUpdateProfilePhotoMutation,
    useVerifyEmailMutation,
    useReSendOtpMutation,
} = userApi;
