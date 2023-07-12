import getCookie from "../../../Helper/cookies/getCookie";
import apiSlice from "../../api/apiSlice";

export const documentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCertificatesWithAuth: builder.query({
      query: () => ({
        url: "/member/certificates",
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      keepUnusedDataFor: 0,
      providesTags: ["certificates"],
    }),
    resubmitProfessionalCertificate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/member/resubmit/profession/${id}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["certificates"],
    }),
    resubmitEducationalCertificate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/member/resubmit/education/${id}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["certificates"],
    }),
    resubmitAnyCertificate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/member/resubmit/${id}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["certificates"],
    }),

    getMarriageCertificateByAuth: builder.query({
      query: () => ({
        url: "/member/marriage",
        method: "GET",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
      }),
      keepUnusedDataFor: 0,
    }),
    createMarriage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/member/resubmit/education/${id}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["certificates"],
    }),
  }),
});

export const {
  useGetCertificatesWithAuthQuery,
  useResubmitProfessionalCertificateMutation,
  useResubmitEducationalCertificateMutation,
  useResubmitAnyCertificateMutation,
  useGetMarriageCertificateByAuthQuery,
  useCreateMarriageMutation
} = documentsApi;
