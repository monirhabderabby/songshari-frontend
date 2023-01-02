import apiSlice from "../../api/apiSlice";

export const documentsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCertificatesWithAuth: builder.query({
            query: () => ({
                url: "/member/certificates",
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }),
            keepUnusedDataFor: 0,
        }),
    }),
});

export const { useGetCertificatesWithAuthQuery } = documentsApi;
