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
    }),
  }),
});

export const {
  useGetCertificatesWithAuthQuery,
  useResubmitProfessionalCertificateMutation,
  useResubmitEducationalCertificateMutation,
} = documentsApi;
